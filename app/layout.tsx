import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const description =
  "La Metodología Polimática Enfocada (MPE) es un nuevo paradigma para la transferencia de competencias al puesto de trabajo.";

export const metadata: Metadata = {
  title: "Metodología MPE | Multiversica Academy | Aprendizaje Polimático",
  description,
  openGraph: {
    title: "Metodología Polimática Enfocada (MPE)",
    description,
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full overflow-x-hidden bg-zinc-50 font-sans text-brand-secondary antialiased">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R67RX8049V"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-R67RX8049V');`}
        </Script>
      </body>
    </html>
  );
}
