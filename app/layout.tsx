import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bitscale",
  description: "Personalised outbound at scale",
  icons: {
    icon: [
      {
        url: "/bitscale-favicon.png",
        type: "image/png",
      },
    ],
    apple: "/bitscale-favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-screen">
      <body className={`font-sans antialiased h-screen overflow-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
