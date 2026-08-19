import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';
import { Search, Filter, Plus, Menu, Calendar as CalendarIcon, ChevronLeft, ChevronRight, X, CheckSquare, ChevronDown, Check, UserCheck, Tag, StickyNote, UserX, CheckCheck, RotateCcw, Clock, AlertCircle } from 'lucide-react';
import { DateRange } from './DateFilter';
import { FilterDialog } from './FilterDialog';
import ConversationListUnselected from '../imports/ConversationListUnselected';
import NewMessageIconContainer from '../imports/NewMessageIconContainer';
import WhatsApp from '../imports/WhatsApp';

const BULK_LIMIT = 100;

const MOCK_AGENTS = [
  { id: 'a1', name: 'Dr. Sarah Lee', avatar: 'SL', role: 'Support' },
  { id: 'a2', name: 'James Nurse', avatar: 'JN', role: 'Support' },
  { id: 'a3', name: 'Dr. Patel', avatar: 'DP', role: 'Sales' },
  { id: 'a4', name: 'Maria Kim', avatar: 'MK', role: 'Sales' },
];

interface FilterSegment {
  attribute: string;
  operation: string;
  value: string;
}

type BulkAction =
  | { type: 'solve' }
  | { type: 'reopen' }
  | { type: 'pending' }
  | { type: 'assign'; agentId: string; agentName: string }
  | { type: 'unassign' }
  | { type: 'tag'; tag: string }
  | { type: 'note'; note: string };

interface ChatListProps {
  chats: Array<{
    id: string;
    name: string;
    avatar: string;
    lastMessage: string;
    timestamp: string;
    date: Date;
    status: string;
    channel: string;
    isOnline: boolean;
    unread: boolean;
    category: string;
  }>;
  selectedChat: {
    id: string;
    name: string;
    avatar: string;
    lastMessage: string;
    timestamp: string;
    date: Date;
    status: string;
    channel: string;
    isOnline: boolean;
    unread: boolean;
    category: string;
  };
  onSelectChat: (chat: any) => void;
  onBulkAction?: (chatIds: string[], action: BulkAction) => void;
  isSidebarCollapsed: boolean;
  onToggleSidebar: () => void;
  dateRange: DateRange;
  onDateRangeChange: (range: DateRange) => void;
  onDateFilterClear: () => void;
  onCustomFilterApply: (filters: FilterSegment[], showOldChatsFirst: boolean, saveAsCustom?: boolean, customFilterName?: string) => void;
  selectedFilter: string;
  selectedChannel: string;
}

type PresetKey = 'today' | 'thisweek' | 'thismonth' | 'custom';

interface DatePreset {
  key: PresetKey;
  label: string;
  getRange: () => DateRange;
}

const DATE_PRESETS: DatePreset[] = [
  {
    key: 'today',
    label: 'Today',
    getRange: () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      return { from: today, to: endOfDay };
    }
  },
  {
    key: 'thisweek',
    label: 'This week',
    getRange: () => {
      const today = new Date();
      const startOfWeek = new Date(today);
      const day = today.getDay();
      const diff = today.getDate() - day + (day === 0 ? -6 : 1); // Monday as first day
      startOfWeek.setDate(diff);
      startOfWeek.setHours(0, 0, 0, 0);
      
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      endOfWeek.setHours(23, 59, 59, 999);
      
      return { from: startOfWeek, to: endOfWeek };
    }
  },
  {
    key: 'thismonth',
    label: 'This month',
    getRange: () => {
      const today = new Date();
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      startOfMonth.setHours(0, 0, 0, 0);
      
      const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      endOfMonth.setHours(23, 59, 59, 999);
      
      return { from: startOfMonth, to: endOfMonth };
    }
  },
  {
    key: 'custom',
    label: 'Custom',
    getRange: () => ({ from: undefined, to: undefined })
  }
];

export function ChatList({
  chats,
  selectedChat,
  onSelectChat,
  onBulkAction,
  isSidebarCollapsed,
  onToggleSidebar,
  dateRange,
  onDateRangeChange,
  onDateFilterClear,
  onCustomFilterApply,
  selectedFilter,
  selectedChannel
}: ChatListProps) {
  const [selectedTab, setSelectedTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCustomFilterOpen, setIsCustomFilterOpen] = useState(false);
  const [customFilters, setCustomFilters] = useState<FilterSegment[]>([]);
  const [showOldChatsFirst, setShowOldChatsFirst] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<PresetKey | null>(null);
  const [tempRange, setTempRange] = useState<DateRange>({ from: undefined, to: undefined });
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isNewMessagePopoverOpen, setIsNewMessagePopoverOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Bulk selection state
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [lastSelectedId, setLastSelectedId] = useState<string | null>(null);
  const [isActionsOpen, setIsActionsOpen] = useState(false);
  const [isAssignSubmenuOpen, setIsAssignSubmenuOpen] = useState(false);
  const [bulkToast, setBulkToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  const isSelectionMode = selectedIds.size > 0;
  const atLimit = selectedIds.size >= BULK_LIMIT;

  // Close actions dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (actionsRef.current && !actionsRef.current.contains(e.target as Node)) {
        setIsActionsOpen(false);
        setIsAssignSubmenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Auto-dismiss toast
  useEffect(() => {
    if (bulkToast) {
      const t = setTimeout(() => setBulkToast(null), 3000);
      return () => clearTimeout(t);
    }
  }, [bulkToast]);

  // NOTE: filteredChats is computed below, but we use `chats` prop here for range selection
  // since `chats` already reflects the parent-level filter and is stable for ordering.
  const handleCheckboxClick = useCallback((chatId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const isShift = e.shiftKey;

    setSelectedIds(prev => {
      const next = new Set(prev);

      if (isShift && lastSelectedId) {
        // Range selection within chats (prop) order
        const ids = chats.map(c => c.id);
        const fromIdx = ids.indexOf(lastSelectedId);
        const toIdx = ids.indexOf(chatId);
        if (fromIdx !== -1 && toIdx !== -1) {
          const [start, end] = fromIdx < toIdx ? [fromIdx, toIdx] : [toIdx, fromIdx];
          const range = ids.slice(start, end + 1);
          // Check if adding would exceed limit
          const potentialSize = new Set([...next, ...range]).size;
          if (potentialSize > BULK_LIMIT) {
            setBulkToast({ message: `Max ${BULK_LIMIT} conversations can be selected at once.`, type: 'error' });
            return prev;
          }
          range.forEach(id => next.add(id));
        }
      } else {
        if (next.has(chatId)) {
          next.delete(chatId);
        } else {
          if (next.size >= BULK_LIMIT) {
            setBulkToast({ message: `Max ${BULK_LIMIT} conversations can be selected at once.`, type: 'error' });
            return prev;
          }
          next.add(chatId);
        }
      }
      return next;
    });
    setLastSelectedId(chatId);
  }, [lastSelectedId, chats]);

  const handleSelectAll = (visibleChats: typeof chats) => {
    const all = visibleChats.slice(0, BULK_LIMIT).map(c => c.id);
    setSelectedIds(new Set(all));
    if (visibleChats.length > BULK_LIMIT) {
      setBulkToast({ message: `Showing first ${BULK_LIMIT} of ${visibleChats.length} conversations selected.`, type: 'error' });
    }
  };

  const handleDeselectAll = () => {
    setSelectedIds(new Set());
    setLastSelectedId(null);
    setIsActionsOpen(false);
    setIsAssignSubmenuOpen(false);
  };

  const applyBulkAction = (action: BulkAction) => {
    const ids = Array.from(selectedIds);
    onBulkAction?.(ids, action);
    setIsActionsOpen(false);
    setIsAssignSubmenuOpen(false);

    const labels: Record<string, string> = {
      solve: 'Resolved',
      reopen: 'Reopened',
      pending: 'Moved to Pending',
      assign: `Assigned to ${(action as any).agentName}`,
      unassign: 'Unassigned',
      tag: `Tagged "${(action as any).tag}"`,
      note: 'Note added',
    };
    setBulkToast({ message: `${ids.length} conversation${ids.length > 1 ? 's' : ''} — ${labels[action.type]}.`, type: 'success' });
    handleDeselectAll();
  };

  const tabs = ['All', 'Open', 'Unread'];

  // Check if WhatsApp functionality should be available
  const isWhatsAppFeatures = selectedChannel === 'WhatsApp';

  // Focus search input when search is expanded
  useEffect(() => {
    if (isSearchExpanded && searchInputRef.current) {
      // Add a small delay to ensure the animation has started
      const timeoutId = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 150);
      return () => clearTimeout(timeoutId);
    }
  }, [isSearchExpanded]);

  // Handle search expand/collapse
  const handleSearchToggle = () => {
    if (isSearchExpanded) {
      // Closing search - clear query and collapse
      setSearchQuery('');
      setIsSearchExpanded(false);
    } else {
      // Opening search - expand
      setIsSearchExpanded(true);
    }
  };

  const filteredChats = chats.filter(chat => {
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (!chat.name.toLowerCase().includes(query) && 
          !chat.lastMessage.toLowerCase().includes(query)) {
        return false;
      }
    }

    // Tab filter
    switch (selectedTab) {
      case 'All':
        return true;
      case 'Open':
        return chat.status === 'Open';
      case 'Unread':
        return chat.unread;
      default:
        return true;
    }
  });

  const getActivePreset = (): PresetKey | null => {
    if (!dateRange.from || !dateRange.to) return null;

    for (const preset of DATE_PRESETS.slice(0, -1)) { // Exclude 'custom'
      const presetRange = preset.getRange();
      if (presetRange.from && presetRange.to && 
          dateRange.from.getTime() === presetRange.from.getTime() &&
          dateRange.to.getTime() === presetRange.to.getTime()) {
        return preset.key;
      }
    }
    return 'custom';
  };

  const handlePresetClick = (preset: DatePreset) => {
    if (preset.key === 'custom') {
      setSelectedPreset('custom');
    } else {
      const range = preset.getRange();
      onDateRangeChange(range);
      setSelectedPreset(preset.key);
      setIsFilterOpen(false);
    }
  };

  const handleDateSelect = (range: DateRange | undefined) => {
    if (range) {
      setTempRange(range);
      if (range.from && range.to) {
        onDateRangeChange(range);
        setSelectedPreset('custom');
      }
    }
  };

  const handleReset = () => {
    onDateFilterClear();
    setSelectedPreset(null);
    setTempRange({ from: undefined, to: undefined });
    setIsFilterOpen(false);
  };

  const handleCustomFilterApply = (filters: FilterSegment[], showOldFirst: boolean, saveAsCustom?: boolean, customFilterName?: string) => {
    setCustomFilters(filters);
    setShowOldChatsFirst(showOldFirst);
    // Pass to parent component for saving custom filters
    onCustomFilterApply(filters, showOldFirst, saveAsCustom, customFilterName);
  };

  const formatMonthYear = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1);
      } else {
        newMonth.setMonth(prev.getMonth() + 1);
      }
      return newMonth;
    });
  };

  const isFilterActive = dateRange.from && dateRange.to;
  const activePreset = getActivePreset();
  const hasCustomFilters = customFilters.length > 0 && customFilters.some(f => 
    (f.attribute && f.attribute !== 'attribute') || f.operation || f.value
  );

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white transition-all duration-300 ease-in-out">
        {!isSearchExpanded ? (
          <>
            {/* Default Header Layout */}
            <div 
              className={`flex items-center space-x-3 transition-all duration-300 ease-in-out ${
                isSearchExpanded 
                  ? 'opacity-0 scale-95 pointer-events-none absolute' 
                  : 'opacity-100 scale-100 pointer-events-auto relative'
              }`}
            >
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 transition-all duration-200"
                onClick={onToggleSidebar}
              >
                <Menu className="w-4 h-4" />
              </Button>
              
              <div className="flex flex-col">
                <h2 className="text-lg font-medium text-gray-900 truncate max-w-[200px] transition-all duration-200" title={selectedFilter}>
                  {selectedFilter}
                </h2>
                <p className="text-sm text-gray-500 mt-0.5">
                  {filteredChats.length} Chats • <span className="font-semibold">{filteredChats.filter(chat => chat.unread).length} Unread</span>
                </p>
              </div>
            </div>
            
            <div 
              className={`flex items-center transition-all duration-300 ease-in-out ${
                isSearchExpanded 
                  ? 'opacity-0 scale-95 pointer-events-none absolute right-4' 
                  : 'opacity-100 scale-100 pointer-events-auto relative'
              } ${isWhatsAppFeatures ? 'space-x-2' : 'space-x-1'}`}
            >
              {/* Search Button - Always available */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 transition-all duration-200"
                onClick={handleSearchToggle}
              >
                <Search className="w-4 h-4 text-gray-500" />
              </Button>

              {/* Filter Button - Only for WhatsApp */}
              {isWhatsAppFeatures && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0 text-gray-500 relative transition-all duration-200"
                  onClick={() => setIsCustomFilterOpen(true)}
                >
                  <Filter className="w-4 h-4" />
                  {hasCustomFilters && (
                    <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
                  )}
                </Button>
              )}
              
              {/* Date Filter Popover - Always available */}
              <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <PopoverTrigger asChild>
                  <button 
                    className="h-8 w-8 p-0 rounded-md transition-colors hover:bg-gray-100 flex items-center justify-center text-gray-500 relative"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                  >
                    <CalendarIcon className="w-4 h-4" />
                    {isFilterActive && (
                      <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
                    )}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-[420px] p-0" align="end">
                  <div className="flex">
                    {/* Left side - Presets */}
                    <div className="w-32 p-4 border-r border-gray-100 bg-gray-50/50">
                      <div className="space-y-1">
                        {DATE_PRESETS.map((preset) => (
                          <button
                            key={preset.key}
                            onClick={() => handlePresetClick(preset)}
                            className={`w-full text-left px-2 py-1.5 text-sm rounded-md transition-colors ${
                              (selectedPreset === preset.key || 
                               (activePreset === preset.key && !selectedPreset))
                                ? preset.key === 'custom' 
                                  ? 'bg-green-100 text-green-700' 
                                  : 'bg-green-100 text-green-700'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {preset.label}
                          </button>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-3 border-t border-gray-200">
                        <button
                          onClick={handleReset}
                          className="w-full text-left px-2 py-1.5 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                        >
                          Reset
                        </button>
                      </div>
                    </div>

                    {/* Right side - Calendar */}
                    <div className="flex-1 p-4">
                      {/* Calendar Header */}
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium text-gray-900">
                          {formatMonthYear(currentMonth)}
                        </h3>
                        <div className="flex items-center space-x-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => navigateMonth('prev')}
                            className="h-8 w-8 p-0"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => navigateMonth('next')}
                            className="h-8 w-8 p-0"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Calendar */}
                      <Calendar
                        mode="range"
                        selected={dateRange.from && dateRange.to ? dateRange : tempRange}
                        onSelect={handleDateSelect}
                        month={currentMonth}
                        onMonthChange={setCurrentMonth}
                        className="rounded-md"
                        classNames={{
                          months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                          month: "space-y-4",
                          caption: "flex justify-center pt-1 relative items-center hidden", // Hide default navigation
                          caption_label: "text-sm font-medium",
                          nav: "space-x-1 flex items-center",
                          nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                          nav_button_previous: "absolute left-1",
                          nav_button_next: "absolute right-1",
                          table: "w-full border-collapse space-y-1",
                          head_row: "flex",
                          head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
                          row: "flex w-full mt-2",
                          cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                          day: "h-8 w-8 p-0 font-normal aria-selected:opacity-100 hover:bg-gray-100 rounded-md",
                          day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                          day_today: "bg-accent text-accent-foreground",
                          day_outside: "text-muted-foreground opacity-50",
                          day_disabled: "text-muted-foreground opacity-50",
                          day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                          day_hidden: "invisible"
                        }}
                      />
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              
              {/* Plus Button - Only for WhatsApp */}
              {isWhatsAppFeatures && (
                <Popover open={isNewMessagePopoverOpen} onOpenChange={setIsNewMessagePopoverOpen}>
                  <PopoverTrigger asChild>
                    <button 
                      className="h-8 w-8 p-0 transition-all duration-200 hover:scale-100 hover:shadow-md rounded-md hover:bg-gray-100 flex items-center justify-center"
                    >
                      <div className="w-6 h-6">
                        <NewMessageIconContainer />
                      </div>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64 p-0" align="end">
                    <div className="p-3">
                      <h4 className="font-regular text-sm text-[rgba(80,84,81,1)] mb-3 text-[12px]">Select a number</h4>
                      <div className="space-y-2">
                        <button
                          onClick={() => {
                            setIsNewMessagePopoverOpen(false);
                            // Handle Support account selection
                          }}
                          className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
                        >
                          <div className="w-4 h-4 flex-shrink-0">
                            <WhatsApp />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm text-gray-900">Support</div>
                          </div>
                          <div className="text-sm text-gray-500">+918765431290</div>
                        </button>
                        <button
                          onClick={() => {
                            setIsNewMessagePopoverOpen(false);
                            // Handle Sales account selection
                          }}
                          className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
                        >
                          <div className="w-4 h-4 flex-shrink-0">
                            <WhatsApp />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm text-gray-900">Sales</div>
                          </div>
                          <div className="text-sm text-gray-500">+918765431111</div>
                        </button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Expanded Search Layout */}
            <div 
              className={`flex items-center w-full space-x-3 transition-all duration-300 ease-in-out ${
                isSearchExpanded 
                  ? 'opacity-100 scale-100 pointer-events-auto' 
                  : 'opacity-0 scale-95 pointer-events-none absolute'
              }`}
            >
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 flex-shrink-0 transition-all duration-200"
                onClick={onToggleSidebar}
              >
                <Menu className="w-4 h-4" />
              </Button>
              
              {/* Expanded Search Input */}
              <div 
                className={`relative flex-1 transition-all duration-300 ease-in-out ${
                  isSearchExpanded 
                    ? 'transform translate-x-0 opacity-100' 
                    : 'transform translate-x-4 opacity-0'
                }`}
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 transition-all duration-200" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm transition-all duration-300 ease-in-out
                    focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                    ${isSearchExpanded ? 'bg-white' : 'bg-gray-50'}`}
                />
              </div>
              
              {/* Close Search Button */}
              <Button 
                variant="ghost" 
                size="sm" 
                className={`h-8 w-8 p-0 flex-shrink-0 transition-all duration-300 ease-in-out ${
                  isSearchExpanded 
                    ? 'transform translate-x-0 opacity-100 scale-100' 
                    : 'transform translate-x-4 opacity-0 scale-95'
                }`}
                onClick={handleSearchToggle}
              >
                <X className="w-4 h-4 text-gray-500" />
              </Button>
            </div>
          </>
        )}
      </div>

      {/* Divider between header and filter tabs */}
      <div className="border-b border-[#F4F1ED]"></div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 px-4 py-3 bg-white">
        {tabs.map((tab) => {
          const isSelected = selectedTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-2 py-0.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                isSelected 
                  ? 'bg-green-600 text-white border-green-600 shadow-sm' 
                  : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200 hover:border-gray-300'
              }`}
            >
              {tab}
            </button>
          );
        })}
        
        {/* Active Date Filter Indicator */}
        {isFilterActive && (
          <div className="flex items-center ml-2">
            <Badge variant="secondary" className="text-xs">
              {activePreset === 'today' && 'Today'}
              {activePreset === 'thisweek' && 'This week'}
              {activePreset === 'thismonth' && 'This month'}
              {activePreset === 'custom' && 'Custom date'}
            </Badge>
          </div>
        )}

        {/* Active Custom Filter Indicator */}
        {hasCustomFilters && (
          <div className="flex items-center ml-2">
            <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
              Custom filter
            </Badge>
          </div>
        )}
      </div>

      {/* Bulk Selection Bar */}
      {isSelectionMode && (
        <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200 bg-[#F0FDF4] sticky top-0 z-10">
          <div className="flex items-center gap-2">
            {/* Deselect all */}
            <button
              onClick={handleDeselectAll}
              className="p-1 rounded hover:bg-green-100 transition-colors"
              title="Clear selection"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>

            {/* Count + select all */}
            <span className="text-sm font-semibold text-gray-800">
              {selectedIds.size} selected
            </span>
            {selectedIds.size < filteredChats.length && filteredChats.length <= BULK_LIMIT && (
              <button
                onClick={() => handleSelectAll(filteredChats)}
                className="text-xs text-green-700 hover:underline font-medium"
              >
                Select all {filteredChats.length}
              </button>
            )}
            {atLimit && (
              <span className="text-xs text-amber-600 flex items-center gap-0.5">
                <AlertCircle className="w-3 h-3" /> Max {BULK_LIMIT}
              </span>
            )}
          </div>

          {/* Actions button */}
          <div className="relative" ref={actionsRef}>
            <button
              onClick={() => setIsActionsOpen(v => !v)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white rounded-md transition-colors"
              style={{ backgroundColor: '#16A34A' }}
            >
              Actions
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {isActionsOpen && (
              <div className="absolute right-0 top-full mt-1 w-52 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden py-1">
                {/* Resolve */}
                <button
                  onClick={() => applyBulkAction({ type: 'solve' })}
                  className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-left hover:bg-gray-50 transition-colors"
                >
                  <CheckCheck className="w-4 h-4 text-green-600" />
                  <span>Resolve conversations</span>
                </button>

                {/* Reopen */}
                <button
                  onClick={() => applyBulkAction({ type: 'reopen' })}
                  className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-left hover:bg-gray-50 transition-colors"
                >
                  <RotateCcw className="w-4 h-4 text-blue-600" />
                  <span>Reopen conversations</span>
                </button>

                {/* Pending */}
                <button
                  onClick={() => applyBulkAction({ type: 'pending' })}
                  className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-left hover:bg-gray-50 transition-colors"
                >
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>Move to Pending</span>
                </button>

                <div className="h-px bg-gray-100 my-1" />

                {/* Assign — has submenu */}
                <div className="relative">
                  <button
                    onClick={() => setIsAssignSubmenuOpen(v => !v)}
                    className="flex items-center justify-between gap-2.5 w-full px-3 py-2 text-sm text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <UserCheck className="w-4 h-4 text-purple-600" />
                      <span>Assign to agent</span>
                    </div>
                    <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${isAssignSubmenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isAssignSubmenuOpen && (
                    <div className="bg-gray-50 border-t border-b border-gray-100">
                      {MOCK_AGENTS.map(agent => (
                        <button
                          key={agent.id}
                          onClick={() => applyBulkAction({ type: 'assign', agentId: agent.id, agentName: agent.name })}
                          className="flex items-center gap-2.5 w-full pl-8 pr-3 py-2 text-sm text-left hover:bg-gray-100 transition-colors"
                        >
                          <div className="size-6 rounded-full bg-purple-100 flex items-center justify-center text-[10px] font-bold text-purple-700 shrink-0">
                            {agent.avatar}
                          </div>
                          <div>
                            <div className="font-medium text-gray-800 text-xs">{agent.name}</div>
                            <div className="text-[11px] text-gray-400">{agent.role}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Unassign */}
                <button
                  onClick={() => applyBulkAction({ type: 'unassign' })}
                  className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-left hover:bg-gray-50 transition-colors"
                >
                  <UserX className="w-4 h-4 text-gray-500" />
                  <span>Unassign</span>
                </button>

                <div className="h-px bg-gray-100 my-1" />

                {/* Add Tag */}
                <button
                  onClick={() => {
                    const tag = window.prompt('Enter tag name:');
                    if (tag?.trim()) applyBulkAction({ type: 'tag', tag: tag.trim() });
                  }}
                  className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-left hover:bg-gray-50 transition-colors"
                >
                  <Tag className="w-4 h-4 text-orange-500" />
                  <span>Add tag</span>
                </button>

                {/* Add Note */}
                <button
                  onClick={() => {
                    const note = window.prompt('Enter private note:');
                    if (note?.trim()) applyBulkAction({ type: 'note', note: note.trim() });
                  }}
                  className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-left hover:bg-gray-50 transition-colors"
                >
                  <StickyNote className="w-4 h-4 text-yellow-500" />
                  <span>Add private note</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Toast notification */}
      {bulkToast && (
        <div
          className={`mx-3 mt-2 mb-1 px-3 py-2 rounded-lg text-sm flex items-center gap-2 shadow-sm ${
            bulkToast.type === 'success'
              ? 'bg-green-50 border border-green-200 text-green-800'
              : 'bg-amber-50 border border-amber-200 text-amber-800'
          }`}
        >
          {bulkToast.type === 'success' ? (
            <Check className="w-4 h-4 text-green-600 shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
          )}
          <span>{bulkToast.message}</span>
        </div>
      )}

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {filteredChats.map((chat) => {
          return (
            <div
              key={chat.id}
              className="group relative"
              onClick={() => onSelectChat(chat)}
            >
              <ConversationListUnselected
                chat={chat}
                isSelected={selectedChat.id === chat.id}
                onClick={undefined}
                selectedChannel={selectedChannel}
              />
            </div>
          );
        })}

        {filteredChats.length === 0 && (
          <div className="flex items-center justify-center h-32 text-gray-500">
            <div className="text-center">
              <p>No conversations found</p>
              {searchQuery && (
                <p className="text-sm mt-1">Try adjusting your search terms</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Custom Filter Dialog - Only for WhatsApp */}
      {isWhatsAppFeatures && (
        <FilterDialog
          isOpen={isCustomFilterOpen}
          onClose={() => setIsCustomFilterOpen(false)}
          onApply={handleCustomFilterApply}
        />
      )}
    </div>
  );
}