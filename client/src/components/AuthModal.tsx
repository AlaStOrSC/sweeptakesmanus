/*
 * AUTH MODAL — Sweeptakes.com
 * Login / Sign Up modal with Manus OAuth
 * Design: Superhero Command Center
 */
import { useState } from "react";
import { X, LogIn, UserPlus, Zap } from "lucide-react";
import { getLoginUrl } from "@/const";
import { useLanguage } from "@/contexts/LanguageContext";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: "login" | "signup";
}

export default function AuthModal({ isOpen, onClose, defaultMode = "login" }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">(defaultMode);
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleOAuth = () => {
    window.location.href = getLoginUrl();
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #0d1e35 0%, #0B1F3B 100%)",
          border: "1px solid rgba(212,175,55,0.3)",
          boxShadow: "0 0 60px rgba(27,170,255,0.15), 0 0 120px rgba(212,175,55,0.08)",
        }}
      >
        {/* Top gold bar */}
        <div
          className="h-1 w-full"
          style={{ background: "linear-gradient(90deg, #D4AF37, #1BAAFF, #D4AF37)" }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors z-10"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <X size={16} />
        </button>

        <div className="p-8">
          {/* Logo + Mascot */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663285532608/NKofsRjjlppkibhr.png"
              alt="Sweeptakes.com"
              className="h-12 w-auto"
            />
            <div>
              <h2
                className="text-2xl font-black uppercase text-white leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {mode === "login" ? t("auth.loginTitle") : t("auth.signupTitle")}
              </h2>
              <p className="text-gray-400 text-xs mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {mode === "login" ? t("auth.loginSubtitle") : t("auth.signupSubtitle")}
              </p>
            </div>
          </div>

          {/* Mode tabs */}
          <div
            className="flex rounded-xl mb-6 p-1"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <button
              onClick={() => setMode("login")}
              className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                background: mode === "login" ? "linear-gradient(135deg, #D4AF37, #F0CC5A)" : "transparent",
                color: mode === "login" ? "#060e1f" : "#9ca3af",
              }}
            >
              <LogIn size={14} />
              {t("auth.loginBtn")}
            </button>
            <button
              onClick={() => setMode("signup")}
              className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                background: mode === "signup" ? "linear-gradient(135deg, #1BAAFF, #00CFFF)" : "transparent",
                color: mode === "signup" ? "#060e1f" : "#9ca3af",
              }}
            >
              <UserPlus size={14} />
              {t("auth.signupBtn")}
            </button>
          </div>

          {/* OAuth Button — Primary CTA */}
          <button
            onClick={handleOAuth}
            className="w-full py-4 rounded-xl font-black uppercase tracking-wide text-base flex items-center justify-center gap-3 mb-4 transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              background: "linear-gradient(135deg, #D4AF37 0%, #F0CC5A 50%, #D4AF37 100%)",
              color: "#060e1f",
              boxShadow: "0 4px 20px rgba(212,175,55,0.4)",
            }}
          >
            <Zap size={18} />
            {t("auth.loginWith")}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
            <span className="text-gray-500 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {t("auth.orEmail")}
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
          </div>

          {/* Email form fields */}
          <div className="space-y-3">
            {mode === "signup" && (
              <div>
                <label className="block text-gray-400 text-xs mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {t("auth.name")}
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>
            )}
            <div>
              <label className="block text-gray-400 text-xs mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {t("auth.email")}
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>
            <div>
              <label className="block text-gray-400 text-xs mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {t("auth.password")}
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>
          </div>

          {mode === "login" && (
            <button
              onClick={handleOAuth}
              className="text-right w-full text-xs text-[#1BAAFF] mt-2 hover:underline"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {t("auth.forgotPassword")}
            </button>
          )}

          {/* Submit */}
          <button
            onClick={handleOAuth}
            className="w-full py-3.5 rounded-xl font-black uppercase tracking-wide text-sm mt-4 transition-all hover:opacity-90"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              background: mode === "login"
                ? "linear-gradient(135deg, #1BAAFF, #00CFFF)"
                : "linear-gradient(135deg, #D4AF37, #F0CC5A)",
              color: "#060e1f",
            }}
          >
            {mode === "login" ? t("auth.loginBtn") : t("auth.signupBtn")}
          </button>

          {/* Toggle mode */}
          <p className="text-center text-gray-400 text-xs mt-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {mode === "login" ? t("auth.noAccount") : t("auth.hasAccount")}{" "}
            <button
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
              className="text-[#D4AF37] hover:underline font-semibold"
            >
              {mode === "login" ? t("auth.signupLink") : t("auth.loginLink")}
            </button>
          </p>

          {mode === "signup" && (
            <p className="text-center text-gray-500 text-xs mt-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {t("auth.terms")}{" "}
              <button className="text-gray-400 hover:underline">{t("auth.termsLink")}</button>{" "}
              {t("auth.and")}{" "}
              <button className="text-gray-400 hover:underline">{t("auth.privacyLink")}</button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
