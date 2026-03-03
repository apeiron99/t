import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "나의 서울 맛집 도감",
  description: "모바일 화면 크기에 맞춘 세련된 다크모드의 서울 맛집 도감 웹앱",
}

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#050505] text-gray-100 min-h-screen selection:bg-gray-800`}>
        {children}
      </body>
    </html>
  )
}
