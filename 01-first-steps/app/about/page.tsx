import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Next.js",
    description: "Learn about Next.js",
    authors: {
        name: "Next.js Team",
        url: "https://miguello.org",
    },
};

export default function AboutPage() {
    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-6xl">About Next.js
                {new Date().getFullYear()}
            </span>
        </main>
    );
}