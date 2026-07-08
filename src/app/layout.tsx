import type { Metadata } from "next";
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatButtons from "@/components/FloatButtons";
import { site } from "@/data/site";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-archivo",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default:
      "Construction Estimating Services in 24 to 48 Hours | Buildexa Estimate",
    template: "%s | Buildexa Estimate",
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    type: "website",
    images: ["/logo-full.png"],
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: `https://${site.domain}`,
  logo: `https://${site.domain}/logo-full.png`,
  email: site.email,
  telephone: "+19043315370",
  description: site.description,
  areaServed: "United States",
  openingHours: "Mo-Sa 09:00-18:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatButtons />
      </body>
    </html>
  );
}
