"use client"

import { Navbar } from "@/app/components/Navbar/Navbar"
import { usePathname } from "next/navigation"

export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <div>
      <Navbar isHomePage={isHomePage} />
      <main>{children}</main>
    </div>
  )
}
