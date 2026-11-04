import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://mohammad-arslan.netlify.app"),
  title: "Mohammad Arslan | Senior Full-Stack Engineer — Laravel & React",
  description:
    "Senior PHP/Laravel and React engineer building ERP, SaaS, billing and payment systems since December 2020. Hands-on AWS and Docker deployment. Open to worldwide remote roles and relocation.",
  keywords: "Mohammad Arslan, Software Engineer, PHP Developer, Laravel Expert, React Developer, Next.js, Web Development, Full Stack Developer",
  authors: [{ name: "Mohammad Arslan" }],
  creator: "Mohammad Arslan",
  publisher: "Mohammad Arslan",
  openGraph: {
    title: "Mohammad Arslan - Senior Software Engineer",
    description: "Senior full-stack engineer building dependable SaaS, ERP and CRM platforms with Laravel and React.",
    images: [{ url: "/images/mohammad-arslan.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Arslan - Senior Software Engineer",
    description: "Building production web applications with PHP/Laravel and React since December 2020. Open to remote work and relocation.",
    images: ["/images/mohammad-arslan.png"],
  },
  icons: {
    icon: [
      { url: "/images/mohammad-arslan.png" },
      { url: "/images/mohammad-arslan.png", type: "image/png" }
    ],
    shortcut: "/images/mohammad-arslan.png",
    apple: "/images/mohammad-arslan.png",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
