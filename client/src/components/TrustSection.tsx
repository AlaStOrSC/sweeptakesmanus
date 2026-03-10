/*
 * TRUST SECTION — Sweeptakes.com
 * EEAT signals: editorial team, trust badges, transparency — i18n enabled
 * Design: Superhero Command Center
 */
import { Award, Users, BookOpen, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const team = [
  {
    name: "James Hartley",
    roleKey: "trust.jh.role",
    bioKey: "trust.jh.bio",
    initials: "JH",
    color: "#1BAAFF",
  },
  {
    name: "Sarah Chen",
    roleKey: "trust.sc.role",
    bioKey: "trust.sc.bio",
    initials: "SC",
    color: "#D4AF37",
  },
  {
    name: "Marcus Rivera",
    roleKey: "trust.mr.role",
    bioKey: "trust.mr.bio",
    initials: "MR",
    color: "#1BAAFF",
  },
];

export default function TrustSection() {
  const { t } = useLanguage();

  const trustStats = [
    { icon: <Award size={22} />, value: "11+", labelKey: "trust.stat1label" },
    { icon: <Clock size={22} />, value: "5+ yrs", labelKey: "trust.stat2label" },
    { icon: <Users size={22} />, value: "50K+", labelKey: "trust.stat3label" },
    { icon: <BookOpen size={22} />, value: "100%", labelKey: "trust.stat4label" },
  ];

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a1628 0%, #060e1f 100%)",
      }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #D4AF37 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {trustStats.map((stat) => (
            <div
              key={stat.labelKey}
              className="text-center p-5 rounded-xl"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(212,175,55,0.1)" }}
            >
              <div className="flex justify-center mb-2 text-[#D4AF37]">{stat.icon}</div>
              <div
                className="text-3xl font-black text-[#D4AF37] leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", textShadow: "0 0 15px rgba(212,175,55,0.3)" }}
              >
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {t(stat.labelKey)}
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Team */}
        <div className="text-center mb-10">
          <span className="badge-gold mb-4 inline-block">{t("trust.teamBadge")}</span>
          <h2
            className="text-4xl md:text-5xl font-black uppercase text-white leading-none"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {t("trust.teamTitle1")}{" "}
            <span className="text-[#D4AF37]">{t("trust.teamTitle2")}</span>{" "}
            {t("trust.teamTitle3")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {team.map((member) => (
            <div key={member.name} className="card-neon p-6 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-xl mx-auto mb-4"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  background: `linear-gradient(135deg, ${member.color}40, ${member.color}20)`,
                  border: `2px solid ${member.color}40`,
                  color: member.color,
                }}
              >
                {member.initials}
              </div>
              <h3
                className="text-white font-bold text-lg mb-0.5"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase" }}
              >
                {member.name}
              </h3>
              <p className="text-[#D4AF37] text-xs font-semibold mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {t(member.roleKey)}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {t(member.bioKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Mr. Sweeps + Final CTA */}
        <div
          className="rounded-2xl p-8 md:p-12 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0d1e35 0%, #0a1628 100%)",
            border: "1px solid rgba(212,175,55,0.25)",
          }}
        >
          {/* Background glow */}
          <div
            className="absolute right-0 top-0 w-64 h-64 opacity-20 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663285532608/hHqVzGIjHicoXvlX.png"
              alt="Mr. Sweeps"
              className="w-40 h-auto animate-float-slow flex-shrink-0"
            />
            <div className="text-center lg:text-left">
              <h3
                className="text-3xl md:text-4xl font-black uppercase text-white mb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {t("trust.ctaTitle1")}{" "}
                <span className="text-[#D4AF37]">{t("trust.ctaTitle2")}</span>
              </h3>
              <p className="text-gray-300 text-base mb-6 max-w-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {t("trust.ctaDesc")}
              </p>
              <button
                onClick={() => document.querySelector("#top-casinos")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-gold text-base px-10 py-4"
              >
                {t("trust.ctaBtn")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
