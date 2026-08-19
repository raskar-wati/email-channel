import svgPaths from "./svg-0pglr5txwi";
type PersonProps = {
  className?: string;
  size?: "20";
  theme?: "Regular";
};

function Person({ className, size = "20", theme = "Regular" }: PersonProps) {
  return (
    <div className={className || "overflow-clip relative size-[20px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[14px]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 14 16" width="14">
          <path d={svgPaths.p1c10d780} fill="#505451" id="Shape" />
        </svg>
      </div>
    </div>
  );
}
type UserProps = {
  className?: string;
  property1?: "hover" | "normal";
};

function User({ className, property1 = "normal" }: UserProps) {
  return (
    <div className={className || `relative rounded-[99px] ${property1 === "hover" ? "bg-[#e7e9e8]" : ""}`}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[6px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Icon">
            <Person className="overflow-clip relative shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
type RocketProps = {
  className?: string;
  size?: "20";
  theme?: "Regular";
};

function Rocket({ className, size = "20", theme = "Regular" }: RocketProps) {
  return (
    <div className={className || "overflow-clip relative size-[20px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.42px)] size-[15.181px] top-[calc(50%-0.41px)]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" height="15.1806" preserveAspectRatio="none" viewBox="0 0 15.1806 15.1806" width="15.1806">
          <path d={svgPaths.p21ed5500} fill="#505451" id="Shape" />
        </svg>
      </div>
    </div>
  );
}
type AnnouncekitProps = {
  className?: string;
  property1?: "hover" | "normal";
};

function Announcekit({ className, property1 = "normal" }: AnnouncekitProps) {
  const isHover = property1 === "hover";
  return (
    <div className={className || `relative rounded-[99px] size-[32px] ${isHover ? "bg-[#e7e9e8]" : ""}`}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className={`content-stretch flex items-center justify-center relative size-full ${isHover ? "px-[11px] py-[10px]" : ""}`}>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Icon">
            <Rocket className="overflow-clip relative shrink-0 size-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
type AlertProps = {
  className?: string;
  size?: "20";
  theme?: "Regular";
};

function Alert({ className, size = "20", theme = "Regular" }: AlertProps) {
  return (
    <div className={className || "overflow-clip relative size-[20px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15.5px] left-1/2 top-[calc(50%-0.25px)] w-[13.996px]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" height="15.5" preserveAspectRatio="none" viewBox="0 0 13.9957 15.5" width="13.9957">
          <path d={svgPaths.p50f8a00} fill="#505451" id="Shape" />
        </svg>
      </div>
    </div>
  );
}
type NotificationProps = {
  className?: string;
  property1?: "hover" | "normal";
};

function Notification({ className, property1 = "normal" }: NotificationProps) {
  const isHover = property1 === "hover";
  return (
    <div className={className || `relative rounded-[99px] size-[32px] ${isHover ? "bg-[#e7e9e8]" : ""}`}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className={`content-stretch flex items-center justify-center relative size-full ${isHover ? "px-[11px] py-[10px]" : ""}`}>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Icon">
            <Alert className="overflow-clip relative shrink-0 size-[20px]" />
            <div className="absolute right-[-4px] size-[6px] top-[-4px]" data-name="Notification">
              <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                <circle cx="3" cy="3" fill="#23A455" id="Notification" r="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type BrandLogoProps = {
  className?: string;
  property1?: "Expanded";
};

function BrandLogo({ className, property1 = "Expanded" }: BrandLogoProps) {
  return (
    <div className={className || "min-w-[64px] relative"}>
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-w-[inherit] px-[12px] py-[6px] relative size-full">
          <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
            <div className="h-[32px] relative shrink-0 w-[79.641px]" data-name="Logo">
              <div className="absolute h-[15.807px] left-[36.35px] top-[5.32px] w-[43.295px]" data-name="Logotype">
                <svg className="absolute block inset-0 size-full" fill="none" height="15.8075" preserveAspectRatio="none" viewBox="0 0 43.2953 15.8075" width="43.2953">
                  <g id="Logotype">
                    <path d={svgPaths.p826d9f0} fill="#1D1D1B" id="Vector" />
                    <path d={svgPaths.p3ce99af0} fill="#1D1D1B" id="Vector_2" />
                    <path d={svgPaths.p23bb7f0} fill="#1D1D1B" id="Vector_3" />
                    <path d={svgPaths.p1e712000} fill="#1D1D1B" id="Vector_4" />
                  </g>
                </svg>
              </div>
              <div className="absolute left-0 overflow-clip size-[32px] top-0" data-name="Logomark">
                <div className="absolute h-[27.099px] left-[0.37px] top-[2.48px] w-[31.494px]" data-name="Frame">
                  <svg className="absolute block inset-0 size-full" fill="none" height="27.0993" preserveAspectRatio="none" viewBox="0 0 31.4937 27.0993" width="31.4937">
                    <g id="Frame">
                      <path d={svgPaths.p2838bd00} fill="#00E785" id="Vector" />
                      <path d={svgPaths.p1724bf00} fill="#1D1D1B" id="Vector_2" />
                    </g>
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
type StickerProps = {
  className?: string;
  state?: "Default" | "Hover" | "Selected";
};

function Sticker({ className, state = "Default" }: StickerProps) {
  if (state === "Hover") {
    return (
      <button className={className || "block cursor-pointer overflow-clip relative size-[20px]"} data-name="State=Hover">
        <div className="absolute inset-[11.77%_9.68%_11.46%_13.54%]" data-name="sticker">
          <div className="absolute inset-[-4.07%]">
            <svg className="block size-full" fill="none" height="16.6051" preserveAspectRatio="none" viewBox="0 0 16.6051 16.6051" width="16.6051">
              <g id="sticker">
                <path d={svgPaths.p37123500} id="Vector" stroke="#23A455" strokeMiterlimit="10" strokeWidth="1.25" />
                <path d={svgPaths.p146ecf40} id="Vector_2" stroke="#23A455" strokeMiterlimit="10" strokeWidth="1.25" />
              </g>
            </svg>
          </div>
        </div>
      </button>
    );
  }
  if (state === "Selected") {
    return (
      <div className={className || "overflow-clip relative size-[20px]"} data-name="State=Selected">
        <div className="absolute inset-[11.77%_9.68%_11.46%_13.54%]" data-name="sticker">
          <div className="absolute inset-[-4.07%]">
            <svg className="block size-full" fill="none" height="16.6051" preserveAspectRatio="none" viewBox="0 0 16.6051 16.6051" width="16.6051">
              <g id="sticker">
                <path d={svgPaths.p37123500} id="Vector" stroke="#23A455" strokeMiterlimit="10" strokeWidth="1.25" />
                <path d={svgPaths.p146ecf40} id="Vector_2" stroke="#23A455" strokeMiterlimit="10" strokeWidth="1.25" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className || "overflow-clip relative size-[20px]"} data-name="State=Default">
      <div className="absolute inset-[11.77%_9.68%_11.46%_13.54%]" data-name="sticker">
        <div className="absolute inset-[-4.07%]">
          <svg className="block size-full" fill="none" height="16.6051" preserveAspectRatio="none" viewBox="0 0 16.6051 16.6051" width="16.6051">
            <g id="sticker">
              <path d={svgPaths.p37123500} id="Vector" stroke="#353735" strokeMiterlimit="10" strokeWidth="1.25" />
              <path d={svgPaths.p146ecf40} id="Vector_2" stroke="#353735" strokeMiterlimit="10" strokeWidth="1.25" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
type EmojiProps = {
  className?: string;
  state?: "Default" | "Hover" | "Selected";
};

function Emoji({ className, state = "Default" }: EmojiProps) {
  if (state === "Hover") {
    return (
      <button className={className || "block cursor-pointer overflow-clip relative size-[20px]"} data-name="State=Hover">
        <div className="absolute inset-[11.46%]" data-name="lol">
          <div className="absolute inset-[-4.05%]">
            <svg className="block size-full" fill="none" height="16.6667" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667" width="16.6667">
              <g id="lol">
                <path d={svgPaths.p178c2500} id="Vector" stroke="#2BC666" strokeMiterlimit="10" strokeWidth="1.25" />
                <path d="M6.45833 5.625H4.79167" id="Vector_2" stroke="#2BC666" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.25" />
                <path d="M11.875 5.625H10.2083" id="Vector_3" stroke="#2BC666" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.25" />
                <path d={svgPaths.p329e67f0} id="Vector_4" stroke="#2BC666" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25" />
              </g>
            </svg>
          </div>
        </div>
      </button>
    );
  }
  if (state === "Selected") {
    return (
      <div className={className || "overflow-clip relative size-[20px]"} data-name="State=Selected">
        <div className="absolute inset-[11.46%]" data-name="lol">
          <div className="absolute inset-[-4.05%]">
            <svg className="block size-full" fill="none" height="16.6667" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667" width="16.6667">
              <g id="lol">
                <path d={svgPaths.p178c2500} id="Vector" stroke="#23A455" strokeMiterlimit="10" strokeWidth="1.25" />
                <path d="M6.45833 5.625H4.79167" id="Vector_2" stroke="#23A455" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.25" />
                <path d="M11.875 5.625H10.2083" id="Vector_3" stroke="#23A455" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.25" />
                <path d={svgPaths.p329e67f0} id="Vector_4" stroke="#23A455" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className || "overflow-clip relative size-[20px]"} data-name="State=Default">
      <div className="absolute inset-[11.46%]" data-name="lol">
        <div className="absolute inset-[-4.05%]">
          <svg className="block size-full" fill="none" height="16.6667" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667" width="16.6667">
            <g id="lol">
              <path d={svgPaths.p178c2500} id="Vector" stroke="#353735" strokeMiterlimit="10" strokeWidth="1.25" />
              <path d="M6.45833 5.625H4.79167" id="Vector_2" stroke="#353735" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.25" />
              <path d="M11.875 5.625H10.2083" id="Vector_3" stroke="#353735" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.25" />
              <path d={svgPaths.p329e67f0} id="Vector_4" stroke="#353735" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.25" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
type AttachProps = {
  className?: string;
  state?: "Default" | "Hover" | "Selected";
};

function Attach({ className, state = "Default" }: AttachProps) {
  if (state === "Hover") {
    return (
      <button className={className || "block cursor-pointer overflow-clip relative size-[20px]"} data-name="State=Hover">
        <div className="absolute inset-[8.41%_9.45%_8.31%_8.29%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.6564" preserveAspectRatio="none" viewBox="0 0 16.4525 16.6564" width="16.4525">
            <path d={svgPaths.p13a7b200} fill="#2BC666" id="Vector" />
          </svg>
        </div>
      </button>
    );
  }
  if (state === "Selected") {
    return (
      <div className={className || "overflow-clip relative size-[20px]"} data-name="State=Selected">
        <div className="absolute inset-[8.41%_9.45%_8.31%_8.29%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.6564" preserveAspectRatio="none" viewBox="0 0 16.4525 16.6564" width="16.4525">
            <path d={svgPaths.p13a7b200} fill="#23A455" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  return (
    <div className={className || "overflow-clip relative size-[20px]"} data-name="State=Default">
      <div className="absolute inset-[8.41%_9.45%_8.31%_8.29%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="16.6564" preserveAspectRatio="none" viewBox="0 0 16.4525 16.6564" width="16.4525">
          <path d={svgPaths.p13a7b200} fill="#353735" id="Vector" />
        </svg>
      </div>
    </div>
  );
}
type Icons8ResumeTemplateProps = {
  className?: string;
  state?: "Default" | "Hover" | "Selected";
};

function Icons8ResumeTemplate({ className, state = "Default" }: Icons8ResumeTemplateProps) {
  if (state === "Hover") {
    return (
      <button className={className || "block cursor-pointer overflow-clip relative size-[20px]"} data-name="State=Hover">
        <div className="absolute inset-[11.46%_19.79%]" data-name="Vector">
          <div className="absolute inset-[-3.24%_-4.14%]">
            <svg className="block size-full" fill="none" height="16.4167" preserveAspectRatio="none" viewBox="0 0 13.0833 16.4167" width="13.0833">
              <path d={svgPaths.p34fbf200} id="Vector" stroke="#2BC666" strokeLinejoin="round" strokeMiterlimit="10" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[23.96%_32.29%_63.54%_32.29%]" data-name="Vector">
          <div className="absolute inset-[-20%_-7.06%]">
            <svg className="block size-full" fill="none" height="3.5" preserveAspectRatio="none" viewBox="0 0 8.08333 3.5" width="8.08333">
              <path d={svgPaths.p4962980} id="Vector" stroke="#2BC666" strokeLinejoin="round" strokeMiterlimit="10" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[48.96%_32.29%_23.96%_32.29%]" data-name="Vector">
          <div className="absolute inset-[-9.23%_-7.06%]">
            <svg className="block size-full" fill="none" height="6.41667" preserveAspectRatio="none" viewBox="0 0 8.08333 6.41667" width="8.08333">
              <path d={svgPaths.p180b8d00} id="Vector" stroke="#2BC666" strokeLinejoin="round" strokeMiterlimit="10" />
            </svg>
          </div>
        </div>
      </button>
    );
  }
  if (state === "Selected") {
    return (
      <div className={className || "overflow-clip relative size-[20px]"} data-name="State=Selected">
        <div className="absolute inset-[11.46%_19.79%]" data-name="Vector">
          <div className="absolute inset-[-3.24%_-4.14%]">
            <svg className="block size-full" fill="none" height="16.4167" preserveAspectRatio="none" viewBox="0 0 13.0833 16.4167" width="13.0833">
              <path d={svgPaths.p34fbf200} id="Vector" stroke="#23A455" strokeLinejoin="round" strokeMiterlimit="10" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[23.96%_32.29%_63.54%_32.29%]" data-name="Vector">
          <div className="absolute inset-[-20%_-7.06%]">
            <svg className="block size-full" fill="none" height="3.5" preserveAspectRatio="none" viewBox="0 0 8.08333 3.5" width="8.08333">
              <path d={svgPaths.p4962980} id="Vector" stroke="#23A455" strokeLinejoin="round" strokeMiterlimit="10" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[48.96%_32.29%_23.96%_32.29%]" data-name="Vector">
          <div className="absolute inset-[-9.23%_-7.06%]">
            <svg className="block size-full" fill="none" height="6.41667" preserveAspectRatio="none" viewBox="0 0 8.08333 6.41667" width="8.08333">
              <path d={svgPaths.p180b8d00} id="Vector" stroke="#23A455" strokeLinejoin="round" strokeMiterlimit="10" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className || "overflow-clip relative size-[20px]"} data-name="State=Default">
      <div className="absolute inset-[11.46%_19.79%]" data-name="Vector">
        <div className="absolute inset-[-3.24%_-4.14%]">
          <svg className="block size-full" fill="none" height="16.4167" preserveAspectRatio="none" viewBox="0 0 13.0833 16.4167" width="13.0833">
            <path d={svgPaths.p34fbf200} id="Vector" stroke="#353735" strokeLinejoin="round" strokeMiterlimit="10" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[23.96%_32.29%_63.54%_32.29%]" data-name="Vector">
        <div className="absolute inset-[-20%_-7.06%]">
          <svg className="block size-full" fill="none" height="3.5" preserveAspectRatio="none" viewBox="0 0 8.08333 3.5" width="8.08333">
            <path d={svgPaths.p4962980} id="Vector" stroke="#353735" strokeLinejoin="round" strokeMiterlimit="10" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[48.96%_32.29%_23.96%_32.29%]" data-name="Vector">
        <div className="absolute inset-[-9.23%_-7.06%]">
          <svg className="block size-full" fill="none" height="6.41667" preserveAspectRatio="none" viewBox="0 0 8.08333 6.41667" width="8.08333">
            <path d={svgPaths.p180b8d00} id="Vector" stroke="#353735" strokeLinejoin="round" strokeMiterlimit="10" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type QuickReplyProps = {
  className?: string;
  state?: "Default" | "Hover" | "Selected";
};

function QuickReply({ className, state = "Default" }: QuickReplyProps) {
  if (state === "Hover") {
    return (
      <button className={className || "block cursor-pointer overflow-clip relative size-[20px]"} data-name="State=Hover">
        <div className="absolute inset-[8.33%_16.67%_8.33%_20.84%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.6665" preserveAspectRatio="none" viewBox="0 0 12.4996 16.6665" width="12.4996">
            <path d={svgPaths.p36503f80} fill="#2BC666" id="Vector" />
          </svg>
        </div>
      </button>
    );
  }
  if (state === "Selected") {
    return (
      <div className={className || "overflow-clip relative size-[20px]"} data-name="State=Selected">
        <div className="absolute inset-[8.33%_16.67%_8.33%_20.84%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.6665" preserveAspectRatio="none" viewBox="0 0 12.4996 16.6665" width="12.4996">
            <path d={svgPaths.p36503f80} fill="#23A455" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  return (
    <div className={className || "overflow-clip relative size-[20px]"} data-name="State=Default">
      <div className="absolute inset-[8.33%_16.67%_8.33%_20.84%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="16.6665" preserveAspectRatio="none" viewBox="0 0 12.4996 16.6665" width="12.4996">
          <path d={svgPaths.p36503f80} fill="#353735" id="Vector" />
        </svg>
      </div>
    </div>
  );
}
type PanelProps = {
  className?: string;
  action?: "Default";
  side?: "Right";
  size?: "20";
  theme?: "Regular";
};

function Panel({ className, action = "Default", side = "Right", size = "20", theme = "Regular" }: PanelProps) {
  return (
    <div className={className || "overflow-clip relative size-[20px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[13px] left-1/2 top-[calc(50%-0.5px)] w-[16px]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 16 13" width="16">
          <path d={svgPaths.pfd27e00} fill="#505451" id="Shape" />
        </svg>
      </div>
    </div>
  );
}
type ComponentProps = {
  className?: string;
  variant?: "179" | "180" | "181" | "182" | "184";
};

function Component({ className, variant = "179" }: ComponentProps) {
  const is180 = variant === "180";
  const is184 = variant === "184";
  return (
    <div className={className || `relative ${is184 ? "h-[20.594px] w-[17.5px]" : is180 ? "size-[14px]" : "size-[17.5px]"}`}>
      {variant === "179" && (
        <div className="absolute inset-[6.25%_14.58%]" data-name="Headset">
          <svg className="absolute block inset-0 size-full" fill="none" height="15.3124" preserveAspectRatio="none" viewBox="0 0 12.3958 15.3124" width="12.3958">
            <g id="Headset">
              <path d={svgPaths.p1077c700} fill="#505451" id="Vector" />
            </g>
          </svg>
        </div>
      )}
      {is180 && (
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="chevron-down">
          <div className="absolute inset-[-25%_-12.5%]">
            <svg className="block size-full" fill="none" height="5.25" preserveAspectRatio="none" viewBox="0 0 8.75 5.25" width="8.75">
              <g id="chevron-down">
                <path d={svgPaths.p353dc30} id="Vector" stroke="#505451" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
              </g>
            </svg>
          </div>
        </div>
      )}
      {variant === "181" && (
        <div className="absolute inset-[14.29%_10%]" data-name="users-profiles-01">
          <div className="absolute inset-[-7%_-6.25%]">
            <svg className="block size-full" fill="none" height="14.2492" preserveAspectRatio="none" viewBox="0 0 15.75 14.2492" width="15.75">
              <g id="users-profiles-01">
                <path d={svgPaths.p49f6600} id="Icon" stroke="#505451" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
              </g>
            </svg>
          </div>
        </div>
      )}
      {variant === "182" && (
        <div className="absolute inset-[6.25%_12.5%_8.33%_12.5%]" data-name="icons8-timer 1">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.9479" preserveAspectRatio="none" viewBox="0 0 13.125 14.9479" width="13.125">
            <g id="icons8-timer 1">
              <path d={svgPaths.p3a5cea80} fill="#848A86" id="Vector" />
            </g>
          </svg>
        </div>
      )}
      {is184 && (
        <div className="absolute inset-[40.87%_12.5%_42.78%_12.5%]" data-name="COCO/Line/More">
          <svg className="absolute block inset-0 size-full" fill="none" height="3.36677" preserveAspectRatio="none" viewBox="0 0 13.125 3.36677" width="13.125">
            <g id="COCO/Line/More">
              <path d={svgPaths.p134604c0} fill="#505451" id="Vector" />
              <path d={svgPaths.p3b0e4bf0} fill="#505451" id="Vector_2" />
              <path d={svgPaths.p1d408c00} fill="#505451" id="Vector_3" />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}
type CallProps = {
  className?: string;
  size?: "16";
  theme?: "Regular";
};

function Call({ className, size = "16", theme = "Regular" }: CallProps) {
  return (
    <div className={className || "overflow-clip relative size-[16px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[13.257px] left-[calc(50%-0.13px)] top-[calc(50%+0.04px)] w-[10.373px]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" height="13.2565" preserveAspectRatio="none" viewBox="0 0 10.3728 13.2565" width="10.3728">
          <path d={svgPaths.p14d61780} fill="#505451" id="Shape" />
        </svg>
      </div>
    </div>
  );
}
type CallButtonProps = {
  className?: string;
  state?: "hover" | "default" | "click";
};

function CallButton({ className, state = "click" }: CallButtonProps) {
  if (state === "default") {
    return (
      <div className={className || "relative rounded-[8px]"} data-name="State=default">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[4px] relative size-full">
            <Call className="overflow-clip relative shrink-0 size-[16px]" />
          </div>
        </div>
      </div>
    );
  }
  if (state === "hover") {
    return (
      <button className={className || "bg-[#e7e9e8] cursor-pointer relative rounded-[8px]"} data-name="State=hover">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[4px] relative size-full">
            <Call className="overflow-clip relative shrink-0 size-[16px]" />
          </div>
        </div>
      </button>
    );
  }
  return (
    <div className={className || "bg-white relative rounded-[8px]"} data-name="State=click">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[4px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Call">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[13.257px] left-[calc(50%-0.13px)] top-[calc(50%+0.04px)] w-[10.373px]" data-name="Shape">
              <svg className="absolute block inset-0 size-full" fill="none" height="13.2565" preserveAspectRatio="none" viewBox="0 0 10.3728 13.2565" width="10.3728">
                <path d={svgPaths.p14d61780} fill="#23A455" id="Shape" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type AvatarsProps = {
  className?: string;
  channel?: "whatsapp" | "Instagram" | "messenger";
  channelIndicator?: boolean;
  type?: "circle";
};

function Avatars({ className, channel = "whatsapp", channelIndicator = false, type = "circle" }: AvatarsProps) {
  const isCircleAndInstagramAndNotChannelIndicator = type === "circle" && channel === "Instagram" && !channelIndicator;
  const isCircleAndMessengerAndChannelIndicator = type === "circle" && channel === "messenger" && channelIndicator;
  return (
    <div className={className || "relative size-[32px]"}>
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <path d={svgPaths.p4f1e480} fill={isCircleAndInstagramAndNotChannelIndicator ? "url(#paint0_linear_0_793)" : isCircleAndMessengerAndChannelIndicator ? "url(#paint0_linear_0_690)" : "url(#paint0_linear_0_708)"} id="Vector" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id={isCircleAndInstagramAndNotChannelIndicator ? "paint0_linear_0_793" : isCircleAndMessengerAndChannelIndicator ? "paint0_linear_0_690" : "paint0_linear_0_708"} x1="16" x2="16" y1={isCircleAndInstagramAndNotChannelIndicator ? "32" : "0"} y2={isCircleAndInstagramAndNotChannelIndicator ? "-2.57046e-07" : "32"}>
            <stop stopColor={isCircleAndInstagramAndNotChannelIndicator ? "#D5C7FF" : isCircleAndMessengerAndChannelIndicator ? "#D7F4FF" : "#E0FFDE"} />
            <stop offset="1" stopColor={isCircleAndInstagramAndNotChannelIndicator ? "#DDD2FF" : isCircleAndMessengerAndChannelIndicator ? "#A7D1FF" : "#D0DFCF"} stopOpacity={isCircleAndInstagramAndNotChannelIndicator ? "0.31" : undefined} />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-[74.63%_16.11%_0_16.11%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="8.11987" preserveAspectRatio="none" viewBox="0 0 21.691 8.11987" width="21.691">
          <path d={svgPaths.pd235c00} fill={isCircleAndInstagramAndNotChannelIndicator ? "#604FC6" : isCircleAndMessengerAndChannelIndicator ? "#1766D4" : "#23A455"} id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[25.97%_32.83%_39.68%_32.82%]" data-name="Vector">
        <div className="absolute inset-[-9.1%]">
          <svg className="block size-full" fill="none" height="12.9919" preserveAspectRatio="none" viewBox="0 0 12.9919 12.9919" width="12.9919">
            <path d={svgPaths.p3ca3d680} id="Vector" stroke={isCircleAndInstagramAndNotChannelIndicator ? "#604FC6" : isCircleAndMessengerAndChannelIndicator ? "#1766D4" : "#23A455"} strokeMiterlimit="10" strokeWidth="2" />
          </svg>
        </div>
      </div>
      {isCircleAndMessengerAndChannelIndicator && (
        <div className="absolute inset-[62.5%_0_0_62.5%]" data-name="Facebook Messenger">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
            <g id="Facebook Messenger">
              <rect fill="white" height="12" rx="6" width="12" />
              <path d={svgPaths.p1e5fde00} fill="url(#paint0_radial_0_725)" id="Vector" />
              <path d={svgPaths.p275d7880} fill="black" id="Vector_2" opacity="0.05" />
              <path d={svgPaths.p4269100} fill="black" id="Vector_3" opacity="0.07" />
              <path d={svgPaths.p37c42900} fill="white" id="Vector_4" />
            </g>
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(2.77183 10.7445) scale(11.903 11.903)" gradientUnits="userSpaceOnUse" id="paint0_radial_0_725" r="1">
                <stop stopColor="#1292FF" />
                <stop offset="0.079" stopColor="#2982FF" />
                <stop offset="0.23" stopColor="#4E69FF" />
                <stop offset="0.351" stopColor="#6559FF" />
                <stop offset="0.428" stopColor="#6D53FF" />
                <stop offset="0.754" stopColor="#DF47AA" />
                <stop offset="0.946" stopColor="#FF6257" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      )}
      {type === "circle" && channel === "whatsapp" && channelIndicator && (
        <div className="absolute bg-white inset-[62.5%_0_0_62.5%] rounded-[8px]" data-name="Whatsapp logo">
          <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
          <div className="absolute inset-[4%]" data-name="Vector">
            <div className="absolute inset-[-9.06%]">
              <svg className="block size-full" fill="none" height="13.04" preserveAspectRatio="none" viewBox="0 0 13.04 13.04" width="13.04">
                <path d={svgPaths.p164abe00} fill="#2CB742" id="Vector" stroke="white" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
type SearchProps = {
  className?: string;
  size?: "16";
  theme?: "Regular";
};

function Search({ className, size = "16", theme = "Regular" }: SearchProps) {
  return (
    <div className={className || "overflow-clip relative size-[16px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[12px] top-1/2" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
          <path d={svgPaths.p3d6bb000} fill="#505451" id="Shape" />
        </svg>
      </div>
    </div>
  );
}
type ChevronProps = {
  className?: string;
  direction?: "Down" | "Right";
  size?: "12" | "16";
  theme?: "Regular" | "Filled";
};

function Chevron({ className, direction = "Down", size = "12", theme = "Regular" }: ChevronProps) {
  const isDownAnd12AndRegular = direction === "Down" && size === "12" && theme === "Regular";
  const isDownAnd16AndFilled = direction === "Down" && size === "16" && theme === "Filled";
  const isRightAnd12AndFilled = direction === "Right" && size === "12" && theme === "Filled";
  return (
    <div className={className || `overflow-clip relative ${isDownAnd16AndFilled ? "size-[16px]" : "size-[12px]"}`}>
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute ${isDownAnd12AndRegular ? "h-[4.5px] left-1/2 top-[calc(50%+0.75px)] w-[8px]" : isDownAnd16AndFilled ? "h-[5.5px] left-1/2 top-[calc(50%+0.25px)] w-[10px]" : isRightAnd12AndFilled ? "h-[8px] left-[calc(50%+0.63px)] top-1/2 w-[4.75px]" : "h-[8px] left-[calc(50%+0.75px)] top-1/2 w-[4.5px]"}`} data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" height={isDownAnd12AndRegular ? "4.5" : isDownAnd16AndFilled ? "5.5" : "8"} preserveAspectRatio="none" viewBox={isDownAnd12AndRegular ? "0 0 8 4.5" : isDownAnd16AndFilled ? "0 0 10 5.5" : isRightAnd12AndFilled ? "0 0 4.75 8" : "0 0 4.5 8"} width={isDownAnd12AndRegular ? "8" : isDownAnd16AndFilled ? "10" : isRightAnd12AndFilled ? "4.75" : "4.5"}>
          <path d={isDownAnd12AndRegular ? svgPaths.p2e2fea80 : isDownAnd16AndFilled ? svgPaths.pf297500 : isRightAnd12AndFilled ? svgPaths.pe7d5d80 : svgPaths.p329e3500} fill="#505451" id="Shape" />
        </svg>
      </div>
    </div>
  );
}
type Panel1Props = {
  className?: string;
  action?: "Default";
  side?: "Left";
  size?: "20";
  theme?: "Regular";
};

function Panel1({ className, action = "Default", side = "Left", size = "20", theme = "Regular" }: Panel1Props) {
  return (
    <div className={className || "overflow-clip relative size-[20px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[13px] left-1/2 top-[calc(50%+0.5px)] w-[16px]" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 16 13" width="16">
          <path d={svgPaths.p2af1e400} fill="#505451" id="Shape" />
        </svg>
      </div>
    </div>
  );
}
type ChatlistHeaderProps = {
  className?: string;
  selection?: "Non-WA";
};

function ChatlistHeader({ className, selection = "Non-WA" }: ChatlistHeaderProps) {
  return (
    <div className={className || "bg-white relative w-[297px]"}>
      <div className="content-stretch flex flex-col items-start px-[12px] py-[2px] relative size-full">
        <div className="content-stretch flex items-center justify-between py-[4px] relative shrink-0 w-full" data-name="New Message Container">
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Horizontal container">
            <Panel1 className="overflow-clip relative shrink-0 size-[20px]" />
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
              <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                <p className="[word-break:break-word] font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#353735] text-[14px] whitespace-nowrap">All Chats</p>
                <Chevron className="overflow-clip relative shrink-0 size-[16px]" size="16" theme="Filled" />
              </div>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#505451] text-[10px] whitespace-nowrap">322 Chats</p>
                <div className="relative shrink-0 size-[4px]">
                  <svg className="absolute block inset-0 size-full" fill="none" height="4" preserveAspectRatio="none" viewBox="0 0 4 4" width="4">
                    <circle cx="2" cy="2" fill="#CED0CE" id="Ellipse 1" r="2" />
                  </svg>
                </div>
                <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[12px] not-italic relative shrink-0 text-[#505451] text-[10px] whitespace-nowrap">23 Unread</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-[120.5px]">
            <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Vertical container">
              <div className="relative shrink-0 size-[24px]" data-name="filter">
                <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
                  <circle cx="12" cy="12" fill="#F0F0F0" id="Vertical container" r="12" />
                </svg>
                <Search className="absolute inset-[16.67%] overflow-clip" />
              </div>
            </div>
            <div className="bg-[#23a455] content-stretch flex items-center p-[4px] relative rounded-[12px] shrink-0">
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Assigned to You Filter">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.25px)] size-[9.5px] top-[calc(50%-0.25px)]" data-name="Shape">
                  <svg className="absolute block inset-0 size-full" fill="none" height="9.5" preserveAspectRatio="none" viewBox="0 0 9.5 9.5" width="9.5">
                    <path d={svgPaths.p3ed61900} fill="white" id="Shape" />
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
type MailInboxProps = {
  className?: string;
  size?: "16";
  theme?: "Regular";
};

function MailInbox({ className, size = "16", theme = "Regular" }: MailInboxProps) {
  return (
    <div className={className || "overflow-clip relative size-[16px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[12px] top-1/2" data-name="Shape">
        <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
          <path d={svgPaths.p1431e700} fill="#505451" id="Shape" />
        </svg>
      </div>
    </div>
  );
}
type SelectionProps = {
  className?: string;
  newMessage?: boolean;
  showChevron?: boolean;
  showIcon?: boolean;
  state?: "selected+hover" | "default" | "hover";
};

function Selection({ className, newMessage = true, showChevron = true, showIcon = true, state = "selected+hover" }: SelectionProps) {
  const isDefaultOrHover = ["default", "hover"].includes(state);
  return (
    <div className={className || `h-[30px] relative rounded-[8px] w-[187px] ${state === "hover" ? "bg-[#f6f7f6]" : state === "default" ? "bg-white" : "bg-[#ebf7f0]"}`}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[6px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
            {showIcon && <MailInbox className="overflow-clip relative shrink-0 size-[16px]" />}
            <p className={`[word-break:break-word] flex-[1_0_0] leading-[20px] min-w-px not-italic relative text-[#1b1d1c] text-[14px] ${isDefaultOrHover ? 'font-["Inter:regular",sans-serif]' : 'font-["Inter:medium",sans-serif]'}`}>All Channels</p>
          </div>
          {showChevron && (
            <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Chevron">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[8px] left-[calc(50%+0.75px)] top-1/2 w-[4.5px]" data-name="Shape">
                <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 4.5 8" width="4.5">
                  <path d={svgPaths.p329e3500} fill="#505451" id="Shape" />
                </svg>
              </div>
            </div>
          )}
          {isDefaultOrHover && newMessage && (
            <div className="relative shrink-0 size-[6px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                <circle cx="3" cy="3" fill="#FE7E66" id="new message spotlight" r="3" />
              </svg>
            </div>
          )}
          {state === "selected+hover" && newMessage && (
            <div className="relative shrink-0 size-[6px]" data-name="new message spotlight">
              <svg className="absolute block inset-0 size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 6 6" width="6">
                <circle cx="3" cy="3" fill="#FE7E66" id="new message spotlight" r="3" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DropdownListItem() {
  return <div className="absolute content-stretch flex h-[36px] items-center justify-between left-0 px-[12px] py-[8px] top-[51px] w-[203px]" data-name="_Dropdown list item" />;
}

function Frame42() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e7e9e8] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:bold',sans-serif] leading-[20px] min-w-px not-italic relative text-[#353735] text-[14px]">Team Inbox</p>
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Settings">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[11.996px] left-1/2 top-1/2 w-[11.5px]" data-name="Shape">
              <svg className="absolute block inset-0 size-full" fill="none" height="11.996" preserveAspectRatio="none" viewBox="0 0 11.5 11.996" width="11.5">
                <path d={svgPaths.p8b9f500} fill="#505451" id="Shape" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4.5px] left-1/2 top-[calc(50%+0.75px)] w-[8px]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" height="4.5" preserveAspectRatio="none" viewBox="0 0 8 4.5" width="8">
            <path d={svgPaths.p2e2fea80} fill="#505451" id="Shape" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:medium',sans-serif] leading-[16px] min-w-px not-italic relative text-[#1b1d1c] text-[12px]">Channels</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <div className="relative shrink-0 size-[16px]" data-name="Mail Inbox">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
            <path d={svgPaths.p39b52a00} fill="#848A86" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
            <path d={svgPaths.p39b52a00} fill="#848A86" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#1b1d1c] text-[14px]">WhatsApp</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <div className="relative shrink-0 size-[16px]" data-name="Mail Inbox">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.37%_-4.38%_-4.38%_-4.37%]">
            <svg className="block size-full" fill="none" height="13.05" preserveAspectRatio="none" viewBox="0 0 13.05 13.05" width="13.05">
              <path d={svgPaths.p33962900} id="Vector" stroke="#848A86" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[34.84%_34.84%_35.16%_35.16%]" data-name="Vector">
          <div className="absolute inset-[-10.94%]">
            <svg className="block size-full" fill="none" height="5.85001" preserveAspectRatio="none" viewBox="0 0 5.85001 5.85001" width="5.85001">
              <path d={svgPaths.p3770a600} id="Vector" stroke="#848A86" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.37%_29.34%_70.63%_70.63%]" data-name="Vector">
          <div className="absolute inset-[-0.52px]">
            <svg className="block size-full" fill="none" height="1.05" preserveAspectRatio="none" viewBox="0 0 1.05583 1.05" width="1.05583">
              <path d="M0.525 0.525H0.530833" id="Vector" stroke="#848A86" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05" />
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#1b1d1c] text-[14px]">Instagram</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <div className="relative shrink-0 size-[16px]" data-name="Mail Inbox">
        <div className="absolute inset-[9.62%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-2.08%_-2.24%_-1.07%_-2.24%]">
            <svg className="block size-full" fill="none" height="13.3305" preserveAspectRatio="none" viewBox="0 0 12.5385 13.3305" width="12.5385">
              <path d={svgPaths.p39492480} fill="#848A86" id="Vector" stroke="#848A86" strokeWidth="0.538462" />
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#1b1d1c] text-[14px]">Messenger</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Call">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[13.257px] left-[calc(50%-0.13px)] top-[calc(50%+0.04px)] w-[10.373px]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" height="13.2565" preserveAspectRatio="none" viewBox="0 0 10.3728 13.2565" width="10.3728">
            <path d={svgPaths.p14d61780} fill="#848A86" id="Shape" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#1b1d1c] text-[14px]">WhatsApp Calls</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start px-[12px] py-[4px] relative size-full">
          <div className="bg-white h-[28px] relative rounded-[8px] shrink-0 w-full" data-name="Selection">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center py-[6px] relative size-full">
                <Frame33 />
              </div>
            </div>
          </div>
          <Selection className="bg-[#ebf7f0] h-[30px] relative rounded-[8px] shrink-0 w-full" newMessage={false} showChevron={false} />
          <div className="bg-white h-[30px] relative rounded-[8px] shrink-0 w-full" data-name="Selection">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center p-[6px] relative size-full">
                <Frame34 />
                <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Chevron">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[8px] left-[calc(50%+0.75px)] top-1/2 w-[4.5px]" data-name="Shape">
                    <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 4.5 8" width="4.5">
                      <path d={svgPaths.p329e3500} fill="#505451" id="Shape" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white h-[30px] relative rounded-[8px] shrink-0 w-full" data-name="Selection">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center p-[6px] relative size-full">
                <Frame35 />
              </div>
            </div>
          </div>
          <div className="bg-white h-[30px] relative rounded-[8px] shrink-0 w-full" data-name="Selection">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center p-[6px] relative size-full">
                <Frame36 />
              </div>
            </div>
          </div>
          <div className="bg-white h-[30px] relative rounded-[8px] shrink-0 w-full" data-name="Selection">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center p-[6px] relative size-full">
                <Frame37 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e7e9e8] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#1b1d1c] text-[14px]">All chats</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#1b1d1c] text-[14px]">Active chats</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#1b1d1c] text-[14px]">Assigned to me</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#1b1d1c] text-[14px]">Unassigned</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start pt-[12px] px-[12px] relative size-full">
          <div className="bg-[#ebf7f0] h-[30px] relative rounded-[8px] shrink-0 w-full" data-name="Selection">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center p-[6px] relative size-full">
                <Frame39 />
              </div>
            </div>
          </div>
          <div className="bg-white h-[30px] relative rounded-[8px] shrink-0 w-full" data-name="Selection">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center p-[6px] relative size-full">
                <Frame40 />
              </div>
            </div>
          </div>
          <div className="bg-white h-[30px] relative rounded-[8px] shrink-0 w-full" data-name="Selection">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center p-[6px] relative size-full">
                <Frame41 />
              </div>
            </div>
          </div>
          <div className="bg-white h-[30px] relative rounded-[8px] shrink-0 w-full" data-name="Selection">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center p-[6px] relative size-full">
                <Frame44 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[8px] left-[calc(50%+0.75px)] top-1/2 w-[4.5px]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 4.5 8" width="4.5">
            <path d={svgPaths.p329e3500} fill="#505451" id="Shape" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#505451] text-[12px]">More</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[855px] items-start relative shrink-0 w-[196px]">
      <Frame42 />
      <Frame38 />
      <Frame43 />
      <div className="bg-white h-[28px] relative rounded-[8px] shrink-0 w-full" data-name="Selection">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[6px] relative size-full">
            <Frame46 />
          </div>
        </div>
      </div>
    </div>
  );
}

function NewMessage() {
  return (
    <div className="bg-white h-[36px] relative shrink-0 w-full" data-name="New Message">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[4px] relative size-full">
          <div className="relative rounded-[99px] shrink-0" data-name="Chips">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[2px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#505451] text-[12px] whitespace-nowrap">
                  <p className="leading-[16px]">All</p>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#848a86] border-solid inset-0 pointer-events-none rounded-[99px]" />
          </div>
          <div className="bg-[#23a455] relative rounded-[99px] shrink-0" data-name="Chips">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[2px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                  <p className="leading-[16px]">Open</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[99px] shrink-0" data-name="Chips">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[2px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#505451] text-[12px] whitespace-nowrap">
                  <p className="leading-[16px]">Unread</p>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#848a86] border-solid inset-0 pointer-events-none rounded-[99px]" />
          </div>
          <div className="relative rounded-[99px] shrink-0" data-name="Chips">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[2px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#505451] text-[12px] whitespace-nowrap">
                  <p className="leading-[16px]">Pending</p>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border border-[#848a86] border-solid inset-0 pointer-events-none rounded-[99px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[297px]">
      <ChatlistHeader className="bg-white relative shrink-0 w-[297px]" />
      <NewMessage />
    </div>
  );
}

function Headset() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="relative size-[16px]" data-name="Headset">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
            <g id="Headset">
              <path d={svgPaths.p4357980} fill="#545454" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChatItemStatusContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Chat Item Status Container">
      <Headset />
      <p className="[word-break:break-word] font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#888] text-[14px] text-right whitespace-nowrap">Melvis</p>
    </div>
  );
}

function ChatItemName() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Chat Item Name">
      <p className="[word-break:break-word] font-['Inter:bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#333] text-[14px] whitespace-nowrap">Addison Smith</p>
      <div className="flex h-[6px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[6px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 6 1" width="6">
                <line id="Line" opacity="0.4" stroke="#1B1D1C" strokeLinecap="round" x1="0.5" x2="5.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ChatItemStatusContainer />
    </div>
  );
}

function ChatItemNameContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Chat Item Name Container">
      <ChatItemName />
    </div>
  );
}

function ChatItemTextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Chat Item Text Container">
      <ChatItemNameContainer />
      <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[14px] text-ellipsis w-full whitespace-nowrap">Got it. I’ve scheduled your consultation</p>
    </div>
  );
}

function ChatItemTimeText() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Chat Item Time Text">
      <div className="bg-[#cdf4cf] relative rounded-[4px] shrink-0" data-name="Label">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2bbe32] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">Open</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#f0edfb] content-stretch flex items-center overflow-clip px-[5px] py-[2px] relative rounded-[5px] shrink-0">
      <p className="[word-break:break-word] font-['Inter:semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8777c3] text-[12px] text-right whitespace-nowrap">CTWA</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[140.5px]">
      <ChatItemTimeText />
      <Frame24 />
    </div>
  );
}

function ChatItemTimeContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Chat Item Time Container">
      <Frame49 />
      <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-right whitespace-nowrap">9:10 PM</p>
    </div>
  );
}

function WhatsApp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="WhatsApp">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="WhatsApp">
          <path clipRule="evenodd" d={svgPaths.p2fd5d080} fill="white" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p33ae7500} fill="white" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.pabcc840} fill="#CFD8DC" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.pa265370} fill="#40C351" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p3ea1cf00} fill="white" fillRule="evenodd" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <WhatsApp />
      <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#353735] text-[12px] whitespace-nowrap">Sales</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Frame">
          <path d="M4.5 7L2 4.5L4.5 2" id="Vector" stroke="#505451" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc63e000} id="Vector_2" stroke="#505451" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full">
      <Frame26 />
      <Frame />
    </div>
  );
}

function ChatItemDetails() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Chat Item Details">
      <ChatItemTextContainer />
      <ChatItemTimeContainer />
      <Frame25 />
    </div>
  );
}

function ChatItemContainer() {
  return (
    <div className="bg-[#ebf7f0] relative shrink-0 w-full" data-name="Chat Item Container">
      <div aria-hidden className="absolute border-[#69e48e] border-l-3 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[8px] items-start p-[12px] relative size-full">
        <div className="relative shrink-0 size-[32px]" data-name="Avatars">
          <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
            <path d={svgPaths.p4f1e480} fill="url(#paint0_linear_0_708)" id="Vector" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_708" x1="16" x2="16" y1="0" y2="32">
                <stop stopColor="#E0FFDE" />
                <stop offset="1" stopColor="#D0DFCF" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-[74.63%_16.11%_0_16.11%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="8.11987" preserveAspectRatio="none" viewBox="0 0 21.691 8.11987" width="21.691">
              <path d={svgPaths.pd235c00} fill="#23A455" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[25.97%_32.83%_39.68%_32.82%]" data-name="Vector">
            <div className="absolute inset-[-9.1%]">
              <svg className="block size-full" fill="none" height="12.9919" preserveAspectRatio="none" viewBox="0 0 12.9919 12.9919" width="12.9919">
                <path d={svgPaths.p3ca3d680} id="Vector" stroke="#23A455" strokeMiterlimit="10" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="absolute bg-white inset-[62.5%_0_0_62.5%] rounded-[8px]" data-name="Whatsapp logo">
            <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
            <div className="absolute inset-[4%]" data-name="Vector">
              <div className="absolute inset-[-9.06%]">
                <svg className="block size-full" fill="none" height="13.04" preserveAspectRatio="none" viewBox="0 0 13.04 13.04" width="13.04">
                  <path d={svgPaths.p164abe00} fill="#2CB742" id="Vector" stroke="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <ChatItemDetails />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[25.71%_10.92%_6.92%_12%]" data-name="Group">
      <div className="absolute inset-[-4.45%_-3.89%_-4.47%_-3.89%]">
        <svg className="block size-full" fill="none" height="11.7414" preserveAspectRatio="none" viewBox="0 0 13.2933 11.7414" width="13.2933">
          <g id="Group">
            <path d={svgPaths.p1985d0d0} id="Vector" stroke="#505451" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.96" />
            <path d={svgPaths.p35b43100} id="Vector_2" stroke="#505451" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.96" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[46%_24.45%_50.5%_26%]" data-name="Group">
      <div className="absolute inset-[-85.61%_-6.05%]">
        <svg className="block size-full" fill="none" height="1.52067" preserveAspectRatio="none" viewBox="0 0 8.888 1.52067" width="8.888">
          <g id="Group">
            <path d={svgPaths.p1c63e640} id="Vector" stroke="#505451" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.96" />
            <path d={svgPaths.p26678c0} id="Vector_2" stroke="#505451" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.96" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ChatItemStatusContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="Chat Item Status Container 2">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chatbot">
        <Group />
        <Group1 />
        <div className="-translate-x-1/2 absolute bottom-[82%] left-[calc(50%+0.16px)] top-[4%] w-[2.24px]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.24" preserveAspectRatio="none" viewBox="0 0 2.24 2.24" width="2.24">
            <path d={svgPaths.p1fc4d400} fill="#505451" id="Vector" />
          </svg>
        </div>
        <div className="-translate-x-1/2 absolute flex h-[2.56px] items-center justify-center left-[calc(50%-0.32px)] top-[1.92px] w-0">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[2.56px]" data-name="Line">
              <div className="absolute inset-[-0.96px_0_0_0]">
                <svg className="block size-full" fill="none" height="0.96" preserveAspectRatio="none" viewBox="0 0 2.56 0.96" width="2.56">
                  <line id="Line" stroke="#505451" strokeWidth="0.96" x2="2.56" y1="0.48" y2="0.48" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#888] text-[14px] text-right whitespace-nowrap">Bot</p>
    </div>
  );
}

function ChatItemName1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative" data-name="Chat Item Name 2">
      <p className="[word-break:break-word] font-['Inter:bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#333] text-[14px] whitespace-nowrap">Marcus Allen</p>
      <div className="flex h-[6px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[6px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 6 1" width="6">
                <line id="Line" opacity="0.4" stroke="#1B1D1C" strokeLinecap="round" x1="0.5" x2="5.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ChatItemStatusContainer1 />
    </div>
  );
}

function ChatItemNameContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Chat Item Name Container 2">
      <ChatItemName1 />
    </div>
  );
}

function ChatItemTextContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Chat Item Text Container 2">
      <ChatItemNameContainer1 />
      <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[14px] text-ellipsis w-full whitespace-nowrap">Can you resend the invoice from last month?</p>
    </div>
  );
}

function ChatItemTimeText1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Chat Item Time Text">
      <div className="bg-[#cdf4cf] relative rounded-[4px] shrink-0" data-name="Label">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2bbe32] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">Open</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatItemTime() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Chat Item Time">
      <ChatItemTimeText1 />
    </div>
  );
}

function ChatItemTimeContainer1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Chat Item Time Container 2">
      <ChatItemTime />
      <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-right whitespace-nowrap">10:11 AM</p>
    </div>
  );
}

function ChatItemDetails1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Chat Item Details 2">
      <ChatItemTextContainer1 />
      <ChatItemTimeContainer1 />
    </div>
  );
}

function ChatItemContainer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Chat Item Container 2">
      <div className="content-stretch flex gap-[8px] items-start p-[12px] relative size-full">
        <Avatars channel="Instagram" className="relative shrink-0 size-[32px]" />
        <ChatItemDetails1 />
      </div>
    </div>
  );
}

function Headset1() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="relative size-[16px]" data-name="Headset">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
            <g id="Headset">
              <path d={svgPaths.p4357980} fill="#545454" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChatItemStatusContainer2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Chat Item Status Container 3">
      <Headset1 />
      <p className="[word-break:break-word] font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#888] text-[14px] text-right whitespace-nowrap">Arun</p>
    </div>
  );
}

function ChatItemName2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Chat Item Name 3">
      <p className="[word-break:break-word] font-['Inter:bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#333] text-[14px] whitespace-nowrap">DDC91225R</p>
      <div className="flex h-[6px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[6px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 6 1" width="6">
                <line id="Line" opacity="0.4" stroke="#1B1D1C" strokeLinecap="round" x1="0.5" x2="5.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ChatItemStatusContainer2 />
    </div>
  );
}

function ChatItemNameContainer2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Chat Item Name Container 3">
      <ChatItemName2 />
    </div>
  );
}

function ChatItemTextContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Chat Item Text Container 3">
      <ChatItemNameContainer2 />
      <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[14px] text-ellipsis w-full whitespace-nowrap">I’m unsure which membership plan fits my needs.</p>
    </div>
  );
}

function ChatItemTimeContainer2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Chat Item Time Container 3">
      <div className="bg-[#d3f5ed] relative rounded-[4px] shrink-0" data-name="Label">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#087d62] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">Broadcast</p>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-right whitespace-nowrap">11:12 PM</p>
    </div>
  );
}

function WhatsApp1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="WhatsApp">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="WhatsApp">
          <path clipRule="evenodd" d={svgPaths.p2fd5d080} fill="white" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p33ae7500} fill="white" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.pabcc840} fill="#CFD8DC" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.pa265370} fill="#40C351" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p3ea1cf00} fill="white" fillRule="evenodd" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <WhatsApp1 />
      <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#353735] text-[12px] whitespace-nowrap">Support</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Frame">
          <path d="M4.5 7L2 4.5L4.5 2" id="Vector" stroke="#505451" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc63e000} id="Vector_2" stroke="#505451" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full">
      <Frame28 />
      <Frame1 />
    </div>
  );
}

function ChatItemDetails2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Chat Item Details 3">
      <ChatItemTextContainer2 />
      <ChatItemTimeContainer2 />
      <Frame27 />
    </div>
  );
}

function ChatItemContainer2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Chat Item Container 3">
      <div className="content-stretch flex gap-[8px] items-start p-[12px] relative size-full">
        <Avatars channelIndicator className="relative shrink-0 size-[32px]" />
        <ChatItemDetails2 />
      </div>
    </div>
  );
}

function Headset2() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="relative size-[16px]" data-name="Headset">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
            <g id="Headset">
              <path d={svgPaths.p4357980} fill="#545454" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChatItemStatusContainer3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Chat Item Status Container 4">
      <Headset2 />
      <p className="[word-break:break-word] font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#888] text-[14px] text-right whitespace-nowrap">Raven</p>
    </div>
  );
}

function ChatItemName3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Chat Item Name 4">
      <p className="[word-break:break-word] font-['Inter:bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#333] text-[14px] whitespace-nowrap">April Boyer</p>
      <div className="flex h-[6px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[6px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 6 1" width="6">
                <line id="Line" opacity="0.4" stroke="#1B1D1C" strokeLinecap="round" x1="0.5" x2="5.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ChatItemStatusContainer3 />
    </div>
  );
}

function ChatItemNameContainer3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Chat Item Name Container 4">
      <ChatItemName3 />
    </div>
  );
}

function ChatItemTextContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Chat Item Text Container 4">
      <ChatItemNameContainer3 />
      <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[14px] text-ellipsis w-full whitespace-nowrap">Thanks for assisting me with the product demo!</p>
    </div>
  );
}

function ChatItemTime1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Chat Item Time 4">
      <div className="bg-[#cdf4cf] relative rounded-[4px] shrink-0" data-name="Label">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2bbe32] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">Open</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatItemTimeContainer3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Chat Item Time Container 4">
      <ChatItemTime1 />
      <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-right whitespace-nowrap">12:13 PM</p>
    </div>
  );
}

function WhatsApp2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="WhatsApp">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="WhatsApp">
          <path clipRule="evenodd" d={svgPaths.p2fd5d080} fill="white" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p33ae7500} fill="white" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.pabcc840} fill="#CFD8DC" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.pa265370} fill="#40C351" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p3ea1cf00} fill="white" fillRule="evenodd" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <WhatsApp2 />
      <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#353735] text-[12px] whitespace-nowrap">Support</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Frame">
          <path d="M4.5 7L2 4.5L4.5 2" id="Vector" stroke="#505451" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc63e000} id="Vector_2" stroke="#505451" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full">
      <Frame30 />
      <Frame2 />
    </div>
  );
}

function ChatItemDetails3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Chat Item Details 4">
      <ChatItemTextContainer3 />
      <ChatItemTimeContainer3 />
      <Frame29 />
    </div>
  );
}

function ChatItemContainer3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Chat Item Container 4">
      <div className="content-stretch flex gap-[8px] items-start p-[12px] relative size-full">
        <Avatars channelIndicator className="relative shrink-0 size-[32px]" />
        <ChatItemDetails3 />
      </div>
    </div>
  );
}

function Headset3() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="relative size-[16px]" data-name="Headset">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
            <g id="Headset">
              <path d={svgPaths.p4357980} fill="#545454" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChatItemStatusContainer4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Chat Item Status Container 5">
      <Headset3 />
      <p className="[word-break:break-word] font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#888] text-[14px] text-right whitespace-nowrap">Raven</p>
    </div>
  );
}

function ChatItemName4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Chat Item Name 5">
      <p className="[word-break:break-word] font-['Inter:bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#333] text-[14px] whitespace-nowrap">Karan Sharma</p>
      <div className="flex h-[6px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[6px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 6 1" width="6">
                <line id="Line" opacity="0.4" stroke="#1B1D1C" strokeLinecap="round" x1="0.5" x2="5.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ChatItemStatusContainer4 />
    </div>
  );
}

function ChatItemNameContainer4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Chat Item Name Container 5">
      <ChatItemName4 />
    </div>
  );
}

function ChatItemTextContainer4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Chat Item Text Container 5">
      <ChatItemNameContainer4 />
      <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[14px] text-ellipsis w-full whitespace-nowrap">I’d like to change my appointment time to Friday.</p>
    </div>
  );
}

function ChatItemTime2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Chat Item Time 4">
      <div className="bg-[#cdf4cf] relative rounded-[4px] shrink-0" data-name="Label">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2bbe32] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">Open</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatItemTimeContainer4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Chat Item Time Container 5">
      <ChatItemTime2 />
      <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-right whitespace-nowrap">9:10 PM</p>
    </div>
  );
}

function ChatItemDetails4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Chat Item Details 5">
      <ChatItemTextContainer4 />
      <ChatItemTimeContainer4 />
    </div>
  );
}

function ChatItemContainer4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Chat Item Container 5">
      <div className="content-stretch flex gap-[8px] items-start p-[12px] relative size-full">
        <Avatars channel="messenger" channelIndicator className="relative shrink-0 size-[32px]" />
        <ChatItemDetails4 />
      </div>
    </div>
  );
}

function Headset4() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="relative size-[16px]" data-name="Headset">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
            <g id="Headset">
              <path d={svgPaths.p4357980} fill="#545454" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChatItemStatusContainer5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Chat Item Status Container 5">
      <Headset4 />
      <p className="[word-break:break-word] font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#888] text-[14px] text-right whitespace-nowrap">Raven</p>
    </div>
  );
}

function ChatItemName5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Chat Item Name 5">
      <p className="[word-break:break-word] font-['Inter:bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#333] text-[14px] whitespace-nowrap">Prateek Singh</p>
      <div className="flex h-[6px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[6px]" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 6 1" width="6">
                <line id="Line" opacity="0.4" stroke="#1B1D1C" strokeLinecap="round" x1="0.5" x2="5.5" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ChatItemStatusContainer5 />
    </div>
  );
}

function ChatItemNameContainer5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Chat Item Name Container 5">
      <ChatItemName5 />
    </div>
  );
}

function ChatItemTextContainer5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Chat Item Text Container 5">
      <ChatItemNameContainer5 />
      <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[14px] text-ellipsis w-full whitespace-nowrap">I’d like to change my appointment time to Friday.</p>
    </div>
  );
}

function ChatItemTimeContainer5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Chat Item Time Container 5">
      <div className="bg-[#d3f4f5] relative rounded-[4px] shrink-0" data-name="Label">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Inter:medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#005c99] text-[12px] whitespace-nowrap">
              <p className="leading-[16px]">Solved</p>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] text-right whitespace-nowrap">9:10 PM</p>
    </div>
  );
}

function ChatItemDetails5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Chat Item Details 5">
      <ChatItemTextContainer5 />
      <ChatItemTimeContainer5 />
    </div>
  );
}

function ChatItemContainer5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Chat Item Container 6">
      <div className="content-stretch flex gap-[8px] items-start p-[12px] relative size-full">
        <Avatars channelIndicator className="relative shrink-0 size-[32px]" />
        <ChatItemDetails5 />
      </div>
    </div>
  );
}

function ChatListContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[297px]" data-name="Chat List Container">
      <ChatItemContainer />
      <ChatItemContainer1 />
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-180 w-full">
          <div className="h-0 relative w-full" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 297 1" width="297">
                <line id="Line" stroke="#F4F1ED" x2="297" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ChatItemContainer2 />
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-180 w-full">
          <div className="h-0 relative w-full" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 297 1" width="297">
                <line id="Line" stroke="#F4F1ED" x2="297" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ChatItemContainer3 />
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-180 w-full">
          <div className="h-0 relative w-full" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 297 1" width="297">
                <line id="Line" stroke="#F4F1ED" x2="297" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ChatItemContainer4 />
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-180 w-full">
          <div className="h-0 relative w-full" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 297 1" width="297">
                <line id="Line" stroke="#F4F1ED" x2="297" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ChatItemContainer5 />
    </div>
  );
}

function SidebarMenuItems() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[855px] items-start py-[8px] relative shrink-0" data-name="Sidebar Menu Items">
      <Frame32 />
      <ChatListContainer />
    </div>
  );
}

function SidebarContainer() {
  return (
    <div className="h-[855px] relative shrink-0 w-[297px]" data-name="Sidebar Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <SidebarMenuItems />
      </div>
      <div aria-hidden className="absolute border-[#e7e9e8] border-r border-solid inset-[0_-1px_0_0] pointer-events-none" />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[17.5px]" data-name="Container">
      <Component className="flex-[1_0_0] min-h-px relative w-full" />
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] relative size-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[33.5px] items-start justify-center relative rounded-[25px] shrink-0" data-name="Background">
      <div className="absolute inset-0 rounded-[25px]" data-name="Border">
        <div aria-hidden className="absolute border border-[#505451] border-solid inset-0 pointer-events-none rounded-[25px]" />
      </div>
      <Container8 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">John Melvis</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container15 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#848a86] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Available</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container16 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container11 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[14px]" data-name="Container">
      <Component className="flex-[1_0_0] min-h-px relative w-full" variant="180" />
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] relative size-full">
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col h-[34px] items-start justify-center relative rounded-[8.75px] shrink-0" data-name="Background">
      <Container18 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-full" data-name="Container">
      <Background1 />
      <Container10 />
      <Background2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[17.5px]" data-name="Container">
      <Component className="flex-[1_0_0] min-h-px relative w-full" variant="181" />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container23 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container22 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px overflow-clip relative w-full" data-name="Container">
      <Container21 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start justify-center relative rounded-[8.75px] shrink-0 size-[31.5px]" data-name="Background">
      <Container20 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[10.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Background3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 size-[17.5px]" data-name="Container">
      <Component className="flex-[1_0_0] min-h-px relative w-full" variant="182" />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#848a86] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">12:39</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container29 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[3.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container26 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#353735] text-[14px]">Open</p>
    </div>
  );
}

function PlaceholderText() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full" data-name="Placeholder text">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[8px] py-[4px] relative size-full">
          <Frame31 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Chevron">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[5.5px] left-1/2 top-[calc(50%+0.25px)] w-[10px]" data-name="Shape">
              <svg className="absolute block inset-0 size-full" fill="none" height="5.5" preserveAspectRatio="none" viewBox="0 0 10 5.5" width="10">
                <path d={svgPaths.pf297500} fill="#505451" id="Shape" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e7e9e8] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function InputFiled() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Input filed">
      <PlaceholderText />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col h-[20.6px] items-start justify-center relative shrink-0 w-[17.5px]" data-name="Container">
      <Component className="flex-[1_0_0] min-h-px relative w-full" variant="184" />
    </div>
  );
}

function Container31() {
  return (
    <div className="flex h-[17.5px] items-center justify-center relative shrink-0 w-[20.6px]">
      <div className="-rotate-90 flex-none">
        <div className="content-stretch flex flex-col items-start relative" data-name="Container">
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-center relative shrink-0 w-[21px]" data-name="Container">
      <Container31 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <CallButton className="relative rounded-[8px] shrink-0" state="default" />
      <Container30 />
      <Panel className="overflow-clip relative shrink-0 size-[20px]" />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container25 />
      <div className="relative shrink-0 w-[79px]" data-name="Dropdown">
        <div className="content-stretch flex flex-col gap-[2px] items-start relative size-full">
          <InputFiled />
        </div>
      </div>
      <Frame47 />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between p-[12px] relative size-full">
          <Container2 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#e7e9e8] border-b border-solid inset-0 pointer-events-none" />
      <Container1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">John Melvis</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">6:51 PM</p>
    </div>
  );
}

function BxBxCheckDouble() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="bx:bx-check-double">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="bx:bx-check-double">
          <path d={svgPaths.p33d26c80} fill="#0E71C3" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-[217px]" data-name="Frame">
      <Frame5 />
      <Frame6 />
      <BxBxCheckDouble />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#dcf0e4] content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-bl-[15px] rounded-br-[15px] rounded-tl-[15px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333] text-[14px] whitespace-nowrap">We need a few more details from you.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-end justify-end relative shrink-0 w-full" data-name="Frame">
      <Frame4 />
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-bl-[15px] rounded-br-[15px] rounded-tr-[15px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333] text-[14px] whitespace-nowrap">Thanks for contacting CFI. We will respond soon</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">7:05 PM</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="Frame">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">John Melvis</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#666] text-[12px] whitespace-nowrap">7:05 PM</p>
    </div>
  );
}

function BxBxCheckDouble1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="bx:bx-check-double">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="bx:bx-check-double">
          <path d={svgPaths.p33d26c80} fill="#0E71C3" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-[217px]" data-name="Frame">
      <Frame13 />
      <Frame14 />
      <BxBxCheckDouble1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#dcf0e4] content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-bl-[15px] rounded-br-[15px] rounded-tl-[15px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333] text-[14px] whitespace-nowrap">How are you today? all good?</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[12px] items-end justify-end relative shrink-0 w-full" data-name="Frame">
      <Frame12 />
      <Frame15 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#505451] text-[12px] whitespace-nowrap">Status changed to Open by Ramesh</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Frame18 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#848a86] text-[10px] whitespace-nowrap">9:54 PM</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 148.5 1" width="148.5">
            <line id="Line" stroke="#E7E9E8" x2="148.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame17 />
      <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 148.5 1" width="148.5">
            <line id="Line" stroke="#E7E9E8" x2="148.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#505451] text-[12px] whitespace-nowrap">Chat is now assigned to Chatbot by Ramesh</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame21 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#848a86] text-[10px] whitespace-nowrap">9:54 PM</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 121 1" width="121">
            <line id="Line" stroke="#E7E9E8" x2="121" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame20 />
      <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 121 1" width="121">
            <line id="Line" stroke="#E7E9E8" x2="121" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Background">
      <div className="overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
          <Frame3 />
          <Frame8 />
          <Frame11 />
          <Frame16 />
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function ChatInputShortcutKey() {
  return (
    <div className="bg-[#f6f7f6] content-stretch flex flex-col h-[20px] items-center justify-center px-[8px] relative rounded-[2px] shrink-0" data-name="Chat Input Shortcut Key">
      <div aria-hidden className="absolute border-[#848a86] border-b border-solid inset-[0_0_-1px_0] pointer-events-none rounded-[2px]" />
      <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#505451] text-[14px] whitespace-nowrap">/</p>
    </div>
  );
}

function ChatInputShortcutContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Chat Input Shortcut Container">
      <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#b7b9b7] text-[14px] whitespace-nowrap">{`press `}</p>
      <ChatInputShortcutKey />
      <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#b7b9b7] text-[14px] whitespace-nowrap">key for quick replies.</p>
    </div>
  );
}

function ChatInputTextContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-start py-[8px] relative shrink-0 w-full" data-name="Chat Input Text Container">
      <p className="[word-break:break-word] font-['Inter:regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#b7b9b7] text-[14px] whitespace-nowrap">{`Type your message here or `}</p>
      <ChatInputShortcutContainer />
    </div>
  );
}

function ChatInput() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Chat Input">
      <ChatInputTextContainer />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[25.71%_10.92%_6.92%_12%]" data-name="Group">
      <div className="absolute inset-[-4.45%_-3.89%_-4.47%_-3.89%]">
        <svg className="block size-full" fill="none" height="14.6768" preserveAspectRatio="none" viewBox="0 0 16.6167 14.6768" width="16.6167">
          <g id="Group">
            <path d={svgPaths.p113c5680} id="Vector" stroke="#353735" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
            <path d={svgPaths.p12889b00} id="Vector_2" stroke="#353735" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[46%_24.45%_50.5%_26%]" data-name="Group">
      <div className="absolute inset-[-85.61%_-6.05%]">
        <svg className="block size-full" fill="none" height="1.90083" preserveAspectRatio="none" viewBox="0 0 11.11 1.90083" width="11.11">
          <g id="Group">
            <path d={svgPaths.p1b5e4af0} id="Vector" stroke="#353735" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.2" />
            <path d={svgPaths.p2e5c6c00} id="Vector_2" stroke="#353735" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ChatInputActions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[236px]" data-name="Chat Input Actions">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Chatbot">
        <Group2 />
        <Group3 />
        <div className="-translate-x-1/2 absolute bottom-[82%] left-[calc(50%+0.2px)] top-[4%] w-[2.8px]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="2.8" preserveAspectRatio="none" viewBox="0 0 2.8 2.8" width="2.8">
            <path d={svgPaths.pede9180} fill="#353735" id="Vector" />
          </svg>
        </div>
        <div className="-translate-x-1/2 absolute flex h-[3.2px] items-center justify-center left-[calc(50%-0.4px)] top-[2.4px] w-0">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[3.2px]" data-name="Line">
              <div className="absolute inset-[-1.2px_0_0_0]">
                <svg className="block size-full" fill="none" height="1.2" preserveAspectRatio="none" viewBox="0 0 3.2 1.2" width="3.2">
                  <line id="Line" stroke="#353735" strokeWidth="1.2" x2="3.2" y1="0.6" y2="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuickReply className="overflow-clip relative shrink-0 size-[20px]" />
      <Icons8ResumeTemplate className="overflow-clip relative shrink-0 size-[20px]" />
      <div className="flex flex-row items-center self-stretch">
        <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
          <div className="flex-none rotate-90 w-[100cqh]">
            <div className="h-0 relative w-full" data-name="Line">
              <div className="absolute inset-[-0.5px_-2.5%]">
                <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 21 1" width="21">
                  <path d="M0.5 0.5H20.5" id="Line" stroke="#CED0CE" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Attach className="overflow-clip relative shrink-0 size-[20px]" />
      <div className="flex flex-row items-center self-stretch">
        <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
          <div className="flex-none rotate-90 w-[100cqh]">
            <div className="h-0 relative w-full" data-name="Line">
              <div className="absolute inset-[-0.5px_-2.5%]">
                <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 21 1" width="21">
                  <path d="M0.5 0.5H20.5" id="Line" stroke="#CED0CE" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Emoji className="overflow-clip relative shrink-0 size-[20px]" />
      <Sticker className="overflow-clip relative shrink-0 size-[20px]" />
    </div>
  );
}

function WhatsappLogoVariantSvgrepoCom() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="whatsapp-logo-variant-svgrepo-com">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Chat Input Send Icon">
          <path d={svgPaths.p3cc4a300} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ChatInputSendText() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Chat Input Send Text">
      <p className="[word-break:break-word] font-['Inter:semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Send</p>
    </div>
  );
}

function ChatInputSendTextContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Chat Input Send Text Container">
      <ChatInputSendText />
    </div>
  );
}

function ChatInputSendContainer() {
  return (
    <div className="bg-[#23a455] content-stretch flex gap-[6px] items-center overflow-clip px-[10px] py-[6px] relative rounded-[5px] shrink-0" data-name="Chat Input Send Container">
      <WhatsappLogoVariantSvgrepoCom />
      <ChatInputSendTextContainer />
    </div>
  );
}

function ChatInputActionsContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Chat Input Actions Container">
      <ChatInputActions />
      <ChatInputSendContainer />
    </div>
  );
}

function ChatInputContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Chat Input Container">
      <ChatInput />
      <ChatInputActionsContainer />
    </div>
  );
}

function ChatNav() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Chat Nav">
      <div aria-hidden className="absolute border-[#e7e9e8] border-r border-solid border-t inset-[-0.5px_-0.5px_0_0] pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative size-full">
        <ChatInputContainer />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e7e9e8] border-l border-r border-solid inset-0 pointer-events-none" />
      <ChatNav />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[855px] items-start relative shrink-0 w-[593px]" data-name="Background">
      <Container />
      <Background4 />
      <Frame22 />
    </div>
  );
}

function ContactDetailsName() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[113px]" data-name="Contact Details Name">
      <p className="[word-break:break-word] font-['Inter:bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#353735] text-[14px] whitespace-nowrap">Addison Smith</p>
    </div>
  );
}

function ContactDetailsIcon() {
  return <div className="content-stretch flex gap-[5px] items-center relative shrink-0 size-[16px]" data-name="Contact Details Icon" />;
}

function ContactDetailsHeaderText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-name="Contact Details Header Text">
      <ContactDetailsName />
      <ContactDetailsIcon />
    </div>
  );
}

function ContactDetailsHeaderTextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Contact Details Header Text Container">
      <ContactDetailsHeaderText />
    </div>
  );
}

function ContactDetailsHeaderContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Contact Details Header Container">
      <div className="relative shrink-0 size-[32px]" data-name="Avatars">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <path d={svgPaths.p4f1e480} fill="url(#paint0_linear_0_708)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_708" x1="16" x2="16" y1="0" y2="32">
              <stop stopColor="#E0FFDE" />
              <stop offset="1" stopColor="#D0DFCF" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-[74.63%_16.11%_0_16.11%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="8.11987" preserveAspectRatio="none" viewBox="0 0 21.691 8.11987" width="21.691">
            <path d={svgPaths.pd235c00} fill="#23A455" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[25.97%_32.83%_39.68%_32.82%]" data-name="Vector">
          <div className="absolute inset-[-9.1%]">
            <svg className="block size-full" fill="none" height="12.9919" preserveAspectRatio="none" viewBox="0 0 12.9919 12.9919" width="12.9919">
              <path d={svgPaths.p3ca3d680} id="Vector" stroke="#23A455" strokeMiterlimit="10" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <ContactDetailsHeaderTextContainer />
    </div>
  );
}

function ContactDetailsHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contact Details Header">
      <div className="content-stretch flex flex-col items-start px-[8px] py-px relative size-full">
        <ContactDetailsHeaderContainer />
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Contact">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Contact">
          <path d={svgPaths.p25b19600} fill="#848A86" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ContactDetailsInfoText() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Contact Details Info Text">
      <p className="[word-break:break-word] font-['Inter:semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#353735] text-[12px] tracking-[1px] uppercase w-full">Contact info</p>
    </div>
  );
}

function ContactDetailsInfoTextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="Contact Details Info Text Container">
      <Contact />
      <ContactDetailsInfoText />
    </div>
  );
}

function ContactDetailsInfoHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Contact Details Info Header">
      <ContactDetailsInfoTextContainer />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[16px]" data-name="Contact Details Info Dropdown">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
              <div className="absolute inset-[-25%_-12.5%]">
                <svg className="block size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 10 6" width="10">
                  <path d="M1 1L5 5L9 1" id="Vector" stroke="#505451" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactDetailsInfoSectionText() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-start relative shrink-0 w-[120px]" data-name="Contact Details Info Section Text">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:regular',sans-serif] leading-[20px] min-w-px not-italic overflow-hidden relative text-[#666] text-[14px] text-ellipsis">BSUID</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-w-px relative">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#1b1d1c] text-[14px]">US.13491208655302741918</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Copy">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-1/2 top-1/2 w-[10px]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 10 12" width="10">
            <path d={svgPaths.p1225dd30} fill="#505451" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ContactDetailsInfoSectionText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start justify-center min-w-px relative" data-name="Contact Details Info Section Text 3">
      <Frame50 />
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Info">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[10px] top-1/2" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
            <path d={svgPaths.p9775f80} fill="#848A86" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Parameter() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Parameter">
      <ContactDetailsInfoSectionText />
      <ContactDetailsInfoSectionText2 />
    </div>
  );
}

function ContactDetailsInfoSectionTextContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contact Details Info Section Text Container">
      <Parameter />
    </div>
  );
}

function ContactDetailsInfoSectionContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contact Details Info Section Container">
      <ContactDetailsInfoSectionTextContainer />
    </div>
  );
}

function ContactDetailsInfoSectionText1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[120px]" data-name="Contact Details Info Section Text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:regular',sans-serif] leading-[20px] min-w-px not-italic overflow-hidden relative text-[#666] text-[14px] text-ellipsis">Phone Number</p>
    </div>
  );
}

function ContactDetailsInfoSectionText3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Contact Details Info Section Text 3">
      <p className="[word-break:break-word] font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1b1d1c] text-[14px] whitespace-nowrap">+1876543210</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Copy">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[12px] left-1/2 top-1/2 w-[10px]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 10 12" width="10">
            <path d={svgPaths.p1225dd30} fill="#505451" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Parameter1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Parameter">
      <ContactDetailsInfoSectionText1 />
      <ContactDetailsInfoSectionText3 />
    </div>
  );
}

function ContactDetailsInfoSectionTextContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contact Details Info Section Text Container">
      <Parameter1 />
    </div>
  );
}

function ContactDetailsInfoSectionContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contact Details Info Section Container">
      <ContactDetailsInfoSectionTextContainer1 />
    </div>
  );
}

function ContactDetailsInfoSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contact Details Info Section">
      <ContactDetailsInfoSectionContainer1 />
    </div>
  );
}

function ContactDetailsInfoSectionText4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[120px]" data-name="Contact Details Info Section Text 6">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:regular',sans-serif] leading-[20px] min-w-px not-italic overflow-hidden relative text-[#666] text-[14px] text-ellipsis">Display name</p>
    </div>
  );
}

function ContactDetailsInfoSectionText5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Contact Details Info Section Text 8">
      <p className="[word-break:break-word] font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1b1d1c] text-[14px] whitespace-nowrap">Marie Allen</p>
    </div>
  );
}

function Parameter2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Parameter">
      <ContactDetailsInfoSectionText4 />
      <ContactDetailsInfoSectionText5 />
    </div>
  );
}

function ContactDetailsInfoSectionTextContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contact Details Info Section Text Container 2">
      <Parameter2 />
    </div>
  );
}

function ContactDetailsInfoSectionContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contact Details Info Section Container 2">
      <ContactDetailsInfoSectionTextContainer2 />
    </div>
  );
}

function ContactDetailsInfoSection1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contact Details Info Section 2">
      <ContactDetailsInfoSectionContainer2 />
    </div>
  );
}

function ContactDetailsInfoSectionText6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[120px]" data-name="Contact Details Info Section Text 10">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:regular',sans-serif] leading-[20px] min-w-px not-italic overflow-hidden relative text-[#666] text-[14px] text-ellipsis">WhatsApp Username</p>
    </div>
  );
}

function ContactDetailsInfoSectionText7() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-start justify-center relative shrink-0" data-name="Contact Details Info Section Text 12">
        <p className="[word-break:break-word] font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1b1d1c] text-[14px] whitespace-nowrap">wa_username</p>
      </div>
    </div>
  );
}

function Parameter3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Parameter">
      <ContactDetailsInfoSectionText6 />
      <ContactDetailsInfoSectionText7 />
    </div>
  );
}

function ContactDetailsInfoSectionText8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[120px]" data-name="Contact Details Info Section Text 14">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:regular',sans-serif] leading-[20px] min-w-px not-italic overflow-hidden relative text-[#666] text-[14px] text-ellipsis">Source</p>
    </div>
  );
}

function ContactDetailsInfoSectionText9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Contact Details Info Section Text 16">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#1b1d1c] text-[14px]">customer_initiated_chat_ig</p>
    </div>
  );
}

function Parameter4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Parameter">
      <ContactDetailsInfoSectionText8 />
      <ContactDetailsInfoSectionText9 />
    </div>
  );
}

function ContactDetailsInfoSectionTextContainer3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contact Details Info Section Text Container 4">
      <Parameter4 />
    </div>
  );
}

function ContactDetailsInfoSectionContainer3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contact Details Info Section Container 4">
      <ContactDetailsInfoSectionTextContainer3 />
    </div>
  );
}

function ContactDetailsInfoSection2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contact Details Info Section 4">
      <ContactDetailsInfoSectionContainer3 />
    </div>
  );
}

function ContactDetailsInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Contact Details Info">
      <ContactDetailsInfoHeader />
      <ContactDetailsInfoSectionContainer />
      <ContactDetailsInfoSection />
      <ContactDetailsInfoSection1 />
      <Parameter3 />
      <ContactDetailsInfoSection2 />
    </div>
  );
}

function ContactDetailsInfoContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contact Details Info Container">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <ContactDetailsInfo />
      </div>
    </div>
  );
}

function AddressBook() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Address Book">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Address Book">
          <path d={svgPaths.p1a037180} fill="#848A86" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ContactDetailsAttributesText() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Contact Details Attributes Text">
      <p className="[word-break:break-word] font-['Inter:semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#353735] text-[12px] tracking-[1px] uppercase w-full">Contact Attributes</p>
    </div>
  );
}

function ContactDetailsAttributesTextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="Contact Details Attributes Text Container">
      <AddressBook />
      <ContactDetailsAttributesText />
    </div>
  );
}

function ContactDetailsAttributesActions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Contact Details Attributes Actions">
      <div className="relative rounded-[8px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="relative shrink-0 size-[16px]" data-name="edit-03">
              <div className="absolute inset-[18.54%_17.5%]" data-name="Icon">
                <div className="absolute inset-[-4.97%_-4.81%]">
                  <svg className="block size-full" fill="none" height="11.0688" preserveAspectRatio="none" viewBox="0 0 11.4 11.0688" width="11.4">
                    <path d={svgPaths.p1f3e3a00} id="Icon" stroke="#505451" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="overflow-clip relative size-[16px]" data-name="Contact Details Attributes Dropdown">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
              <div className="absolute inset-[-25%_-12.5%]">
                <svg className="block size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 10 6" width="10">
                  <path d="M1 1L5 5L9 1" id="Vector" stroke="#505451" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactDetailsAttributesHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Contact Details Attributes Header">
      <ContactDetailsAttributesTextContainer />
      <ContactDetailsAttributesActions />
    </div>
  );
}

function ContactDetailsAttributesItemText() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[120px]" data-name="Contact Details Attributes Item Text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:regular',sans-serif] leading-[20px] min-w-px not-italic overflow-hidden relative text-[#666] text-[14px] text-ellipsis">tracking_url</p>
    </div>
  );
}

function ContactDetailsAttributesItemTextContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Contact Details Attributes Item Text Container">
      <ContactDetailsAttributesItemText />
    </div>
  );
}

function ContactDetailsAttributesItemText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Contact Details Attributes Item Text 3">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:medium',sans-serif] leading-[20px] min-w-px not-italic relative text-[#1b1d1c] text-[14px]">www.thisisit.com/tac...</p>
    </div>
  );
}

function Parameter5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Parameter">
      <ContactDetailsAttributesItemTextContainer />
      <ContactDetailsAttributesItemText1 />
    </div>
  );
}

function ContactDetailsAttributesItem() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contact Details Attributes Item">
      <Parameter5 />
    </div>
  );
}

function ContactDetailsAttributesItemText4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[120px]" data-name="Contact Details Attributes Item Text 7">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:regular',sans-serif] leading-[20px] min-w-px not-italic overflow-hidden relative text-[#505451] text-[14px] text-ellipsis">discount code</p>
    </div>
  );
}

function ContactDetailsAttributesItemText3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Contact Details Attributes Item Text 6">
      <ContactDetailsAttributesItemText4 />
    </div>
  );
}

function ContactDetailsAttributesItemText6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Contact Details Attributes Item Text 10">
      <p className="[word-break:break-word] font-['Inter:medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1b1d1c] text-[14px] whitespace-nowrap">HOLIDAY</p>
    </div>
  );
}

function ContactDetailsAttributesItemText5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Contact Details Attributes Item Text 9">
      <ContactDetailsAttributesItemText6 />
    </div>
  );
}

function Parameter6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Parameter">
      <ContactDetailsAttributesItemText3 />
      <ContactDetailsAttributesItemText5 />
    </div>
  );
}

function ContactDetailsAttributesItemText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contact Details Attributes Item Text 5">
      <Parameter6 />
    </div>
  );
}

function ContactDetailsAttributesList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Contact Details Attributes List">
      <ContactDetailsAttributesItem />
      <ContactDetailsAttributesItemText2 />
    </div>
  );
}

function ContactDetailsAttributes() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Contact Details Attributes">
      <ContactDetailsAttributesHeader />
      <ContactDetailsAttributesList />
    </div>
  );
}

function ContactDetailsAttributesContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contact Details Attributes Container">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <ContactDetailsAttributes />
      </div>
    </div>
  );
}

function PriceTag() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Price Tag">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Price Tag">
          <path d={svgPaths.p23ea5a00} fill="#848A86" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ContactDetailsTagsText() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Contact Details Tags Text">
      <p className="[word-break:break-word] font-['Inter:semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#353735] text-[12px] tracking-[1px] uppercase w-full">Tags</p>
    </div>
  );
}

function ContactDetailsTagsTextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="Contact Details Tags Text Container">
      <PriceTag />
      <ContactDetailsTagsText />
    </div>
  );
}

function ContactDetailsTagsHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Contact Details Tags Header">
      <ContactDetailsTagsTextContainer />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Contact Details Tags Dropdown">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-25%_-12.5%]">
            <svg className="block size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 10 6" width="10">
              <path d="M1 1L5 5L9 1" id="Vector" stroke="#505451" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactDetailsTags() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Contact Details Tags">
      <ContactDetailsTagsHeader />
    </div>
  );
}

function ContactDetailsTagsContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contact Details Tags Container">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <ContactDetailsTags />
      </div>
    </div>
  );
}

function Task() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Task">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Task">
          <path d={svgPaths.p29de3cc0} fill="#848A86" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ContactDetailsNotesText() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Contact Details Notes Text">
      <p className="[word-break:break-word] font-['Inter:semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#353735] text-[12px] tracking-[1px] uppercase w-full">Notes</p>
    </div>
  );
}

function ContactDetailsNotesTextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="Contact Details Notes Text Container">
      <Task />
      <ContactDetailsNotesText />
    </div>
  );
}

function ContactDetailsNotesHeader() {
  return (
    <div className="content-center flex flex-wrap gap-y-[16px] items-center justify-between relative shrink-0 w-full" data-name="Contact Details Notes Header">
      <ContactDetailsNotesTextContainer />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Contact Details Notes Dropdown">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-25%_-12.5%]">
            <svg className="block size-full" fill="none" height="6" preserveAspectRatio="none" viewBox="0 0 10 6" width="10">
              <path d="M1 1L5 5L9 1" id="Vector" stroke="#505451" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactDetailsNotes() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Contact Details Notes">
      <ContactDetailsNotesHeader />
    </div>
  );
}

function ContactDetailsNotesContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Contact Details Notes Container">
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <ContactDetailsNotes />
      </div>
    </div>
  );
}

function ContactDetailsContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] h-[855px] items-start py-[12px] relative shrink-0 w-[294px]" data-name="Contact Details Container">
      <div aria-hidden className="absolute border-[#e7e9e8] border-l border-solid inset-[0_0_0_-1px] pointer-events-none" />
      <ContactDetailsHeader />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 294 1" width="294">
            <line id="Line" opacity="0.1" stroke="#9CA19D" x2="294" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ContactDetailsInfoContainer />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 294 1" width="294">
            <line id="Line" opacity="0.1" stroke="#9CA19D" x2="294" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ContactDetailsAttributesContainer />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 294 1" width="294">
            <line id="Line" opacity="0.1" stroke="#9CA19D" x2="294" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ContactDetailsTagsContainer />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 294 1" width="294">
            <line id="Line" opacity="0.1" stroke="#9CA19D" x2="294" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ContactDetailsNotesContainer />
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute h-[855px] left-[44px] rounded-[8px] top-[43px] w-[1383px]">
      <div className="content-stretch flex gap-px items-start overflow-clip relative rounded-[inherit] size-full">
        <Frame45 />
        <SidebarContainer />
        <Background />
        <ContactDetailsContainer />
      </div>
      <div aria-hidden className="absolute border border-[#e7e9e8] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(27,29,28,0.05)]" />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#23a455] text-[14px] whitespace-nowrap">Quick start</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Icon">
      <Notification className="relative rounded-[99px] shrink-0 size-[32px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Icon">
      <Announcekit className="relative rounded-[99px] shrink-0 size-[32px]" />
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Icon">
      <User className="relative rounded-[99px] shrink-0" />
    </div>
  );
}

function RightSideNav() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center relative shrink-0" data-name="Right Side Nav">
      <Text />
      <div className="bg-[#e7e9e8] h-[16px] relative shrink-0 w-px" data-name="Separator" />
      <div className="relative rounded-[99px] shrink-0" data-name="Button">
        <div aria-hidden className="absolute border border-[#23a455] border-solid inset-0 pointer-events-none rounded-[99px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Inter:semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#23a455] text-[12px] text-center whitespace-nowrap">Book a Demo</p>
          </div>
        </div>
      </div>
      <Icon />
      <div className="bg-[#e7e9e8] h-[16px] relative shrink-0 w-px" data-name="Separator" />
      <Icon1 />
      <div className="bg-[#e7e9e8] h-[16px] relative shrink-0 w-px" data-name="Separator" />
      <Icon2 />
    </div>
  );
}

function GlobalHeader() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center justify-between left-0 top-0 w-[1427px]" data-name="Global Header">
      <BrandLogo className="min-w-[64px] relative shrink-0" />
      <RightSideNav />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.31px)] overflow-clip size-[20px] top-[calc(50%+0.17px)]" data-name="Megaphone">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[13.699px] left-1/2 top-[calc(50%+0.15px)] w-[16px]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" height="13.6992" preserveAspectRatio="none" viewBox="0 0 16 13.6992" width="16">
            <path d={svgPaths.pdf4d400} fill="#505451" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextAndIcon() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text and icon">
      <Icon3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[20px] top-1/2" data-name="Mail Inbox">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
            <path d={svgPaths.p1dc07700} fill="#23A455" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextAndIcon1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text and icon">
      <Icon4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.31px)] overflow-clip size-[20px] top-[calc(50%+0.17px)]" data-name="People Team">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
            <path d={svgPaths.p33f64040} fill="#505451" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextAndIcon2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text and icon">
      <Icon5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.31px)] overflow-clip size-[20px] top-[calc(50%+0.17px)]" data-name="Organization Horizontal">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15.001px] left-1/2 top-1/2 w-[16.001px]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" height="15.0013" preserveAspectRatio="none" viewBox="0 0 16.0013 15.0013" width="16.0013">
            <path d={svgPaths.p18179c0} fill="#505451" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextAndIcon3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text and icon">
      <Icon6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.31px)] overflow-clip size-[20px] top-[calc(50%+0.17px)]" data-name="Cart">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14.003px] top-1/2" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.0034" preserveAspectRatio="none" viewBox="0 0 14.0034 14.0034" width="14.0034">
            <path d={svgPaths.p32606400} fill="#505451" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextAndIcon4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text and icon">
      <Icon7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.31px)] overflow-clip size-[20px] top-[calc(50%+0.17px)]" data-name="Cursor Click">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16.171px] left-[calc(50%-0.94px)] top-[calc(50%+0.09px)] w-[14.121px]" data-name="shape">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.1713" preserveAspectRatio="none" viewBox="0 0 14.121 16.1713" width="14.121">
            <path d={svgPaths.pf330500} fill="#505451" id="shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextAndIcon5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text and icon">
      <Icon8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.31px)] overflow-clip size-[20px] top-[calc(50%+0.17px)]" data-name="Data Pie">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
            <path d={svgPaths.p1ec78700} fill="#505451" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextAndIcon6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text and icon">
      <Icon9 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.31px)] overflow-clip size-[20px] top-[calc(50%+0.17px)]" data-name="Plug Connected">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
            <path d={svgPaths.p21872700} fill="#505451" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextAndIcon7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text and icon">
      <Icon10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.31px)] size-[20px] top-[calc(50%+0.17px)]" data-name="Settings Cog Multiple">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[14.471px]" data-name="Shape">
          <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 14.4715 16" width="14.4715">
            <path d={svgPaths.p1c160600} fill="#505451" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextAndIcon8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Text and icon">
      <Icon11 />
    </div>
  );
}

function LeftTopMenu() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Left top menu">
      <div className="relative shrink-0 w-full" data-name="Nav item">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative size-full">
            <TextAndIcon />
          </div>
        </div>
      </div>
      <div className="bg-[#ebf7f0] relative shrink-0 w-full" data-name="Nav item">
        <div aria-hidden className="absolute border-[#23a455] border-l-4 border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative size-full">
            <TextAndIcon1 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Nav item">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative size-full">
            <TextAndIcon2 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Nav item">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative size-full">
            <TextAndIcon3 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Nav item">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative size-full">
            <TextAndIcon4 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Nav item">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative size-full">
            <TextAndIcon5 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Nav item">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative size-full">
            <TextAndIcon6 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Nav item">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative size-full">
            <TextAndIcon7 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Nav item">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center p-[12px] relative size-full">
            <TextAndIcon8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftBottomMenu() {
  return <div className="content-stretch flex flex-col h-[44px] items-start relative shrink-0 w-full" data-name="Left bottom menu" />;
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex flex-col h-[860px] items-start justify-center left-0 top-[40px]" data-name="Frame">
      <div className="flex-[1_0_0] min-h-px relative w-[44px]" data-name="Left Nav">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-between pt-[4px] relative size-full">
            <LeftTopMenu />
            <LeftBottomMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TiBsuidNumber() {
  return (
    <div className="bg-[#f6f7f6] relative size-full" data-name="TI > BSUID + Number">
      <DropdownListItem />
      <Frame48 />
      <GlobalHeader />
      <Frame23 />
    </div>
  );
}