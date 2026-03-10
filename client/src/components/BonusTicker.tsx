/*
 * BONUS TICKER — Sweeptakes.com
 * Scrolling ticker bar showing today's best bonuses
 * Design: Superhero Command Center — gold/electric ticker — i18n enabled
 */
import { useLanguage } from "@/contexts/LanguageContext";

export default function BonusTicker() {
  const { t } = useLanguage();

  const tickerItems = [
    t("ticker.item1"),
    t("ticker.item2"),
    t("ticker.item3"),
    t("ticker.item4"),
    t("ticker.item5"),
    t("ticker.item6"),
    t("ticker.item7"),
    t("ticker.item8"),
  ];

  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div
      className="relative overflow-hidden py-2.5"
      style={{
        background: "linear-gradient(90deg, #0B1F3B 0%, #0d2244 50%, #0B1F3B 100%)",
        borderTop: "1px solid rgba(212,175,55,0.3)",
        borderBottom: "1px solid rgba(212,175,55,0.3)",
      }}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #0B1F3B, transparent)" }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(-90deg, #0B1F3B, transparent)" }}
      />

      {/* Label */}
      <div
        className="absolute left-0 top-0 bottom-0 z-20 flex items-center px-4"
        style={{
          background: "linear-gradient(135deg, #D4AF37, #F0CC5A)",
          minWidth: "fit-content",
        }}
      >
        <span
          className="text-[#060e1f] font-black text-xs uppercase tracking-widest whitespace-nowrap"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {t("ticker.label")}
        </span>
      </div>

      {/* Scrolling content */}
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{
          paddingLeft: "160px",
          animation: "ticker 40s linear infinite",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-gray-300 text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {item}
            <span className="text-[#D4AF37] mx-4">•</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
