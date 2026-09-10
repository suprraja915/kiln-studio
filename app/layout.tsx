import type { Metadata } from "next";
import { Zilla_Slab, Work_Sans } from "next/font/google";
import "./globals.css";

// next/font downloads and self-hosts these at build time — no runtime
// requests to Google Fonts, so there's no external font dependency
// or layout shift from a late-loading webfont.
const slab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-slab",
  display: "swap",
});

const sans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kiln-studio.vercel.app"),
  title: {
    default: "Kiln Studio — Brand & digital design for independent businesses",
    template: "%s — Kiln Studio",
  },
  description:
    "Kiln Studio builds brand identity, websites, and packaging for independent restaurants, makers, and small businesses that want to look considered, not corporate.",
  keywords: [
    "design agency",
    "brand identity",
    "small business branding",
    "web design studio",
  ],
  openGraph: {
    title: "Kiln Studio — Brand & digital design for independent businesses",
    description:
      "Brand identity, web design, and packaging for small businesses that want to look considered, not corporate.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiln Studio",
    description:
      "Brand identity, web design, and packaging for independent businesses.",
  },
};

// Theme is read from localStorage before paint to avoid a flash of the
// wrong theme. This runs inline, before React hydrates.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('kiln-theme');
    var theme = stored ? stored : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${slab.variable} ${sans.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
