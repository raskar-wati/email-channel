import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ChevronDown, ChevronRight, Settings, Phone, Instagram, Send, Inbox, X, MessageSquare, Pin, Mail } from 'lucide-react';
import { ChannelPopover } from './ChannelPopover';

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.434 3.488"/>
  </svg>
);

// Custom Messenger Icon Component
const MessengerIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 50 50" fill="currentColor" stroke="currentColor" strokeWidth="0.8">
    <path d="M 25 2 C 12.347656 2 2 11.597656 2 23.5 C 2 30.007813 5.132813 35.785156 10 39.71875 L 10 48.65625 L 11.46875 47.875 L 18.6875 44.125 C 20.703125 44.664063 22.800781 45 25 45 C 37.652344 45 48 35.402344 48 23.5 C 48 11.597656 37.652344 2 25 2 Z M 25 4 C 36.644531 4 46 12.757813 46 23.5 C 46 34.242188 36.644531 43 25 43 C 22.835938 43 20.742188 42.6875 18.78125 42.125 L 18.40625 42.03125 L 18.0625 42.21875 L 12 45.375 L 12 38.8125 L 11.625 38.53125 C 6.960938 34.941406 4 29.539063 4 23.5 C 4 12.757813 13.355469 4 25 4 Z M 22.71875 17.71875 L 10.6875 30.46875 L 21.5 24.40625 L 27.28125 30.59375 L 39.15625 17.71875 L 28.625 23.625 Z"/>
  </svg>
);

interface CustomFilter {
  id: string;
  name: string;
  segments: any[];
  showOldChatsFirst: boolean;
  createdAt: Date;
}

interface SidebarProps {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
  selectedChannel: string;
  setSelectedChannel: (channel: string) => void;
  isCollapsed: boolean;
  chatCounts: {
    all: number;
    whatsapp: number;
    instagram: number;
    messenger: number;
    sms: number;
    rcs: number;
    email: number;
  };
  customFilters: CustomFilter[];
  onCustomFilterDelete: (filterId: string) => void;
}

export function Sidebar({ 
  selectedFilter, 
  setSelectedFilter, 
  selectedChannel, 
  setSelectedChannel,
  isCollapsed,
  chatCounts,
  customFilters,
  onCustomFilterDelete
}: SidebarProps) {
  // Channel-specific popover states
  const [isWhatsAppPopoverOpen, setIsWhatsAppPopoverOpen] = useState(false);
  const [isInstagramPopoverOpen, setIsInstagramPopoverOpen] = useState(false);
  const [isMessengerPopoverOpen, setIsMessengerPopoverOpen] = useState(false);
  const [isSMSPopoverOpen, setIsSMSPopoverOpen] = useState(false);
  const [isRCSPopoverOpen, setIsRCSPopoverOpen] = useState(false);
  
  // Channel-specific account selections
  const [selectedWhatsAppAccounts, setSelectedWhatsAppAccounts] = useState<string[]>([]);
  const [selectedInstagramAccounts, setSelectedInstagramAccounts] = useState<string[]>([]);
  const [selectedMessengerAccounts, setSelectedMessengerAccounts] = useState<string[]>([]);
  const [selectedSMSAccounts, setSelectedSMSAccounts] = useState<string[]>([]);
  const [selectedRCSAccounts, setSelectedRCSAccounts] = useState<string[]>([]);
  
  // Track which filter sections are expanded
  const [expandedSections, setExpandedSections] = useState<string[]>(['channels']);
  const [isMoreFiltersExpanded, setIsMoreFiltersExpanded] = useState(false);
  const [pinnedFilters, setPinnedFilters] = useState<string[]>([]);
  
  const channels = [
    { name: 'All Channels', count: chatCounts.all, icon: Inbox },
    { name: 'WhatsApp', count: chatCounts.whatsapp, icon: WhatsAppIcon },
    { name: 'Instagram', count: chatCounts.instagram, icon: Instagram },
    { name: 'Messenger', count: chatCounts.messenger, icon: MessengerIcon },
    { name: 'RCS', count: chatCounts.rcs, icon: MessageSquare },
    { name: 'Email', count: chatCounts.email, icon: Mail }
  ];

  // Critical filters that should always be visible - Updated with requested filters
  const criticalFilters = [
    { name: 'All Chats', count: 12 },
    { name: 'Active Chats', count: 12 },
    { name: 'Assigned to me', count: 0 },
    { name: 'Unassigned', count: 5 },
    { name: 'Favourites', count: 1 }
  ];

  // Organized filter groups - Removed Solved, Support, and Sales from Chat Type
  const filterGroups = [
    {
      id: 'time-based',
      title: 'Time-based',
      filters: [
        { name: 'Last 24 hours', count: 6 },
        { name: 'Expiring Soon', count: 3, warning: true },
        { name: 'Expired', count: 0, warning: true }
      ]
    },
    {
      id: 'chat-type',
      title: 'Chat Type',
      filters: [
        { name: 'Broadcasts', count: 2 },
        { name: 'CTWA', count: 2 },
        { name: 'G-CTWA', count: 12 },
        { name: 'AI Support Agent Chats', count: 42 }
      ]
    },
    {
      id: 'custom-filters',
      title: 'Custom Filters',
      filters: [
        // Only show custom filters created by users
        ...customFilters.map(filter => ({
          id: filter.id,
          name: filter.name,
          count: 0, // Could be calculated based on actual filter logic
          custom: true
        }))
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleChannelClick = (channelName: string) => {
    setSelectedChannel(channelName);
  };

  // Add debug logging for filter clicks
  const handleFilterClick = (filterName: string) => {
    console.log(`🎯 Sidebar: Filter clicked: "${filterName}"`);
    setSelectedFilter(filterName);
  };

  const handlePinFilter = (filterName: string) => {
    setPinnedFilters(prev => {
      if (prev.includes(filterName)) {
        return prev.filter(name => name !== filterName);
      } else {
        return [...prev, filterName];
      }
    });
  };

  const handleWhatsAppAccountsChange = (accounts: string[]) => {
    setSelectedWhatsAppAccounts(accounts);
    if (accounts.length > 0) {
      setSelectedChannel('WhatsApp');
    }
  };

  const handleInstagramAccountsChange = (accounts: string[]) => {
    setSelectedInstagramAccounts(accounts);
    if (accounts.length > 0) {
      setSelectedChannel('Instagram');
    }
  };

  const handleMessengerAccountsChange = (accounts: string[]) => {
    setSelectedMessengerAccounts(accounts);
    if (accounts.length > 0) {
      setSelectedChannel('Messenger');
    }
  };

  const handleSMSAccountsChange = (accounts: string[]) => {
    setSelectedSMSAccounts(accounts);
    if (accounts.length > 0) {
      setSelectedChannel('SMS');
    }
  };

  const handleRCSAccountsChange = (accounts: string[]) => {
    setSelectedRCSAccounts(accounts);
    if (accounts.length > 0) {
      setSelectedChannel('RCS');
    }
  };

  const getChannelDisplayCount = (channelName: string) => {
    switch (channelName) {
      case 'WhatsApp':
        return selectedWhatsAppAccounts.length > 0 ? selectedWhatsAppAccounts.length : chatCounts.whatsapp;
      case 'Instagram':
        return selectedInstagramAccounts.length > 0 ? selectedInstagramAccounts.length : chatCounts.instagram;
      case 'Messenger':
        return selectedMessengerAccounts.length > 0 ? selectedMessengerAccounts.length : chatCounts.messenger;
      case 'SMS':
        return selectedSMSAccounts.length > 0 ? selectedSMSAccounts.length : chatCounts.sms;
      case 'RCS':
        return selectedRCSAccounts.length > 0 ? selectedRCSAccounts.length : chatCounts.rcs;
      default:
        return chatCounts.all;
    }
  };

  const getTotalAccountsForChannel = (channelName: string) => {
    switch (channelName) {
      case 'WhatsApp':
        return 10; // Total WhatsApp accounts available
      case 'Instagram':
        return 8; // Total Instagram accounts available
      case 'Messenger':
        return 6; // Total Messenger accounts available
      case 'SMS':
        return 5; // Total SMS accounts available
      case 'RCS':
        return 5; // Total RCS accounts available
      case 'All Channels':
        return chatCounts.all;
      default:
        return 0;
    }
  };

  const getSelectedAccountsCount = (channelName: string) => {
    switch (channelName) {
      case 'WhatsApp':
        return selectedWhatsAppAccounts.length;
      case 'Instagram':
        return selectedInstagramAccounts.length;
      case 'Messenger':
        return selectedMessengerAccounts.length;
      case 'SMS':
        return selectedSMSAccounts.length;
      case 'RCS':
        return selectedRCSAccounts.length;
      default:
        return 0;
    }
  };

  const getChannelIconColor = (channelName: string, isSelected: boolean) => {
    if (!isSelected) return 'text-gray-400';
    
    switch (channelName) {
      case 'WhatsApp':
        return 'text-green-500';
      case 'Instagram':
        return 'text-purple-500';
      case 'Messenger':
        return 'text-blue-500';
      case 'SMS':
        return 'text-orange-500';
      case 'RCS':
        return 'text-orange-500';
      case 'Email':
        return 'text-indigo-500';
      case 'All Channels':
        return 'text-blue-600';
      default:
        return 'text-gray-400';
    }
  };

  const getChannelBackgroundColor = (channelName: string, isSelected: boolean) => {
    if (!isSelected) return 'hover:bg-gray-50 text-gray-700';
    
    switch (channelName) {
      case 'WhatsApp':
        return 'bg-green-50 text-green-700';
      case 'Instagram':
        return 'bg-purple-50 text-purple-700';
      case 'Messenger':
        return 'bg-blue-50 text-blue-700';
      case 'SMS':
        return 'bg-orange-50 text-orange-700';
      case 'RCS':
        return 'bg-orange-50 text-orange-700';
      case 'Email':
        return 'bg-indigo-50 text-indigo-700';
      case 'All Channels':
        return 'bg-blue-50 text-blue-700';
      default:
        return 'bg-gray-50 text-gray-700';
    }
  };

  const renderChannelButton = (channel: { name: string; count: number; icon: any }) => {
    const hasAccountSelection = ['WhatsApp', 'Instagram', 'Messenger'].includes(channel.name);
    const isSelected = selectedChannel === channel.name;
    const IconComponent = channel.icon;
    
    if (hasAccountSelection) {
      // Channels with account selection functionality
      const selectedAccountsCount = getSelectedAccountsCount(channel.name);
      
      // Get the appropriate popover state and handlers
      let isPopoverOpen, setIsPopoverOpen, selectedAccounts, onAccountsChange, channelType;
      
      switch (channel.name) {
        case 'WhatsApp':
          isPopoverOpen = isWhatsAppPopoverOpen;
          setIsPopoverOpen = setIsWhatsAppPopoverOpen;
          selectedAccounts = selectedWhatsAppAccounts;
          onAccountsChange = handleWhatsAppAccountsChange;
          channelType = 'WhatsApp' as const;
          break;
        case 'Instagram':
          isPopoverOpen = isInstagramPopoverOpen;
          setIsPopoverOpen = setIsInstagramPopoverOpen;
          selectedAccounts = selectedInstagramAccounts;
          onAccountsChange = handleInstagramAccountsChange;
          channelType = 'Instagram' as const;
          break;
        case 'Messenger':
          isPopoverOpen = isMessengerPopoverOpen;
          setIsPopoverOpen = setIsMessengerPopoverOpen;
          selectedAccounts = selectedMessengerAccounts;
          onAccountsChange = handleMessengerAccountsChange;
          channelType = 'Messenger' as const;
          break;
        case 'SMS':
          isPopoverOpen = isSMSPopoverOpen;
          setIsPopoverOpen = setIsSMSPopoverOpen;
          selectedAccounts = selectedSMSAccounts;
          onAccountsChange = handleSMSAccountsChange;
          channelType = 'SMS' as const;
          break;
        case 'RCS':
          isPopoverOpen = isRCSPopoverOpen;
          setIsPopoverOpen = setIsRCSPopoverOpen;
          selectedAccounts = selectedRCSAccounts;
          onAccountsChange = handleRCSAccountsChange;
          channelType = 'RCS' as const;
          break;
        default:
          return null;
      }

      return (
        <div key={channel.name} className={`flex items-center p-2 rounded-md text-sm transition-colors ${getChannelBackgroundColor(channel.name, isSelected)}`}>
          {/* Main channel button area */}
          <button
            onClick={() => handleChannelClick(channel.name)}
            className="flex items-center flex-1 min-w-0"
          >
            <IconComponent className={`w-4 h-4 mr-3 transition-colors ${getChannelIconColor(channel.name, isSelected)}`} />
            <span className={`transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
              {channel.name}
            </span>
            {selectedAccountsCount > 0 && (
              <span className={`ml-1 text-xs text-gray-500 transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
                ({selectedAccountsCount})
              </span>
            )}
          </button>
          
          {/* Right side with arrow and badge */}
          <div className={`flex items-center space-x-1 ml-2 ${isCollapsed ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
            <ChannelPopover
              isOpen={isPopoverOpen && !isCollapsed}
              onOpenChange={setIsPopoverOpen}
              selectedAccounts={selectedAccounts}
              onAccountsChange={onAccountsChange}
              selectedChannel={selectedChannel}
              channelCount={channel.count}
              channelType={channelType}
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPopoverOpen(!isPopoverOpen);
                }}
                className="p-1 rounded hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-3 h-3 text-gray-600 hover:text-primary transition-colors" />
              </div>
            </ChannelPopover>
            
            <Badge variant="secondary" className="text-xs w-6 h-5 flex items-center justify-center">
              {getTotalAccountsForChannel(channel.name)}
            </Badge>
          </div>
        </div>
      );
    }

    // Regular channel buttons (All, SMS, RCS)
    return (
      <div key={channel.name}>
        <button
          onClick={() => handleChannelClick(channel.name)}
          className={`w-full flex items-center justify-between p-2 rounded-md text-sm transition-colors ${getChannelBackgroundColor(channel.name, isSelected)}`}
        >
          <span className="flex items-center">
            <IconComponent className={`w-4 h-4 mr-2 transition-colors ${getChannelIconColor(channel.name, isSelected)}`} />
            <span className={`transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
              {channel.name}
            </span>
          </span>
          <Badge variant="secondary" className={`text-xs w-6 h-5 flex items-center justify-center transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
            {channel.count}
          </Badge>
        </button>
      </div>
    );
  };

  const renderFilterGroup = (group: typeof filterGroups[0]) => {
    const isExpanded = expandedSections.includes(group.id) && !isCollapsed;
    const ChevronIcon = isExpanded ? ChevronDown : ChevronRight;

    return (
      <div key={group.id} className="border-b border-gray-100 last:border-b-0">
        {/* Group Header */}
        <button
          onClick={() => !isCollapsed && toggleSection(group.id)}
          className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors"
          disabled={isCollapsed}
        >
          <div className="flex items-center">
            <ChevronIcon className={`w-4 h-4 text-gray-400 mr-2 transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`text-sm text-gray-600 font-medium transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
              {group.title}
            </span>
          </div>

        </button>

        {/* Group Filters */}
        {isExpanded && (
          <div className="pb-2 px-3 overflow-hidden">
            <div className="space-y-1">
              {group.filters.length === 0 && group.id === 'custom-filters' ? (
                <div className="p-2 text-sm text-gray-500 text-center">
                  No custom filters yet.
                  <br />
                  <span className="text-xs">Create one using the filter dialog.</span>
                </div>
              ) : (
                group.filters.map((filter) => (
                  <div
                    key={filter.name}
                    className={`w-full flex items-center justify-between p-2 rounded-md text-sm transition-colors group ${
                      selectedFilter === filter.name
                        ? 'bg-green-50 text-green-700'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <button
                      onClick={() => handleFilterClick(filter.name)}
                      className="flex items-center flex-1 min-w-0"
                    >
                      <span className="transition-opacity duration-300 flex items-center">
                        {filter.name}
                      </span>
                    </button>
                    
                    {(filter as any).custom && (filter as any).id ? (
                      /* Custom filter with animated counter and delete button */
                      <div className="relative flex items-center">
                        <Badge 
                          variant="secondary" 
                          className="text-xs w-6 h-5 flex items-center justify-center transition-transform duration-200 group-hover:-translate-x-[16px]"
                        >
                          {filter.count.toString().padStart(2, '0')}
                        </Badge>
                        
                        {/* Delete button appears in the space */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (window.confirm(`Are you sure you want to delete the custom filter "${filter.name}"?`)) {
                              onCustomFilterDelete((filter as any).id);
                            }
                          }}
                          className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-0.5 hover:bg-red-100 rounded text-red-500 hover:text-red-700"
                          title="Delete custom filter"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      /* Regular filter with static counter */
                      <Badge variant="secondary" className="text-xs w-6 h-5 flex items-center justify-center">
                        {filter.count.toString().padStart(2, '0')}
                      </Badge>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out overflow-hidden ${
      isCollapsed ? 'w-0 min-w-0' : 'w-64 min-w-64'
    }`}>
      <div className={`transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold whitespace-nowrap">Team Inbox</h2>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Channels */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('channels')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center">
              {expandedSections.includes('channels') ? (
                <ChevronDown className="w-4 h-4 text-gray-400 mr-2" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400 mr-2" />
              )}
              <span className="text-sm text-gray-600 font-medium whitespace-nowrap">Channels</span>
            </div>

          </button>
          
          {expandedSections.includes('channels') && (
            <div className="px-4 pb-4">
              <div className="space-y-1">
                {channels.map(renderChannelButton)}
              </div>
            </div>
          )}
        </div>

        {/* Critical Filters - Always Visible */}
        <div className="border-b border-gray-200 px-4 py-3">
          <div className="space-y-1">
            {criticalFilters.map((filter) => (
              <button
                key={filter.name}
                onClick={() => handleFilterClick(filter.name)}
                className={`w-full flex items-center justify-between p-2 rounded-md text-sm transition-colors ${
                  selectedFilter === filter.name
                    ? 'bg-green-50 text-green-700'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <span className="whitespace-nowrap">{filter.name}</span>
                <Badge variant="secondary" className="text-xs w-6 h-5 flex items-center justify-center">
                  {filter.count.toString().padStart(2, '0')}
                </Badge>
              </button>
            ))}
            
            {/* Pinned Filters */}
            {pinnedFilters.map((filterName) => {
              const filter = filterGroups.flatMap(g => g.filters).find(f => f.name === filterName);
              if (!filter) return null;
              
              return (
                <div
                  key={filter.name}
                  className={`w-full flex items-center justify-between p-2 rounded-md text-sm transition-colors group ${
                    selectedFilter === filter.name
                      ? 'bg-green-50 text-green-700'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <button
                    onClick={() => handleFilterClick(filter.name)}
                    className="flex items-center flex-1 min-w-0"
                  >
                    <span className="whitespace-nowrap">{filter.name}</span>
                  </button>
                  
                  <div className="relative flex items-center">
                    <Badge 
                      variant="secondary" 
                      className="text-xs w-6 h-5 flex items-center justify-center transition-transform duration-200 group-hover:-translate-x-[20px]"
                    >
                      {filter.count.toString().padStart(2, '0')}
                    </Badge>
                    
                    {/* Unpin button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePinFilter(filter.name);
                      }}
                      className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-0.5 hover:bg-gray-200 rounded"
                      title="Unpin filter"
                    >
                      <Pin className="w-3 h-3 text-gray-600 fill-current" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filter Groups */}
        <div className="flex-1 overflow-y-auto">
          {/* More/Less Button */}
          <button
            onClick={() => !isCollapsed && setIsMoreFiltersExpanded(!isMoreFiltersExpanded)}
            className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
            disabled={isCollapsed}
          >
            <span className={`text-sm text-gray-600 transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
              {isMoreFiltersExpanded ? 'Less' : 'More'}
            </span>
            {isMoreFiltersExpanded ? (
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`} />
            ) : (
              <ChevronRight className={`w-4 h-4 text-gray-400 transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`} />
            )}
          </button>

          {/* All Filter Groups - Shown when expanded */}
          {isMoreFiltersExpanded && (
            <div className="px-4 pb-3">
              <div className="space-y-1">
                {filterGroups.flatMap((group) => group.filters)
                  .filter(filter => !pinnedFilters.includes(filter.name))
                  .map((filter) => (
                  <div
                    key={filter.name}
                    className={`w-full flex items-center justify-between p-2 rounded-md text-sm transition-colors group ${
                      selectedFilter === filter.name
                        ? 'bg-green-50 text-green-700'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <button
                      onClick={() => handleFilterClick(filter.name)}
                      className="flex items-center flex-1 min-w-0"
                    >
                      <span className="transition-opacity duration-300 flex items-center">
                        {filter.name}
                      </span>
                    </button>
                    
                    {(filter as any).custom && (filter as any).id ? (
                      /* Custom filter with animated counter, pin button and delete button */
                      <div className="relative flex items-center">
                        <Badge 
                          variant="secondary" 
                          className="text-xs w-6 h-5 flex items-center justify-center transition-transform duration-200 group-hover:-translate-x-[36px]"
                        >
                          {filter.count.toString().padStart(2, '0')}
                        </Badge>
                        
                        {/* Pin button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePinFilter(filter.name);
                          }}
                          className="absolute right-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-0.5 hover:bg-gray-200 rounded"
                          title="Pin filter"
                        >
                          <Pin className="w-3 h-3 text-gray-600" />
                        </button>
                        
                        {/* Delete button appears in the space */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (window.confirm(`Are you sure you want to delete the custom filter "${filter.name}"?`)) {
                              onCustomFilterDelete((filter as any).id);
                            }
                          }}
                          className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-0.5 hover:bg-red-100 rounded text-red-500 hover:text-red-700"
                          title="Delete custom filter"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      /* Regular filter with counter and pin button */
                      <div className="relative flex items-center">
                        <Badge 
                          variant="secondary" 
                          className="text-xs w-6 h-5 flex items-center justify-center transition-transform duration-200 group-hover:-translate-x-[20px]"
                        >
                          {filter.count.toString().padStart(2, '0')}
                        </Badge>
                        
                        {/* Pin button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePinFilter(filter.name);
                          }}
                          className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-0.5 hover:bg-gray-200 rounded"
                          title="Pin filter"
                        >
                          <Pin className="w-3 h-3 text-gray-600" />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Show empty message if no filters */}
                {filterGroups.flatMap((group) => group.filters).filter(filter => !pinnedFilters.includes(filter.name)).length === 0 && (
                  <div className="p-2 text-sm text-gray-500 text-center">
                    No additional filters available.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}