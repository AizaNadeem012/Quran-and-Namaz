"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, Users, Star, CheckCircle, Globe, Award, Heart } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion";

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: "Quran Reading (Nazra)",
      subtitle: "Master the Art of Quranic Recitation",
      description:
        "Learn proper Quran recitation with correct pronunciation, basic Tajweed rules, and spiritual connection",
      duration: "6-12 months",
      level: "Beginner",
      students: 200,
      rating: 4.9,
      price: "£40/month",
      originalPrice: "£50/month",
      features: [
        "Arabic alphabet recognition and pronunciation",
        "Basic Tajweed rules and application",
        "Proper Makharij (articulation points)",
        "Reading fluency development",
        "Weekly progress assessments",
        "Individual feedback sessions",
        "Digital Quran with audio support",
        "Certificate upon completion",
      ],
      highlights: ["Most Popular", "Beginner Friendly"],
      color: "border-blue-200 bg-gradient-to-br from-blue-50 to-white",
      icon: BookOpen,
      ukTime: "6:00 PM - 7:00 PM",
      usaTime: "1:00 PM - 2:00 PM EST",
      teacher: "Ustadh Muhammad Al-Qari",
    },
    {
      id: 2,
      title: "Quran Memorization (Hifz)",
      subtitle: "Sacred Journey of Memorizing the Holy Quran",
      description:
        "Systematic Quran memorization program with proven techniques, revision methods, and spiritual guidance",
      duration: "2-4 years",
      level: "Intermediate",
      students: 120,
      rating: 4.8,
      price: "£60/month",
      originalPrice: "£75/month",
      features: [
        "Structured memorization methodology",
        "Daily revision schedule planning",
        "Memory retention techniques",
        "Spiritual counseling and motivation",
        "Progress tracking and milestones",
        "Peer support groups",
        "Monthly family progress reports",
        "Ijazah pathway preparation",
      ],
      highlights: ["Premium Program", "Spiritual Growth"],
      color: "border-amber-200 bg-gradient-to-br from-amber-50 to-white",
      icon: Heart,
      ukTime: "7:00 PM - 8:30 PM",
      usaTime: "2:00 PM - 3:30 PM EST",
      teacher: "Ustadh Ahmad Ibn Yusuf",
    },
    {
      id: 3,
      title: "Tajweed Excellence",
      subtitle: "Perfect Your Quranic Recitation",
      description:
        "Advanced Tajweed course focusing on perfect pronunciation, beautiful recitation, and spiritual connection",
      duration: "8-12 months",
      level: "Advanced",
      students: 80,
      rating: 4.9,
      price: "£50/month",
      originalPrice: "£65/month",
      features: [
        "Advanced Tajweed rules mastery",
        "Makharij perfection training",
        "Sifaat (characteristics) application",
        "Beautiful recitation styles (Qira'at)",
        "Individual voice coaching",
        "Recording and feedback sessions",
        "Competition preparation",
        "Advanced certification",
      ],
      highlights: ["Expert Level", "Voice Training"],
      color: "border-green-200 bg-gradient-to-br from-green-50 to-white",
      icon: Star,
      ukTime: "8:00 PM - 9:00 PM",
      usaTime: "3:00 PM - 4:00 PM EST",
      teacher: "Ustadh Muhammad Al-Qari",
    },
  ]

  const getBadgeColor = (level: string) => {
    const colors = {
      Beginner: "bg-green-100 text-green-800",
      Intermediate: "bg-amber-100 text-amber-800",
      Advanced: "bg-red-100 text-red-800",
      "All Levels": "bg-blue-100 text-blue-800",
      "Kids (5-12 years)": "bg-pink-100 text-pink-800",
    }
    return colors[level as keyof typeof colors] || colors["All Levels"]
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="!bg-[#060957] !text-white !border-[#060957] px-4 py-2 mb-6">Our Programs</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 font-arabic">
            Comprehensive Islamic
            <span className="text-blue-900 block">Education Programs</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Choose from our carefully designed courses that cater to students of all levels and ages. Each program
            combines traditional Islamic teaching methods with modern educational technology to provide an exceptional
            learning experience.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <Card
                className={`border-2 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${course.color} relative overflow-hidden`}
              >
                {/* Highlights */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  {course.highlights.map((highlight, index) => (
                    <Badge key={index} className="bg-[#060957] text-white text-xs px-2 py-1">
                      {highlight}
                    </Badge>
                  ))}
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <course.icon className="h-6 w-6 text-blue-900" />
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                  </div>

                  <Badge className={getBadgeColor(course.level)} variant="secondary">
                    {course.level}
                  </Badge>

                  <CardTitle className="text-xl text-slate-800 font-arabic mt-2">{course.title}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium text-sm">{course.subtitle}</CardDescription>
                  <CardDescription className="text-slate-600 leading-relaxed mt-2">{course.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Course Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Users className="h-4 w-4" />
                      <span>{course.students} students</span>
                    </div>
                  </div>

                  {/* Teacher Info */}
                  <div className="bg-white/50 rounded-lg p-3 space-y-2">
                    <div className="text-sm text-green-700 font-medium">Teacher certified by Wafaq ul Madaris</div>
                    <a
                      href="https://teams.live.com/l/invite/FEAUg-LwLJlBFRYsAI?v=g1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-4 py-2 bg-[#060957] text-white rounded-lg font-semibold text-xs hover:bg-[#060957] transition"
                    >
                      Join Class on Microsoft Teams
                    </a>
                  </div>

                  {/* Features Preview */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-800 text-sm">What you'll learn:</h4>
                    <ul className="space-y-1">
                      {course.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {course.features.length > 4 && (
                        <li className="text-sm text-slate-500 ml-5">+{course.features.length - 4} more features</li>
                      )}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="pt-4 border-t border-slate-200">
                    {/* Price section removed as per request */}

                    <div className="space-y-2">
                      <Link href="/register" className="block">
                        <Button className="w-full bg-[#060957] hover:bg-[#060957] text-white rounded-lg py-6">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Enroll Now
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 bg-white/80 rounded-lg"
                      >
                        Free Trial Class
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-6">Why Choose Our Courses</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 font-arabic mb-4">
              Excellence in Every Aspect
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
              icon: <BookOpen className="h-8 w-8 !text-white" />, bg: "!bg-[#060957]", title: "Authentic Curriculum", desc: "Based on traditional Islamic scholarship"
            }, {
              icon: <Users className="h-8 w-8 text-amber-600" />, bg: "bg-amber-100", title: "Expert Teachers", desc: "Qualified Islamic scholars and educators"
            }, {
              icon: <Clock className="h-8 w-8 text-green-600" />, bg: "bg-green-100", title: "Flexible Schedule", desc: "UK & USA friendly timings"
            }, {
              icon: <Award className="h-8 w-8 text-purple-600" />, bg: "bg-purple-100", title: "Certification", desc: "Recognized Islamic education certificates"
            }].map((item, i) => (
              <motion.div
                key={item.title}
                className="text-center space-y-3"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: i * 0.15 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mx-auto`}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-800">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Course Comparison Table Section */}
        <motion.div
          className="mb-16 rounded-3xl p-8"
          style={{ backgroundColor: '#060957' }}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="text-center mb-8">
            <Badge className="bg-white/20 text-white px-4 py-2 mb-4">Compare Courses</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-arabic mb-2">Find Your Best Fit</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">See how our courses differ in focus, duration, and level to help you choose the perfect program for your needs.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white/10 rounded-2xl shadow-md text-sm text-white">
              <thead>
                <tr className="bg-white/20">
                  <th className="py-3 px-4 text-left font-semibold">Course</th>
                  <th className="py-3 px-4 text-left font-semibold">Level</th>
                  <th className="py-3 px-4 text-left font-semibold">Duration</th>
                  <th className="py-3 px-4 text-left font-semibold">Focus</th>
                  <th className="py-3 px-4 text-left font-semibold">Key Feature</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/20">
                  <td className="py-3 px-4 font-medium text-blue-200">Quran Reading (Nazra)</td>
                  <td className="py-3 px-4">Beginner</td>
                  <td className="py-3 px-4">6-12 months</td>
                  <td className="py-3 px-4">Recitation & Tajweed Basics</td>
                  <td className="py-3 px-4">Digital Quran with Audio</td>
                </tr>
                <tr className="border-b border-white/20">
                  <td className="py-3 px-4 font-medium text-blue-200">Quran Memorization (Hifz)</td>
                  <td className="py-3 px-4">Intermediate</td>
                  <td className="py-3 px-4">2-4 years</td>
                  <td className="py-3 px-4">Memorization & Revision</td>
                  <td className="py-3 px-4">Ijazah Pathway</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-blue-200">Tajweed Excellence</td>
                  <td className="py-3 px-4">Advanced</td>
                  <td className="py-3 px-4">8-12 months</td>
                  <td className="py-3 px-4">Advanced Tajweed & Qira'at</td>
                  <td className="py-3 px-4">Voice Coaching</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Learning Pathways Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-4">Learning Pathways</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 font-arabic mb-2">Your Journey, Step by Step</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Progress from beginner to advanced with our structured learning pathways. Each step builds your skills and confidence.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {[
              {
                icon: <BookOpen className="h-7 w-7 !text-white" />, bg: "!bg-[#060957]", step: "Step 1", color: "!text-white", title: "Quran Reading (Nazra)", desc: "Learn the basics of recitation and Tajweed."
              },
              {
                icon: <Star className="h-7 w-7 text-amber-600" />, bg: "bg-amber-100", step: "Step 2", color: "text-amber-700", title: "Tajweed Excellence", desc: "Perfect your recitation and pronunciation."
              },
              {
                icon: <Award className="h-7 w-7 text-green-600" />, bg: "bg-green-100", step: "Step 3", color: "text-green-700", title: "Quran Memorization (Hifz)", desc: "Memorize and master the Holy Quran."
              }
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="flex flex-col items-center"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: i * 0.15 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <div className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center mb-2`}>
                  {item.icon}
                </div>
                <div className={`font-semibold ${item.color}`}>{item.step}</div>
                <div className="text-xs text-slate-600 text-center">{item.title}<br />{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section removed as per request */}
      </div>
    </div>
  )
}
