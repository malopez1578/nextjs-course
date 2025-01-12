import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing",
    description: "Pricing information",
};

export default function PricingPage() {
    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-6xl">Pricing</span>
        </main>
    );
}