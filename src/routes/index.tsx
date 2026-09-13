import { createFileRoute } from "@tanstack/react-router";
import { Bell, ChevronLeft, Gift, Grid2X2, Smartphone, X } from "lucide-react";
import { type SVGProps, useState } from "react";

import { Button } from "@/components/ui/button";
import offerAsset from "@/assets-government-offer.asset.json";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "محفظتي | خدماتك المالية" },
      { name: "description", content: "حوّل الأموال وادفع فواتيرك من مكان واحد" },
      { property: "og:title", content: "محفظتي | خدماتك المالية" },
      { property: "og:description", content: "حوّل الأموال وادفع فواتيرك من مكان واحد" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type IconProps = SVGProps<SVGSVGElement>;

const iconDefaults = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function TransferIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M6 16h31m0 0-7-7m7 7-7 7M42 32H11m0 0 7-7m-7 7 7 7" />
    </svg>
  );
}

function DepositIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M24 7v34M7 24h34" />
    </svg>
  );
}

function AtmIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <rect x="7" y="8" width="34" height="22" rx="2" />
      <path d="M12 14h3m18 0h3M19 36v7m0 0-4-4m4 4 4-4M31 43v-7m0 0-4 4m4-4 4 4" />
      <circle cx="24" cy="19" r="4" />
    </svg>
  );
}

function PhoneIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M15 6 8 10c-2 15 10 29 26 31l7-7-10-7-5 5c-6-3-10-7-12-13l6-4-5-9Z" />
    </svg>
  );
}

function EyeIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M4 24s8-12 20-12 20 12 20 12-8 12-20 12S4 24 4 24Z" />
      <circle cx="24" cy="24" r="6" />
    </svg>
  );
}

function ScanIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M8 18V9h9M31 9h9v9M40 30v9h-9M17 39H8v-9" />
      <rect x="17" y="17" width="5" height="5" rx="1" />
      <rect x="27" y="17" width="5" height="5" rx="1" />
      <rect x="17" y="27" width="5" height="5" rx="1" />
      <path d="M28 28h4v4h-4" />
    </svg>
  );
}

function GovernmentIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <circle cx="24" cy="24" r="21" fill="var(--panel)" />
      <circle cx="24" cy="24" r="18" fill="var(--service-badge)" />
      <path d="m24 9 13 6-13 5-13-5 13-6Z" fill="var(--panel)" />
      <path d="M15 21h18v11H15z" fill="var(--panel)" />
      <path d="M12 34h24v4H12z" fill="var(--panel)" />
      <path d="M19 21v11m10-11v11" stroke="var(--service-badge)" strokeWidth="2" />
    </svg>
  );
}

function ElectricCardIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M19 9v10m10-10v10M15 19h18v8a9 9 0 0 1-9 9 9 9 0 0 1-9-9v-8Z" />
      <path d="M24 36v7M19 25h10" />
    </svg>
  );
}

function FlameIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M26 5c3 10-5 11-2 18 1-5 5-6 6-11 8 7 11 15 7 23-3 6-8 9-14 9C13 44 7 38 8 28c1-8 6-13 11-18 0 7 2 10 7 12" />
    </svg>
  );
}

function ServicesIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <rect x="6" y="6" width="16" height="16" rx="2" />
      <rect x="26" y="6" width="16" height="16" rx="2" />
      <rect x="6" y="26" width="16" height="16" rx="2" />
      <rect x="26" y="26" width="16" height="16" rx="2" />
      <path d="M14 10v8m-4-4h8M30 14h8M10 34h8m-4-4v8M31 31l6 6m0-6-6 6" />
    </svg>
  );
}

const shortcuts = [
  {
    label: (
      <>
        تحويل
        <br />
        الأموال
      </>
    ),
    icon: TransferIcon,
  },
  {
    label: (
      <>
        إيداع
        <br />
        الأموال
      </>
    ),
    icon: DepositIcon,
  },
  {
    label: (
      <>
        عمليات
        <br />
        ATM
      </>
    ),
    icon: AtmIcon,
  },
  {
    label: (
      <>
        خدمات
        <br />
        الاتصالات
      </>
    ),
    icon: PhoneIcon,
  },
];

const services = [
  { label: "النيابة العامة", icon: GovernmentIcon },
  { label: "كارت الكهرباء", icon: ElectricCardIcon, tag: "سهل" },
  { label: "كارت الغاز", icon: FlameIcon, tag: "NEW" },
  { label: "كهرباء", icon: ElectricCardIcon },
  { label: "غاز", icon: FlameIcon },
];

function Index() {
  const [toastVisible, setToastVisible] = useState(true);
  const [balanceVisible, setBalanceVisible] = useState(false);

  return (
    <main
      dir="rtl"
      className="mx-auto min-h-screen max-w-[430px] overflow-hidden bg-background pb-[76px] text-foreground shadow-2xl"
    >
      <section className="wallet-backdrop relative h-[374px] px-[22px] pt-[18px] text-primary-foreground">
        <div className="flex items-center justify-between">
          <div className="flex h-[40px] items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 text-[17px] font-bold">
            <ChevronLeft size={27} strokeWidth={3} />
            <span>فودافون كاش</span>
          </div>
          <div className="flex h-[40px] items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 p-1">
            <Button
              variant="ghost"
              aria-label="الإشعارات"
              className="grid size-8 place-items-center rounded-full bg-primary-foreground/10"
            >
              <Bell size={18} />
            </Button>
            <Button
              variant="ghost"
              aria-label="الهدايا"
              className="grid size-8 place-items-center rounded-full bg-primary-foreground/10"
            >
              <Gift size={18} />
            </Button>
          </div>
        </div>

        <div className="mt-[18px] flex items-center justify-between">
          <p className="text-[18px]">
            أهلاً، <strong className="font-extrabold">هيبه</strong>
          </p>
          <div className="flex items-center gap-1.5 rounded-full bg-primary-foreground/20 px-3 py-1 text-[12px]">
            <span>
              المحفظة: <strong>مفعل</strong>
            </span>
            <span className="size-2.5 rounded-full bg-green-500 ring-2 ring-primary-foreground" />
          </div>
        </div>

        <div className="mt-[31px] overflow-hidden rounded-[12px] border border-primary-foreground/30 backdrop-blur-[2px]">
          <div className="flex h-[68px] items-center justify-between px-6">
            <span className="text-[20px] font-bold">
              {balanceVisible ? "٢,٤٥٠٫٠٠ ج.م" : "••••••••"}
            </span>
            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                aria-label="إظهار الرصيد"
                onClick={() => setBalanceVisible((value) => !value)}
              >
                <EyeIcon className="size-8" />
              </Button>
              <span className="h-7 w-px bg-primary-foreground/30" />
              <Button variant="ghost" aria-label="مسح رمز">
                <ScanIcon className="size-8" />
              </Button>
            </div>
          </div>
          <Button
            variant="ghost"
            className="h-[37px] w-full rounded-none border-t border-primary-foreground/25 text-[14px]"
          >
            عرض مصروفاتك
          </Button>
        </div>

        <div className="mt-[23px] grid grid-cols-4 gap-3" dir="rtl">
          {shortcuts.map(({ label, icon: Icon }, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Button
                variant="round"
                size="shortcut"
                aria-label={typeof label === "string" ? label : "خدمة"}
              >
                <Icon className="size-9" />
              </Button>
              <span className="mt-2 text-[13px] leading-[1.1]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="relative -mt-[11px] rounded-t-[22px] bg-background px-[11px] pt-[11px]">
        <div className="rounded-[12px] bg-panel px-3 py-3">
          <div className="mb-3 flex items-center justify-between">
            <h1 className="text-[18px] font-extrabold">خدمات كاش</h1>
            <Button variant="ghost" className="h-auto rounded-full bg-muted px-3 py-1 text-[13px]">
              عرض الكل
            </Button>
          </div>
          <div className="hide-scrollbar flex gap-[18px] overflow-x-auto pb-1">
            {services.map(({ label, icon: Icon, tag }) => (
              <div key={label} className="w-[68px] shrink-0 text-center">
                <div className="service-tile relative mx-auto grid size-[52px] place-items-center rounded-[12px] text-primary-foreground">
                  <Icon className="size-9" />
                  {tag && (
                    <span className="absolute -top-1 right-1 rounded-full bg-secondary px-1 text-[7px] font-bold text-secondary-foreground">
                      {tag}
                    </span>
                  )}
                </div>
                <p className="mt-2 whitespace-nowrap text-[10px]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[18px] rounded-[12px] bg-panel p-3">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-[17px] font-extrabold">العروض</h2>
            <div className="flex gap-1" dir="ltr">
              <span className="size-2 rounded-full bg-alert" />
              <span className="size-1.5 rounded-full bg-muted" />
            </div>
          </div>
          <img
            src={offerAsset.url}
            alt="خدمات النيابة العامة في مكان واحد"
            className="h-[139px] w-full rounded-[10px] object-cover"
          />
        </div>
      </section>

      {toastVisible && (
        <div className="fixed bottom-[66px] left-1/2 z-30 flex h-[59px] w-[320px] max-w-[calc(100%-36px)] -translate-x-1/2 items-center rounded-full bg-panel px-3 shadow-xl">
          <Button
            variant="ghost"
            aria-label="إغلاق"
            onClick={() => setToastVisible(false)}
            className="grid size-10 shrink-0 place-items-center rounded-full bg-muted"
          >
            <X size={23} />
          </Button>
          <strong className="flex-1 text-center text-[14px]">لا يوجد فواتير مستحقة</strong>
        </div>
      )}

      <nav
        className="fixed bottom-0 left-1/2 z-20 flex h-[66px] w-full max-w-[430px] -translate-x-1/2 items-center justify-around bg-panel px-3 shadow-[0_-4px_18px_color-mix(in_oklab,var(--foreground)_8%,transparent)]"
        aria-label="التنقل الرئيسي"
      >
        <Button variant="nav" size="nav" className="bg-muted text-alert">
          <Smartphone size={24} />
          <span className="mt-1 text-[11px] font-bold">المحفظة</span>
        </Button>
        <Button variant="nav" size="nav">
          <TransferIcon className="size-7" />
          <span className="mt-1 text-[11px]">تحويل أموال</span>
        </Button>
        <Button variant="nav" size="nav">
          <ServicesIcon className="size-7" />
          <span className="mt-1 text-[11px]">الخدمات</span>
        </Button>
      </nav>
    </main>
  );
}
