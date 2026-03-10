/*
 * APP — Sweeptakes.com
 * Dark theme (Superhero Command Center design)
 * Auth + i18n + full page routing enabled
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";

// Review pages
import StakeUsReview from "./pages/reviews/StakeUs";
import {
  RealPriceReview,
  CrownCoinsReview,
  McLuckReview,
  WowVegasReview,
  LoneStarReview,
  FortunaReview,
  HelloMillionsReview,
  SpreeReview,
  FunrizeReview,
  MegaBonanzaReview,
} from "./pages/reviews/AllReviews";

// Guide pages
import {
  WhatArePage,
  FreeCoinsPage,
  RedemptionPage,
  BonusesPage,
  ResponsiblePlayPage,
} from "./pages/guides/GuidePages";

// Legal & Company pages
import {
  PrivacyPage,
  TermsPage,
  EditorialPolicyPage,
  DisclaimerPage,
  ContactPage,
  AboutPage,
  TeamPage,
  MethodologyPage,
  AdvertisePage,
  SitemapPage,
} from "./pages/legal/LegalPages";

function Router() {
  return (
    <Switch>
      {/* Home */}
      <Route path="/" component={Home} />

      {/* Casino Reviews */}
      <Route path="/review/stake-us" component={StakeUsReview} />
      <Route path="/review/realprice" component={RealPriceReview} />
      <Route path="/review/crown-coins" component={CrownCoinsReview} />
      <Route path="/review/mcluck" component={McLuckReview} />
      <Route path="/review/wow-vegas" component={WowVegasReview} />
      <Route path="/review/lonestar" component={LoneStarReview} />
      <Route path="/review/fortuna" component={FortunaReview} />
      <Route path="/review/hello-millions" component={HelloMillionsReview} />
      <Route path="/review/spree" component={SpreeReview} />
      <Route path="/review/funrize" component={FunrizeReview} />
      <Route path="/review/mega-bonanza" component={MegaBonanzaReview} />

      {/* Guides */}
      <Route path="/guides/what-are-sweepstakes-casinos" component={WhatArePage} />
      <Route path="/guides/free-coins" component={FreeCoinsPage} />
      <Route path="/guides/redemption" component={RedemptionPage} />
      <Route path="/guides/bonuses" component={BonusesPage} />
      <Route path="/guides/responsible-play" component={ResponsiblePlayPage} />

      {/* Legal */}
      <Route path="/legal/disclaimer" component={DisclaimerPage} />
      <Route path="/legal/editorial-policy" component={EditorialPolicyPage} />
      <Route path="/legal/privacy" component={PrivacyPage} />
      <Route path="/legal/terms" component={TermsPage} />

      {/* About / Company */}
      <Route path="/about" component={AboutPage} />
      <Route path="/about/team" component={TeamPage} />
      <Route path="/about/methodology" component={MethodologyPage} />
      <Route path="/advertise" component={AdvertisePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/sitemap" component={SitemapPage} />

      {/* Fallback */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster
              theme="dark"
              toastOptions={{
                style: {
                  background: "#0d1e35",
                  border: "1px solid rgba(212,175,55,0.3)",
                  color: "#f0f0f0",
                },
              }}
            />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
