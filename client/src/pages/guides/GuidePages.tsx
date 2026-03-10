/*
 * GUIDE PAGES — Sweeptakes.com
 * All guide pages with full EN/ES content
 */
import { BookOpen, Gift, CreditCard, Star, Heart, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

// ─── WHAT ARE SWEEPSTAKES CASINOS ────────────────────────────────────────────
export function WhatArePage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";

  return (
    <PageLayout
      title={isEs ? "¿Qué Son los Casinos Sweepstakes?" : "What Are Sweepstakes Casinos?"}
      subtitle={isEs ? "La guía completa para entender cómo funcionan los casinos sweepstakes en EE.UU." : "The complete guide to understanding how sweepstakes casinos work in the USA."}
      badge={isEs ? "Guía Completa" : "Complete Guide"}
      breadcrumbs={[{ label: isEs ? "Guías" : "Guides", href: "/guides/what-are-sweepstakes-casinos" }, { label: isEs ? "¿Qué Son?" : "What Are?" }]}
    >
      <div className="space-y-8">
        {/* Intro */}
        <div className="card-neon p-6">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen size={20} className="text-[#1BAAFF]" />
            <h2 className="text-white font-black text-xl uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              {isEs ? "La Definición Simple" : "The Simple Definition"}
            </h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {isEs
              ? "Los casinos sweepstakes son plataformas de juego en línea que operan bajo la ley federal de sorteos de EE.UU. A diferencia de los casinos en línea tradicionales, no requieren dinero real para jugar. En cambio, utilizan un sistema de dos monedas: Monedas de Oro (para diversión) y Sweep Coins (canjeables por premios reales)."
              : "Sweepstakes casinos are online gaming platforms that operate under US federal sweepstakes law. Unlike traditional online casinos, they don't require real money to play. Instead, they use a two-currency system: Gold Coins (for fun) and Sweep Coins (redeemable for real prizes)."}
          </p>
          <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {isEs
              ? "La clave legal es que siempre debe existir un método de entrada gratuita. Por ley, cualquier persona puede solicitar Sweep Coins gratis por correo postal, sin necesidad de comprar nada. Esto es lo que hace que los casinos sweepstakes sean legales en la mayoría de los estados de EE.UU."
              : "The legal key is that a free method of entry must always exist. By law, anyone can request free Sweep Coins by postal mail, without needing to purchase anything. This is what makes sweepstakes casinos legal in most US states."}
          </p>
        </div>

        {/* Two Currency System */}
        <div className="card-neon p-6">
          <h2 className="text-white font-black text-xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            {isEs ? "El Sistema de Dos Monedas" : "The Two-Currency System"}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl" style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)" }}>
              <h3 className="text-[#D4AF37] font-bold text-base mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                🪙 {isEs ? "Monedas de Oro (Gold Coins)" : "Gold Coins"}
              </h3>
              <ul className="space-y-1.5">
                {(isEs ? [
                  "Solo para entretenimiento, sin valor de canje",
                  "Se obtienen gratis al registrarse y con bonos diarios",
                  "Se pueden comprar paquetes opcionales",
                  "Nunca expiran",
                ] : [
                  "For entertainment only — no redemption value",
                  "Received free on sign-up and daily bonuses",
                  "Optional packages can be purchased",
                  "Never expire",
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <CheckCircle size={12} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: "rgba(27,170,255,0.08)", border: "1px solid rgba(27,170,255,0.2)" }}>
              <h3 className="text-[#1BAAFF] font-bold text-base mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                💎 {isEs ? "Sweep Coins (SC)" : "Sweep Coins (SC)"}
              </h3>
              <ul className="space-y-1.5">
                {(isEs ? [
                  "Canjeables por premios en efectivo reales",
                  "Se obtienen gratis con bonos de bienvenida",
                  "Disponibles por correo postal (sin compra)",
                  "Valor típico: 1 SC = $1 USD",
                ] : [
                  "Redeemable for real cash prizes",
                  "Received free with welcome bonuses",
                  "Available by postal mail (no purchase)",
                  "Typical value: 1 SC = $1 USD",
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <CheckCircle size={12} className="text-[#1BAAFF] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Why Legal */}
        <div className="card-neon p-6">
          <h2 className="text-white font-black text-xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            {isEs ? "¿Por Qué Son Legales?" : "Why Are They Legal?"}
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {isEs
              ? "Los casinos sweepstakes operan bajo 18 U.S.C. § 1302 y las leyes estatales de sorteos. La legalidad se basa en tres pilares fundamentales:"
              : "Sweepstakes casinos operate under 18 U.S.C. § 1302 and state sweepstakes statutes. Legality rests on three fundamental pillars:"}
          </p>
          <div className="space-y-3">
            {(isEs ? [
              { title: "1. Sin Compra Necesaria", desc: "Siempre debe existir un método de entrada gratuita. Los jugadores pueden solicitar Sweep Coins por correo sin gastar dinero." },
              { title: "2. Elemento de Azar", desc: "Los juegos deben tener un elemento de azar, lo que los clasifica como sorteos bajo la ley federal." },
              { title: "3. Premios Reales", desc: "Los Sweep Coins se pueden canjear por premios reales, lo que constituye la 'consideración' del sorteo." },
            ] : [
              { title: "1. No Purchase Necessary", desc: "A free method of entry must always exist. Players can request Sweep Coins by mail without spending money." },
              { title: "2. Element of Chance", desc: "Games must have an element of chance, classifying them as sweepstakes under federal law." },
              { title: "3. Real Prizes", desc: "Sweep Coins can be redeemed for real prizes, constituting the sweepstakes 'consideration'." },
            ]).map((item) => (
              <div key={item.title} className="p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <h4 className="text-white font-bold text-sm mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{item.title}</h4>
                <p className="text-gray-400 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-6">
          <Link href="/">
            <button className="btn-gold px-8 py-3 flex items-center gap-2 mx-auto">
              {isEs ? "Ver los Mejores Casinos Sweepstakes" : "View Top Sweepstakes Casinos"}
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}

// ─── FREE COINS GUIDE ────────────────────────────────────────────────────────
export function FreeCoinsPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";

  const methods = isEs ? [
    { icon: "🎁", title: "Bono de Bienvenida", desc: "Recibe Monedas de Oro y Sweep Coins gratis al registrarte. Sin depósito requerido. La mayoría de los casinos ofrecen entre 1 y 10 SC de bienvenida." },
    { icon: "📅", title: "Bono de Inicio de Sesión Diario", desc: "Inicia sesión cada día para reclamar monedas gratis. Cuanto más larga sea tu racha de días consecutivos, mayor será la recompensa." },
    { icon: "✉️", title: "Solicitud por Correo Postal", desc: "Por ley federal, siempre puedes solicitar Sweep Coins gratis enviando una solicitud manuscrita por correo. Incluye tu nombre, dirección y nombre de usuario." },
    { icon: "👥", title: "Programa de Referidos", desc: "Invita amigos y gana monedas gratis cuando se registren y jueguen. Algunos casinos ofrecen hasta 1 SC por referido." },
    { icon: "📱", title: "Redes Sociales", desc: "Sigue a los casinos en Facebook, Instagram y Twitter. Regularmente publican códigos de bonos y sorteos de monedas gratis." },
    { icon: "⭐", title: "Programa VIP", desc: "A medida que juegas, acumulas puntos de lealtad que se convierten en bonos exclusivos y canjes más rápidos." },
  ] : [
    { icon: "🎁", title: "Welcome Bonus", desc: "Receive free Gold Coins and Sweep Coins just for signing up. No deposit required. Most casinos offer between 1 and 10 SC as a welcome gift." },
    { icon: "📅", title: "Daily Login Bonus", desc: "Log in every day to claim free coins. The longer your consecutive day streak, the bigger the reward." },
    { icon: "✉️", title: "Postal Mail Request", desc: "By federal law, you can always request free Sweep Coins by mailing a handwritten request. Include your name, address, and username." },
    { icon: "👥", title: "Referral Program", desc: "Invite friends and earn free coins when they sign up and play. Some casinos offer up to 1 SC per referral." },
    { icon: "📱", title: "Social Media", desc: "Follow casinos on Facebook, Instagram, and Twitter. They regularly post bonus codes and free coin giveaways." },
    { icon: "⭐", title: "VIP Program", desc: "As you play, you accumulate loyalty points that convert into exclusive bonuses and faster redemptions." },
  ];

  return (
    <PageLayout
      title={isEs ? "Cómo Reclamar Monedas Gratis" : "How to Claim Free Coins"}
      subtitle={isEs ? "6 métodos garantizados para obtener Sweep Coins gratis sin gastar dinero." : "6 guaranteed methods to get free Sweep Coins without spending money."}
      badge={isEs ? "Guía de Bonos" : "Bonus Guide"}
      breadcrumbs={[{ label: isEs ? "Guías" : "Guides" }, { label: isEs ? "Monedas Gratis" : "Free Coins" }]}
    >
      <div className="space-y-4">
        {methods.map((m, i) => (
          <div key={i} className="card-neon p-5 flex gap-4">
            <div className="text-3xl flex-shrink-0">{m.icon}</div>
            <div>
              <h3 className="text-white font-black text-base uppercase mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{m.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{m.desc}</p>
            </div>
          </div>
        ))}
        <div className="card-neon p-6 mt-6" style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)" }}>
          <p className="text-[#D4AF37] font-bold text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            💡 {isEs ? "Consejo Pro de Mr. Sweeps:" : "Mr. Sweeps' Pro Tip:"}
          </p>
          <p className="text-gray-300 text-sm mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {isEs
              ? "¡Regístrate en múltiples casinos sweepstakes para maximizar tu colección de monedas gratis! Cada plataforma ofrece su propio bono de bienvenida, y como todos son gratis para unirse, ¡no hay razón para no reclamarlos todos!"
              : "Sign up for multiple sweepstakes casinos to maximize your free coin collection! Each platform offers its own welcome bonus, and since they're all free to join, there's no reason not to claim them all!"}
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

// ─── REDEMPTION GUIDE ────────────────────────────────────────────────────────
export function RedemptionPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";

  const steps = isEs ? [
    { step: "01", title: "Acumula Sweep Coins", desc: "Juega con Sweep Coins en los juegos del casino. Cada victoria aumenta tu saldo de SC." },
    { step: "02", title: "Alcanza el Mínimo", desc: "La mayoría de los casinos requieren un mínimo de $20-$150 en SC para iniciar un canje. Verifica el mínimo de tu casino." },
    { step: "03", title: "Verifica tu Identidad", desc: "Para el primer canje, deberás verificar tu identidad con un documento oficial. Este proceso suele tomar 1-2 días." },
    { step: "04", title: "Solicita el Canje", desc: "Ve a la sección de canje de tu cuenta, selecciona el monto y el método de pago (transferencia bancaria, PayPal, cripto)." },
    { step: "05", title: "Espera el Procesamiento", desc: "Los tiempos de procesamiento varían: desde el mismo día (Fortuna) hasta 7 días hábiles (algunos casinos)." },
    { step: "06", title: "Recibe tu Premio", desc: "Los fondos llegan a tu cuenta bancaria, PayPal o cartera de criptomonedas según el método elegido." },
  ] : [
    { step: "01", title: "Accumulate Sweep Coins", desc: "Play with Sweep Coins in casino games. Every win increases your SC balance." },
    { step: "02", title: "Reach the Minimum", desc: "Most casinos require a minimum of $20-$150 in SC to initiate a redemption. Check your casino's minimum." },
    { step: "03", title: "Verify Your Identity", desc: "For the first redemption, you'll need to verify your identity with an official document. This process usually takes 1-2 days." },
    { step: "04", title: "Request the Redemption", desc: "Go to the redemption section of your account, select the amount and payment method (bank transfer, PayPal, crypto)." },
    { step: "05", title: "Wait for Processing", desc: "Processing times vary: from same day (Fortuna) to 7 business days (some casinos)." },
    { step: "06", title: "Receive Your Prize", desc: "Funds arrive in your bank account, PayPal, or cryptocurrency wallet depending on the chosen method." },
  ];

  return (
    <PageLayout
      title={isEs ? "Guía de Canje" : "Redemption Guide"}
      subtitle={isEs ? "Cómo convertir tus Sweep Coins en premios en efectivo reales, paso a paso." : "How to convert your Sweep Coins into real cash prizes, step by step."}
      badge={isEs ? "Guía Paso a Paso" : "Step-by-Step Guide"}
      breadcrumbs={[{ label: isEs ? "Guías" : "Guides" }, { label: isEs ? "Canje" : "Redemption" }]}
    >
      <div className="space-y-4">
        {steps.map((s) => (
          <div key={s.step} className="card-neon p-5 flex gap-4">
            <div className="text-3xl font-black text-[#D4AF37] flex-shrink-0 w-12 text-center" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.step}</div>
            <div>
              <h3 className="text-white font-black text-base uppercase mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>{s.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.desc}</p>
            </div>
          </div>
        ))}

        {/* Comparison Table */}
        <div className="card-neon p-6 mt-4">
          <h3 className="text-white font-black text-lg uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            {isEs ? "Comparación de Canjes por Casino" : "Redemption Comparison by Casino"}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-gray-400 py-2 pr-4">{isEs ? "Casino" : "Casino"}</th>
                  <th className="text-left text-gray-400 py-2 pr-4">{isEs ? "Mínimo" : "Minimum"}</th>
                  <th className="text-left text-gray-400 py-2">{isEs ? "Tiempo" : "Time"}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Fortuna", min: "$20", time: isEs ? "Mismo día" : "Same day" },
                  { name: "McLuck", min: "$25", time: "1-2 days" },
                  { name: "Stake.us", min: "$100", time: "1-3 days" },
                  { name: "RealPrize", min: "$50", time: "2-5 days" },
                  { name: "Crown Coins", min: "$150", time: "3-7 days" },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-white/5">
                    <td className="text-white py-2 pr-4 font-semibold">{row.name}</td>
                    <td className="text-[#D4AF37] py-2 pr-4">{row.min}</td>
                    <td className="text-gray-300 py-2">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

// ─── BONUSES & PROMOTIONS ────────────────────────────────────────────────────
export function BonusesPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";

  return (
    <PageLayout
      title={isEs ? "Bonos y Promociones" : "Bonuses & Promotions"}
      subtitle={isEs ? "Todo lo que necesitas saber sobre los bonos de casinos sweepstakes en 2026." : "Everything you need to know about sweepstakes casino bonuses in 2026."}
      badge={isEs ? "Guía de Bonos 2026" : "Bonus Guide 2026"}
      breadcrumbs={[{ label: isEs ? "Guías" : "Guides" }, { label: isEs ? "Bonos" : "Bonuses" }]}
    >
      <div className="space-y-6">
        <div className="card-neon p-6">
          <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {isEs
              ? "Los bonos de casinos sweepstakes son una de las mayores ventajas de estas plataformas. A diferencia de los casinos en línea tradicionales, los casinos sweepstakes ofrecen bonos genuinamente gratuitos sin requisitos de apuesta ocultos. Aquí está todo lo que necesitas saber para maximizar tus recompensas."
              : "Sweepstakes casino bonuses are one of the biggest advantages of these platforms. Unlike traditional online casinos, sweepstakes casinos offer genuinely free bonuses with no hidden wagering requirements. Here's everything you need to know to maximize your rewards."}
          </p>
        </div>

        {[
          {
            icon: <Gift size={20} className="text-[#D4AF37]" />,
            titleEn: "Welcome Bonuses", titleEs: "Bonos de Bienvenida",
            descEn: "The most valuable bonus type. Top casinos offer up to 250,000 Gold Coins and 10 Sweep Coins just for creating a free account. No deposit, no credit card, no strings attached. Always claim your welcome bonus before playing for the first time.",
            descEs: "El tipo de bono más valioso. Los mejores casinos ofrecen hasta 250,000 Monedas de Oro y 10 Sweep Coins solo por crear una cuenta gratuita. Sin depósito, sin tarjeta de crédito, sin condiciones. Siempre reclama tu bono de bienvenida antes de jugar por primera vez.",
          },
          {
            icon: <Star size={20} className="text-[#D4AF37]" />,
            titleEn: "Daily Login Bonuses", titleEs: "Bonos Diarios de Inicio de Sesión",
            descEn: "Log in every day to claim free coins. Most casinos offer escalating rewards for consecutive daily logins — the longer your streak, the bigger the bonus. Some casinos offer 10x bonuses for 30-day streaks.",
            descEs: "Inicia sesión cada día para reclamar monedas gratis. La mayoría de los casinos ofrecen recompensas escalonadas por inicios de sesión diarios consecutivos: cuanto más larga sea tu racha, mayor será el bono. Algunos casinos ofrecen bonos 10x por rachas de 30 días.",
          },
          {
            icon: <CreditCard size={20} className="text-[#D4AF37]" />,
            titleEn: "Reload Bonuses", titleEs: "Bonos de Recarga",
            descEn: "When you purchase Gold Coin packages, you receive bonus Sweep Coins on top. These are optional — you never have to buy anything — but they offer good value if you choose to make a purchase. Look for 100% match bonuses on first purchases.",
            descEs: "Cuando compras paquetes de Monedas de Oro, recibes Sweep Coins adicionales encima. Estos son opcionales — nunca tienes que comprar nada — pero ofrecen buen valor si decides hacer una compra. Busca bonos de igualación del 100% en primeras compras.",
          },
        ].map((item) => (
          <div key={item.titleEn} className="card-neon p-5">
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h3 className="text-white font-black text-lg uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {isEs ? item.titleEs : item.titleEn}
              </h3>
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

// ─── RESPONSIBLE PLAY ────────────────────────────────────────────────────────
export function ResponsiblePlayPage() {
  const { lang } = useLanguage();
  const isEs = lang === "es";

  return (
    <PageLayout
      title={isEs ? "Juego Responsable" : "Responsible Play"}
      subtitle={isEs ? "Los casinos sweepstakes son entretenimiento. Aquí están nuestras pautas para jugar de forma responsable." : "Sweepstakes casinos are entertainment. Here are our guidelines for playing responsibly."}
      badge={isEs ? "Juega con Responsabilidad" : "Play Responsibly"}
      breadcrumbs={[{ label: isEs ? "Guías" : "Guides" }, { label: isEs ? "Juego Responsable" : "Responsible Play" }]}
      accentColor="electric"
    >
      <div className="space-y-6">
        <div className="card-neon p-6" style={{ border: "1px solid rgba(27,170,255,0.3)" }}>
          <div className="flex items-center gap-3 mb-4">
            <Heart size={20} className="text-[#1BAAFF]" />
            <h2 className="text-white font-black text-xl uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              {isEs ? "Señales de Advertencia" : "Warning Signs"}
            </h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {isEs
              ? "Aunque los casinos sweepstakes son gratuitos y legales, es importante reconocer cuándo el juego puede estar convirtiéndose en un problema. Busca estas señales de advertencia:"
              : "While sweepstakes casinos are free and legal, it's important to recognize when gaming may be becoming a problem. Watch for these warning signs:"}
          </p>
          <ul className="space-y-2">
            {(isEs ? [
              "Jugar más tiempo del planeado regularmente",
              "Sentir ansiedad o irritabilidad cuando no puedes jugar",
              "Descuidar responsabilidades laborales, familiares o sociales",
              "Gastar dinero en monedas que no puedes permitirte",
              "Mentir a otros sobre cuánto tiempo pasas jugando",
            ] : [
              "Regularly playing longer than planned",
              "Feeling anxious or irritable when you can't play",
              "Neglecting work, family, or social responsibilities",
              "Spending money on coins you can't afford",
              "Lying to others about how much time you spend playing",
            ]).map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <span className="text-[#1BAAFF] mt-0.5">⚠</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-neon p-6">
          <h2 className="text-white font-black text-xl uppercase mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            {isEs ? "Recursos de Ayuda" : "Help Resources"}
          </h2>
          <div className="space-y-3">
            {[
              { name: "National Council on Problem Gambling (NCPG)", phone: "1-800-522-4700", url: "ncpgambling.org" },
              { name: "Gamblers Anonymous", phone: "1-626-960-3500", url: "gamblersanonymous.org" },
              { name: "National Problem Gambling Helpline", phone: "1-800-522-4700", url: "ncpgambling.org/help-treatment/helpline/" },
            ].map((r) => (
              <div key={r.name} className="p-3 rounded-lg" style={{ background: "rgba(27,170,255,0.05)", border: "1px solid rgba(27,170,255,0.15)" }}>
                <div className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{r.name}</div>
                <div className="text-[#1BAAFF] text-xs">{r.phone} · {r.url}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-neon p-6">
          <h2 className="text-white font-black text-xl uppercase mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            {isEs ? "Pautas de Juego Responsable" : "Responsible Gaming Guidelines"}
          </h2>
          <ul className="space-y-2">
            {(isEs ? [
              "Establece límites de tiempo antes de empezar a jugar",
              "Nunca juegues para escapar de problemas emocionales",
              "Trata el juego como entretenimiento, no como una fuente de ingresos",
              "Toma descansos regulares durante las sesiones de juego",
              "Mantén el juego en perspectiva — es solo diversión",
            ] : [
              "Set time limits before you start playing",
              "Never play to escape emotional problems",
              "Treat gaming as entertainment, not a source of income",
              "Take regular breaks during gaming sessions",
              "Keep gaming in perspective — it's just fun",
            ]).map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <CheckCircle size={12} className="text-green-400 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
