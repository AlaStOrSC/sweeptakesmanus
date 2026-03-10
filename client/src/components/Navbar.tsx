/*
 * NAVBAR — Sweeptakes.com
 * Sticky nav with auth state, language switcher, dropdown menus, and mobile menu
 * All links point to real pages
 * Design: Superhero Command Center
 */
import { useState, useEffect, useRef } from "react";
import { Menu, X, LogIn, LogOut, User, ChevronDown, Globe, Star, BookOpen, Building2 } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { useLanguage } from "@/contexts/LanguageContext";
import AuthModal from "@/components/AuthModal";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

interface DropdownItem {
  labelEn: string;
  labelEs: string;
  href: string;
}

interface NavDropdown {
  labelEn: string;
  labelEs: string;
  icon: React.ReactNode;
  items: DropdownItem[];
}

const navDropdowns: NavDropdown[] = [
  {
    labelEn: "Top Casinos",
    labelEs: "Mejores Casinos",
    icon: <Star size={14} />,
    items: [
      { labelEn: "Stake.us Review", labelEs: "Reseña de Stake.us", href: "/review/stake-us" },
      { labelEn: "RealPrize Review", labelEs: "Reseña de RealPrize", href: "/review/realprice" },
      { labelEn: "Crown Coins Review", labelEs: "Reseña de Crown Coins", href: "/review/crown-coins" },
      { labelEn: "McLuck Review", labelEs: "Reseña de McLuck", href: "/review/mcluck" },
      { labelEn: "WOW Vegas Review", labelEs: "Reseña de WOW Vegas", href: "/review/wow-vegas" },
      { labelEn: "Fortuna Review", labelEs: "Reseña de Fortuna", href: "/review/fortuna" },
      { labelEn: "Hello Millions Review", labelEs: "Reseña de Hello Millions", href: "/review/hello-millions" },
      { labelEn: "Spree Review", labelEs: "Reseña de Spree", href: "/review/spree" },
      { labelEn: "Funrize Review", labelEs: "Reseña de Funrize", href: "/review/funrize" },
      { labelEn: "Mega Bonanza Review", labelEs: "Reseña de Mega Bonanza", href: "/review/mega-bonanza" },
    ],
  },
  {
    labelEn: "Guides",
    labelEs: "Guías",
    icon: <BookOpen size={14} />,
    items: [
      { labelEn: "What Are Sweepstakes Casinos?", labelEs: "¿Qué Son los Casinos Sweepstakes?", href: "/guides/what-are-sweepstakes-casinos" },
      { labelEn: "How to Claim Free Coins", labelEs: "Cómo Reclamar Monedas Gratis", href: "/guides/free-coins" },
      { labelEn: "Redemption Guide", labelEs: "Guía de Canje", href: "/guides/redemption" },
      { labelEn: "Bonuses & Promotions", labelEs: "Bonos y Promociones", href: "/guides/bonuses" },
      { labelEn: "Responsible Play", labelEs: "Juego Responsable", href: "/guides/responsible-play" },
    ],
  },
  {
    labelEn: "About",
    labelEs: "Empresa",
    icon: <Building2 size={14} />,
    items: [
      { labelEn: "About Sweeptakes.com", labelEs: "Sobre Nosotros", href: "/about" },
      { labelEn: "Our Editorial Team", labelEs: "Nuestro Equipo", href: "/about/team" },
      { labelEn: "How We Rank Casinos", labelEs: "Cómo Clasificamos", href: "/about/methodology" },
      { labelEn: "Advertise With Us", labelEs: "Anúnciate con Nosotros", href: "/advertise" },
      { labelEn: "Contact Us", labelEs: "Contáctanos", href: "/contact" },
    ],
  },
];

function DropdownMenu({ dropdown, isEs }: { dropdown: NavDropdown; isEs: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 text-gray-300 hover:text-white text-sm font-medium transition-colors rounded-lg hover:bg-white/5"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {dropdown.icon}
        {isEs ? dropdown.labelEs : dropdown.labelEn}
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          className="absolute top-full left-0 mt-2 rounded-xl overflow-hidden z-50 min-w-[220px]"
          style={{
            background: "#0d1e35",
            border: "1px solid rgba(212,175,55,0.2)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          }}
        >
          {dropdown.items.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 transition-colors text-sm cursor-pointer"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {isEs ? item.labelEs : item.labelEn}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const { user, isAuthenticated } = useAuth();
  const { lang, setLang, t } = useLanguage();
  const isEs = lang === "es";
  const [location] = useLocation();
  const logoutMutation = trpc.auth.logout.useMutation({
    onSuccess: () => {
      toast.success(t("auth.logoutConfirm"));
      window.location.reload();
    },
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-user-menu]")) setUserMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const openLogin = () => { setAuthMode("login"); setAuthModalOpen(true); };
  const openSignup = () => { setAuthMode("signup"); setAuthModalOpen(true); };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        style={{
          background: scrolled ? "rgba(6,14,31,0.97)" : "rgba(6,14,31,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid rgba(212,175,55,0.2)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663285532608/NKofsRjjlppkibhr.png"
                alt="Sweeptakes.com"
                className="h-9 w-auto transition-transform group-hover:scale-105"
              />
              <div className="hidden sm:block">
                <div
                  className="text-white font-black text-lg leading-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em" }}
                >
                  SWEEPTAKES
                </div>
                <div
                  className="text-[#D4AF37] font-black text-xs leading-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  .COM
                </div>
              </div>
            </Link>

            {/* Desktop nav dropdowns */}
            <div className="hidden lg:flex items-center gap-1">
              {navDropdowns.map((dropdown) => (
                <DropdownMenu key={dropdown.labelEn} dropdown={dropdown} isEs={isEs} />
              ))}
            </div>

            {/* Right side: Language + Auth */}
            <div className="flex items-center gap-2">
              {/* Language switcher */}
              <button
                onClick={() => setLang(lang === "en" ? "es" : "en")}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-gray-400 hover:text-white transition-colors text-sm font-medium"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                title={lang === "en" ? "Cambiar a Español" : "Switch to English"}
              >
                <Globe size={14} />
                <span className="uppercase font-black tracking-wider text-xs">
                  {lang === "en" ? "ES" : "EN"}
                </span>
              </button>

              {isAuthenticated && user ? (
                /* Logged in: user menu */
                <div className="relative" data-user-menu>
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl transition-all"
                    style={{
                      background: "rgba(212,175,55,0.1)",
                      border: "1px solid rgba(212,175,55,0.3)",
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
                      style={{
                        background: "linear-gradient(135deg, #D4AF37, #F0CC5A)",
                        color: "#060e1f",
                        fontFamily: "'Barlow Condensed', sans-serif",
                      }}
                    >
                      {user.name ? user.name[0].toUpperCase() : <User size={12} />}
                    </div>
                    <span
                      className="text-white text-sm font-semibold hidden sm:block max-w-[100px] truncate"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {user.name || user.email || t("nav.myAccount")}
                    </span>
                    <ChevronDown
                      size={12}
                      className={`text-gray-400 transition-transform ${userMenuOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {userMenuOpen && (
                    <div
                      className="absolute right-0 top-full mt-2 w-52 rounded-xl overflow-hidden z-50"
                      style={{
                        background: "#0d1e35",
                        border: "1px solid rgba(212,175,55,0.2)",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                      }}
                    >
                      <div className="px-4 py-3 border-b border-white/10">
                        <p className="text-gray-400 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {t("auth.loggedInAs")}
                        </p>
                        <p className="text-white text-sm font-semibold truncate" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {user.name || user.email}
                        </p>
                      </div>
                      <button
                        onClick={() => logoutMutation.mutate()}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 transition-colors text-sm"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        <LogOut size={14} />
                        {t("nav.logout")}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* Logged out: login + signup buttons */
                <div className="flex items-center gap-2">
                  <button
                    onClick={openLogin}
                    className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg text-gray-300 hover:text-white transition-colors text-sm font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <LogIn size={14} />
                    {t("nav.login")}
                  </button>
                  <button
                    onClick={openSignup}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl font-black uppercase text-sm transition-all hover:scale-105"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      background: "linear-gradient(135deg, #D4AF37, #F0CC5A)",
                      color: "#060e1f",
                      boxShadow: "0 2px 12px rgba(212,175,55,0.3)",
                    }}
                  >
                    {t("nav.signup")}
                  </button>
                </div>
              )}

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-300 hover:text-white transition-colors"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="lg:hidden border-t overflow-y-auto max-h-[80vh]"
            style={{ borderColor: "rgba(212,175,55,0.15)", background: "rgba(6,14,31,0.98)" }}
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navDropdowns.map((dropdown) => (
                <div key={dropdown.labelEn}>
                  <button
                    onClick={() => setMobileExpandedSection(
                      mobileExpandedSection === dropdown.labelEn ? null : dropdown.labelEn
                    )}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white rounded-xl hover:bg-white/5 transition-colors text-sm font-medium"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <span className="flex items-center gap-2">
                      {dropdown.icon}
                      {isEs ? dropdown.labelEs : dropdown.labelEn}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${mobileExpandedSection === dropdown.labelEn ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileExpandedSection === dropdown.labelEn && (
                    <div className="pl-6 space-y-0.5">
                      {dropdown.items.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <span
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors text-sm cursor-pointer"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          >
                            {isEs ? item.labelEs : item.labelEn}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {!isAuthenticated && (
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => { openLogin(); setMobileOpen(false); }}
                    className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-gray-300 border border-white/10 hover:border-white/20 transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {t("nav.login")}
                  </button>
                  <button
                    onClick={() => { openSignup(); setMobileOpen(false); }}
                    className="flex-1 py-2.5 rounded-xl font-black uppercase text-sm"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      background: "linear-gradient(135deg, #D4AF37, #F0CC5A)",
                      color: "#060e1f",
                    }}
                  >
                    {t("nav.signup")}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultMode={authMode}
      />
    </>
  );
}
