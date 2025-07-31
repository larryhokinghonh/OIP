// src/components/Navbar/Navbar.tsx
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/app/components/ui/Button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/app/components/ui/NavigationMenu"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/app/components/ui/Sheet"
import { Download, Menu, X } from "lucide-react"

export function Navbar() {
  // scroll-hide logic
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)
  // background toggle logic
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      // hide on scroll down, show on scroll up
      setHidden(y > lastScrollY.current && y > 50)
      lastScrollY.current = y
      // background transparent at very top
      setIsTop(y < 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // mix of both hrefs (full links) and ids (in-page anchors)
  const desktopItems = [
    { label: "Home",           href: "/"             },
    { label: "Design Journey", id:   "design-journey" },
    { label: "Poster",         id:   "poster"         },
    { label: "Reflections",    id:   "reflections"    },
    { label: "Team",           id:   "team"           },
  ]

  const mobileItems = [
    ...desktopItems,
    { label: "Schedule Demo", href: "/schedule-demo" },
    { label: "Log in",        href: "/login"         },
    { label: "Download",      href: "/download"      },
  ]

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transform transition-all duration-500 ease-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        ${isTop ? "bg-transparent" : "bg-black dark:bg-slate-900/70 backdrop-blur-sm"}
      `}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-8 flex items-center justify-center">
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-8">
              {desktopItems.map((item) => {
                const href = item.href ?? `#${item.id}`
                return (
                  <NavigationMenuItem key={href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={href}
                        className="text-white px-2 py-1 text-xl font-[700]"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <div className="flex items-center justify-between">
                  <SheetTitle>Menu</SheetTitle>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </div>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                {mobileItems.map((item) => {
                  const href = item.href ?? `#${item.id}`
                  return (
                    <Link
                      key={href}
                      href={href}
                      className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded"
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
