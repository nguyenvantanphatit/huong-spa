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
    default: "Ruby Hương Spa - AN NHIÊN TỪ BÊN TRONG",
    template: "%s | Ruby Hương Spa",
  },
  description:
    "Ruby Hương Spa - Spa thư giãn và cửa hàng bán sản phẩm chăm sóc sức khỏe, sắc đẹp từ thiên nhiên và organic.",
  keywords: [
    "Ruby Hương Spa",
    "spa thư giãn",
    "massage",
    "chăm sóc da",
    "dịch vụ làm đẹp",
    "sản phẩm chăm sóc da",
    "mỹ phẩm organic",
    "mua mỹ phẩm spa",
    "spa bán hàng",
    "thảo mộc chăm sóc sắc đẹp",
    "Hương Spa"
  ],
  authors: [{ name: "Hương Spa", url: "https://huongspa.vn" }],
  creator: "Hương Spa",
  publisher: "Hương Spa",
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
    title: "Ruby Hương Spa - AN NHIÊN TỪ BÊN TRONG",
    description:
      "Ruby Hương Spa - Spa thư giãn và cửa hàng bán sản phẩm chăm sóc sức khỏe, sắc đẹp từ thiên nhiên và organic.",
    url: "https://huongspa.vn",
    siteName: "Hương Spa",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ruby Hương Spa - AN NHIÊN TỪ BÊN TRONG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruby Hương Spa - AN NHIÊN TỪ BÊN TRONG",
    description:
      "Ruby Hương Spa - Spa thư giãn và cửa hàng bán sản phẩm chăm sóc sức khỏe, sắc đẹp từ thiên nhiên và organic.",
    creator: "@huongspa",
    images: ["/opengraph-image.png"],
  },
  metadataBase: new URL("https://huongspa.vn"),
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
              "name": "Ruby Hương Spa",
              "image": "https://huongspa.vn/opengraph-image.png",
              "url": "https://huongspa.vn",
              "telephone": "+84-931-858-808",
              "founder": {
                "@type": "Person",
                "name": "Ruby Hương"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "89/57 đường 59",
                "addressLocality": "Phường 14",
                "addressRegion": "Quận Gò Vấp, Hồ Chí Minh",
                "postalCode": "700000",
                "addressCountry": "VN"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Phường 14"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                  ],
                  "opens": "9:00",
                  "closes": "20:00"
                }
              ],
              "description": "Hương Spa - Spa thư giãn tại Sài Gòn chuyên chăm sóc sức khỏe và sắc đẹp bằng thảo mộc tự nhiên.",
              "sameAs": [
                "https://www.facebook.com/share/1FKSn2djM6/?mibextid=wwXIfr"
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
              "name": "Ruby Hương Spa",
              "url": "https://huongspa.vn",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://huongspa.vn/search?q={search_term_string}",
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
              "name": "Ruby Hương Spa",
              "url": "https://huongspa.vn",
              "logo": "https://huongspa.vn/opengraph-image.png",
              "sameAs": [
                "https://www.facebook.com/share/1FKSn2djM6/?mibextid=wwXIfr"
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
