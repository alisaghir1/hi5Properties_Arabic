import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "عقارات دبي الفاخرة | شراء، تأجير، واستثمار في العقارات",
  description:
    "اكتشف منزلك المثالي مع هاي فايف للعقارات، شريكك الموثوق في مجال العقارات. استكشف مجموعة واسعة من العقارات الفاخرة والشقق والمنازل المصممة لتلبية أسلوب حياتك. سواء كنت تشتري، أو تؤجر، أو تبيع، نحن نجعل رحلتك العقارية سلسة وخالية من الإجهاد.",
  icons: {
    icon: "/logo.svg", // Replace with the path to your logo image in the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-FR9X48MB5H"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-FR9X48MB5H');
  `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
