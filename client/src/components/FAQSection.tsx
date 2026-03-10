/*
 * FAQ SECTION — Sweeptakes.com
 * Schema-optimized FAQ with Mr. Sweeps answering questions
 * Design: Superhero Command Center — accordion style — i18n enabled
 */
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const faqsEn = [
  {
    q: "Are sweepstakes casinos legal in the United States?",
    a: "Yes. Sweepstakes casinos are legal in most U.S. states because they operate under sweepstakes law, not gambling law. The key distinction is that no purchase is necessary to participate — free entry is always available. This model is similar to how McDonald's Monopoly or Publisher's Clearing House operates.",
  },
  {
    q: "Do I need to spend money to play at sweepstakes casinos?",
    a: "No. All sweepstakes casinos offer free Sweep Coins that you can use to play games. You can receive them through daily login bonuses, welcome offers, promotional events, or by mailing a handwritten request to the casino's address. Purchasing Gold Coins is entirely optional.",
  },
  {
    q: "Can I win real money at sweepstakes casinos?",
    a: "Yes, but not directly. You play with Sweep Coins, which can be redeemed for real cash prizes, gift cards, or cryptocurrency. The redemption process varies by casino but is generally straightforward. Minimum redemption amounts typically start at $5–$25 worth of Sweep Coins.",
  },
  {
    q: "What states are sweepstakes casinos available in?",
    a: "Sweepstakes casinos are available in 45+ U.S. states. The states with the most restrictions are Washington, Michigan, Nevada, and Idaho. A few operators have additional state-specific restrictions. Always check the casino's terms of service for your specific state.",
  },
  {
    q: "What is the difference between Gold Coins and Sweep Coins?",
    a: "Gold Coins (GC) are virtual currency used purely for fun gameplay — they have no real-world value and cannot be redeemed. Sweep Coins (SC) are the promotional currency that can be redeemed for real prizes. You earn SC through free bonuses, promotions, or as a bonus when purchasing GC packages.",
  },
  {
    q: "How do I redeem Sweep Coins for real prizes?",
    a: "Once you've accumulated the minimum required Sweep Coins (typically 50–100 SC = $50–$100), you can request a redemption through the casino's cashier. Most casinos offer bank transfers, PayPal, check, or cryptocurrency. Processing times range from 24 hours to 5 business days.",
  },
  {
    q: "Are sweepstakes casino games fair?",
    a: "Reputable sweepstakes casinos use certified Random Number Generators (RNGs) to ensure fair gameplay. Many are audited by independent testing agencies. Our reviews specifically check for RNG certification and fairness documentation before recommending any casino.",
  },
  {
    q: "What is the best sweepstakes casino for beginners?",
    a: "Based on our testing, McLuck and Stake.us are the best options for new players. Both offer generous welcome bonuses, simple registration, and intuitive interfaces. McLuck is particularly beginner-friendly with its clean design and helpful tutorials.",
  },
];

const faqsEs = [
  {
    q: "¿Son legales los casinos sweepstakes en Estados Unidos?",
    a: "Sí. Los casinos sweepstakes son legales en la mayoría de los estados de EE.UU. porque operan bajo la ley de sorteos, no bajo la ley de juego. La distinción clave es que no es necesario realizar ninguna compra para participar: siempre hay una entrada gratuita disponible. Este modelo es similar al Monopoly de McDonald's o Publisher's Clearing House.",
  },
  {
    q: "¿Necesito gastar dinero para jugar en casinos sweepstakes?",
    a: "No. Todos los casinos sweepstakes ofrecen Sweep Coins gratuitas que puedes usar para jugar. Puedes recibirlas a través de bonos de inicio de sesión diarios, ofertas de bienvenida, eventos promocionales o enviando una solicitud manuscrita a la dirección del casino. Comprar Gold Coins es completamente opcional.",
  },
  {
    q: "¿Puedo ganar dinero real en los casinos sweepstakes?",
    a: "Sí, pero no directamente. Juegas con Sweep Coins, que se pueden canjear por premios en efectivo, tarjetas de regalo o criptomonedas. El proceso de canje varía según el casino, pero generalmente es sencillo. Los montos mínimos de canje suelen comenzar en $5–$25 en Sweep Coins.",
  },
  {
    q: "¿En qué estados están disponibles los casinos sweepstakes?",
    a: "Los casinos sweepstakes están disponibles en más de 45 estados de EE.UU. Los estados con más restricciones son Washington, Michigan, Nevada e Idaho. Algunos operadores tienen restricciones adicionales específicas por estado. Siempre verifica los términos de servicio del casino para tu estado específico.",
  },
  {
    q: "¿Cuál es la diferencia entre Gold Coins y Sweep Coins?",
    a: "Las Gold Coins (GC) son moneda virtual usada únicamente para jugar por diversión: no tienen valor en el mundo real y no se pueden canjear. Las Sweep Coins (SC) son la moneda promocional que se puede canjear por premios reales. Ganas SC a través de bonos gratuitos, promociones o como bono al comprar paquetes de GC.",
  },
  {
    q: "¿Cómo canjeo las Sweep Coins por premios reales?",
    a: "Una vez que hayas acumulado el mínimo de Sweep Coins requerido (normalmente 50–100 SC = $50–$100), puedes solicitar un canje a través de la caja del casino. La mayoría de los casinos ofrecen transferencias bancarias, PayPal, cheque o criptomonedas. Los tiempos de procesamiento varían de 24 horas a 5 días hábiles.",
  },
  {
    q: "¿Son justos los juegos de los casinos sweepstakes?",
    a: "Los casinos sweepstakes de buena reputación utilizan Generadores de Números Aleatorios (RNG) certificados para garantizar un juego justo. Muchos son auditados por agencias de pruebas independientes. Nuestras reseñas verifican específicamente la certificación RNG y la documentación de equidad antes de recomendar cualquier casino.",
  },
  {
    q: "¿Cuál es el mejor casino sweepstakes para principiantes?",
    a: "Según nuestras pruebas, McLuck y Stake.us son las mejores opciones para nuevos jugadores. Ambos ofrecen generosos bonos de bienvenida, registro sencillo e interfaces intuitivas. McLuck es especialmente amigable para principiantes con su diseño limpio y tutoriales útiles.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { lang, t } = useLanguage();
  const faqs = lang === "es" ? faqsEs : faqsEn;

  return (
    <section
      className="py-20 relative"
      style={{ background: "linear-gradient(180deg, #060e1f 0%, #0a1628 100%)" }}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-[#D4AF37]"
              style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)" }}
            >
              <HelpCircle size={24} />
            </div>
          </div>
          <span className="badge-gold mb-4 inline-block">{t("faq.badge")}</span>
          <h2
            className="text-4xl md:text-5xl font-black uppercase text-white leading-none"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {t("faq.title1")}{" "}
            <span className="text-[#D4AF37]">{t("faq.title2")}</span>
          </h2>
          <p className="text-gray-400 mt-3 text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {t("faq.mrSweeps")}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden transition-all duration-300"
              style={{
                background: openIndex === i ? "rgba(212,175,55,0.06)" : "rgba(255,255,255,0.02)",
                border: openIndex === i ? "1px solid rgba(212,175,55,0.3)" : "1px solid rgba(255,255,255,0.08)",
              }}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span
                  className="font-semibold text-base text-white pr-4 leading-snug"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  itemProp="name"
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180 text-[#D4AF37]" : "text-gray-500"}`}
                />
              </button>
              {openIndex === i && (
                <div
                  className="px-5 pb-5"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p
                    className="text-gray-300 text-sm leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    itemProp="text"
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mr. Sweeps CTA */}
        <div className="mt-12 text-center">
          <div className="flex justify-center mb-4">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663285532608/nrNmXicnpgXvzSOX.png"
              alt="Mr. Sweeps"
              className="w-20 h-auto animate-float"
            />
          </div>
          <button
            onClick={() => document.getElementById("top-casinos")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-gold px-8 py-3"
          >
            {t("faq.cta")}
          </button>
        </div>
      </div>
    </section>
  );
}
