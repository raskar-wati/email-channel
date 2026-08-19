import React, { useState } from 'react';
import svgPaths from '../../imports/TiBsuidNumber/svg-0pglr5txwi';

type NavItemDef = {
  id: string;
  label: string;
  viewBox: string;
  width: number;
  height: number;
  pathKey: keyof typeof svgPaths;
  offsetLeft?: string;
  offsetTop?: string;
};

const NAV_ITEMS: NavItemDef[] = [
  {
    id: 'campaigns',
    label: 'Campaigns',
    viewBox: '0 0 16 13.6992',
    width: 16,
    height: 13.6992,
    pathKey: 'pdf4d400',
    offsetLeft: 'calc(50% - 0.31px)',
    offsetTop: 'calc(50% + 0.15px)',
  },
  {
    id: 'inbox',
    label: 'Team Inbox',
    viewBox: '0 0 14 14',
    width: 14,
    height: 14,
    pathKey: 'p1dc07700',
  },
  {
    id: 'contacts',
    label: 'Contacts',
    viewBox: '0 0 16 16',
    width: 16,
    height: 16,
    pathKey: 'p33f64040',
    offsetLeft: 'calc(50% - 0.31px)',
    offsetTop: 'calc(50% + 0.17px)',
  },
  {
    id: 'automations',
    label: 'Automations',
    viewBox: '0 0 16.0013 15.0013',
    width: 16.0013,
    height: 15.0013,
    pathKey: 'p18179c0',
    offsetLeft: 'calc(50% - 0.31px)',
    offsetTop: 'calc(50% + 0.17px)',
  },
  {
    id: 'commerce',
    label: 'Commerce',
    viewBox: '0 0 14.0034 14.0034',
    width: 14.0034,
    height: 14.0034,
    pathKey: 'p32606400',
    offsetLeft: 'calc(50% - 0.31px)',
    offsetTop: 'calc(50% + 0.17px)',
  },
  {
    id: 'astra',
    label: 'Astra',
    viewBox: '0 0 14.121 16.1713',
    width: 14.121,
    height: 16.1713,
    pathKey: 'pf330500',
    offsetLeft: 'calc(50% - 0.94px)',
    offsetTop: 'calc(50% + 0.09px)',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    viewBox: '0 0 16 16',
    width: 16,
    height: 16,
    pathKey: 'p1ec78700',
    offsetLeft: 'calc(50% - 0.31px)',
    offsetTop: 'calc(50% + 0.17px)',
  },
  {
    id: 'connectors',
    label: 'Connectors',
    viewBox: '0 0 16 16',
    width: 16,
    height: 16,
    pathKey: 'p21872700',
    offsetLeft: 'calc(50% - 0.31px)',
    offsetTop: 'calc(50% + 0.17px)',
  },
  {
    id: 'settings',
    label: 'Settings',
    viewBox: '0 0 14.4715 16',
    width: 14.4715,
    height: 16,
    pathKey: 'p1c160600',
    offsetLeft: 'calc(50% - 0.31px)',
    offsetTop: 'calc(50% + 0.17px)',
  },
];

function NavIcon({ item, isActive }: { item: NavItemDef; isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute overflow-clip"
        style={{
          left: item.offsetLeft ?? '50%',
          top: item.offsetTop ?? '50%',
          width: item.width,
          height: item.height,
        }}
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          height={item.height}
          preserveAspectRatio="none"
          viewBox={item.viewBox}
          width={item.width}
        >
          <path d={svgPaths[item.pathKey] as string} fill={isActive ? '#23A455' : '#505451'} />
        </svg>
      </div>
    </div>
  );
}

export function MainNavigation() {
  const [selected, setSelected] = useState('inbox');

  return (
    <div className="bg-white flex flex-col shrink-0 w-[44px] border-r border-[#e7e9e8]">
      <div className="flex flex-col pt-[4px] w-full flex-1">
        {NAV_ITEMS.map((item) => {
          const isActive = selected === item.id;
          return (
            <button
              key={item.id}
              title={item.label}
              onClick={() => setSelected(item.id)}
              className={`relative shrink-0 w-full cursor-pointer border-0 p-0 transition-colors ${
                isActive ? 'bg-[#ebf7f0]' : 'bg-white hover:bg-[#f6f7f6]'
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 border-l-4 border-[#23a455] border-solid pointer-events-none" />
              )}
              <div className="flex flex-row items-center justify-center">
                <div className="flex gap-[12px] items-center justify-center p-[12px]">
                  <NavIcon item={item} isActive={isActive} />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
