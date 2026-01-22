import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"

import "./globals.css"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Marleen - Platform Ekowisata Bahari Indonesia",
  description: "Jelajahi keindahan laut Indonesia dengan wisata bahari berkelanjutan. Operator tersertifikasi ramah lingkungan.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
