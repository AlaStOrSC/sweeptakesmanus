/*
 * REVIEW PAGE TEMPLATE — Sweeptakes.com
 * Full casino review template — i18n enabled
 * Design: Superhero Command Center
 */
import { Star, CheckCircle, XCircle, Award, ExternalLink, Gift, Shield, Zap, Users, Clock, CreditCard } from "lucide-react";
import { toast } from "sonner";
import PageLayout from "./PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export interface CasinoReviewData {
  name: string;
  initials: string;
  color: string;
  rating: number;
  taglineEn: string;
  taglineEs: string;
  badgeEn: string;
  badgeEs: string;
  bonus: string;
  welcomeBonusEn: string;
  welcomeBonusEs: string;
  descriptionEn: string;
  descriptionEs: string;
  prosEn: string[];
  prosEs: string[];
  consEn: string[];
  consEs: string[];
  scores: { labelEn: string; labelEs: string; score: number }[];
  infoEn: { founded: string; owner: string; games: string; support: string; minRedeem: string; payouts: string };
  infoEs: { founded: string; owner: string; games: string; support: string; minRedeem: string; payouts: string };
  reviewEn: string;
  reviewEs: string;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className={i < Math.floor(rating / 2) ? "fill-current text-[#D4AF37]" : "text-gray-600"} />
      ))}
    </div>
  );
}

export default function ReviewPage({ casino }: { casino: CasinoReviewData }) {
  const { lang, t } = useLanguage();
  const isEs = lang === "es";

  const tagline = isEs ? casino.taglineEs : casino.taglineEn;
  const badge = isEs ? casino.badgeEs : casino.badgeEn;
  const description = isEs ? casino.descriptionEs : casino.descriptionEn;
  const pros = isEs ? casino.prosEs : casino.prosEn;
  const cons = isEs ? casino.consEs : casino.consEn;
  const info = isEs ? casino.infoEs : casino.infoEn;
  const review = isEs ? casino.reviewEs : casino.reviewEn;
  const welcomeBonus = isEs ? casino.welcomeBonusEs : casino.welcomeBonusEn;

  const infoRows = [
    { icon: <Clock size={14} />, labelEn: "Founded", labelEs: "Fundado", value: info.founded },
    { icon: <Shield size={14} />, labelEn: "Owner", labelEs: "Propietario", value: info.owner },
    { icon: <Zap size={14} />, labelEn: "Games", labelEs: "Juegos", value: info.games },
    { icon: <Users size={14} />, labelEn: "Support", labelEs: "Soporte", value: info.support },
    { icon: <CreditCard size={14} />, labelEn: "Min. Redeem", labelEs: "Canje Mínimo", value: info.minRedeem },
    { icon: <Clock size={14} />, labelEn: "Payouts", labelEs: "Pagos", value: info.payouts },
  ];

  return (
    <PageLayout
      title={isEs ? `Reseña de ${casino.name}` : `${casino.name} Review`}
      subtitle={tagline}
      badge={badge}
      breadcrumbs={[
        { label: isEs ? "Reseñas" : "Reviews", href: "/" },
        { label: casino.name },
      ]}
      accentColor="gold"
    >
      {/* Top Card */}
      <div className="card-neon p-6 md:p-8 mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-6 mb-6 pb-6 border-b border-white/10">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-black text-2xl flex-shrink-0"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              background: `linear-gradient(135deg, ${casino.color}cc, ${casino.color}66)`,
              border: `2px solid ${casino.color}44`,
              boxShadow: `0 0 30px ${casino.color}33`,
            }}
          >
            {casino.initials}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap mb-1">
              <h2 className="text-white font-black text-2xl" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {casino.name}
              </h2>
              <span className="badge-gold">{badge}</span>
            </div>
            <p className="text-gray-400 text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{tagline}</p>
            <Stars rating={casino.rating} />
          </div>
          <div className="text-center flex-shrink-0">
            <div className="text-5xl font-black text-[#D4AF37] leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif", textShadow: "0 0 20px rgba(212,175,55,0.5)" }}>
              {casino.rating}
            </div>
            <div className="text-gray-400 text-xs mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {isEs ? "Puntuación General" : "Overall Score"}
            </div>
          </div>
        </div>

        {/* Welcome Bonus */}
        <div className="rounded-xl p-4 mb-6 flex items-center gap-3" style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)" }}>
          <Gift size={20} className="text-[#D4AF37] flex-shrink-0" />
          <div>
            <div className="text-[#D4AF37] text-xs font-bold uppercase tracking-wide mb-0.5" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              {isEs ? "Bono de Bienvenida" : "Welcome Bonus"}
            </div>
            <div className="text-white font-semibold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{welcomeBonus}</div>
          </div>
        </div>

        {/* Score Breakdown */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          {casino.scores.map((s) => (
            <div key={s.labelEn} className="p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-gray-400 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {isEs ? s.labelEs : s.labelEn}
                </span>
                <span className="text-[#D4AF37] font-black text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.score}</span>
              </div>
              <div className="w-full h-1 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                <div className="h-full rounded-full" style={{ width: `${s.score * 10}%`, background: "linear-gradient(90deg, #D4AF37, #F0CC5A)" }} />
              </div>
            </div>
          ))}
        </div>

        {/* Pros & Cons */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="text-green-400 font-bold text-sm uppercase tracking-wide mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              {isEs ? "✓ Ventajas" : "✓ Pros"}
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
            <h4 className="text-red-400 font-bold text-sm uppercase tracking-wide mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              {isEs ? "✗ Desventajas" : "✗ Cons"}
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

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button onClick={() => toast.info(`Visit ${casino.name} — opens in new tab`)} className="btn-gold flex-1 flex items-center justify-center gap-2 py-3">
            <ExternalLink size={16} />
            {isEs ? `Visitar ${casino.name}` : `Visit ${casino.name}`}
          </button>
          <button onClick={() => toast.info("Feature coming soon!")} className="btn-electric flex-1 flex items-center justify-center gap-2 py-3">
            <Award size={16} />
            {isEs ? "Reclamar Bono Gratis" : "Claim Free Bonus"}
          </button>
        </div>
      </div>

      {/* Casino Info Table */}
      <div className="card-neon p-6 mb-8">
        <h3 className="text-white font-black text-xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          {isEs ? "Información del Casino" : "Casino Information"}
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {infoRows.map((row) => (
            <div key={row.labelEn} className="flex items-center gap-3 p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <span className="text-[#1BAAFF] flex-shrink-0">{row.icon}</span>
              <div>
                <div className="text-gray-500 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {isEs ? row.labelEs : row.labelEn}
                </div>
                <div className="text-white text-sm font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>{row.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Review Text */}
      <div className="card-neon p-6 mb-8">
        <h3 className="text-white font-black text-xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          {isEs ? `Nuestra Reseña de ${casino.name}` : `Our ${casino.name} Review`}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {description}
        </p>
        <div className="prose prose-invert prose-sm max-w-none">
          {review.split("\n\n").map((para, i) => (
            <p key={i} className="text-gray-300 text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Mr. Sweeps Verdict */}
      <div className="rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6" style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.08), rgba(212,175,55,0.03))", border: "1px solid rgba(212,175,55,0.2)" }}>
        <img
          src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663285532608/hHqVzGIjHicoXvlX.png"
          alt="Mr. Sweeps"
          className="w-24 h-auto animate-float-slow flex-shrink-0"
        />
        <div>
          <h4 className="text-[#D4AF37] font-black text-lg uppercase mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            {isEs ? "El Veredicto de Mr. Sweeps" : "Mr. Sweeps' Verdict"}
          </h4>
          <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {isEs
              ? `${casino.name} obtiene un ${casino.rating}/10 de mi parte. ${casino.taglineEs} — y cumple con esa promesa. Si buscas una experiencia sweepstakes de calidad, este casino merece estar en tu lista.`
              : `${casino.name} earns a ${casino.rating}/10 from me. ${casino.taglineEn} — and it delivers on that promise. If you're looking for a quality sweepstakes experience, this casino deserves a spot on your list.`
            }
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
