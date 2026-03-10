/*
 * TOP CASINOS SECTION — Sweeptakes.com
 * Card grid with casino reviews, ratings, pros, and CTAs — i18n enabled
 * Mr. Sweeps introduces the section with a speech bubble
 * Design: Superhero Command Center — dark cards with neon borders
 */
import { Star, CheckCircle, ArrowRight, Trophy, Gift } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const casinosData = [
  {
    rank: 1,
    name: "Stake.us",
    taglineKey: "casino.stake.tagline",
    rating: 9.8,
    bonus: "250K Gold Coins + 1 Sweep Coin",
    badgeKey: "casino.stake.badge",
    prosKeys: ["casino.stake.pro1", "casino.stake.pro2", "casino.stake.pro3"],
    badgeColor: "gold",
    color: "#1a9e5c",
    initials: "S",
  },
  {
    rank: 2,
    name: "RealPrize",
    taglineKey: "casino.realprice.tagline",
    rating: 9.5,
    bonus: "10,000 Gold Coins Free",
    badgeKey: "casino.realprice.badge",
    prosKeys: ["casino.realprice.pro1", "casino.realprice.pro2", "casino.realprice.pro3"],
    badgeColor: "electric",
    color: "#e63946",
    initials: "RP",
  },
  {
    rank: 3,
    name: "Crown Coins",
    taglineKey: "casino.crown.tagline",
    rating: 9.3,
    bonus: "1,000 Crown Coins + 10 SC",
    badgeKey: "casino.crown.badge",
    prosKeys: ["casino.crown.pro1", "casino.crown.pro2", "casino.crown.pro3"],
    badgeColor: "gold",
    color: "#8338ec",
    initials: "CC",
  },
  {
    rank: 4,
    name: "McLuck",
    taglineKey: "casino.mcluck.tagline",
    rating: 9.1,
    bonus: "7,500 Gold Coins + 2.5 SC",
    badgeKey: "casino.mcluck.badge",
    prosKeys: ["casino.mcluck.pro1", "casino.mcluck.pro2", "casino.mcluck.pro3"],
    badgeColor: "electric",
    color: "#ff6b35",
    initials: "ML",
  },
  {
    rank: 5,
    name: "WOW Vegas",
    taglineKey: "casino.wow.tagline",
    rating: 9.0,
    bonus: "1.75 SC + 35 WOW Coins",
    badgeKey: "casino.wow.badge",
    prosKeys: ["casino.wow.pro1", "casino.wow.pro2", "casino.wow.pro3"],
    badgeColor: "gold",
    color: "#f72585",
    initials: "WV",
  },
  {
    rank: 6,
    name: "LoneStar",
    taglineKey: "casino.lonestar.tagline",
    rating: 8.8,
    bonus: "5,000 Gold Coins Free",
    badgeKey: "casino.lonestar.badge",
    prosKeys: ["casino.lonestar.pro1", "casino.lonestar.pro2", "casino.lonestar.pro3"],
    badgeColor: "electric",
    color: "#3a86ff",
    initials: "LS",
  },
  {
    rank: 7,
    name: "Fortuna",
    taglineKey: "casino.fortuna.tagline",
    rating: 8.7,
    bonus: "500 Fortuna Coins + 5 SC",
    badgeKey: "casino.fortuna.badge",
    prosKeys: ["casino.fortuna.pro1", "casino.fortuna.pro2", "casino.fortuna.pro3"],
    badgeColor: "gold",
    color: "#06d6a0",
    initials: "FT",
  },
  {
    rank: 8,
    name: "Hello Millions",
    taglineKey: "casino.hello.tagline",
    rating: 8.6,
    bonus: "2M Hello Coins + 2 SC",
    badgeKey: "casino.hello.badge",
    prosKeys: ["casino.hello.pro1", "casino.hello.pro2", "casino.hello.pro3"],
    badgeColor: "electric",
    color: "#ffbe0b",
    initials: "HM",
  },
  {
    rank: 9,
    name: "Spree",
    taglineKey: "casino.spree.tagline",
    rating: 8.5,
    bonus: "1,000 Spree Coins Free",
    badgeKey: "casino.spree.badge",
    prosKeys: ["casino.spree.pro1", "casino.spree.pro2", "casino.spree.pro3"],
    badgeColor: "gold",
    color: "#4cc9f0",
    initials: "SP",
  },
  {
    rank: 10,
    name: "Funrize",
    taglineKey: "casino.funrize.tagline",
    rating: 8.3,
    bonus: "200 FC + Daily Free Coins",
    badgeKey: "casino.funrize.badge",
    prosKeys: ["casino.funrize.pro1", "casino.funrize.pro2", "casino.funrize.pro3"],
    badgeColor: "electric",
    color: "#fb5607",
    initials: "FZ",
  },
  {
    rank: 11,
    name: "Mega Bonanza",
    taglineKey: "casino.mega.tagline",
    rating: 8.1,
    bonus: "10,000 Mega Coins + 5 SC",
    badgeKey: "casino.mega.badge",
    prosKeys: ["casino.mega.pro1", "casino.mega.pro2", "casino.mega.pro3"],
    badgeColor: "gold",
    color: "#7209b7",
    initials: "MB",
  },
];

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating / 2);
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < full ? "star-filled fill-current text-[#D4AF37]" : "star-empty text-gray-600"}
        />
      ))}
    </div>
  );
}

export default function TopCasinos() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? casinosData : casinosData.slice(0, 6);
  const { t } = useLanguage();

  return (
    <section id="top-casinos" className="py-20 relative" style={{ background: "#060e1f" }}>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #1BAAFF 0%, transparent 50%), radial-gradient(circle at 80% 20%, #D4AF37 0%, transparent 40%)",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header with Mr. Sweeps */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-14">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <Trophy size={20} className="text-[#D4AF37]" />
              <span className="badge-gold">{t("casinos.badge")}</span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-none"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {t("casinos.title1")}{" "}
              <span className="text-[#D4AF37]" style={{ textShadow: "0 0 20px rgba(212,175,55,0.4)" }}>
                {t("casinos.title2")}
              </span>
            </h2>
            <p className="text-gray-400 mt-3 text-base max-w-xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {t("casinos.desc")}
            </p>
          </div>

          {/* Mr. Sweeps mini with speech bubble */}
          <div className="flex items-end gap-4 lg:max-w-xs">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663285532608/vtxuKbhunzhuoRRw.png"
              alt="Mr. Sweeps"
              className="w-24 h-auto flex-shrink-0 animate-float"
            />
            <div className="speech-bubble text-sm flex-1">
              <p className="text-gray-200" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {t("casinos.mrSweeps")}
              </p>
            </div>
          </div>
        </div>

        {/* Casino Cards Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {displayed.map((casino, idx) => (
            <div
              key={casino.name}
              className="card-neon p-5 relative"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Rank badge */}
              <div
                className="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  background: casino.rank <= 3 ? "linear-gradient(135deg, #D4AF37, #F0CC5A)" : "rgba(27,170,255,0.2)",
                  color: casino.rank <= 3 ? "#060e1f" : "#1BAAFF",
                  border: casino.rank <= 3 ? "none" : "1px solid rgba(27,170,255,0.5)",
                  boxShadow: casino.rank <= 3 ? "0 0 15px rgba(212,175,55,0.5)" : "none",
                }}
              >
                #{casino.rank}
              </div>

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    background: `linear-gradient(135deg, ${casino.color}dd, ${casino.color}88)`,
                    border: `1px solid ${casino.color}44`,
                  }}
                >
                  {casino.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3
                      className="text-white font-black text-lg leading-none"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {casino.name}
                    </h3>
                    <span className={casino.badgeColor === "gold" ? "badge-gold" : "badge-electric"}>
                      {t(casino.badgeKey)}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs mt-0.5 truncate" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {t(casino.taglineKey)}
                  </p>
                </div>
                {/* Rating */}
                <div className="text-right flex-shrink-0">
                  <div
                    className="text-[#D4AF37] font-black text-xl leading-none"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {casino.rating}
                  </div>
                  <StarRating rating={casino.rating} />
                </div>
              </div>

              {/* Bonus */}
              <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-lg p-2.5 mb-3 flex items-center gap-2">
                <Gift size={14} className="text-[#D4AF37] flex-shrink-0" />
                <span className="text-[#D4AF37] text-sm font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {casino.bonus}
                </span>
              </div>

              {/* Pros */}
              <ul className="space-y-1.5 mb-4">
                {casino.prosKeys.map((proKey) => (
                  <li key={proKey} className="flex items-center gap-2 text-sm text-gray-300" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <CheckCircle size={12} className="text-[#1BAAFF] flex-shrink-0" />
                    {t(proKey)}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => toast.info(`${casino.name} review coming soon!`)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wide transition-all duration-300 hover:gap-3"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  background: "linear-gradient(135deg, rgba(27,170,255,0.15), rgba(27,170,255,0.05))",
                  border: "1px solid rgba(27,170,255,0.3)",
                  color: "#1BAAFF",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, rgba(27,170,255,0.25), rgba(27,170,255,0.1))";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(27,170,255,0.6)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(27,170,255,0.2)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, rgba(27,170,255,0.15), rgba(27,170,255,0.05))";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(27,170,255,0.3)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {t("casinos.readReview")}
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Show more */}
        {!showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="btn-gold px-10 py-4 text-base"
            >
              {t("casinos.viewAll")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
