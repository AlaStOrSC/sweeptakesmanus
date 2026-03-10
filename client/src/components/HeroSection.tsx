/* 
 * HERO SECTION — Sweeptakes.com
 * Full-bleed dark hero with coin rain background
 * Mr. Sweeps (original hero image) dominates the right side
 * Speech bubble + headline on the left
 * Design: Superhero Command Center — i18n enabled
 */
import { Shield, Star, CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const COINS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${5 + (i * 5.5) % 90}%`,
  delay: `${(i * 0.4) % 5}s`,
  duration: `${4 + (i * 0.3) % 4}s`,
  size: `${20 + (i * 3) % 20}px`,
}));

export default function HeroSection() {
  const { t } = useLanguage();

  const handleExplore = () => {
    document.getElementById("top-casinos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #020810 0%, #060e1f 40%, #0B1F3B 100%)",
      }}
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663285532608/dbOdwekXDmGhvvSC.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020810]/90 via-[#060e1f]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020810] via-transparent to-transparent" />

      {/* Coin rain animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {COINS.map((coin) => (
          <div
            key={coin.id}
            className="absolute text-[#D4AF37] font-black opacity-0"
            style={{
              left: coin.left,
              top: "-40px",
              fontSize: coin.size,
              animation: `coinRain ${coin.duration} ${coin.delay} linear infinite`,
              filter: "drop-shadow(0 0 6px rgba(212,175,55,0.6))",
            }}
          >
            $
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-7xl pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          
          {/* Left: Text Content */}
          <div className="space-y-6 animate-slide-in-left">
            {/* Trust badge */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="badge-gold">
                <Shield size={10} className="inline mr-1" />
                {t("hero.badge1")}
              </span>
              <span className="badge-electric">{t("hero.badge2")}</span>
            </div>

            {/* Mr. Sweeps Speech Bubble */}
            <div className="speech-bubble max-w-sm">
              <p
                className="text-[#D4AF37] font-semibold text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span className="text-[#1BAAFF] font-bold">Mr. Sweeps:</span>{" "}
                {t("hero.mrSweepsSays").replace(/^Mr\. Sweeps says: /, "").replace(/^¡Mr\. Sweeps dice: /, "")}
              </p>
            </div>

            {/* Main Headline */}
            <div>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-wide"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                <span className="text-white">{t("hero.title1")}</span>
                <br />
                <span className="text-[#D4AF37]" style={{ textShadow: "0 0 30px rgba(212,175,55,0.5)" }}>
                  {t("hero.title2")}
                </span>
                <br />
                <span className="text-[#1BAAFF] text-4xl md:text-5xl" style={{ textShadow: "0 0 20px rgba(27,170,255,0.5)" }}>
                  {t("hero.year")}
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p
              className="text-gray-300 text-lg md:text-xl max-w-lg leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {t("hero.subtitle")}{" "}
              <span className="text-white font-semibold">{t("hero.noDeposit")}</span>
              {t("hero.noDepositSuffix")}
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {[t("hero.trust1"), t("hero.trust2"), t("hero.trust3")].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-gray-300">
                  <CheckCircle size={14} className="text-[#D4AF37]" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={handleExplore}
                className="btn-gold flex items-center gap-2 text-base px-8 py-4"
              >
                {t("hero.cta1")}
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 border border-[#1BAAFF]/50 text-[#1BAAFF] rounded font-bold text-base uppercase tracking-wide hover:bg-[#1BAAFF]/10 transition-all duration-300"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {t("hero.cta2")}
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              {[
                { value: "11+", label: t("hero.stat1") },
                { value: "45+", label: t("hero.stat2") },
                { value: "100%", label: t("hero.stat3") },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-2xl md:text-3xl font-black text-[#D4AF37]"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", textShadow: "0 0 15px rgba(212,175,55,0.4)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mr. Sweeps Character */}
          <div className="hidden lg:flex justify-center items-end relative animate-slide-in-right">
            {/* Glow behind character */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full opacity-30"
              style={{
                background: "radial-gradient(circle, rgba(212,175,55,0.6) 0%, rgba(27,170,255,0.3) 50%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663285532608/hHqVzGIjHicoXvlX.png"
              alt="Mr. Sweeps — Your Sweepstakes Guide"
              className="relative z-10 w-full max-w-md animate-float-slow drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              style={{ maxHeight: "75vh", objectFit: "contain" }}
            />
            {/* Floating rating badge */}
            <div
              className="absolute top-16 right-4 card-neon p-3 text-center"
              style={{ minWidth: "120px" }}
            >
              <div className="flex justify-center gap-0.5 mb-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={12} className="star-filled fill-current" />
                ))}
              </div>
              <div className="text-[#D4AF37] font-black text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                9.8/10
              </div>
              <div className="text-gray-400 text-xs">Expert Score</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060e1f] to-transparent" />
    </section>
  );
}
