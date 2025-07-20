"use client"
import { useEffect, useState, FormEvent, useRef } from "react";
import Counter from "@/components/ui/counter";
import { motion } from "framer-motion";
import stringSimilarity from 'string-similarity';

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const TypingText = ({ text, speed = 80, className = "", style }: TypingTextProps) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!text) {
      setDisplayed("");
      return;
    }
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed((prev) => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className} style={style} dir="rtl">{displayed}</span>
  );
};

import { Button, MotionButton } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Clock, Globe, Star, MessageCircle, Play, CheckCircle, Quote, Circle, Mail, Award, MessageSquare, Facebook, GraduationCap, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimateSection } from "@/components/ui/animate-section";
import { HeroCursorBg } from "@/components/ui/hero-cursor-bg";
// Remove Swiper and react-icons imports due to missing modules/types

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "London, UK",
    flag: "🇬🇧",
    verified: true,
    photo: "/testinomial_img.jpg",
    rating: 5,
    course: "Kids Quran Program",
    quote: "My daughter has learned so much in just 3 months. The teachers are patient and the online format works perfectly for our busy schedule.",
  },
  {
    name: "Ahmed Hassan",
    location: "New York, USA",
    flag: "🇺🇸",
    verified: true,
    photo: "/testinomial_img2.jpg",
    rating: 5,
    course: "Tajweed Mastery",
    quote: "The Tajweed course has transformed my recitation. Alhamdulillah, I can now read with proper pronunciation and beautiful melody.",
  },
  {
    name: "Fatima Ali",
    location: "Manchester, UK",
    flag: "🇬🇧",
    verified: true,
    photo: "/testinomial_img1.jpg",
    rating: 5,
    course: "Arabic Grammar",
    quote: "As a working mother, the flexible timing and quality teaching have made it possible for me to finally learn Arabic properly.",
  },
  // Add more testimonials as needed
];

export default function HomePage() {
  const courseHighlights = [
    {
      title: "Quran Reading (Nazra)",
      description: "Master the art of Quranic recitation with proper pronunciation",
      icon: BookOpen,
      duration: "6-12 months",
      students: "200+ enrolled",
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Tajweed Excellence",
      description: "Perfect your recitation with advanced Tajweed rules",
      icon: Star,
      duration: "8-10 months",
      students: "150+ enrolled",
      color: "bg-amber-50 border-amber-200",
    },
    {
      title: "Arabic Language",
      description: "Comprehensive Arabic grammar and conversation skills",
      icon: Globe,
      duration: "12-18 months",
      students: "180+ enrolled",
      color: "bg-green-50 border-green-200",
    },
  ]
 
  // Chatbot state
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { from: "bot", text: "Assalamu Alaikum! How can I help you today?" }
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chatOpen && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, chatOpen]);

  // FAQ pairs for chatbot
  const faqPairs = [
    {
      q: /ass?alam(\s*o)?\s*alaikum|salaam|salam|السلام|سلام/i,
      a: "Wa Alaikum Assalam! Welcome to Quran and Namaz Academy. We offer Quran Reading (Nazra), Quran Memorization (Hifz), and Tajweed Excellence courses for all ages. Classes are held online via Microsoft Teams with certified teachers (Waf"
    },
    // --- Existing FAQs ---
    {
      q: /course|offer|teach|program|subject|learn/i,
      a: "We offer Quran reading, Tajweed, Arabic language, and Islamic studies for all ages and levels."
    },
    {
      q: /register|sign ?up|enroll/i,
      a: "You can register online using our registration form. We'll contact you to schedule your free trial class."
    },
    {
      q: /timing|schedule|class time|when/i,
      a: "Our classes are flexible and available for UK, USA, and international students. We offer both one-on-one and group sessions."
    },
    {
      q: /contact|support|help|email|whatsapp/i,
      a: "You can contact us via email at Infquranandnamaz@gmail.com or WhatsApp at 0316 5249017."
    },
    {
      q: /trial|free class/i,
      a: "Yes! We offer a free trial class for all new students. Register online to book yours."
    },
    {
      q: /who.*teacher|ustadh|ustadha|instructor|qualified/i,
      a: "Our teachers are qualified Islamic scholars and experienced educators, dedicated to helping you learn in a supportive environment."
    },
    {
      q: /location|where|address|online/i,
      a: "Quran and Namaz Academy is an online platform. You can join from anywhere in the world!"
    },
    {
      q: /price|fee|cost|payment/i,
      a: "Our fees are affordable and vary by course. Please contact us for detailed pricing."
    },
    {
      q: /miss.*class|makeup|reschedule/i,
      a: "We offer flexible rescheduling and makeup classes to fit your needs."
    },
    {
      q: /about|academy|who are you/i,
      a: "Quran and Namaz Academy provides authentic Islamic education through modern technology. Learn Quran, Arabic, and Islamic studies with qualified teachers from the comfort of your home."
    },
    // --- Expanded FAQs ---
    { q: /which.*courses|main.*courses|popular.*courses|nazra|hifz|tajweed/i, a: "Our main courses are Quran Reading (Nazra), Quran Memorization (Hifz), and Tajweed Excellence." },
    { q: /how.*join.*class|join.*teams|class.*link/i, a: "All classes are conducted via Microsoft Teams. You will receive a Teams invite link after registration." },
    { q: /who.*certify|certified.*by|wafaq.*madaris/i, a: "All our teachers are certified by Wafaq ul Madaris, ensuring high standards of Islamic education." },
    { q: /what.*is.*nazra/i, a: "Nazra refers to Quran reading with correct pronunciation and basic Tajweed rules." },
    { q: /what.*is.*hifz/i, a: "Hifz is the memorization of the Holy Quran. Our Hifz program is structured and supervised by qualified teachers." },
    { q: /what.*is.*tajweed/i, a: "Tajweed is the science of Quranic pronunciation. Our Tajweed Excellence course helps you master advanced recitation rules." },
    { q: /how.*long.*course|duration.*course/i, a: "Course durations vary: Nazra (6-12 months), Hifz (2-4 years), Tajweed (8-12 months)." },
    { q: /age.*limit|who.*can.*join|children|adults/i, a: "We welcome students of all ages, from children to adults. Our programs are tailored for every age group." },
    { q: /language.*medium|urdu|english|arabic/i, a: "Classes are offered in Urdu, English, and Arabic, depending on student preference." },
    { q: /how.*pay|payment.*method|fees.*pay/i, a: "We accept payments via bank transfer, credit/debit card, and other secure online methods." },
    { q: /refund|cancel.*enrollment/i, a: "Please contact our support for refund and cancellation policies. We aim to be flexible and student-friendly." },
    { q: /class.*size|group.*class.*size/i, a: "Group classes have a maximum of 6 students to ensure personalized attention." },
    { q: /one.*one|private.*class/i, a: "Yes, we offer 1-on-1 personalized sessions for focused learning." },
    { q: /family.*package|siblings|discount/i, a: "Our Family Package allows multiple family members to enroll together at a discounted rate." },
    { q: /class.*recording|missed.*class/i, a: "Class recordings are available upon request if you miss a session." },
    { q: /technical.*requirement|device|internet/i, a: "You need a computer, tablet, or smartphone with internet access and Microsoft Teams installed." },
    { q: /how.*contact|support|help/i, a: "You can reach us via email (Infquranandnamaz@gmail.com), WhatsApp (0316 5249017), or our contact page." },
    { q: /certificate|completion/i, a: "Certificates are awarded upon successful completion of each course." },
    { q: /trial.*class|free.*trial/i, a: "We offer a free trial class for all new students. Register to book yours!" },
    { q: /how.*register|sign.*up/i, a: "Click on the 'Register' button on our website and fill out the form. Our team will contact you soon." },
    { q: /class.*timing|schedule|flexible.*time/i, a: "We offer flexible scheduling to accommodate students in different time zones (UK, USA, and more)." },
    { q: /islamic.*studies|arabic.*course/i, a: "In addition to Quran courses, we offer Arabic language and Islamic studies programs." },
    { q: /how.*qualified.*teacher/i, a: "All teachers are highly qualified, experienced, and certified by Wafaq ul Madaris." },
    { q: /parent.*involve|progress.*report/i, a: "Parents receive regular progress reports and can communicate directly with teachers." },
    { q: /class.*platform|zoom|teams/i, a: "We use Microsoft Teams for all classes. Zoom is no longer used." },
    { q: /class.*start|when.*begin/i, a: "Classes start as soon as your registration is processed and schedule is confirmed." },
    { q: /how.*many.*students.*class/i, a: "Group classes have up to 6 students. 1-on-1 classes are also available." },
    { q: /can.*change.*course|switch.*program/i, a: "Yes, you can switch courses or programs after discussing with your teacher." },
    { q: /holiday|vacation|break/i, a: "We observe major Islamic holidays. You will be notified in advance about any breaks." },
    { q: /class.*material|books|resources/i, a: "All study materials and digital resources are provided online." },
    { q: /how.*track.*progress/i, a: "We provide regular feedback and progress tracking for every student." },
    { q: /is.*safe|privacy|data/i, a: "Your privacy and data are protected. We use secure platforms and never share your information." },
    { q: /can.*join.*from.*country|international/i, a: "Yes! Students from any country can join our online classes." },
    { q: /special.*needs|disability/i, a: "We strive to accommodate students with special needs. Please contact us to discuss your requirements." },
    { q: /how.*long.*session|class.*duration/i, a: "Each class session is typically 45-60 minutes long." },
    { q: /what.*happens.*after.*register/i, a: "After registration, you will receive a confirmation email and your class schedule." },
    { q: /can.*parents.*watch|observe/i, a: "Parents are welcome to observe trial classes and communicate with teachers." },
    { q: /do.*homework|assignments/i, a: "Homework and assignments are given to reinforce learning, especially for children." },
    { q: /how.*secure.*payment/i, a: "All payments are processed securely using trusted payment gateways." },
    { q: /can.*pause.*enrollment|take.*break/i, a: "You can pause your enrollment if needed. Please inform us in advance." },
    { q: /how.*contact.*admin|admin.*dashboard/i, a: "Admins can be contacted via the contact form or WhatsApp for any issues." },
    { q: /do.*offer.*discount|promo|scholarship/i, a: "We occasionally offer discounts and scholarships. Follow us on social media for updates." },
    { q: /can.*request.*female.*teacher/i, a: "Yes, female students can request female teachers for their classes." },
    { q: /how.*access.*teams|teams.*invite/i, a: "You will receive a Microsoft Teams invite link after registration. Just click to join your class." },
    { q: /can.*change.*timing|reschedule/i, a: "Timings can be adjusted based on mutual availability. Contact your teacher or admin." },
    { q: /do.*offer.*arabic.*conversation/i, a: "Yes, we offer Arabic conversation and grammar classes for all levels." },
    { q: /can.*join.*multiple.*courses/i, a: "Yes, you can enroll in more than one course at a time." },
    { q: /how.*get.*certificate/i, a: "Certificates are issued digitally after successful course completion." },
    { q: /do.*offer.*weekend.*classes/i, a: "Weekend classes are available. Please mention your preference during registration." },
    { q: /can.*contact.*teacher.*directly/i, a: "You can communicate with your teacher via Teams or through the admin." },
    { q: /do.*offer.*islamic.*studies/i, a: "Yes, we offer Islamic studies as part of our curriculum." },
    { q: /how.*follow.*updates|social.*media/i, a: "Follow us on Facebook and Instagram for updates: facebook.com/profile.php?id=61578041309911&mibextid=ZbWKwL and instagram.com/onlinequran.namaz" },
    { q: /do.*offer.*demo|sample.*class/i, a: "A demo class can be arranged on request. Contact us to schedule." },
    { q: /can.*parents.*get.*feedback/i, a: "Parents receive regular feedback and can request meetings with teachers." },
    { q: /do.*offer.*summer.*camp|intensive.*course/i, a: "We occasionally offer intensive courses and summer camps. Check our website for announcements." },
    { q: /how.*long.*academy.*exist|when.*founded/i, a: "Quran and Namaz Academy has been serving students since 2020." },
    { q: /do.*offer.*group.*discount/i, a: "Group discounts are available for families and siblings." },
    { q: /can.*request.*custom.*schedule/i, a: "Custom schedules can be arranged to fit your needs." },
    { q: /do.*offer.*parent.*teacher.*meeting/i, a: "Parent-teacher meetings are scheduled regularly to discuss student progress." },
    { q: /do.*offer.*quran.*translation/i, a: "Quran translation and tafsir classes are available upon request." },
    { q: /can.*get.*hardcopy.*material/i, a: "Most materials are digital, but hard copies can be arranged for some courses." },
    { q: /do.*offer.*evening.*classes/i, a: "Evening classes are available for UK and USA time zones." },
    { q: /can.*request.*extra.*help|tutoring/i, a: "Extra help and tutoring sessions can be arranged if needed." },
    { q: /do.*offer.*parent.*portal/i, a: "A parent portal is coming soon for easier progress tracking and communication." },
    { q: /can.*get.*reference|recommendation/i, a: "References and recommendation letters can be provided upon request." },
    { q: /do.*offer.*islamic.*quiz|competition/i, a: "Islamic quizzes and competitions are held regularly to motivate students." },
    { q: /can.*visit.*office|physical.*location/i, a: "We are an online-only academy and do not have a physical campus." },
    { q: /do.*offer.*mobile.*app/i, a: "A mobile app is in development. Stay tuned for updates!" },
    { q: /can.*request.*demo.*teacher/i, a: "Demo sessions with different teachers can be arranged on request." },
    { q: /do.*offer.*parent.*orientation/i, a: "Parent orientation sessions are held for new enrollments." },
    { q: /can.*get.*progress.*certificate/i, a: "Progress certificates are issued at key milestones." },
    { q: /do.*offer.*quran.*tajweed.*workshop/i, a: "Workshops on Quran and Tajweed are organized throughout the year." },
    { q: /can.*request.*language.*preference/i, a: "You can choose your preferred language for instruction during registration." },
    { q: /do.*offer.*islamic.*history/i, a: "Islamic history is included in our Islamic studies curriculum." },
    { q: /can.*get.*reminder.*class/i, a: "Class reminders are sent via email and WhatsApp." },
    { q: /do.*offer.*parent.*feedback/i, a: "We value parent feedback and use it to improve our services." },
    { q: /can.*request.*special.*topic/i, a: "Special topics can be covered on request. Let us know your interests!" },
  ];

  // Enhanced chat send handler
  const handleChatSend = (e: FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setChatMessages([...chatMessages, { from: "user", text: userMsg }]);
    setChatInput("");
    // Find a matching FAQ
    const match = faqPairs.find(faq => faq.q.test(userMsg));
    setTimeout(() => {
      setChatMessages(msgs => [
        ...msgs,
        { from: "bot", text: match ? match.a : "Sorry, I don't have an answer for that yet. Please contact us for more help!" }
      ]);
    }, 700);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-amber-50/20 py-12 lg:py-16 px-2 sm:px-4 overflow-hidden w-full">
        {/* Light background image */}
        <img src="/book-quran.jpg" alt="Quran background" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none z-0" />
        {/* Bismillah - always at the very top, full width, centered, responsive size */}
        <AnimateSection delay={0} className="w-full flex justify-center pb-2">
          <span className="font-arabic text-xl sm:text-2xl md:text-3xl lg:text-4xl" style={{fontFamily: 'Amiri, serif', color: '#1E3A8A'}}>
            بسم الله الرحمن الرحيم
          </span>
        </AnimateSection>
        <HeroCursorBg />
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-900 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-amber-600 rounded-lg rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-900 rounded-full"></div>
        </div>
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimateSection className="space-y-7">
              <Badge className="!bg-[#060957] !text-white !border-[#060957] px-3 py-1 text-sm font-medium mb-6">
                ✨ Trusted by 120+ Students Worldwide
              </Badge>
              <AnimateSection delay={0.1}>
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-tight font-arabic">
                  <span className="whitespace-nowrap">Learn the Language of the</span>
                  <span className="text-blue-900 block">Quran</span>
                  <span className="text-amber-600 block text-xl lg:text-2xl xl:text-3xl">
                    from Anywhere in the World
                  </span>
                </h1>
              </AnimateSection>
              <AnimateSection delay={0.2}>
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl">
                  Master Quranic recitation, Arabic language, and Islamic studies with qualified teachers through
                  interactive online classes designed for students in the UK, USA, and beyond.
                </p>
              </AnimateSection>
              <AnimateSection delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/register">
                    <MotionButton
                      size="sm"
                      className="!bg-[#060957] !hover:bg-[#060957] text-white"
                    >
                      Register Now
                    </MotionButton>
                  </Link>
                  <a 
                    href="https://wa.me/03165249017?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20join%20Quran%20and%20Namaz%20Academy.%20Please%20provide%20more%20information%20about%20your%20courses%20and%20registration%20process."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MotionButton
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-white border-green-600 px-6 py-3 text-lg rounded-xl"
                    >
                      <MessageSquare className="mr-2 h-5 w-5 text-white" />
                      WhatsApp Us
                    </MotionButton>
                  </a>
                </div>
              </AnimateSection>
              <div className="flex items-center gap-8 pt-5">
                {[0,1,2].map((i) => (
                  <AnimateSection key={i} delay={0.4 + i*0.1} className="text-center">
                    {i === 0 && (
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="text-sm text-slate-600 font-medium">One on One Classes</div>
                      </div>
                    )}
                    {i === 1 && (
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-2">
                          <Shield className="h-6 w-6 text-amber-600" />
                        </div>
                        <div className="text-sm text-slate-600 font-medium">Wafaq ul Madaris Certified</div>
                      </div>
                    )}
                    {i === 2 && (
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                          <Clock className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="text-sm text-slate-600 font-medium">Flexible Time</div>
                      </div>
                    )}
                  </AnimateSection>
                ))}
              </div>
            </AnimateSection>
            <AnimateSection className="relative mt-10 sm:mt-0" delay={0.2}>
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 border border-slate-200/50 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <video
                    src="/family.mp4"
                    className="rounded-2xl object-cover w-full h-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/family.png"
                  />
                  <div className="absolute inset-0 bg-black/50 rounded-2xl hidden sm:block"></div>
                  <div className="absolute inset-0 bg-[#060957]/10 rounded-2xl hidden sm:block"></div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    🔴 LIVE
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-800 font-arabic">Interactive Quran Class</h3>
                  <p className="text-sm text-slate-600">Join our live sessions with qualified Qaris and experienced teachers</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Users className="h-4 w-4" />
                      <span>15 students online</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock className="h-4 w-4" />
                      <span>Next class: 6:00 PM UK</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Free Trial Available
              </div>
              <div className="absolute -bottom-6 -left-6 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                UK & USA Timings
              </div>
            </AnimateSection>
          </div>
        </div>
      </section>

      {/* Courses Section - Blue with animation */}
      <section className="py-24 px-2 sm:px-4 bg-[#060957] w-full">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fadeInDown">
            <Badge className="bg-white/10 text-white px-4 py-2 mb-6 shadow font-semibold tracking-wide animate-pulse">Our Programs</Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 font-serif">Explore Our Courses</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">Choose from our carefully designed courses for all ages and levels. More categories coming soon!</p>
          </div>
          <div className="flex justify-center gap-4 mb-10 animate-fadeInUp">
            <button className="px-6 py-2 rounded-full bg-white text-[#060957] font-semibold shadow hover:bg-[#060957] hover:text-white transition">Quran</button>
            <button className="px-6 py-2 rounded-full bg-[#060957] text-white font-semibold shadow border border-white/20 hover:bg-white hover:text-[#060957] transition">Arabic</button>
            <button className="px-6 py-2 rounded-full bg-[#060957] text-white font-semibold shadow border border-white/20 hover:bg-white hover:text-[#060957] transition">Kids</button>
            <button className="px-6 py-2 rounded-full bg-[#060957] text-white font-semibold shadow border border-white/20 hover:bg-white hover:text-[#060957] transition">Adults</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {courseHighlights.map((course, idx) => (
              <motion.div
                key={idx}
                initial={
                  idx === 0
                    ? "hiddenLeft"
                    : idx === 2
                    ? "hiddenRight"
                    : "hiddenPop"
                }
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hiddenLeft: { opacity: 0, x: -100 },
                  hiddenRight: { opacity: 0, x: 100 },
                  hiddenPop: { opacity: 0, scale: 0.8 },
                  visible:
                    idx === 0
                      ? { opacity: 1, x: 0, transition: { duration: 0.7, type: "spring" } }
                      : idx === 2
                      ? { opacity: 1, x: 0, transition: { duration: 0.7, type: "spring" } }
                      : { opacity: 1, scale: 1, transition: { duration: 0.7, type: "spring", bounce: 0.4 } }
                }}
                className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-900 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-blue-900/40 group"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {idx === 0 && <span className="absolute top-4 right-4 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow animate-bounce">Most Popular</span>}
                <div className="w-16 h-16 mx-auto mt-10 bg-[#060957] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-fadeInDown">
                  <course.icon className="h-8 w-8 text-white group-hover:text-amber-400 transition-colors duration-300 animate-pulse" />
                </div>
                <div className="px-8 py-6 text-center">
                  <h3 className="text-2xl font-bold font-serif mb-2 text-blue-900 animate-fadeInUp">{course.title}</h3>
                  <p className="text-blue-900/80 mb-4 font-light animate-fadeInUp">{course.description}</p>
                  <div className="flex justify-center gap-4 mb-4 animate-fadeInUp">
                    <span className="bg-[#060957]/10 text-[#060957] px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow"><Clock className="h-4 w-4 animate-spin" /> {course.duration}</span>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs flex items-center gap-1 shadow"><Users className="h-4 w-4 animate-pulse" /> {course.students}</span>
                  </div>
                  <Link href="/courses">
                    <Button className="w-full rounded-full px-8 py-4 font-semibold text-lg bg-[#060957] text-white shadow-xl shadow-[#060957]/30 transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#060957] hover:shadow-2xl hover:shadow-[#060957]/40 focus:outline-none focus:ring-4 focus:ring-[#060957]/40 backdrop-blur-md bg-opacity-90 border-none animate-fadeInUp"><span className="flex items-center justify-center gap-2 relative z-10 group"><BookOpen className="h-5 w-5 group-hover:animate-bounce group-hover:text-[#060957] transition-colors duration-300" />Learn More</span></Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16 animate-fadeInUp">
            <Link href="/courses">
              <button className="relative rounded-full px-7 py-3 text-lg font-bold bg-white text-blue-900 shadow-lg border-none transition-all duration-300 hover:scale-105 hover:shadow-blue-400/30 focus:outline-none focus:ring-2 focus:ring-blue-900/30 flex items-center gap-3">
                <span className="relative z-10">View All Courses</span>
                <svg className="w-5 h-5 text-blue-900 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events - Elegant Timeline Section */}
      <section className="py-20 px-2 sm:px-4 bg-white w-full">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-left">
            This Week at <span className="text-[#060957]">Quran and Namaz</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Timeline Dates */}
            <div className="flex flex-col gap-12 md:col-span-1">
              <div>
                <div className="text-lg font-bold text-gray-900">Today</div>
                <div className="text-sm text-gray-500">Flexible Hours</div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">Tomorrow</div>
                <div className="text-sm text-gray-500">Flexible Hours</div>
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">Tomorrow</div>
                <div className="text-sm text-gray-500">Flexible Hours</div>
              </div>
            </div>
            {/* Event Cards */}
            <div className="md:col-span-3 flex flex-col gap-8">
              {/* Event 1 */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.2, delay: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow p-6 gap-6 mb-8"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quran Recitation - Beginner</h3>
                  <p className="text-gray-600 mb-4">
                    Join our interactive Quran Recitation class for beginners, led by Ustadh Muhammad Al-Qari. Improve your reading, Tajweed, and confidence in a supportive environment.
                  </p>
                  <button className="px-5 py-2 rounded bg-[#060957] text-white font-semibold shadow hover:bg-[#060957] transition">
                    Join Now
                  </button>
                </div>
                <img src="/person1.jpeg" alt="Quran Recitation" className="w-40 h-28 object-cover rounded-lg" />
              </motion.div>
              {/* Event 2 */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.2, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow p-6 gap-6 mb-8"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kids Quran Adventure</h3>
                  <p className="text-gray-600 mb-4">
                    A fun, engaging Quran class for children ages 5-12. Includes games, stories, and interactive activities with Ustadha Fatima Zahra.
                  </p>
                  <button className="px-5 py-2 rounded bg-[#060957] text-white font-semibold shadow hover:bg-[#060957] transition">
                    Join Now
                  </button>
                </div>
                <img src="/person2.jpg" alt="Kids Quran Adventure" className="w-40 h-28 object-cover rounded-lg" />
              </motion.div>
              {/* Event 3 */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.2, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow p-6 gap-6 mb-8"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Arabic Language - Intermediate</h3>
                  <p className="text-gray-600 mb-4">
                    Take your Arabic to the next level! Practice conversation, grammar, and Quranic vocabulary with Ustadha Fatima Zahra. Suitable for all ages.
                  </p>
                  <button className="px-5 py-2 rounded bg-[#060957] text-white font-semibold shadow hover:bg-[#060957] transition">
                    Join Now
                  </button>
                </div>
                <img src="/person3.jpg" alt="Arabic Language" className="w-40 h-28 object-cover rounded-lg" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-2 sm:px-4 bg-[#060957] w-full">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1"
          >
            <div className="flex items-center gap-3 mb-2">
              <img src="/logo.jpg" alt="Quran and Namaz Logo" className="w-10 h-10 rounded-full" />
              <span className="text-lg font-bold text-white">Quran and Namaz</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Why Learn with Quran and Namaz?</h2>
            <h3 className="text-lg text-white font-semibold mb-4">Qur'anic Arabic, Tajweed, and Islamic Studies—All in One Place</h3>
            <p className="text-white mb-4">
              Empowering you and your family to connect with the Qur'an, wherever you are.  
              <br />
              <span className="text-white font-medium">Flexible online classes, expert teachers, and a supportive Islamic environment.</span>
            </p>
            <button className="px-6 py-2 rounded bg-white text-[#060957] font-bold shadow hover:bg-white/90 transition">Get Started</button>
          </motion.div>
          {/* Right Image/Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 flex justify-center"
          >
            <img src="/girl.jpg" alt="Quran and Namaz Student" className="w-full max-w-md rounded-2xl shadow-lg border border-white/20" />
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Modern, Elegant, Responsive Grid */}
      <section className="py-24 px-2 sm:px-4 bg-white w-full">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black font-serif mb-4 text-center">
            What Our Students Say
          </h2>
          <p className="text-lg text-black mb-12 text-center max-w-2xl mx-auto">
            Hear from parents and learners who've transformed their connection with the Qur'an through Quran and Namaz.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.2, delay: idx * 0.15 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative bg-[#060957] rounded-3xl shadow-2xl border border-blue-900 p-8 flex flex-col items-center glass-card transition-all duration-300 hover:scale-105"
              >
                {/* Profile Image with border glow */}
                <div className="mb-4 relative">
                  <div className="w-20 h-20 rounded-full border-4 border-gradient-to-tr from-amber-300 via-teal-300 to-blue-400 shadow-lg overflow-hidden flex items-center justify-center">
                    <img src={t.photo} alt={t.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                  {t.verified && (
                    <span className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow">
                      {/* Check icon SVG */}
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 7.293a1 1 0 00-1.414 0L9 13.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
                    </span>
                  )}
                </div>
                {/* Name, location, flag */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg font-bold text-white">{t.name}</span>
                  <span className="text-2xl text-white">{t.flag}</span>
                </div>
                <div className="text-blue-100 text-sm mb-2">{t.location}</div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  ))}
                </div>
                {/* Course tag */}
                <span className="bg-gradient-to-r from-amber-200 to-teal-200 text-blue-900 px-3 py-1 rounded-full text-xs font-semibold mb-3 shadow">
                  {t.course}
                </span>
                {/* Quote */}
                <div className="relative text-center mt-2">
                  {/* Inline SVG for left quote */}
                  <svg className="absolute -left-5 -top-2 text-2xl text-amber-300 opacity-60" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.17 17H5a1 1 0 0 1-1-1v-4.17A5 5 0 0 1 9 7h.5a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-.5.5H9a3 3 0 0 0-3 3V15h3.17a1 1 0 0 1 0 2zM20 17h-4.17a1 1 0 0 1 0-2H19v-2.5a3 3 0 0 0-3-3h-.5a.5.5 0 0 1-.5-.5V7.5a.5.5 0 0 1 .5-.5H16a5 5 0 0 1 5 5V16a1 1 0 0 1-1 1z"/>
                  </svg>
                  <p className="italic text-white font-serif text-lg leading-relaxed px-2">{t.quote}</p>
                  {/* Inline SVG for right quote */}
                  <svg className="absolute -right-5 -bottom-2 text-2xl text-amber-300 opacity-60" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.83 7H19a1 1 0 0 1 1 1v4.17A5 5 0 0 1 15 17h-.5a.5.5 0 0 1-.5-.5V15a.5.5 0 0 1 .5-.5H15a3 3 0 0 0 3-3V9h-3.17a1 1 0 0 1 0-2zM4 7h4.17a1 1 0 0 1 0 2H5v2.5a3 3 0 0 0 3 3h.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H8a5 5 0 0 1-5-5V8a1 1 0 0 1 1-1z"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section - Owner Information */}
      <section className="py-24 px-2 sm:px-4 bg-white w-full">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black font-serif mb-4 text-center">
            About Our Founder
          </h2>
          <p className="text-lg text-black mb-12 text-center max-w-2xl mx-auto">
            Meet the dedicated scholar behind Quran and Namaz Academy
          </p>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Owner Image */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex-1 flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 rounded-full border-4 border-[#060957] shadow-2xl overflow-hidden">
                  <img src="/owner.jpg" alt="Hafiz Nisar Ahmed Mustafa" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#060957] text-white px-4 py-2 rounded-full shadow-lg">
                  <span className="font-bold">Founder & Director</span>
                </div>
              </div>
            </motion.div>
            {/* Owner Information */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.2, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex-1"
            >
              <h3 className="text-3xl font-bold text-[#060957] mb-4">Hafiz Nisar Ahmed Mustafa</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A dedicated Islamic scholar and educator with over 15 years of experience in teaching Quran, 
                Tajweed, and Islamic studies. Hafiz Nisar Ahmed Mustafa is committed to spreading authentic 
                Islamic knowledge through modern technology and innovative teaching methods.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#060957] rounded-full flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Certified by Wafaq ul Madaris</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#060957] rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">500+ Students Taught</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#060957] rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Specialized in Quran Memorization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#060957] rounded-full flex items-center justify-center">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">International Teaching Experience</span>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <Button className="bg-[#060957] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#060957]/90 transition-all duration-300 shadow-lg">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sample Class Video - Unique, eye-catching, premium Islamic accent */}
      <section className="py-28 px-2 sm:px-4 bg-[#060957] relative overflow-hidden w-full">
        {/* Soft diagonal gradient background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-amber-100/10 to-blue-900/5 pointer-events-none select-none z-0" />
        {/* Islamic accent SVG deleted */}
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-16 relative z-10 animate-fadeInUp">
          {/* Video Card with animated gradient glow and floating crescent */}
          <AnimateSection className="flex-1 flex items-center justify-center relative" from="left">
            {/* Animated gradient glow */}
            <div className="absolute -inset-8 z-0 pointer-events-none">
              <div className="w-full h-full rounded-3xl bg-gradient-to-tr from-blue-900/30 via-amber-200/30 to-blue-900/10 blur-2xl animate-pulse-slow" />
            </div>
            {/* Floating crescent (Islamic accent) removed as per user request */}
            <div className="relative rounded-3xl shadow-2xl border-2 border-blue-900/10 backdrop-blur-xl bg-white/80 overflow-hidden group z-10">
              <video src="/video.mp4" className="rounded-3xl object-cover w-full h-full relative z-10" autoPlay muted loop playsInline poster="/family.png" />
              {/* Subtle, lighter blur overlay to hide watermark */}
              <div className="absolute right-2 bottom-2 w-56 h-12 rounded-xl backdrop-blur-sm bg-white/10 z-20 pointer-events-none" />
          </div>
          </AnimateSection>
          {/* Info Side */}
          <AnimateSection className="flex-1 flex flex-col items-center md:items-start text-center md:text-left" from="right">
            {/* English heading updated to Quran and Namaz style */}
            <AnimateSection className="mb-2" delay={0.1} from="bottom">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif drop-shadow-lg" style={{ color: '#fbbf24' }}>Quran and Namaz Academy</h2>
            </AnimateSection>
            {/* Quranic Ayat */}
            <span className="font-arabic text-3xl md:text-4xl text-white drop-shadow-lg mb-2" style={{fontFamily: 'Amiri, serif', letterSpacing: '1px'}}>اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ</span>
            <span className="text-white text-lg font-light mb-4 block drop-shadow-sm" style={{letterSpacing: '0.5px'}}>"Recite in the name of your Lord who created" <span className="text-white/70">(Qur'an 96:1)</span></span>
            <p className="text-lg text-white/80 max-w-xl mb-6 animate-fadeInUp">Experience our teaching style, interactive lessons, and warm Islamic environment. Every class is designed to inspire and engage students of all ages.</p>
            <AnimateSection className="flex gap-4 mt-2" delay={0.2} from="bottom">
              <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold shadow">Live Demo</span>
              <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold shadow">Interactive</span>
              <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold shadow">Family Friendly</span>
            </AnimateSection>
          </AnimateSection>
        </div>
      </section>

      {/* FAQ - Modern Elegant Blue Card with Scroll Animation */}
      <section className="py-20 px-2 sm:px-4 flex justify-center items-center bg-white w-full">
        <AnimateSection className="w-full max-w-2xl mx-auto" from="left">
          <div className="bg-[#060957] rounded-3xl shadow-2xl p-6 sm:p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 font-serif text-white drop-shadow-lg">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "What courses do you offer?",
                  a: "We offer Quran reading, Tajweed, and Arabic language for all ages and levels."
                },
                {
                  q: "How do I register?",
                  a: "You can register online using our registration form. We'll contact you to schedule your free trial class."
                },
                {
                  q: "Are classes one-on-one or group?",
                  a: "We offer both one-on-one and small group classes, depending on your preference."
                },
                {
                  q: "What if I miss a class?",
                  a: "We offer flexible rescheduling and makeup classes to fit your needs."
                },
                {
                  q: "What platform are classes held on?",
                  a: "All classes are conducted via Microsoft Teams. You will receive a Teams invite link after registration."
                }
              ].map((item, idx) => (
                <details key={idx} className="group rounded-2xl shadow-lg transition-all duration-300 border border-blue-800 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
                  <summary className="font-semibold text-white flex items-center justify-between cursor-pointer text-lg group-open:text-amber-400 transition-colors bg-blue-900/80 rounded-xl px-6 py-4">
                    {item.q}
                    <span className="ml-2 text-amber-400 transition-transform duration-300 group-open:rotate-90 text-2xl">
                      {/* Plus/minus icon for expand/collapse */}
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M12 5v14m7-7H5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-3 text-blue-100 text-base leading-relaxed border-t border-blue-700 pt-4 animate-fadeInUp px-6 pb-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </AnimateSection>
      </section>

      {/* Contact - Blue with animation */}
      <section className="py-20 px-2 sm:px-4 bg-[#060957] text-white text-center animate-fadeInUp w-full">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Contact Us</h2>
          <p className="text-xl mb-8 text-white/80 leading-relaxed max-w-2xl mx-auto">Have questions or need support? Our team is here to help you 24/7. Reach out via email, WhatsApp, or the contact form below.</p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a href="mailto:info@quranandnamaz.com" className="bg-white/10 rounded-xl px-8 py-6 shadow hover:bg-white/20 transition text-white flex flex-col items-center">
              <Mail className="h-8 w-8 mb-2" />
              <span className="font-bold">Email</span>
              <span className="text-white/80">info@quranandnamaz.com</span>
            </a>
            <a href="https://wa.me/03165249017" className="bg-green-600 hover:bg-green-700 rounded-xl px-8 py-6 shadow transition text-white flex flex-col items-center">
              <MessageCircle className="h-8 w-8 mb-2" />
              <span className="font-bold">WhatsApp</span>
              <span className="text-white/80">0316 5249017</span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61578041309911&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="bg-white/10 rounded-xl px-8 py-6 shadow hover:bg-white/20 transition text-white flex flex-col items-center">
              <Facebook className="h-8 w-8 mb-2" />
              <span className="font-bold">Facebook</span>
              <span className="text-white/80">Follow Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer - White with animation */}
      <footer className="py-8 bg-white text-[#1E3A8A] text-center animate-fadeInUp w-full">
        <div className="container mx-auto max-w-4xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-lg font-bold animate-fadeInLeft">Quran and Namaz Academy</div>
          <div className="flex gap-6 animate-fadeInUp">
            <a href="#" className="hover:underline text-[#1E3A8A] hover:text-blue-700">Home</a>
            <a href="#" className="hover:underline text-[#1E3A8A] hover:text-blue-700">Courses</a>
            <a href="#" className="hover:underline text-[#1E3A8A] hover:text-blue-700">About</a>
            <a href="#" className="hover:underline text-[#1E3A8A] hover:text-blue-700">Contact</a>
          </div>
          <div className="flex gap-4 animate-fadeInRight">
            <a href="#" className="text-[#1E3A8A] hover:text-blue-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 11-12.728 0M12 3v9" /></svg></a>
            <a href="#" className="text-[#1E3A8A] hover:text-blue-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2M12 15v2m0 0v-2m0 0a2 2 0 100-4 2 2 0 000 4z" /></svg></a>
            <a href="#" className="text-[#1E3A8A] hover:text-blue-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 01-12 0" /></svg></a>
          </div>
          <div className="text-sm animate-fadeInUp">&copy; {new Date().getFullYear()} Quran and Namaz Academy. All rights reserved.</div>
        </div>
      </footer>
      {/* Floating Chatbot Button */}
      <button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#060957] text-white shadow-xl flex items-center justify-center hover:bg-[#060957] transition-all duration-300 animate-fadeInUp"
        aria-label="Open Chatbot"
        style={{ display: chatOpen ? 'none' : 'flex' }}
      >
        {/* Chat Icon SVG */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-1.9 5.4 8.5 8.5 0 01-6.6 3.1 8.38 8.38 0 01-5.4-1.9L3 21l2.9-4.6A8.38 8.38 0 013 11.5 8.5 8.5 0 016.1 4.9 8.38 8.38 0 0111.5 3a8.5 8.5 0 018.5 8.5z" /></svg>
      </button>
      {/* Chatbot Modal */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-xs bg-white rounded-2xl shadow-2xl border border-blue-900 flex flex-col animate-fadeInUp">
          <div className="flex items-center justify-between px-4 py-3 bg-[#060957] rounded-t-2xl">
            <span className="text-white font-bold">Quran and Namaz Chatbot</span>
            <button onClick={() => setChatOpen(false)} className="text-white hover:text-amber-400 text-xl font-bold">×</button>
          </div>
          <div className="flex-1 px-4 py-3 overflow-y-auto max-h-60" style={{ minHeight: '120px' }}>
            {chatMessages.map((msg, i) => (
              <div key={i} className={`mb-2 flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <span className={`px-3 py-2 rounded-xl text-sm ${msg.from === 'user' ? 'bg-[#060957]/10 text-[#060957]' : 'bg-[#060957] text-white'}`}>{msg.text}</span>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleChatSend} className="flex border-t border-blue-100">
            <input
              type="text"
              value={chatInput}
              onChange={e => setChatInput(e.target.value)}
              className="flex-1 px-3 py-2 rounded-bl-2xl outline-none text-blue-900"
              placeholder="Type your message..."
            />
            <button type="submit" className="px-4 text-[#060957] font-bold hover:text-amber-500">Send</button>
          </form>
        </div>
      )}
    </div>
  )
}

