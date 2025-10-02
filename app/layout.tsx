import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { CursorSpotlight } from "@/components/cursor-spotlight"
import { PageLoader } from "@/components/page-loader"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Opitien - Front End Developer",
  description: "Front End Developer from Nigeria with 5 years of experience.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/logo/favicon.ico" },
      { url: "/logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/logo/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/logo/favicon.ico"],
  },
  manifest: "/logo/site.webmanifest",
  themeColor: "#ffffff", // you can adjust this
  applicationName: "Opitien Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="font-sans antialiased">
        <PageLoader />
        <CursorSpotlight />
        {children}
      </body>
    </html>
  )
}
