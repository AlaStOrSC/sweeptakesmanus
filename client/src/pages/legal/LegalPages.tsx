/*
 * LEGAL & COMPANY PAGES — Sweeptakes.com
 * All legal and about pages with full EN/ES content
 */
import { Shield, FileText, Users, Mail, MapPin, Globe, BarChart2, Megaphone } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

// ─── PRIVACY POLICY ──────────────────────────────────────────────────────────
export function PrivacyPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";
  return (
    <PageLayout
      title={isEs ? "Política de Privacidad" : "Privacy Policy"}
      subtitle={isEs ? "Última actualización: 1 de enero de 2026" : "Last updated: January 1, 2026"}
      badge={isEs ? "Legal" : "Legal"}
      breadcrumbs={[{ label: isEs ? "Legal" : "Legal" }, { label: isEs ? "Privacidad" : "Privacy" }]}
      accentColor="electric"
    >
      <div className="space-y-6">
        {[
          {
            titleEn: "1. Information We Collect",
            titleEs: "1. Información que Recopilamos",
            contentEn: "We collect information you provide directly to us when you create an account, including your name, email address, and login credentials. We also collect usage data such as pages visited, time spent on the site, and interactions with our content. We do not collect financial information — we are an editorial website, not a casino operator.",
            contentEs: "Recopilamos información que nos proporcionas directamente cuando creas una cuenta, incluyendo tu nombre, dirección de correo electrónico y credenciales de inicio de sesión. También recopilamos datos de uso como páginas visitadas, tiempo en el sitio e interacciones con nuestro contenido. No recopilamos información financiera — somos un sitio web editorial, no un operador de casino.",
          },
          {
            titleEn: "2. How We Use Your Information",
            titleEs: "2. Cómo Usamos tu Información",
            contentEn: "We use the information we collect to provide and improve our services, personalize your experience, send you updates about new casino reviews and bonuses (with your consent), and comply with legal obligations. We never sell your personal information to third parties.",
            contentEs: "Usamos la información que recopilamos para proporcionar y mejorar nuestros servicios, personalizar tu experiencia, enviarte actualizaciones sobre nuevas reseñas de casinos y bonos (con tu consentimiento), y cumplir con obligaciones legales. Nunca vendemos tu información personal a terceros.",
          },
          {
            titleEn: "3. Cookies and Tracking",
            titleEs: "3. Cookies y Seguimiento",
            contentEn: "We use cookies and similar tracking technologies to analyze site traffic, remember your preferences (including language selection), and improve user experience. You can control cookie settings through your browser. Disabling cookies may affect some site functionality.",
            contentEs: "Usamos cookies y tecnologías de seguimiento similares para analizar el tráfico del sitio, recordar tus preferencias (incluida la selección de idioma) y mejorar la experiencia del usuario. Puedes controlar la configuración de cookies a través de tu navegador. Deshabilitar las cookies puede afectar algunas funcionalidades del sitio.",
          },
          {
            titleEn: "4. Affiliate Disclosure",
            titleEs: "4. Divulgación de Afiliados",
            contentEn: "Sweeptakes.com participates in affiliate marketing programs. When you click links to casino operators on our site, we may earn a commission. This does not affect the price you pay or our editorial ratings. Our reviews are based solely on merit, and affiliate relationships never influence our rankings or recommendations.",
            contentEs: "Sweeptakes.com participa en programas de marketing de afiliados. Cuando haces clic en enlaces a operadores de casino en nuestro sitio, podemos ganar una comisión. Esto no afecta el precio que pagas ni nuestras calificaciones editoriales. Nuestras reseñas se basan únicamente en el mérito, y las relaciones de afiliados nunca influyen en nuestras clasificaciones ni recomendaciones.",
          },
          {
            titleEn: "5. Data Security",
            titleEs: "5. Seguridad de Datos",
            contentEn: "We implement industry-standard security measures to protect your personal information. All data is transmitted over encrypted HTTPS connections. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
            contentEs: "Implementamos medidas de seguridad estándar de la industria para proteger tu información personal. Todos los datos se transmiten a través de conexiones HTTPS cifradas. Sin embargo, ningún método de transmisión por internet es 100% seguro, y no podemos garantizar seguridad absoluta.",
          },
          {
            titleEn: "6. Contact Us",
            titleEs: "6. Contáctanos",
            contentEn: "If you have questions about this Privacy Policy or our data practices, please contact us at privacy@sweeptakes.com or through our Contact page.",
            contentEs: "Si tienes preguntas sobre esta Política de Privacidad o nuestras prácticas de datos, contáctanos en privacy@sweeptakes.com o a través de nuestra página de Contacto.",
          },
        ].map((section) => (
          <div key={section.titleEn} className="card-neon p-6">
            <h2 className="text-white font-black text-lg uppercase mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              {isEs ? section.titleEs : section.titleEn}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {isEs ? section.contentEs : section.contentEn}
            </p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

// ─── TERMS OF SERVICE ────────────────────────────────────────────────────────
export function TermsPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";
  return (
    <PageLayout
      title={isEs ? "Términos de Servicio" : "Terms of Service"}
      subtitle={isEs ? "Última actualización: 1 de enero de 2026" : "Last updated: January 1, 2026"}
      badge="Legal"
      breadcrumbs={[{ label: "Legal" }, { label: isEs ? "Términos" : "Terms" }]}
      accentColor="electric"
    >
      <div className="space-y-6">
        {[
          {
            titleEn: "1. Acceptance of Terms",
            titleEs: "1. Aceptación de Términos",
            contentEn: "By accessing and using Sweeptakes.com, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website. We reserve the right to modify these terms at any time with notice.",
            contentEs: "Al acceder y usar Sweeptakes.com, aceptas y te comprometes a cumplir con estos Términos de Servicio. Si no estás de acuerdo con estos términos, por favor no uses nuestro sitio web. Nos reservamos el derecho de modificar estos términos en cualquier momento con previo aviso.",
          },
          {
            titleEn: "2. Nature of Our Service",
            titleEs: "2. Naturaleza de Nuestro Servicio",
            contentEn: "Sweeptakes.com is an independent editorial website that provides reviews, guides, and information about sweepstakes casinos. We are not a casino operator and do not offer any gambling or gaming services. We do not process payments or handle real money on behalf of users.",
            contentEs: "Sweeptakes.com es un sitio web editorial independiente que proporciona reseñas, guías e información sobre casinos sweepstakes. No somos un operador de casino y no ofrecemos ningún servicio de juego. No procesamos pagos ni manejamos dinero real en nombre de los usuarios.",
          },
          {
            titleEn: "3. Age Requirement",
            titleEs: "3. Requisito de Edad",
            contentEn: "You must be at least 18 years of age to use this website. By using Sweeptakes.com, you represent that you are at least 18 years old. Sweepstakes casinos require players to be 18+ (or 21+ in some states). Always verify age requirements with the specific casino.",
            contentEs: "Debes tener al menos 18 años de edad para usar este sitio web. Al usar Sweeptakes.com, declaras que tienes al menos 18 años. Los casinos sweepstakes requieren que los jugadores tengan 18+ años (o 21+ en algunos estados). Siempre verifica los requisitos de edad con el casino específico.",
          },
          {
            titleEn: "4. Editorial Independence",
            titleEs: "4. Independencia Editorial",
            contentEn: "Our reviews and rankings are based solely on editorial merit. While we may earn affiliate commissions from casino operators, these financial relationships never influence our ratings, rankings, or recommendations. We maintain strict editorial independence.",
            contentEs: "Nuestras reseñas y clasificaciones se basan únicamente en el mérito editorial. Aunque podemos ganar comisiones de afiliados de operadores de casino, estas relaciones financieras nunca influyen en nuestras calificaciones, clasificaciones ni recomendaciones. Mantenemos estricta independencia editorial.",
          },
          {
            titleEn: "5. Limitation of Liability",
            titleEs: "5. Limitación de Responsabilidad",
            contentEn: "Sweeptakes.com provides information for informational purposes only. We make no warranties about the accuracy, completeness, or suitability of the information provided. We are not responsible for any losses or damages resulting from your use of sweepstakes casinos based on our recommendations.",
            contentEs: "Sweeptakes.com proporciona información solo con fines informativos. No hacemos garantías sobre la precisión, integridad o idoneidad de la información proporcionada. No somos responsables de ninguna pérdida o daño resultante del uso de casinos sweepstakes basado en nuestras recomendaciones.",
          },
        ].map((section) => (
          <div key={section.titleEn} className="card-neon p-6">
            <h2 className="text-white font-black text-lg uppercase mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              {isEs ? section.titleEs : section.titleEn}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {isEs ? section.contentEs : section.contentEn}
            </p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

// ─── EDITORIAL POLICY ────────────────────────────────────────────────────────
export function EditorialPolicyPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";
  return (
    <PageLayout
      title={isEs ? "Política Editorial" : "Editorial Policy"}
      subtitle={isEs ? "Cómo mantenemos la independencia y la integridad en nuestras reseñas." : "How we maintain independence and integrity in our reviews."}
      badge={isEs ? "Transparencia" : "Transparency"}
      breadcrumbs={[{ label: "Legal" }, { label: isEs ? "Política Editorial" : "Editorial Policy" }]}
    >
      <div className="space-y-6">
        <div className="card-neon p-6" style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)" }}>
          <h2 className="text-[#D4AF37] font-black text-xl uppercase mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            {isEs ? "Nuestra Promesa" : "Our Promise"}
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {isEs
              ? "Sweeptakes.com opera de forma completamente independiente. No somos propiedad de ningún operador de casino, y ningún casino puede comprar una reseña positiva o una clasificación más alta. Nuestras calificaciones se basan únicamente en el mérito editorial."
              : "Sweeptakes.com operates completely independently. We are not owned by any casino operator, and no casino can buy a positive review or higher ranking. Our ratings are based solely on editorial merit."}
          </p>
        </div>
        {[
          {
            icon: <Shield size={18} className="text-[#1BAAFF]" />,
            titleEn: "Testing Methodology",
            titleEs: "Metodología de Pruebas",
            contentEn: "Every casino we review is personally tested by our editorial team. We create real accounts, claim welcome bonuses, play games across all categories, test customer support, and attempt redemptions where possible. We spend a minimum of 20 hours testing each platform before publishing a review.",
            contentEs: "Cada casino que reseñamos es probado personalmente por nuestro equipo editorial. Creamos cuentas reales, reclamamos bonos de bienvenida, jugamos juegos en todas las categorías, probamos el soporte al cliente e intentamos canjes donde es posible. Pasamos un mínimo de 20 horas probando cada plataforma antes de publicar una reseña.",
          },
          {
            icon: <FileText size={18} className="text-[#1BAAFF]" />,
            titleEn: "Affiliate Relationships",
            titleEs: "Relaciones de Afiliados",
            contentEn: "We are transparent about our affiliate relationships. When you click links to casino operators, we may earn a commission. This is how we fund our editorial operations. However, affiliate relationships never influence our ratings or recommendations. Casinos that pay us higher commissions do not receive higher ratings.",
            contentEs: "Somos transparentes sobre nuestras relaciones de afiliados. Cuando haces clic en enlaces a operadores de casino, podemos ganar una comisión. Así es como financiamos nuestras operaciones editoriales. Sin embargo, las relaciones de afiliados nunca influyen en nuestras calificaciones ni recomendaciones. Los casinos que nos pagan comisiones más altas no reciben calificaciones más altas.",
          },
          {
            icon: <BarChart2 size={18} className="text-[#1BAAFF]" />,
            titleEn: "Review Updates",
            titleEs: "Actualizaciones de Reseñas",
            contentEn: "The sweepstakes casino industry changes rapidly. We re-test and update every review on a monthly basis to ensure our information is current and accurate. Each review displays the date of the last update so readers know how fresh the information is.",
            contentEs: "La industria de casinos sweepstakes cambia rápidamente. Volvemos a probar y actualizar cada reseña mensualmente para asegurar que nuestra información sea actual y precisa. Cada reseña muestra la fecha de la última actualización para que los lectores sepan qué tan reciente es la información.",
          },
        ].map((item) => (
          <div key={item.titleEn} className="card-neon p-5">
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h3 className="text-white font-black text-base uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {isEs ? item.titleEs : item.titleEn}
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {isEs ? item.contentEs : item.contentEn}
            </p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

// ─── LEGAL DISCLAIMER ────────────────────────────────────────────────────────
export function DisclaimerPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";
  return (
    <PageLayout
      title={isEs ? "Aviso Legal" : "Legal Disclaimer"}
      subtitle={isEs ? "Información legal importante sobre Sweeptakes.com y los casinos sweepstakes." : "Important legal information about Sweeptakes.com and sweepstakes casinos."}
      badge="Legal"
      breadcrumbs={[{ label: "Legal" }, { label: isEs ? "Aviso Legal" : "Disclaimer" }]}
      accentColor="electric"
    >
      <div className="space-y-6">
        <div className="card-neon p-6">
          <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {isEs
              ? "Sweeptakes.com es un sitio web editorial independiente. No somos un operador de casino y no ofrecemos ningún servicio de juego. La información en este sitio es solo para fines informativos y no constituye asesoramiento legal, financiero o de juego."
              : "Sweeptakes.com is an independent editorial website. We are not a casino operator and do not offer any gambling services. The information on this site is for informational purposes only and does not constitute legal, financial, or gaming advice."}
          </p>
        </div>
        {[
          {
            titleEn: "Sweepstakes Casino Legality",
            titleEs: "Legalidad de los Casinos Sweepstakes",
            contentEn: "Sweepstakes casinos are legal in most US states under federal sweepstakes law (18 U.S.C. § 1302) and state sweepstakes statutes. However, laws vary by state and can change. Always verify the legal status of sweepstakes gaming in your specific jurisdiction before participating. This website does not provide legal advice.",
            contentEs: "Los casinos sweepstakes son legales en la mayoría de los estados de EE.UU. bajo la ley federal de sorteos (18 U.S.C. § 1302) y los estatutos estatales de sorteos. Sin embargo, las leyes varían según el estado y pueden cambiar. Siempre verifica el estado legal del juego sweepstakes en tu jurisdicción específica antes de participar. Este sitio web no proporciona asesoramiento legal.",
          },
          {
            titleEn: "Age Requirement",
            titleEs: "Requisito de Edad",
            contentEn: "You must be 18 years of age or older to participate in sweepstakes casino gaming. Some states may require players to be 21 or older. Always verify age requirements with the specific casino operator before participating.",
            contentEs: "Debes tener 18 años o más para participar en el juego de casinos sweepstakes. Algunos estados pueden requerir que los jugadores tengan 21 años o más. Siempre verifica los requisitos de edad con el operador de casino específico antes de participar.",
          },
          {
            titleEn: "Affiliate Disclosure",
            titleEs: "Divulgación de Afiliados",
            contentEn: "Sweeptakes.com participates in affiliate marketing programs with sweepstakes casino operators. We may receive compensation when you click links to these operators. This compensation does not influence our editorial ratings, rankings, or recommendations.",
            contentEs: "Sweeptakes.com participa en programas de marketing de afiliados con operadores de casinos sweepstakes. Podemos recibir compensación cuando haces clic en enlaces a estos operadores. Esta compensación no influye en nuestras calificaciones editoriales, clasificaciones ni recomendaciones.",
          },
          {
            titleEn: "Responsible Gaming",
            titleEs: "Juego Responsable",
            contentEn: "Sweepstakes casinos are for entertainment purposes only. If you or someone you know has a gambling problem, please seek help. Contact the National Council on Problem Gambling at 1-800-522-4700 or visit ncpgambling.org for free, confidential support.",
            contentEs: "Los casinos sweepstakes son solo para fines de entretenimiento. Si tú o alguien que conoces tiene un problema con el juego, busca ayuda. Contacta al Consejo Nacional sobre Juego Problemático al 1-800-522-4700 o visita ncpgambling.org para obtener apoyo gratuito y confidencial.",
          },
        ].map((section) => (
          <div key={section.titleEn} className="card-neon p-6">
            <h2 className="text-white font-black text-lg uppercase mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              {isEs ? section.titleEs : section.titleEn}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {isEs ? section.contentEs : section.contentEn}
            </p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

// ─── CONTACT US ──────────────────────────────────────────────────────────────
export function ContactPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";
  return (
    <PageLayout
      title={isEs ? "Contáctanos" : "Contact Us"}
      subtitle={isEs ? "¿Tienes preguntas, sugerencias o quieres anunciarte? Estamos aquí para ayudar." : "Have questions, suggestions, or want to advertise? We're here to help."}
      badge={isEs ? "Contacto" : "Contact"}
      breadcrumbs={[{ label: isEs ? "Contáctanos" : "Contact Us" }]}
      accentColor="electric"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            icon: <Mail size={20} className="text-[#1BAAFF]" />,
            titleEn: "Editorial Team",
            titleEs: "Equipo Editorial",
            descEn: "For questions about our reviews, rankings, or editorial content.",
            descEs: "Para preguntas sobre nuestras reseñas, clasificaciones o contenido editorial.",
            contact: "editorial@sweeptakes.com",
          },
          {
            icon: <Megaphone size={20} className="text-[#D4AF37]" />,
            titleEn: "Advertising & Partnerships",
            titleEs: "Publicidad y Asociaciones",
            descEn: "For advertising opportunities and partnership inquiries.",
            descEs: "Para oportunidades de publicidad e inquietudes de asociación.",
            contact: "ads@sweeptakes.com",
          },
          {
            icon: <Shield size={20} className="text-[#1BAAFF]" />,
            titleEn: "Legal & Compliance",
            titleEs: "Legal y Cumplimiento",
            descEn: "For legal inquiries, DMCA notices, or compliance matters.",
            descEs: "Para consultas legales, avisos DMCA o asuntos de cumplimiento.",
            contact: "legal@sweeptakes.com",
          },
          {
            icon: <Users size={20} className="text-[#D4AF37]" />,
            titleEn: "General Support",
            titleEs: "Soporte General",
            descEn: "For general questions and user support.",
            descEs: "Para preguntas generales y soporte al usuario.",
            contact: "support@sweeptakes.com",
          },
        ].map((item) => (
          <div key={item.titleEn} className="card-neon p-5">
            <div className="flex items-center gap-3 mb-2">
              {item.icon}
              <h3 className="text-white font-black text-base uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {isEs ? item.titleEs : item.titleEn}
              </h3>
            </div>
            <p className="text-gray-400 text-sm mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {isEs ? item.descEs : item.descEn}
            </p>
            <a href={`mailto:${item.contact}`} className="text-[#1BAAFF] text-sm hover:underline" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {item.contact}
            </a>
          </div>
        ))}
      </div>

      <div className="card-neon p-6 mt-6">
        <div className="flex items-center gap-3 mb-3">
          <MapPin size={18} className="text-[#D4AF37]" />
          <h3 className="text-white font-black text-base uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            {isEs ? "Dirección" : "Address"}
          </h3>
        </div>
        <p className="text-gray-300 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Sweeptakes.com Editorial<br />
          1234 Digital Media Blvd, Suite 100<br />
          Las Vegas, NV 89101<br />
          United States
        </p>
      </div>
    </PageLayout>
  );
}

// ─── ABOUT US ────────────────────────────────────────────────────────────────
export function AboutPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";
  return (
    <PageLayout
      title={isEs ? "Sobre Sweeptakes.com" : "About Sweeptakes.com"}
      subtitle={isEs ? "La guía de confianza para casinos sweepstakes legales en Estados Unidos desde 2022." : "The trusted guide to legal sweepstakes casinos in the United States since 2022."}
      badge={isEs ? "Nuestra Historia" : "Our Story"}
      breadcrumbs={[{ label: isEs ? "Empresa" : "About" }, { label: isEs ? "Sobre Nosotros" : "About Us" }]}
    >
      <div className="space-y-6">
        <div className="card-neon p-6">
          <p className="text-gray-300 text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {isEs
              ? "Sweeptakes.com nació en 2022 cuando nuestro fundador, un veterano de la industria del juego con más de 15 años de experiencia, reconoció una brecha crítica en el mercado: los jugadores estadounidenses necesitaban una fuente confiable e independiente para navegar el complejo mundo de los casinos sweepstakes."
              : "Sweeptakes.com was founded in 2022 when our founder, a gaming industry veteran with over 15 years of experience, recognized a critical gap in the market: US players needed a trustworthy, independent source to navigate the complex world of sweepstakes casinos."}
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {isEs
              ? "Lo que comenzó como un blog personal se convirtió rápidamente en el recurso de referencia para millones de jugadores en todo Estados Unidos. Hoy, nuestro equipo de 12 expertos en casino, abogados especializados en juego y periodistas de investigación trabaja incansablemente para proporcionar las reseñas más precisas y actualizadas de la industria."
              : "What started as a personal blog quickly grew into the go-to resource for millions of players across the United States. Today, our team of 12 casino experts, gaming attorneys, and investigative journalists works tirelessly to provide the most accurate and up-to-date reviews in the industry."}
          </p>
          <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {isEs
              ? "Nuestra misión es simple: empoderar a los jugadores estadounidenses con la información que necesitan para tomar decisiones informadas sobre los casinos sweepstakes. Creemos en la transparencia total, la independencia editorial y el juego responsable."
              : "Our mission is simple: empower US players with the information they need to make informed decisions about sweepstakes casinos. We believe in complete transparency, editorial independence, and responsible gaming."}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { numEn: "4M+", numEs: "4M+", labelEn: "Monthly Readers", labelEs: "Lectores Mensuales" },
            { numEn: "11", numEs: "11", labelEn: "Casinos Reviewed", labelEs: "Casinos Revisados" },
            { numEn: "4 yrs", numEs: "4 años", labelEn: "In Operation", labelEs: "En Operación" },
            { numEn: "12", numEs: "12", labelEn: "Team Members", labelEs: "Miembros del Equipo" },
          ].map((stat) => (
            <div key={stat.labelEn} className="card-neon p-4 text-center">
              <div className="text-3xl font-black text-[#D4AF37] mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {isEs ? stat.numEs : stat.numEn}
              </div>
              <div className="text-gray-400 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {isEs ? stat.labelEs : stat.labelEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

// ─── EDITORIAL TEAM ──────────────────────────────────────────────────────────
export function TeamPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";

  const team = [
    {
      initials: "JH",
      color: "#1BAAFF",
      nameEn: "James Hartley",
      nameEs: "James Hartley",
      roleEn: "Founder & Lead Casino Analyst",
      roleEs: "Fundador y Analista Principal de Casinos",
      bioEn: "James has over 15 years of experience in the gaming industry, having worked as a casino floor manager, online gaming consultant, and investigative journalist. He founded Sweeptakes.com in 2022 with the mission of providing independent, trustworthy reviews of sweepstakes casinos.",
      bioEs: "James tiene más de 15 años de experiencia en la industria del juego, habiendo trabajado como gerente de piso de casino, consultor de juego en línea y periodista de investigación. Fundó Sweeptakes.com en 2022 con la misión de proporcionar reseñas independientes y confiables de casinos sweepstakes.",
    },
    {
      initials: "SC",
      color: "#D4AF37",
      nameEn: "Sarah Chen",
      nameEs: "Sarah Chen",
      roleEn: "Legal & Compliance Editor",
      roleEs: "Editora Legal y de Cumplimiento",
      bioEn: "Sarah is a former gaming attorney with 8 years of experience specializing in sweepstakes law and state gaming regulations. She ensures all our content is legally accurate and up-to-date with the latest regulatory changes.",
      bioEs: "Sarah es una exabogada de juegos con 8 años de experiencia especializada en ley de sorteos y regulaciones estatales de juego. Asegura que todo nuestro contenido sea legalmente preciso y esté actualizado con los últimos cambios regulatorios.",
    },
    {
      initials: "MR",
      color: "#E91E63",
      nameEn: "Marcus Rodriguez",
      nameEs: "Marcus Rodríguez",
      roleEn: "Bonus & Promotions Specialist",
      roleEs: "Especialista en Bonos y Promociones",
      bioEn: "Marcus specializes in analyzing bonus structures, wagering requirements, and promotional offers across all sweepstakes platforms. His deep knowledge of bonus mechanics helps players maximize their free coin earnings.",
      bioEs: "Marcus se especializa en analizar estructuras de bonos, requisitos de apuesta y ofertas promocionales en todas las plataformas sweepstakes. Su profundo conocimiento de las mecánicas de bonos ayuda a los jugadores a maximizar sus ganancias de monedas gratis.",
    },
    {
      initials: "AL",
      color: "#00C853",
      nameEn: "Ana López",
      nameEs: "Ana López",
      roleEn: "Spanish Content Editor",
      roleEs: "Editora de Contenido en Español",
      bioEn: "Ana leads our Spanish-language content strategy, ensuring that our US Latino audience receives the same quality of information as English-speaking players. She has 6 years of experience in bilingual digital media.",
      bioEs: "Ana lidera nuestra estrategia de contenido en español, asegurando que nuestra audiencia latina de EE.UU. reciba la misma calidad de información que los jugadores de habla inglesa. Tiene 6 años de experiencia en medios digitales bilingües.",
    },
  ];

  return (
    <PageLayout
      title={isEs ? "Nuestro Equipo Editorial" : "Our Editorial Team"}
      subtitle={isEs ? "Los expertos detrás de las reseñas más confiables de casinos sweepstakes en EE.UU." : "The experts behind the most trusted sweepstakes casino reviews in the USA."}
      badge={isEs ? "El Equipo" : "The Team"}
      breadcrumbs={[{ label: isEs ? "Empresa" : "About" }, { label: isEs ? "Equipo" : "Team" }]}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {team.map((member) => (
          <div key={member.nameEn} className="card-neon p-6">
            <div className="flex items-start gap-4 mb-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", background: `${member.color}22`, border: `2px solid ${member.color}44` }}
              >
                {member.initials}
              </div>
              <div>
                <h3 className="text-white font-black text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {isEs ? member.nameEs : member.nameEn}
                </h3>
                <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wide" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {isEs ? member.roleEs : member.roleEn}
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {isEs ? member.bioEs : member.bioEn}
            </p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

// ─── HOW WE RANK ─────────────────────────────────────────────────────────────
export function MethodologyPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";
  return (
    <PageLayout
      title={isEs ? "Cómo Clasificamos Casinos" : "How We Rank Casinos"}
      subtitle={isEs ? "Nuestra metodología de puntuación transparente y rigurosa." : "Our transparent and rigorous scoring methodology."}
      badge={isEs ? "Metodología" : "Methodology"}
      breadcrumbs={[{ label: isEs ? "Empresa" : "About" }, { label: isEs ? "Metodología" : "Methodology" }]}
    >
      <div className="space-y-6">
        <div className="card-neon p-6">
          <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {isEs
              ? "Cada casino que aparece en Sweeptakes.com ha pasado por nuestro proceso de revisión de 6 criterios. Nuestro equipo pasa un mínimo de 20 horas probando cada plataforma antes de publicar una calificación. Aquí está exactamente cómo calculamos nuestras puntuaciones:"
              : "Every casino featured on Sweeptakes.com has gone through our 6-criteria review process. Our team spends a minimum of 20 hours testing each platform before publishing a rating. Here's exactly how we calculate our scores:"}
          </p>
        </div>
        {[
          { pct: 25, titleEn: "Legal Compliance (25%)", titleEs: "Cumplimiento Legal (25%)", descEn: "We verify that every casino operates under valid sweepstakes law, is accessible in the states it claims, and maintains proper no-purchase-necessary policies.", descEs: "Verificamos que cada casino opere bajo la ley de sorteos válida, sea accesible en los estados que afirma, y mantenga políticas adecuadas de sin-compra-necesaria." },
          { pct: 20, titleEn: "Bonus Value (20%)", titleEs: "Valor del Bono (20%)", descEn: "We evaluate welcome offers, daily bonuses, and the real value of free Sweep Coins. We calculate the actual dollar value of bonuses and compare them across platforms.", descEs: "Evaluamos las ofertas de bienvenida, bonos diarios y el valor real de las Sweep Coins gratuitas. Calculamos el valor real en dólares de los bonos y los comparamos entre plataformas." },
          { pct: 20, titleEn: "Game Selection (20%)", titleEs: "Selección de Juegos (20%)", descEn: "Quality and quantity of slots, table games, live dealer, and specialty games. We play a representative sample of games in each category.", descEs: "Calidad y cantidad de slots, juegos de mesa, crupier en vivo y juegos especiales. Jugamos una muestra representativa de juegos en cada categoría." },
          { pct: 15, titleEn: "Redemption Speed (15%)", titleEs: "Velocidad de Canje (15%)", descEn: "How fast and easy it is to convert Sweep Coins into real cash prizes. We test the actual redemption process and time the processing.", descEs: "Qué tan rápido y fácil es convertir Sweep Coins en premios en efectivo reales. Probamos el proceso de canje real y medimos el tiempo de procesamiento." },
          { pct: 10, titleEn: "User Experience (10%)", titleEs: "Experiencia de Usuario (10%)", descEn: "Mobile performance, site speed, registration process, and customer support quality. We test on multiple devices and browsers.", descEs: "Rendimiento móvil, velocidad del sitio, proceso de registro y calidad del soporte al cliente. Probamos en múltiples dispositivos y navegadores." },
          { pct: 10, titleEn: "Ongoing Updates (10%)", titleEs: "Actualizaciones Continuas (10%)", descEn: "We re-test and update every review monthly to ensure accuracy. Casinos that improve over time are rewarded with higher scores.", descEs: "Volvemos a probar y actualizar cada reseña mensualmente para garantizar la precisión. Los casinos que mejoran con el tiempo son recompensados con puntuaciones más altas." },
        ].map((item) => (
          <div key={item.titleEn} className="card-neon p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-black text-base uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {isEs ? item.titleEs : item.titleEn}
              </h3>
              <span className="text-[#D4AF37] font-black text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{item.pct}%</span>
            </div>
            <div className="w-full h-1.5 rounded-full mb-3" style={{ background: "rgba(255,255,255,0.1)" }}>
              <div className="h-full rounded-full" style={{ width: `${item.pct * 4}%`, background: "linear-gradient(90deg, #D4AF37, #F0CC5A)" }} />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {isEs ? item.descEs : item.descEn}
            </p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

// ─── ADVERTISE WITH US ───────────────────────────────────────────────────────
export function AdvertisePage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";
  return (
    <PageLayout
      title={isEs ? "Anúnciate con Nosotros" : "Advertise With Us"}
      subtitle={isEs ? "Llega a millones de jugadores de casinos sweepstakes en EE.UU." : "Reach millions of sweepstakes casino players across the USA."}
      badge={isEs ? "Publicidad" : "Advertising"}
      breadcrumbs={[{ label: isEs ? "Empresa" : "About" }, { label: isEs ? "Publicidad" : "Advertise" }]}
    >
      <div className="space-y-6">
        <div className="card-neon p-6">
          <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {isEs
              ? "Sweeptakes.com atrae a más de 4 millones de lectores mensuales que buscan activamente información sobre casinos sweepstakes. Nuestra audiencia es altamente comprometida, con una tasa de conversión superior al promedio de la industria."
              : "Sweeptakes.com attracts over 4 million monthly readers who are actively seeking information about sweepstakes casinos. Our audience is highly engaged, with above-industry-average conversion rates."}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { titleEn: "Casino Reviews", titleEs: "Reseñas de Casinos", descEn: "Get your casino featured in our top-ranked review section with a full editorial review.", descEs: "Haz que tu casino aparezca en nuestra sección de reseñas mejor clasificadas con una reseña editorial completa." },
            { titleEn: "Banner Advertising", titleEs: "Publicidad de Banners", descEn: "High-visibility banner placements across our most-trafficked pages.", descEs: "Ubicaciones de banners de alta visibilidad en nuestras páginas con más tráfico." },
            { titleEn: "Sponsored Content", titleEs: "Contenido Patrocinado", descEn: "Clearly labeled sponsored articles that reach our engaged readership.", descEs: "Artículos patrocinados claramente etiquetados que llegan a nuestra audiencia comprometida." },
          ].map((item) => (
            <div key={item.titleEn} className="card-neon p-5">
              <h3 className="text-white font-black text-base uppercase mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {isEs ? item.titleEs : item.titleEn}
              </h3>
              <p className="text-gray-300 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {isEs ? item.descEs : item.descEn}
              </p>
            </div>
          ))}
        </div>
        <div className="card-neon p-6 text-center" style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)" }}>
          <p className="text-gray-300 text-sm mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {isEs ? "Para consultas de publicidad y asociaciones:" : "For advertising and partnership inquiries:"}
          </p>
          <a href="mailto:ads@sweeptakes.com" className="btn-gold inline-flex items-center gap-2 px-6 py-3">
            <Mail size={16} />
            ads@sweeptakes.com
          </a>
        </div>
      </div>
    </PageLayout>
  );
}

// ─── SITEMAP ─────────────────────────────────────────────────────────────────
export function SitemapPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";

  const sections = [
    {
      titleEn: "Casino Reviews", titleEs: "Reseñas de Casinos",
      links: [
        { href: "/review/stake-us", labelEn: "Stake.us Review", labelEs: "Reseña de Stake.us" },
        { href: "/review/realprice", labelEn: "RealPrize Review", labelEs: "Reseña de RealPrize" },
        { href: "/review/crown-coins", labelEn: "Crown Coins Review", labelEs: "Reseña de Crown Coins" },
        { href: "/review/mcluck", labelEn: "McLuck Review", labelEs: "Reseña de McLuck" },
        { href: "/review/wow-vegas", labelEn: "WOW Vegas Review", labelEs: "Reseña de WOW Vegas" },
        { href: "/review/lonestar", labelEn: "LoneStar Review", labelEs: "Reseña de LoneStar" },
        { href: "/review/fortuna", labelEn: "Fortuna Review", labelEs: "Reseña de Fortuna" },
        { href: "/review/hello-millions", labelEn: "Hello Millions Review", labelEs: "Reseña de Hello Millions" },
        { href: "/review/spree", labelEn: "Spree Review", labelEs: "Reseña de Spree" },
        { href: "/review/funrize", labelEn: "Funrize Review", labelEs: "Reseña de Funrize" },
        { href: "/review/mega-bonanza", labelEn: "Mega Bonanza Review", labelEs: "Reseña de Mega Bonanza" },
      ],
    },
    {
      titleEn: "Guides", titleEs: "Guías",
      links: [
        { href: "/guides/what-are-sweepstakes-casinos", labelEn: "What Are Sweepstakes Casinos?", labelEs: "¿Qué Son los Casinos Sweepstakes?" },
        { href: "/guides/free-coins", labelEn: "How to Claim Free Coins", labelEs: "Cómo Reclamar Monedas Gratis" },
        { href: "/guides/redemption", labelEn: "Redemption Guide", labelEs: "Guía de Canje" },
        { href: "/guides/bonuses", labelEn: "Bonuses & Promotions", labelEs: "Bonos y Promociones" },
        { href: "/guides/responsible-play", labelEn: "Responsible Play", labelEs: "Juego Responsable" },
      ],
    },
    {
      titleEn: "Legal", titleEs: "Legal",
      links: [
        { href: "/legal/disclaimer", labelEn: "Legal Disclaimer", labelEs: "Aviso Legal" },
        { href: "/legal/editorial-policy", labelEn: "Editorial Policy", labelEs: "Política Editorial" },
        { href: "/legal/privacy", labelEn: "Privacy Policy", labelEs: "Política de Privacidad" },
        { href: "/legal/terms", labelEn: "Terms of Service", labelEs: "Términos de Servicio" },
      ],
    },
    {
      titleEn: "About", titleEs: "Empresa",
      links: [
        { href: "/about", labelEn: "About Sweeptakes.com", labelEs: "Sobre Sweeptakes.com" },
        { href: "/about/team", labelEn: "Our Editorial Team", labelEs: "Nuestro Equipo Editorial" },
        { href: "/about/methodology", labelEn: "How We Rank Casinos", labelEs: "Cómo Clasificamos Casinos" },
        { href: "/advertise", labelEn: "Advertise With Us", labelEs: "Anúnciate con Nosotros" },
        { href: "/contact", labelEn: "Contact Us", labelEs: "Contáctanos" },
      ],
    },
  ];

  return (
    <PageLayout
      title={isEs ? "Mapa del Sitio" : "Sitemap"}
      subtitle={isEs ? "Todas las páginas de Sweeptakes.com en un solo lugar." : "All pages of Sweeptakes.com in one place."}
      badge={isEs ? "Navegación" : "Navigation"}
      breadcrumbs={[{ label: isEs ? "Mapa del Sitio" : "Sitemap" }]}
    >
      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <div key={section.titleEn} className="card-neon p-5">
            <div className="flex items-center gap-2 mb-4">
              <Globe size={16} className="text-[#D4AF37]" />
              <h3 className="text-white font-black text-base uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {isEs ? section.titleEs : section.titleEn}
              </h3>
            </div>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[#1BAAFF] text-sm hover:text-[#D4AF37] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {isEs ? link.labelEs : link.labelEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
