/*
 * WHAT ARE SWEEPSTAKES CASINOS — Sweeptakes.com
 * SEO-optimized explainer section
 * Mr. Sweeps pointing character on the right
 * Design: Superhero Command Center — i18n enabled
 */
import { BookOpen, Scale, Gift, RefreshCw, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WhatAreSection() {
  const { t } = useLanguage();

  const features = [
    { icon: <BookOpen size={20} />, title: t("what.f1title"), desc: t("what.f1desc") },
    { icon: <Scale size={20} />, title: t("what.f2title"), desc: t("what.f2desc") },
    { icon: <Gift size={20} />, title: t("what.f3title"), desc: t("what.f3desc") },
    { icon: <RefreshCw size={20} />, title: t("what.f4title"), desc: t("what.f4desc") },
  ];

  const steps = [
    { step: "1", text: t("what.step1") },
    { step: "2", text: t("what.step2") },
    { step: "3", text: t("what.step3") },
    { step: "4", text: t("what.step4") },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #060e1f 0%, #0B1F3B 50%, #060e1f 100%)",
      }}
    >
      {/* Background circuit image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663285532608/sPmOoaEiQANYNqrQ.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Zap size={18} className="text-[#D4AF37]" />
              <span className="badge-gold">{t("what.badge")}</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-black uppercase text-white leading-none mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {t("what.title1")}{" "}
              <span className="text-[#D4AF37]">{t("what.title2")}</span>
            </h2>
            <p
              className="text-gray-300 text-base leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {t("what.desc")}
            </p>

            <div className="space-y-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/5"
                  style={{ border: "1px solid rgba(27,170,255,0.1)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#1BAAFF]"
                    style={{ background: "rgba(27,170,255,0.1)", border: "1px solid rgba(27,170,255,0.2)" }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h3
                      className="text-white font-bold text-base mb-0.5"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}
                    >
                      {f.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mr. Sweeps pointing + visual explainer */}
          <div className="relative flex flex-col items-center">
            {/* Character */}
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full opacity-20"
                style={{
                  background: "radial-gradient(circle, rgba(212,175,55,0.8) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663285532608/nrNmXicnpgXvzSOX.png"
                alt="Mr. Sweeps explaining sweepstakes casinos"
                className="relative z-10 w-full max-w-xs mx-auto animate-float drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]"
              />
            </div>

            {/* How it works steps */}
            <div className="w-full mt-6 space-y-3">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="flex items-center gap-3 p-3 rounded-lg"
                  style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.15)" }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      background: "linear-gradient(135deg, #D4AF37, #F0CC5A)",
                      color: "#060e1f",
                    }}
                  >
                    {item.step}
                  </div>
                  <span className="text-gray-300 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
