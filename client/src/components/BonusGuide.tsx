/*
 * BONUS GUIDE — Sweeptakes.com
 * Bonuses & Free Coins guide section — i18n enabled
 * Mr. Sweeps thumbs up with bonus tips
 * Design: Superhero Command Center
 */
import { Gift, Zap, Mail, Star, TrendingUp, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BonusGuide() {
  const { t } = useLanguage();

  const bonusTypes = [
    {
      icon: <Gift size={20} />,
      titleKey: "bonus.b1title",
      descKey: "bonus.b1desc",
      valueKey: "bonus.b1value",
      color: "#D4AF37",
    },
    {
      icon: <Zap size={20} />,
      titleKey: "bonus.b2title",
      descKey: "bonus.b2desc",
      valueKey: "bonus.b2value",
      color: "#1BAAFF",
    },
    {
      icon: <Mail size={20} />,
      titleKey: "bonus.b3title",
      descKey: "bonus.b3desc",
      valueKey: "bonus.b3value",
      color: "#D4AF37",
    },
    {
      icon: <Star size={20} />,
      titleKey: "bonus.b4title",
      descKey: "bonus.b4desc",
      valueKey: "bonus.b4value",
      color: "#1BAAFF",
    },
    {
      icon: <TrendingUp size={20} />,
      titleKey: "bonus.b5title",
      descKey: "bonus.b5desc",
      valueKey: "bonus.b5value",
      color: "#D4AF37",
    },
    {
      icon: <Users size={20} />,
      titleKey: "bonus.b6title",
      descKey: "bonus.b6desc",
      valueKey: "bonus.b6value",
      color: "#1BAAFF",
    },
  ];

  return (
    <section
      id="bonuses"
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #060e1f 0%, #0a1628 100%)",
      }}
    >
      {/* Glow accents */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #1BAAFF 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start gap-10 mb-14">
          <div className="flex-1">
            <span className="badge-gold mb-4 inline-block">{t("bonus.badge")}</span>
            <h2
              className="text-4xl md:text-5xl font-black uppercase text-white leading-none"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {t("bonus.title1")}{" "}
              <span className="text-[#D4AF37]">{t("bonus.title2")}</span>
            </h2>
            <p className="text-gray-400 mt-3 text-base max-w-xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {t("bonus.desc")}
            </p>
          </div>

          {/* Mr. Sweeps with speech bubble */}
          <div className="flex items-end gap-4 lg:max-w-sm">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663285532608/vtxuKbhunzhuoRRw.png"
              alt="Mr. Sweeps bonus tips"
              className="w-28 h-auto animate-float-slow"
            />
            <div className="speech-bubble text-sm flex-1">
              <p className="text-gray-200" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {t("bonus.mrSweepsTip")}
              </p>
            </div>
          </div>
        </div>

        {/* Bonus Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {bonusTypes.map((bonus) => (
            <div key={bonus.titleKey} className="card-neon p-5">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{
                  background: `${bonus.color}18`,
                  border: `1px solid ${bonus.color}30`,
                  color: bonus.color,
                }}
              >
                {bonus.icon}
              </div>
              <h3
                className="text-white font-bold text-base mb-1"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase" }}
              >
                {t(bonus.titleKey)}
              </h3>
              <p className="text-gray-400 text-sm mb-3 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {t(bonus.descKey)}
              </p>
              <div
                className="text-xs font-bold px-3 py-1 rounded-full inline-block"
                style={{
                  background: `${bonus.color}15`,
                  border: `1px solid ${bonus.color}30`,
                  color: bonus.color,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                {t(bonus.valueKey)}
              </div>
            </div>
          ))}
        </div>

        {/* Pro tip box */}
        <div
          className="rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6"
          style={{
            background: "linear-gradient(135deg, rgba(212,175,55,0.1), rgba(212,175,55,0.05))",
            border: "1px solid rgba(212,175,55,0.3)",
          }}
        >
          <div className="text-4xl">💡</div>
          <div className="flex-1">
            <h3
              className="text-[#D4AF37] font-black text-xl uppercase mb-1"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {t("bonus.proTipLabel")}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {t("bonus.proTip")}
            </p>
          </div>
          <button
            onClick={() => document.querySelector("#top-casinos")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-gold flex-shrink-0 px-6 py-3"
          >
            {t("bonus.viewTop")}
          </button>
        </div>
      </div>
    </section>
  );
}
