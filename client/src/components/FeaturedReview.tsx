/*
 * FEATURED REVIEW — Sweeptakes.com
 * Detailed review template preview for Stake.us — i18n enabled
 * Design: Superhero Command Center
 */
import { Star, CheckCircle, XCircle, Award, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const reviewData = {
  name: "Stake.us",
  rating: 9.8,
  initials: "S",
  color: "#1a9e5c",
  taglineKey: "casino.stake.tagline",
};

function MiniStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={10}
          className={i < Math.floor(rating / 2) ? "star-filled fill-current text-[#D4AF37]" : "star-empty text-gray-600"}
        />
      ))}
    </div>
  );
}

export default function FeaturedReview() {
  const { t } = useLanguage();

  const pros = [
    t("review.pro1"),
    t("review.pro2"),
    t("review.pro3"),
    t("review.pro4"),
    t("review.pro5"),
    t("review.pro6"),
  ];

  const cons = [
    t("review.con1"),
    t("review.con2"),
    t("review.con3"),
  ];

  const scores = [
    { labelKey: "review.scoreGame", score: 9.9 },
    { labelKey: "review.scoreBonus", score: 9.7 },
    { labelKey: "review.scoreRedemption", score: 9.8 },
    { labelKey: "review.scoreMobile", score: 9.6 },
    { labelKey: "review.scoreSupport", score: 9.5 },
    { labelKey: "review.scoreLegal", score: 10 },
  ];

  const bonuses = [
    { labelKey: "review.bonusWelcome", valueKey: "review.bonusWelcomeVal" },
    { labelKey: "review.bonusDaily", valueKey: "review.bonusDailyVal" },
    { labelKey: "review.bonusReferral", valueKey: "review.bonusReferralVal" },
  ];

  return (
    <section
      id="reviews"
      className="py-20 relative"
      style={{ background: "linear-gradient(180deg, #060e1f 0%, #0a1628 100%)" }}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="badge-gold mb-4 inline-block">{t("review.badge")}</span>
          <h2
            className="text-4xl md:text-5xl font-black uppercase text-white leading-none"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            <span className="text-[#D4AF37]">Stake.us</span> {t("review.title").replace("Stake.us", "").trim()}
          </h2>
          <p className="text-gray-400 mt-2 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {t("review.updated")}
          </p>
        </div>

        {/* Review Card */}
        <div className="card-neon p-6 md:p-8">
          {/* Top: Logo + Overall Rating */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 pb-8 border-b border-white/10">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-black text-3xl flex-shrink-0"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                background: `linear-gradient(135deg, ${reviewData.color}dd, ${reviewData.color}66)`,
                border: `2px solid ${reviewData.color}44`,
                boxShadow: `0 0 30px ${reviewData.color}33`,
              }}
            >
              {reviewData.initials}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap mb-1">
                <h3
                  className="text-white font-black text-2xl"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {reviewData.name}
                </h3>
                <span className="badge-gold">{t("review.editorsChoice")}</span>
              </div>
              <p className="text-gray-400 text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {t(reviewData.taglineKey)}
              </p>
              <MiniStars rating={reviewData.rating} />
            </div>
            <div className="text-center flex-shrink-0">
              <div
                className="text-5xl font-black text-[#D4AF37] leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", textShadow: "0 0 20px rgba(212,175,55,0.5)" }}
              >
                {reviewData.rating}
              </div>
              <div className="text-gray-400 text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {t("review.overallScore")}
              </div>
            </div>
          </div>

          {/* Score breakdown */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {scores.map((s) => (
              <div
                key={s.labelKey}
                className="p-3 rounded-lg"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-gray-400 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {t(s.labelKey)}
                  </span>
                  <span className="text-[#D4AF37] font-black text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {s.score}
                  </span>
                </div>
                <div className="w-full h-1 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${s.score * 10}%`,
                      background: s.score >= 9.5 ? "linear-gradient(90deg, #D4AF37, #F0CC5A)" : "linear-gradient(90deg, #1BAAFF, #00CFFF)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Pros & Cons */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4
                className="text-green-400 font-bold text-sm uppercase tracking-wide mb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {t("review.prosLabel")}
              </h4>
              <ul className="space-y-2">
                {pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <CheckCircle size={13} className="text-green-400 mt-0.5 flex-shrink-0" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4
                className="text-red-400 font-bold text-sm uppercase tracking-wide mb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {t("review.consLabel")}
              </h4>
              <ul className="space-y-2">
                {cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <XCircle size={13} className="text-red-400 mt-0.5 flex-shrink-0" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bonus breakdown */}
          <div
            className="rounded-xl p-5 mb-6"
            style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.2)" }}
          >
            <h4
              className="text-[#D4AF37] font-bold text-sm uppercase tracking-wide mb-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {t("review.bonusBreakdown")}
            </h4>
            <div className="grid sm:grid-cols-3 gap-3">
              {bonuses.map((b) => (
                <div key={b.labelKey}>
                  <div className="text-gray-500 text-xs mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {t(b.labelKey)}
                  </div>
                  <div className="text-white text-sm font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {t(b.valueKey)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => toast.info("Full Stake.us review coming soon!")}
              className="btn-gold flex-1 flex items-center justify-center gap-2 py-3"
            >
              <Award size={16} />
              {t("review.ctaRead")}
            </button>
            <button
              onClick={() => toast.info("Visit Stake.us — opens in new tab")}
              className="btn-electric flex-1 flex items-center justify-center gap-2 py-3"
            >
              <ExternalLink size={16} />
              {t("review.ctaVisit")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
