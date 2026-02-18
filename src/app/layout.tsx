import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI247 - Your AI Employee, Working 24/7",
  description:
    "Deploy enterprise-grade AI employees that work around the clock. Automate workflows, handle customer support, manage operations, and scale your business with AI that never sleeps.",
  keywords: [
    "AI employee",
    "AI automation",
    "enterprise AI",
    "24/7 AI",
    "AI workforce",
    "business automation",
    "AI India",
    "AI SaaS",
  ],
  openGraph: {
    title: "AI247 - Your AI Employee, Working 24/7",
    description:
      "Deploy enterprise-grade AI employees that work around the clock. Scale your business with AI that never sleeps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${sora.variable}`}>
      <body className="antialiased min-h-screen w-full overflow-x-hidden">{children}</body>
    </html>
  );
}
