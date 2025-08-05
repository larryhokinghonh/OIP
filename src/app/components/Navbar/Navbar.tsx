// src/components/Navbar/Navbar.tsx
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/app/components/ui/Button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/app/components/ui/NavigationMenu"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/app/components/ui/Sheet"
import { Menu, X } from "lucide-react"

export function Navbar() {
  // scroll-hide logic
  const [hidden, setHidden] = useState(false)
  const [forceVisible, setForceVisible] = useState(false)
  const lastScrollY = useRef(0)
  // background toggle logic
  const [isTop, setIsTop] = useState(true)
  const [isReflectionsOpen, setIsReflectionsOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      const scrollingDown = y > lastScrollY.current

      if (y < 10) {
        setHidden(false)
        setIsTop(true)
      } else {
        setIsTop(false)
        // hide on scroll down, but not on scroll up
        if (scrollingDown && y > 50) {
          setHidden(true)
        }
      }

      lastScrollY.current = y
    }

    const handleMouseMove = (e: MouseEvent) => {
      // show navbar when mouse is near top of screen
      setForceVisible(e.clientY < 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // mix of both hrefs (full links) and ids (in-page anchors)
  const desktopItems = [
    { label: "Home",           href: "/"             },
    { label: "Design Journey", id:   "design-journey" },
    { label: "Poster",         id:   "poster"         },
    {
      label: "Reflections",
      id: "reflections",
      subItems: [
        { label: "Weekly Pitch Videos", href: "/weekly-pitch-videos" },
        { label: "Daily Team Briefs", href: "/daily-team-briefs" },
        { label: "Proud Page", href: "/proud-page" },
      ],
    },
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
        ${hidden && !forceVisible ? "-translate-y-full" : "translate-y-0"}
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
                if (item.subItems) {
                  return (
                    <div
                      key={href}
                      className="relative"
                      onMouseEnter={() => setIsReflectionsOpen(true)}
                      onMouseLeave={() => setIsReflectionsOpen(false)}
                    >
                      <NavigationMenuItem>
                        <Link
                          href={href}
                          className="text-white px-2 py-1 text-xl font-[700]"
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuItem>
                      {isReflectionsOpen && (
                        <div className="absolute left-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                }
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
                  if (item.subItems) {
                    return (
                      <div key={href}>
                        <Link
                          href={href}
                          className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded"
                        >
                          {item.label}
                        </Link>
                        <div className="pl-4 mt-2 space-y-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                  }
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
