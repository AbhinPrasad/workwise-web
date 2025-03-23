import type { Metadata } from "next"
import { Poppins } from "next/font/google"

import "./globals.css"

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "WorkWise - Efficient Teams, Exceptional Results",
  description:
    "WorkWise is a cloud-based project management platform designed to enhance team collaboration, task tracking, and workflow automation.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  )
}
