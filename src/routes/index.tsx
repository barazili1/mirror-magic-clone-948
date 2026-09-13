import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeftRight,
  Bell,
  ChevronLeft,
  Eye,
  Gift,
  Grid2X2,
  Landmark,
  Phone,
  PlugZap,
  Plus,
  ScanLine,
  Smartphone,
  WalletCards,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

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

const shortcuts = [
  {
    label: (
      <>
        تحويل
        <br />
        الأموال
      </>
    ),
    icon: ArrowLeftRight,
  },
  {
    label: (
      <>
        إيداع
        <br />
        الأموال
      </>
    ),
    icon: Plus,
  },
  {
    label: (
      <>
        عمليات
        <br />
        ATM
      </>
    ),
    icon: WalletCards,
  },
  {
    label: (
      <>
        خدمات
        <br />
        الاتصالات
      </>
    ),
    icon: Phone,
  },
];

const services = [
  { label: "الجهات الحكومية", icon: Landmark },
  { label: "كارت الكهرباء", icon: PlugZap, tag: "سهل" },
  { label: "كارت الغاز", icon: Zap, tag: "جديد" },
  { label: "كهرباء", icon: PlugZap },
  { label: "غاز", icon: Zap },
];

function Index() {
  const [toastVisible, setToastVisible] = useState(true);
  const [balanceVisible, setBalanceVisible] = useState(false);

  return (
    <main
      dir="rtl"
      className="mx-auto min-h-screen max-w-[430px] overflow-hidden bg-background pb-[76px] text-foreground shadow-2xl"
    >
      <section className="wallet-backdrop relative h-[357px] px-[22px] pt-[16px] text-primary-foreground">
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

        <div className="mt-[14px] flex items-center justify-between">
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

        <div className="mt-[22px] overflow-hidden rounded-[12px] border border-primary-foreground/30">
          <div className="flex h-[64px] items-center justify-between px-6">
            <span className="text-[20px] font-bold">
              {balanceVisible ? "٢,٤٥٠٫٠٠ ج.م" : "••••••••"}
            </span>
            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                aria-label="إظهار الرصيد"
                onClick={() => setBalanceVisible((value) => !value)}
              >
                <Eye size={26} />
              </Button>
              <span className="h-7 w-px bg-primary-foreground/30" />
              <Button variant="ghost" aria-label="مسح رمز">
                <ScanLine size={24} />
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

        <div className="mt-[21px] grid grid-cols-4 gap-3" dir="rtl">
          {shortcuts.map(({ label, icon: Icon }) => (
            <div key={Icon.displayName} className="flex flex-col items-center text-center">
              <Button
                variant="round"
                size="shortcut"
                aria-label={typeof label === "string" ? label : "خدمة"}
              >
                <Icon size={27} strokeWidth={1.8} />
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
                  <Icon size={29} strokeWidth={1.8} />
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
          <div className="relative h-[139px] overflow-hidden rounded-[10px] bg-alert px-5 py-4 text-primary-foreground">
            <div className="absolute -bottom-10 -left-5 size-40 rotate-12 rounded-[28px] border-[14px] border-primary-foreground/15" />
            <Landmark className="absolute bottom-4 left-6 opacity-90" size={60} strokeWidth={1} />
            <div className="mr-auto w-[72%] text-right">
              <p className="text-[13px] font-bold">كل خدماتك الحكومية دلوقتي</p>
              <p className="mt-2 text-[29px] font-extrabold leading-none">في مكان واحد</p>
              <p className="mt-3 text-[11px]">ادفع بسهولة وأمان من محفظتك</p>
            </div>
          </div>
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
          <ArrowLeftRight size={23} />
          <span className="mt-1 text-[11px]">تحويل أموال</span>
        </Button>
        <Button variant="nav" size="nav">
          <Grid2X2 size={23} />
          <span className="mt-1 text-[11px]">الخدمات</span>
        </Button>
      </nav>
    </main>
  );
}
