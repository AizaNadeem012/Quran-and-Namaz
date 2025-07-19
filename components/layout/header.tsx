"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, BookOpen, MessageCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Classes", href: "/classes" },
    { name: "Register", href: "/register" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-[#060957] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Text group */}
          <div className="flex items-center space-x-2">
            <img src="/logo.jpg" alt="Quran and Namaz Logo" className="w-10 h-10 rounded-lg object-cover" />
            <div>
              <div className="text-base font-bold text-white leading-tight">Quran and Namaz</div>
              <div className="text-xs text-amber-400 leading-tight">Online Academy</div>
            </div>
          </div>
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-10 w-10 text-white hover:text-black transition-colors" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="flex items-center space-x-3">
                  <img src="/logo.jpg" alt="Quran and Namaz Logo" className="w-10 h-10 rounded-lg object-cover" />
                  <div>
                    <div className="text-lg font-bold text-slate-800">Quran and Namaz</div>
                    <div className="text-xs text-slate-600">Online Academy</div>
                  </div>
                </div>
                <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-6 hover:bg-amber-600 hover:text-white transition-colors">
                  About Quran and Namaz Academy
                </Badge>
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-amber-400 transition-colors font-medium py-2 border-b-2 border-transparent hover:border-amber-400"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col space-y-3 pt-6 border-t border-slate-200">
                  <Link href="/register">
                    <Button className="w-full !bg-[#060957] !hover:bg-[#060957] text-white">Register Now</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-amber-400 transition-colors font-medium border-b-2 border-transparent hover:border-amber-400 pb-1"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/register">
              <Button size="sm" className="!bg-[#060957] !hover:bg-[#060957] text-white">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
