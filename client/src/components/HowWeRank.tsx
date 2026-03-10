/*
 * HOW WE RANK — Sweeptakes.com
 * Editorial methodology section — i18n enabled
 * Design: Superhero Command Center
 */
import { Shield, Search, Star, Zap, Users, RefreshCw, Gift } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HowWeRank() {
  const { t } = useLanguage();

  const criteria = [
    {
      icon: <Shield size={24} />,
      titleKey: "rank.c1title",
      score: 25,
      descKey: "rank.c1desc",
    },
    {
      icon: <Gift size={24} />,
      titleKey: "rank.c2title",
      score: 20,
      descKey: "rank.c2desc",
    },
    {
      icon: <Search size={24} />,
      titleKey: "rank.c3title",
      score: 20,
      descKey: "rank.c3desc",
    },
    {
      icon: <Zap size={24} />,
      titleKey: "rank.c4title",
      score: 15,
      descKey: "rank.c4desc",
    },
    {
      icon: <Users size={24} />,
      titleKey: "rank.c5title",
      score: 10,
      descKey: "rank.c5desc",
    },
    {
      icon: <RefreshCw size={24} />,
      titleKey: "rank.c6title",
      score: 10,
      descKey: "rank.c6desc",
    },
  ];

  return (
    <section
      className="py-20 relative"
      style={{ background: "#060e1f" }}
    >
      {/* Diagonal top */}
      <div
        className="absolute top-0 left-0 right-0 h-20"
        style={{
          background: "linear-gradient(180deg, #0B1F3B 0%, #060e1f 100%)",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 60%)",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge-electric mb-4 inline-block">{t("rank.badge")}</span>
          <h2
            className="text-4xl md:text-5xl font-black uppercase text-white leading-none"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {t("rank.title1")}{" "}
            <span className="text-[#D4AF37]">{t("rank.title2")}</span>{" "}
            {t("rank.title3")}
          </h2>
          <p
            className="text-gray-400 mt-4 max-w-2xl mx-auto text-base"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {t("rank.desc")}
          </p>
        </div>

        {/* Criteria Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {criteria.map((c) => (
            <div key={c.titleKey} className="card-neon p-5">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-[#D4AF37]"
                  style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}
                >
                  {c.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3
                      className="text-white font-bold text-base"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase" }}
                    >
                      {t(c.titleKey)}
                    </h3>
                    <span className="text-[#D4AF37] font-black text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      {c.score}%
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-1.5 rounded-full mb-2" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${c.score * 4}%`,
                        background: "linear-gradient(90deg, #D4AF37, #F0CC5A)",
                        boxShadow: "0 0 8px rgba(212,175,55,0.5)",
                      }}
                    />
                  </div>
                  <p className="text-gray-400 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {t(c.descKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust statement */}
        <div
          className="rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(212,175,55,0.08), rgba(27,170,255,0.05))",
            border: "1px solid rgba(212,175,55,0.2)",
          }}
        >
          <div className="flex justify-center mb-4">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663285532608/NKofsRjjlppkibhr.png"
              alt="Sweeptakes.com"
              className="h-12 w-auto"
            />
          </div>
          <h3
            className="text-2xl font-black uppercase text-white mb-2"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {t("rank.promiseTitle")}
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {t("rank.promiseDesc")}
          </p>
        </div>
      </div>
    </section>
  );
}
