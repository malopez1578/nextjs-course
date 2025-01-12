import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Contact us for more information",
};

export default function ContactPage() {
    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-6xl">Contact Us</span>
        </main>
    );
}