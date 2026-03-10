import ReviewPage from "@/components/ReviewPage";
import { casinosData } from "@/data/casinos";

export function RealPriceReview() { return <ReviewPage casino={casinosData["realprice"]} />; }
export function CrownCoinsReview() { return <ReviewPage casino={casinosData["crown-coins"]} />; }
export function McLuckReview() { return <ReviewPage casino={casinosData["mcluck"]} />; }
export function WowVegasReview() { return <ReviewPage casino={casinosData["wow-vegas"]} />; }
export function LoneStarReview() { return <ReviewPage casino={casinosData["lonestar"]} />; }
export function FortunaReview() { return <ReviewPage casino={casinosData["fortuna"]} />; }
export function HelloMillionsReview() { return <ReviewPage casino={casinosData["hello-millions"]} />; }
export function SpreeReview() { return <ReviewPage casino={casinosData["spree"]} />; }
export function FunrizeReview() { return <ReviewPage casino={casinosData["funrize"]} />; }
export function MegaBonanzaReview() { return <ReviewPage casino={casinosData["mega-bonanza"]} />; }
