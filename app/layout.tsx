import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import FooterSeaction from "@/components/footer"
import Script from "next/script"
import Header from "@/components/header"

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: {
    default: "AMOR THẢO MỘC - Hidden Spa In SaiGon",
    template: "%s | AMOR THẢO MỘC",
  },
  description:
    "AMOR THẢO MỘC - Organic Spa 2019 Được xây dựng trên nền tảng Sức Khỏe và Sắc Đẹp",
  keywords: [
    "AMOR THẢO MỘC", "spa", "spa thư giãn", "chăm sóc da", "dịch vụ làm đẹp", "massage", "chăm sóc sắc đẹp", "AMOR Spa"
  ],
  authors: [{ name: "AMOR Spa", url: "https://amorspa.vn" }],
  creator: "AMOR Spa",
  publisher: "AMOR Spa",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico"
  },
  openGraph: {
    title: "AMOR THẢO MỘC - Hidden Spa In SaiGon",
    description:
      "AMOR THẢO MỘC - Organic Spa 2019 Được xây dựng trên nền tảng Sức Khỏe và Sắc Đẹp",
    url: "https://amorspa.vn",
    siteName: "AMOR Spa",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AMOR THẢO MỘC - Hidden Spa In SaiGon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMOR THẢO MỘC - Hidden Spa In SaiGon",
    description:
      "AMOR THẢO MỘC - Organic Spa 2019 Được xây dựng trên nền tảng Sức Khỏe và Sắc Đẹp",
    creator: "@amorspa",
    images: ["/opengraph-image.png"],
  },
  metadataBase: new URL("https://amorspa.vn"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preload" as="image" href="/mb.webp" media="(max-width: 768px)" />
        <link rel="preload" as="image" href="/home/banner.webp" media="(min-width: 769px)" />
        <Script
          type="application/ld+json"
          id="business-jsonld"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              "name": "AMOR THẢO MỘC",
              "image": "https://amorspa.vn/opengraph-image.png",
              "url": "https://amorspa.vn",
              "telephone": "+84-902-328-566",
              "founder": {
                "@type": "Person",
                "name": "Ty Anh Nguyễn"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "30 Đặng Tất",
                "addressLocality": "Phường Tân Định",
                "addressRegion": "Quận 1, Hồ Chí Minh",
                "postalCode": "700000",
                "addressCountry": "VN"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Phường Tân Định"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                  ],
                  "opens": "10:00",
                  "closes": "20:00"
                }
              ],
              "description": "AMOR THẢO MỘC - Spa thư giãn tại Sài Gòn chuyên chăm sóc sức khỏe và sắc đẹp bằng thảo mộc tự nhiên.",
              "sameAs": [
                "https://www.facebook.com/amorthaomoc1"
              ]
            }),
          }}
        />

        <Script
          type="application/ld+json"
          id="website-jsonld"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AMOR THẢO MỘC",
              "url": "https://amorspa.vn",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://amorspa.vn/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        <Script
          type="application/ld+json"
          id="organization-jsonld"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AMOR THẢO MỘC",
              "url": "https://amorspa.vn",
              "logo": "https://amorspa.vn/opengraph-image.png",
              "sameAs": [
                "https://www.facebook.com/amorthaomoc1"
              ]
            }),
          }}
        />
      </head>
      <body className={montserrat.className}>
         <Header />
        {children}
        <FooterSeaction />
      </body>
    </html>
  )
}
