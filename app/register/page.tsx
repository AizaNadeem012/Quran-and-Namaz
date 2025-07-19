import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Star, MessageCircle, BookOpen, Shield, Award } from "lucide-react"
import { RegistrationForm } from "@/components/RegistrationForm"

export default function RegisterPage() {
  const registrationSteps = [
    {
      step: 1,
      title: "Fill Registration Form",
      description: "Complete our comprehensive form with your learning preferences and goals",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-900",
    },
    {
      step: 2,
      title: "Confirmation Email",
      description: "Receive instant confirmation with course details and next steps",
      icon: CheckCircle,
      color: "bg-green-100 text-green-900",
    },
    {
      step: 3,
      title: "Teams Link Sent",
      description: "Get your personalized Microsoft Teams link for the free trial class",
      icon: MessageCircle,
      color: "bg-amber-100 text-amber-900",
    },
  ]

  const pricingPlans = [
    {
      name: "Individual Classes",
      price: "£40",
      period: "per month",
      description: "Perfect for focused one-on-one learning",
      features: [
        "1-on-1 personalized sessions",
        "Flexible scheduling",
        "Individual progress tracking",
        "Direct teacher feedback",
        "Custom learning pace",
      ],
      popular: false,
      color: "border-slate-200",
    },
    {
      name: "Group Classes",
      price: "£25",
      period: "per month",
      description: "Learn with peers in small groups (max 6 students)",
      features: [
        "Small group interaction",
        "Peer learning benefits",
        "Competitive pricing",
        "Social learning environment",
        "Group activities and discussions",
      ],
      popular: true,
      color: "border-[#060957]/20 bg-[#060957]/5",
    },
    {
      name: "Family Package",
      price: "£60",
      period: "per month",
      description: "Special rate for families (2+ members)",
      features: [
        "Multiple family members",
        "Coordinated scheduling",
        "Family progress reports",
        "Sibling discounts",
        "Flexible member additions",
      ],
      popular: false,
      color: "border-green-200",
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="!bg-[#060957] !text-white !border-[#060957] px-4 py-2 mb-6">Join Our Academy</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 font-arabic">
            Begin Your Sacred
            <span className="text-blue-900 block">Learning Journey</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students worldwide who have transformed their relationship with the Quran. Fill out the
            form below and start with a free trial class to experience our teaching excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Registration Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-slate-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-amber-50">
                <CardTitle className="text-2xl text-slate-800 font-arabic">Student Registration Form</CardTitle>
                <CardDescription className="text-slate-600">
                  Please fill out all required information to get started with your Islamic education journey
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {/* Custom Registration Form */}
                <RegistrationForm />

                {/* Form Fields Preview */}
                <div className="mt-6 space-y-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                  <h3 className="font-semibold text-slate-800 mb-4">Registration Form Includes:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-slate-700">Personal Information</span>{" "}
                        <span className="text-sm text-slate-700">Personal Information</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-slate-700">Course Selection</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-slate-700">Preferred Schedule</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-slate-700">Learning Goals</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-slate-700">Contact Details</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-slate-700">Previous Experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-slate-700">Time Zone Preference</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-slate-700">Special Requirements</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Registration Benefits */}
            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800 flex items-center gap-2 font-arabic">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Registration Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700">Free 30-minute trial class</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700">Personalized learning assessment</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700">Flexible UK & USA scheduling</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700">24/7 WhatsApp support</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700">Digital learning materials</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700">Progress tracking dashboard</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800 font-arabic">Why Students Choose Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Active Students</span>
                  </div>
                  <Badge className="!bg-[#060957] !text-white !border-[#060957]">500+</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-amber-500" />
                    <span className="text-sm text-slate-700">Average Rating</span>
                  </div>
                  <Badge className="bg-amber-100 text-amber-800">4.9★</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-slate-700">Response Time</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800">{"<24hrs"}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-slate-700">Success Rate</span>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800">98%</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800 flex items-center gap-2 font-arabic">
                  <MessageCircle className="h-5 w-5 text-amber-600" />
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-700">
                  Have questions about registration or course selection? Our team is here to help!
                </p>
                <div className="space-y-3">
                  {/* Remove WhatsApp UK and USA phone numbers */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Registration Steps */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Badge className="bg-[#060957]/10 text-[#060957] px-4 py-2 mb-6">Simple Process</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 font-arabic mb-4">What Happens Next?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our streamlined registration process gets you started in just 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {registrationSteps.map((step, index) => (
              <Card
                key={index}
                className="border border-slate-200 hover:shadow-lg transition-all duration-300 text-center relative"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 relative`}
                  >
                    <step.icon className="h-8 w-8" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#060957] text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {step.step}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-slate-800 font-arabic">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">{step.description}</CardDescription>
                </CardContent>

                {/* Arrow for desktop */}
                {index < registrationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-slate-300"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-slate-300 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        {/* Pricing section removed as per request */}

        {/* Trust Indicators */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-6">Trusted Worldwide</Badge>
            <h2 className="text-3xl font-bold text-slate-800 font-arabic mb-4">Join Our Global Community</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-[#060957]/10 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-blue-900" />
              </div>
              <div className="text-3xl font-bold text-blue-900">500+</div>
              <div className="text-slate-600 font-medium">Active Students</div>
              <div className="text-sm text-slate-500">From 25+ Countries</div>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-amber-600">50+</div>
              <div className="text-slate-600 font-medium">Expert Teachers</div>
              <div className="text-sm text-slate-500">Certified Islamic Scholars</div>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600">300+</div>
              <div className="text-slate-600 font-medium">Quran Completions</div>
              <div className="text-sm text-slate-500">Students who finished Quran</div>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600">4.9★</div>
              <div className="text-slate-600 font-medium">Student Rating</div>
              <div className="text-sm text-slate-500">Based on 1000+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
