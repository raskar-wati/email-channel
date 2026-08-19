import React from 'react';
import svgPaths from '../../imports/TiBsuidNumber/svg-0pglr5txwi';

function BrandLogo() {
  return (
    <div className="min-w-[64px] relative">
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
          <div className="content-stretch flex items-center relative shrink-0">
            <div className="h-[32px] relative shrink-0 w-[79.641px]">
              <div className="absolute h-[15.807px] left-[36.35px] top-[5.32px] w-[43.295px]">
                <svg className="absolute block inset-0 size-full" fill="none" height="15.8075" preserveAspectRatio="none" viewBox="0 0 43.2953 15.8075" width="43.2953">
                  <g>
                    <path d={svgPaths.p826d9f0} fill="#1D1D1B" />
                    <path d={svgPaths.p3ce99af0} fill="#1D1D1B" />
                    <path d={svgPaths.p23bb7f0} fill="#1D1D1B" />
                    <path d={svgPaths.p1e712000} fill="#1D1D1B" />
                  </g>
                </svg>
              </div>
              <div className="absolute left-0 overflow-clip size-[32px] top-0">
                <div className="absolute h-[27.099px] left-[0.37px] top-[2.48px] w-[31.494px]">
                  <svg className="absolute block inset-0 size-full" fill="none" height="27.0993" preserveAspectRatio="none" viewBox="0 0 31.4937 27.0993" width="31.4937">
                    <path d={svgPaths.p2838bd00} fill="#00E785" />
                    <path d={svgPaths.p1724bf00} fill="#1D1D1B" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Separator() {
  return <div className="bg-[#e7e9e8] h-[16px] shrink-0 w-px" />;
}

function NotificationIcon() {
  return (
    <div className="relative rounded-[99px] size-[32px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
            <div className="overflow-clip relative size-[20px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15.5px] left-1/2 top-[calc(50%-0.25px)] w-[13.996px]">
                <svg className="absolute block inset-0 size-full" fill="none" height="15.5" preserveAspectRatio="none" viewBox="0 0 13.9957 15.5" width="13.9957">
                  <path d={svgPaths.p50f8a00} fill="#505451" />
                </svg>
              </div>
            </div>
            <div className="absolute right-[-4px] size-[6px] top-[-4px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                <circle cx="3" cy="3" fill="#23A455" r="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnnouncekitIcon() {
  return (
    <div className="relative rounded-[99px] size-[32px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
            <div className="overflow-clip relative size-[20px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.42px)] size-[15.181px] top-[calc(50%-0.41px)]">
                <svg className="absolute block inset-0 size-full" fill="none" height="15.1806" preserveAspectRatio="none" viewBox="0 0 15.1806 15.1806" width="15.1806">
                  <path d={svgPaths.p21ed5500} fill="#505451" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserIcon() {
  return (
    <div className="relative rounded-[99px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[6px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
            <div className="overflow-clip relative shrink-0 size-[20px]">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[14px]">
                <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 14 16" width="14">
                  <path d={svgPaths.p1c10d780} fill="#505451" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightSideNav() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0 pr-4">
      <span className="font-semibold text-[#23a455] text-[14px] whitespace-nowrap">Quick start</span>
      <Separator />
      <div className="relative rounded-[99px] shrink-0 cursor-pointer">
        <div className="absolute border border-[#23a455] border-solid inset-0 pointer-events-none rounded-[99px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative size-full">
            <span className="font-semibold text-[#23a455] text-[12px] whitespace-nowrap">Book a Demo</span>
          </div>
        </div>
      </div>
      <NotificationIcon />
      <Separator />
      <AnnouncekitIcon />
      <Separator />
      <UserIcon />
    </div>
  );
}

export function GlobalHeader() {
  return (
    <div className="bg-white h-[44px] flex items-center justify-between shrink-0 border-b border-[#e7e9e8]">
      <BrandLogo />
      <RightSideNav />
    </div>
  );
}
