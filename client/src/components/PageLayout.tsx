/*
 * PAGE LAYOUT — Sweeptakes.com
 * Reusable layout for all internal pages
 * Includes Navbar, breadcrumb, hero header, and Footer
 */
import { ReactNode } from "react";
import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLanguage } from "@/contexts/LanguageContext";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs?: Breadcrumb[];
  accentColor?: "gold" | "electric";
}

export default function PageLayout({
  children,
  title,
  subtitle,
  badge,
  breadcrumbs = [],
  accentColor = "gold",
}: PageLayoutProps) {
  const { t } = useLanguage();
  const accent = accentColor === "gold" ? "#D4AF37" : "#1BAAFF";

  return (
    <div className="min-h-screen" style={{ background: "#060e1f" }}>
      <Navbar />

      {/* Page Hero Header */}
      <div
        className="relative pt-24 pb-12 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #0B1F3B 0%, #060e1f 100%)",
          borderBottom: `1px solid ${accent}22`,
        }}
      >
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse, ${accent} 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-1 text-xs text-gray-500 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <Link href="/">
                <span className="flex items-center gap-1 hover:text-gray-300 transition-colors cursor-pointer">
                  <Home size={11} />
                  {t("nav.home") || "Home"}
                </span>
              </Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1">
                  <ChevronRight size={11} />
                  {crumb.href ? (
                    <Link href={crumb.href}>
                      <span className="hover:text-gray-300 transition-colors cursor-pointer">{crumb.label}</span>
                    </Link>
                  ) : (
                    <span className="text-gray-300">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Badge */}
          {badge && (
            <span
              className={accentColor === "gold" ? "badge-gold mb-4 inline-block" : "badge-electric mb-4 inline-block"}
            >
              {badge}
            </span>
          )}

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-none mb-3"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              textShadow: `0 0 40px ${accent}22`,
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p
              className="text-gray-400 text-base max-w-2xl leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Page Content */}
      <main className="container mx-auto px-4 lg:px-8 max-w-5xl py-12">
        {children}
      </main>

      <Footer />
    </div>
  );
}
