"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Heart, Star, Shield, Clock } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const teachers = [
    {
      name: "Ustadh Muhammad Al-Qari",
      title: "Lead Quran Teacher & Tajweed Expert",
      qualification: "Ijazah in Quranic Recitation, Al-Azhar University",
      experience: "15+ years",
      specialization: "Tajweed, Qira'at, Quran Memorization",
      image: "/placeholder.svg?height=300&width=300",
      languages: ["Arabic", "English", "Urdu"],
    },
    {
      name: "Ustadha Fatima Zahra",
      title: "Arabic Language & Islamic Studies",
      qualification: "MA in Arabic Literature, Islamic University of Madinah",
      experience: "12+ years",
      specialization: "Arabic Grammar, Islamic History, Women's Classes",
      image: "/placeholder.svg?height=300&width=300",
      languages: ["Arabic", "English"],
    },
    {
      name: "Ustadh Ahmad Ibn Yusuf",
      title: "Islamic Studies & Fiqh Scholar",
      qualification: "PhD in Islamic Jurisprudence, University of Damascus",
      experience: "18+ years",
      specialization: "Fiqh, Aqeedah, Hadith Studies",
      image: "/placeholder.svg?height=300&width=300",
      languages: ["Arabic", "English", "French"],
    },
  ]

  const values = [
    {
      icon: BookOpen,
      title: "Authentic Knowledge",
      description: "We adhere to traditional Islamic scholarship while embracing modern teaching methodologies",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Heart,
      title: "Spiritual Excellence",
      description: "Fostering not just academic learning but spiritual connection with the Quran",
      color: "bg-red-50 text-red-600",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Creating a global community of learners united in their love for Islamic knowledge",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Maintaining the highest standards of Islamic ethics in all our interactions",
      color: "bg-purple-50 text-purple-600",
    },
  ]

  const cardContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const cardItem = {
    hidden: { x: -60, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 60, damping: 18 } }
  };

  // Animated counters for achievements
  const [students, setStudents] = useState(0);
  const [teachersCount, setTeachersCount] = useState(0);
  const [completions, setCompletions] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    let start = 0;
    let studentsTarget = 120;
    let teachersTarget = 10;
    let completionsTarget = 80;
    let ratingTarget = 4.7;
    let duration = 1000; // ms
    let frame = 0;
    let totalFrames = 60;
    function animate() {
      frame++;
      setStudents(Math.floor((studentsTarget * frame) / totalFrames));
      setTeachersCount(Math.floor((teachersTarget * frame) / totalFrames));
      setCompletions(Math.floor((completionsTarget * frame) / totalFrames));
      setRating((ratingTarget * frame) / totalFrames);
      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      } else {
        setStudents(studentsTarget);
        setTeachersCount(teachersTarget);
        setCompletions(completionsTarget);
        setRating(ratingTarget);
      }
    }
    animate();
  }, []);

  return (
    <div className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50 overflow-hidden min-h-screen px-4">
      {/* Quranic Ayah Banner */}
      <div className="w-full flex justify-center mb-8">
        <span className="text-5xl md:text-6xl lg:text-7xl text-[#fbbf24] text-center font-arabic drop-shadow-lg" style={{ fontFamily: 'Noto Nastaliq Urdu, serif', letterSpacing: '1px', textShadow: '0 2px 16px #fbbf24, 0 1px 1px #fff' }}>قرآن اور نماز</span>
      </div>
      {/* Our Story */}
      <div className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6 ml-8 md:ml-16"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Badge className="bg-green-100 text-green-800 px-4 py-2">Our Journey</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 font-arabic">
              A Story of Faith and Innovation
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Our Journey: From a Small Beginning to a Global Mission

                Hafiz Nisar Ahmed Mustafa began his journey with the Holy Quran at a young age, driven by a deep love for the Book of Allah and a passion to serve the Ummah. Raised in a humble environment, he memorized the Quran under the guidance of dedicated teachers who instilled in him not just knowledge, but a sense of responsibility—to spread the light of the Quran far and wide.

              </p>
              <p>What started as a small local Quran class in his home city quickly grew into something far greater than he ever imagined. With sincerity, patience, and a firm belief in the transformative power of the Quran, Hafiz Nisar Ahmed began teaching a few students—many of whom came seeking clarity, peace, and connection with their faith.</p>
              <p>
                Through word of mouth and the blessings of Allah, more students began to join. Soon, his teachings reached beyond the borders of his city, then his country, and today—by the grace of Allah—Hafiz Nisar Ahmed Mustafa is known worldwide, offering online Quran classes to students across continents.
              </p>
              <p>
                His mission has always been simple: To help every Muslim, young or old, connect with the Quran—not just through recitation, but with understanding, reflection, and love.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="bg-gradient-to-br from-blue-50 via-white to-amber-50 rounded-3xl p-8 shadow-lg">
              <Image
                src="/namaz.jpg"
                alt="Namaz - Islamic Prayer"
                width={400}
                height={300}
                className="rounded-2xl w-full"
              />
              <div className="absolute -top-4 -right-4 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Since 2020
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <Badge className="bg-purple-100 text-purple-800 px-4 py-2 mb-6">Our Foundation</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 font-arabic mb-4">Built on Islamic Values</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Every aspect of our academy is grounded in the timeless principles of Islamic education
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={cardContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={cardItem}>
              <Card className="border border-slate-200 hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    {index === 0 ? (
                      <Image src="/logo.jpg" alt="Logo" width={32} height={32} className="rounded-none" />
                    ) : (
                      <value.icon className="h-8 w-8" />
                    )}
                  </div>
                  <CardTitle className="text-lg text-slate-800 font-arabic">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed text-sm">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Teacher Profiles */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <Badge className="bg-amber-100 text-amber-800 px-4 py-2 mb-6">Meet Our Scholars</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 font-arabic mb-4">
            Learn from Qualified Islamic Scholars
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our teachers combine deep Islamic knowledge with modern pedagogical expertise
          </p>
        </div>

        <div className="flex flex-row justify-center items-start gap-6">
          {teachers.map((teacher, index) => (
            <Card
              key={index}
              className="border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden w-56 text-white"
              style={{ backgroundColor: '#060957' }}
            >
              {/* Removed image and name */}
              <CardHeader className="pb-2 text-white">
                <CardDescription className="font-medium text-xs text-white">{teacher.title}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-white">
                <div className="space-y-1 text-xs">
                  <div className="flex items-start gap-1">
                    <Award className="h-3 w-3 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{teacher.qualification}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-green-300 flex-shrink-0" />
                    <span className="text-white">{teacher.experience} teaching experience</span>
                  </div>
                  <div className="flex items-start gap-1">
                    <Star className="h-3 w-3 text-purple-300 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{teacher.specialization}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {teacher.languages.map((lang, langIndex) => (
                    <Badge key={langIndex} className="bg-white bg-opacity-20 text-white text-[10px] px-1 py-0.5 border border-white border-opacity-30">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-8 lg:p-12">
        <div className="text-center mb-12">
          <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-6">Our Impact</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 font-arabic mb-4">
            Transforming Lives Worldwide
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Alhamdulillah, by Allah's grace, we have achieved remarkable milestones in our mission
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <div className="text-2xl font-bold text-blue-900">{students}+</div>
            <div className="text-base text-slate-600 font-medium">Students Enrolled</div>
            <div className="text-xs text-slate-500">Across 10+ Countries</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold text-amber-600">{teachersCount}+</div>
            <div className="text-base text-slate-600 font-medium">Qualified Teachers</div>
            <div className="text-xs text-slate-500">Certified Islamic Scholars</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold text-green-600">{completions}+</div>
            <div className="text-base text-slate-600 font-medium">Quran Completions</div>
            <div className="text-xs text-slate-500">Students who finished Quran</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold text-purple-600">{rating.toFixed(1)}★</div>
            <div className="text-base text-slate-600 font-medium">Student Rating</div>
            <div className="text-xs text-slate-500">Based on 200+ reviews</div>
          </div>
        </div>
      </div>
    </div>
  )
}
