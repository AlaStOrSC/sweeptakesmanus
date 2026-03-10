/*
 * LEGAL & STATES — Sweeptakes.com
 * State availability map and legal info — i18n enabled
 * Design: Superhero Command Center
 */
import { MapPin, CheckCircle, XCircle, AlertCircle, Scale } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const availableStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
  "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "West Virginia",
  "Wisconsin", "Wyoming",
];

const restrictedStates = ["Idaho", "Michigan", "Nevada", "Washington"];

export default function LegalStates() {
  const { t } = useLanguage();

  const legalPoints = [
    {
      icon: <Scale size={18} />,
      titleKey: "legal.l1title",
      descKey: "legal.l1desc",
    },
    {
      icon: <CheckCircle size={18} />,
      titleKey: "legal.l2title",
      descKey: "legal.l2desc",
    },
    {
      icon: <AlertCircle size={18} />,
      titleKey: "legal.l3title",
      descKey: "legal.l3desc",
    },
  ];

  return (
    <section
      id="legal"
      className="py-20 relative"
      style={{ background: "#060e1f" }}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="badge-electric mb-4 inline-block">
            <MapPin size={10} className="inline mr-1" />
            {t("legal.badge")}
          </span>
          <h2
            className="text-4xl md:text-5xl font-black uppercase text-white leading-none"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {t("legal.title1")}{" "}
            <span className="text-[#1BAAFF]">{t("legal.title2")}</span>{" "}
            {t("legal.title3")}
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {t("legal.desc")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Legal Points */}
          <div className="lg:col-span-1 space-y-4">
            <h3
              className="text-xl font-black uppercase text-[#D4AF37] mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {t("legal.whyLegal")}
            </h3>
            {legalPoints.map((point) => (
              <div key={point.titleKey} className="card-neon p-4">
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-[#1BAAFF]"
                    style={{ background: "rgba(27,170,255,0.1)" }}
                  >
                    {point.icon}
                  </div>
                  <div>
                    <h4
                      className="text-white font-bold text-sm mb-0.5"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase" }}
                    >
                      {t(point.titleKey)}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {t(point.descKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Status legend */}
            <div
              className="p-4 rounded-xl mt-4"
              style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.15)" }}
            >
              <h4
                className="text-[#D4AF37] font-bold text-sm uppercase mb-3"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {t("legal.legendTitle")}
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-300" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <CheckCircle size={14} className="text-green-400" />
                  {t("legal.legendAvailable")}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <AlertCircle size={14} className="text-yellow-400" />
                  {t("legal.legendRestricted")}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <XCircle size={14} className="text-red-400" />
                  {t("legal.legendUnavailable")}
                </div>
              </div>
            </div>
          </div>

          {/* States Grid */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3
                className="text-xl font-black uppercase text-white"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {t("legal.statesTitle")}
              </h3>
              <span className="badge-gold">{availableStates.length - restrictedStates.length} {t("legal.statesCount")}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {availableStates.map((state) => {
                const isRestricted = restrictedStates.includes(state);
                return (
                  <div
                    key={state}
                    className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-xs transition-all duration-200 hover:scale-105"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      background: isRestricted ? "rgba(234,179,8,0.08)" : "rgba(34,197,94,0.08)",
                      border: isRestricted ? "1px solid rgba(234,179,8,0.2)" : "1px solid rgba(34,197,94,0.2)",
                      color: isRestricted ? "#eab308" : "#86efac",
                    }}
                  >
                    {isRestricted
                      ? <AlertCircle size={10} className="flex-shrink-0" />
                      : <CheckCircle size={10} className="flex-shrink-0" />
                    }
                    <span className="truncate">{state}</span>
                  </div>
                );
              })}
            </div>

            {/* Disclaimer */}
            <p
              className="text-gray-500 text-xs mt-4 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {t("legal.disclaimer")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
