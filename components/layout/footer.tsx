import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, MessageCircle, Mail, Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/logo.jpg" alt="Quran and Namaz Logo" className="w-10 h-10 rounded-lg object-cover" />
              <div>
                <div className="text-lg font-bold">Quran and Namaz</div>
                <div className="text-sm text-slate-400">Online Academy</div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Authentic Islamic education through modern technology. Learn Quran, Arabic, and Islamic studies with
              qualified teachers from the comfort of your home.<br/>
              <span className="block mt-2 text-amber-300">All teachers educated in Wafaq ul Madaris.</span>
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61578041309911" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/onlinequran.lisan?igsh=dHM1c3prbmg5cHB4" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-slate-300 hover:text-white transition-colors">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-slate-300 hover:text-white transition-colors">
                  Class Schedule
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-slate-300 hover:text-white transition-colors">
                  Register Now
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Popular Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/courses" className="text-slate-300 hover:text-white transition-colors">
                  Quran Reading (Nazra)
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-slate-300 hover:text-white transition-colors">
                  Quran Memorization (Hifz)
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-slate-300 hover:text-white transition-colors">
                  Tajweed Excellence
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-green-400" />
                <div>
                  <div className="text-sm text-slate-300">WhatsApp</div>
                  <div className="text-sm text-white">+92 316 5249017</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <div>
                  <div className="text-sm text-slate-300">Email</div>
                  <div className="text-sm text-white">Infquranandnamaz@gmail.com</div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-medium">Newsletter</h4>
              <p className="text-sm text-slate-300">Get updates about new courses and Islamic learning tips</p>
              <div className="flex space-x-2">
                <Input
                  placeholder="Your email"
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                />
                <Button size="sm" className="!bg-[#060957] !hover:bg-[#060957] text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-slate-400">© 2024 Quran and Namaz Online Academy. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
