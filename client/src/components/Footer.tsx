/*
 * FOOTER — Sweeptakes.com
 * Dark footer with logo, links, disclaimer, responsible gaming — i18n enabled
 * All links now point to real pages
 * Design: Superhero Command Center
 */
import { Shield } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t, lang } = useLanguage();
  const isEs = lang === "es";

  const footerCols = [
    {
      headerKey: "footer.col1",
      links: [
        { key: "footer.col1.l1", href: "/review/stake-us" },
        { key: "footer.col1.l2", href: "/review/realprice" },
        { key: "footer.col1.l3", href: "/review/crown-coins" },
        { key: "footer.col1.l4", href: "/review/mcluck" },
        { key: "footer.col1.l5", href: "/review/wow-vegas" },
        { key: "footer.col1.l6", href: "/review/fortuna" },
      ],
    },
    {
      headerKey: "footer.col2",
      links: [
        { key: "footer.col2.l1", href: "/guides/what-are-sweepstakes-casinos" },
        { key: "footer.col2.l2", href: "/guides/free-coins" },
        { key: "footer.col2.l3", href: "/guides/redemption" },
        { key: "footer.col2.l4", href: "/guides/bonuses" },
        { key: "footer.col2.l5", href: "/guides/responsible-play" },
      ],
    },
    {
      headerKey: "footer.col3",
      links: [
        { key: "footer.col3.l1", href: "/legal/disclaimer" },
        { key: "footer.col3.l2", href: "/legal/editorial-policy" },
        { key: "footer.col3.l3", href: "/legal/privacy" },
        { key: "footer.col3.l4", href: "/legal/terms" },
        { key: "footer.col3.l5", href: "/about/methodology" },
        { key: "footer.col3.l6", href: "/contact" },
      ],
    },
    {
      headerKey: "footer.col4",
      links: [
        { key: "footer.col4.l1", href: "/about" },
        { key: "footer.col4.l2", href: "/about/team" },
        { key: "footer.col4.l3", href: "/about/methodology" },
        { key: "footer.col4.l4", href: "/advertise" },
        { key: "footer.col4.l5", href: "/contact" },
      ],
    },
  ];

  return (
    <footer
      className="relative pt-16 pb-8"
      style={{
        background: "linear-gradient(180deg, #0a1628 0%, #020810 100%)",
        borderTop: "1px solid rgba(212,175,55,0.15)",
      }}
    >
      {/* Top section */}
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663285532608/NKofsRjjlppkibhr.png"
                  alt="Sweeptakes.com"
                  className="h-10 w-auto cursor-pointer"
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <Shield size={12} className="text-[#D4AF37]" />
              {t("footer.editorial")}
            </div>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.headerKey}>
              <h4
                className="text-[#D4AF37] font-bold text-sm uppercase tracking-widest mb-4"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {t(col.headerKey)}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.key}>
                    <Link href={link.href}>
                      <span
                        className="text-gray-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {t(link.key)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Responsible Gaming Banner */}
        <div
          className="rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-center gap-4"
          style={{
            background: "rgba(27,170,255,0.06)",
            border: "1px solid rgba(27,170,255,0.2)",
          }}
        >
          <div className="text-2xl flex-shrink-0">🛡️</div>
          <div className="flex-1 text-center sm:text-left">
            <h4
              className="text-[#1BAAFF] font-bold text-sm uppercase tracking-wide mb-0.5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {t("footer.responsible")}
            </h4>
            <p className="text-gray-400 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {t("footer.responsibleDesc")}{" "}
              <a href="https://www.ncpgambling.org" target="_blank" rel="noopener noreferrer" className="text-[#1BAAFF] underline">
                {t("footer.responsibleLink")}
              </a>{" "}
              {t("footer.responsibleSuffix")}
            </p>
          </div>
          <Link href="/guides/responsible-play">
            <span className="btn-electric flex-shrink-0 text-xs px-4 py-2 cursor-pointer">
              {t("footer.responsibleBtn")}
            </span>
          </Link>
        </div>

        {/* Legal Disclaimer */}
        <div
          className="rounded-xl p-5 mb-8"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-gray-500 text-xs leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {t("footer.disclaimer")}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <p className="text-gray-600 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <Link href="/legal/privacy">
              <span className="hover:text-gray-400 transition-colors cursor-pointer">{t("footer.privacy")}</span>
            </Link>
            <Link href="/legal/terms">
              <span className="hover:text-gray-400 transition-colors cursor-pointer">{t("footer.terms")}</span>
            </Link>
            <Link href="/legal/disclaimer">
              <span className="hover:text-gray-400 transition-colors cursor-pointer">{t("footer.cookies")}</span>
            </Link>
            <Link href="/sitemap">
              <span className="hover:text-gray-400 transition-colors cursor-pointer">{t("footer.sitemap")}</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
