import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { LiveToast } from "@/components/ui/LiveToast";

export const metadata: Metadata = {
  metadataBase: new URL("https://rivrajinstitute.com"),
  title: "Rivraj Institute Shikohabad | Best Govt Exam Coaching under Rahul Raj Sir",
  description:
    "Join Rivraj Institute in Shikohabad for SSC CGL, GD, UP Police, UP SI, Railway NTPC, Banking, CTET & UPTET. Opens daily at 8:00 AM under Rahul Raj Sir.",
  keywords: [
    "Rivraj Institute",
    "Coaching in Shikohabad",
    "Rahul Raj Sir",
    "UP Police Constable Coaching",
    "SSC GD Coaching Shikohabad",
    "Best Coaching NH-19 Shikohabad",
  ],
  authors: [{ name: "Rivraj Institute Shikohabad" }],
  openGraph: {
    title: "Rivraj Institute Shikohabad | Rahul Raj Sir",
    description: "Crack Govt Exams with Top Mentorship in Shikohabad. High selection rate.",
    url: "https://rivrajinstitute.com",
    siteName: "Rivraj Institute",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased selection:bg-luxury-gold selection:text-black min-h-screen flex flex-col justify-between">
        <div className="bg-gradient-to-r from-black via-luxury-dark to-black border-b border-luxury-gold/20 py-1.5 px-4 text-center text-xs text-gray-300 overflow-hidden">
          <span className="text-luxury-amber font-mono font-bold uppercase mr-2">NOTICE:</span>
          Daily Fresh Batch starts sharp at 08:00 AM under Rahul Raj Sir • UP Police & SSC GD Mock Tests Ongoing • Call +91-8445395425
        </div>

        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        <StickyCTA />
        <LiveToast />
      </body>
    </html>
  );
}
