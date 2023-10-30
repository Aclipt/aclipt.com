import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aclipt",
  description: "We regret to inform you that our online platform is now closed. We extend our heartfelt appreciation to our valued users and supporters for being a part of our journey. Thank you for your trust and support. For any inquiries or assistance, please contact us at contact@aclipt.com.",
}

export default function RootLayout({
 children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
