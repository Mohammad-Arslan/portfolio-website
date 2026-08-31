import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Mohammad Arslan | Senior Full-Stack Engineer — Laravel & React",
  description:
    "Senior full-stack engineer building SaaS, ERP and CRM platforms with PHP, Laravel, React, REST APIs, MySQL and Docker. Open to remote US/UK/UAE/KSA roles and UAE/KSA relocation.",
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
    description: "Building robust web applications with PHP, Laravel, React, and Next.js with over 5+ years of experience.",
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
