import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
