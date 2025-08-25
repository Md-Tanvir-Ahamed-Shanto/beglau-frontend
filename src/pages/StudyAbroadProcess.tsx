import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Users,
  FileText,
  GraduationCap,
  Globe,
  Shield,
  Plane,
  Clock,
  Award,
  Target,
  MapPin,
  Heart,
  CreditCard,
  Stethoscope,
  BookOpen,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StudyAbroadProcess = () => {
  const preDepartureServices = [
    {
      icon: <GraduationCap className="text-purple-600" size={32} />,
      title: "University and Course Selection Assistance",
      description:
        "Full support in selecting the right university and course based on your preferences and qualifications.",
    },
    {
      icon: <FileText className="text-blue-600" size={32} />,
      title: "University Application Submission",
      description:
        "Complete preparation and submission of your university application on your behalf.",
    },
    {
      icon: <Award className="text-green-600" size={32} />,
      title: "Offer Letter Collection",
      description:
        "Collecting the offer letter from the university and delivering it to you.",
    },
    {
      icon: <Globe className="text-indigo-600" size={32} />,
      title: "Visa Application Process Management (Subclass 500)",
      description:
        "Managing the entire visa application process from start to finish.",
    },
    {
      icon: <FileText className="text-cyan-600" size={32} />,
      title: "GTE Statement Preparation",
      description:
        "Preparing a professional GTE statement based on the information you provide.",
    },
    {
      icon: <Shield className="text-red-600" size={32} />,
      title: "OSHC Health Insurance Arrangement",
      description:
        "Complete management of Overseas Student Health Cover insurance.",
    },
    {
      icon: <Target className="text-orange-600" size={32} />,
      title: "CoE Collection",
      description:
        "Quickly collecting the Confirmation of Enrollment from the university.",
    },
    {
      icon: <CheckCircle className="text-teal-600" size={32} />,
      title: "Document Checklist and Preparation Guidelines",
      description:
        "Detailed list of required documents and clear instructions for preparation.",
    },
    {
      icon: <Users className="text-pink-600" size={32} />,
      title: "Medical and PCC Guidance",
      description:
        "Detailed guidance for health checks and Police Clearance Certificate.",
    },
    {
      icon: <Globe className="text-violet-600" size={32} />,
      title: "Visa Interview Preparation Assistance",
      description:
        "Full preparation and mock interviews for visa interviews if required.",
    },
    {
      icon: <Plane className="text-emerald-600" size={32} />,
      title: "Pre-Departure Briefing or Basic Training",
      description:
        "Providing all necessary information and specialized training before departure.",
    },
  ];

  const postArrivalServices = [
    {
      icon: <Plane className="text-blue-600" size={32} />,
      title: "Airport and Arrival Assistance",
      description:
        "Safe transportation from the airport to your accommodation, assistance with local SIM cards, transport arrangements, and currency exchange.",
    },
    {
      icon: <Home className="text-green-600" size={32} />,
      title: "Accommodation Setup",
      description:
        "Hands-on assistance with arranging furniture and setting up basic amenities at your accommodation.",
    },
    {
      icon: <MapPin className="text-purple-600" size={32} />,
      title: "Orientation and Local Guidance",
      description:
        "Introduction to the campus and city, including library, labs, classrooms, transport routes, local laws, and emergency services.",
    },
    {
      icon: <BookOpen className="text-indigo-600" size={32} />,
      title: "Academic Support",
      description:
        "Assistance with course registration, scheduling, library access setup, and introductions to professors.",
    },
    {
      icon: <Stethoscope className="text-red-600" size={32} />,
      title: "Healthcare and Insurance",
      description:
        "Registration with local doctors and clinics, health insurance claim processes, and support for emergency medical services.",
    },
    {
      icon: <CreditCard className="text-cyan-600" size={32} />,
      title: "Banking and Financial Assistance",
      description:
        "Opening a local bank account, setting up debit and credit cards, and assistance with transferring funds from your home country.",
    },
    {
      icon: <Heart className="text-pink-600" size={32} />,
      title: "Social and Cultural Adaptation",
      description:
        "Support in understanding local culture and language, and connecting with community groups and student clubs.",
    },
    {
      icon: <Users className="text-orange-600" size={32} />,
      title: "Regular Monitoring and Counseling",
      description:
        "Monitoring academic progress, providing emotional support, managing homesickness, and guidance for part-time jobs.",
    },
  ];

  const studentSteps = [
    {
      icon: <FileText className="text-gray-700" size={28} />,
      title: "Apply for a Passport",
      description: "First, obtain a valid passport.",
    },
    {
      icon: <Globe className="text-gray-700" size={28} />,
      title: "Take IELTS/TOEFL Exam",
      description: "Participate in an English language proficiency test.",
    },
    {
      icon: <GraduationCap className="text-gray-700" size={28} />,
      title: "Prepare Academic Documents",
      description:
        "Prepare scanned copies or photocopies of certificates and transcripts.",
    },
    {
      icon: <Shield className="text-gray-700" size={28} />,
      title: "Collect Bank Statement",
      description: "Prepare a bank statement as proof of financial capability.",
    },
    {
      icon: <Users className="text-gray-700" size={28} />,
      title: "Complete Medical Test",
      description: "Undergo a health checkup.",
    },
    {
      icon: <FileText className="text-gray-700" size={28} />,
      title: "Collect Police Clearance Certificate (PCC)",
      description: "Obtain a character certificate.",
    },
    {
      icon: <Clock className="text-gray-700" size={28} />,
      title: "Pay Tuition Fees",
      description: "Pay the fees within the agency’s specified timeline.",
    },
    {
      icon: <Globe className="text-gray-700" size={28} />,
      title: "Provide Required Information (for GTE)",
      description:
        "Provide information for the Genuine Temporary Entrant requirement.",
    },
    {
      icon: <FileText className="text-gray-700" size={28} />,
      title: "Submit Original Personal Documents",
      description: "Submit original documents as required.",
    },
  ];

  return (
    <div className="min-h-screen font-bangla bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="py-8 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 bg-clip-text text-transparent mb-4 lg:mb-6 leading-relaxed px-0 py-[15px]">
              Study Abroad Process
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed px-2">
              Learn step-by-step how to make your dream of studying abroad a
              reality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Mobile Optimized */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-8">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl opacity-90 leading-relaxed max-w-4xl mx-auto px-2">
              Comprehensive support during your time in Bangladesh and after
              arriving abroad.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-10">
            {/* Pre-Departure Services - Mobile First */}
            <div className="bg-white/15 backdrop-blur-lg border border-white/30 rounded-2xl p-6 lg:p-8 shadow-2xl">
              <div className="text-center mb-6 lg:mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">
                  Pre-Departure Services
                </h3>
                <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                  Support while you are in Bangladesh.
                </p>
              </div>
              <div className="space-y-4 lg:space-y-6 max-h-none lg:max-h-[500px] lg:overflow-y-auto lg:pr-2">
                {preDepartureServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <div className="flex items-start space-x-3 lg:space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center bg-white/25 backdrop-blur-sm">
                          {service.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold mb-2 lg:mb-3 text-base lg:text-lg leading-relaxed text-white pr-2">
                          {service.title}
                        </h4>
                        <p className="text-white/90 leading-relaxed text-sm lg:text-base">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Post-Arrival Services - Mobile First */}
            <div className="bg-white/15 backdrop-blur-lg border border-white/30 rounded-2xl p-6 lg:p-8 shadow-2xl">
              <div className="text-center mb-6 lg:mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">
                  Post-Arrival Services
                </h3>
                <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                  Support after arriving abroad.
                </p>
              </div>
              <div className="space-y-4 lg:space-y-6 max-h-none lg:max-h-[500px] lg:overflow-y-auto lg:pr-2">
                {postArrivalServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <div className="flex items-start space-x-3 lg:space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center bg-white/25 backdrop-blur-sm">
                          {service.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold mb-2 lg:mb-3 text-base lg:text-lg leading-relaxed text-white pr-2">
                          {service.title}
                        </h4>
                        <p className="text-white/90 leading-relaxed text-sm lg:text-base">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Steps Section - Mobile Optimized */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 lg:mb-6">
              Your Responsibilities
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-2">
              What you need to do as per the agency’s instructions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3 lg:space-y-4">
            {studentSteps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 lg:p-6 border-l-4 border-gray-400 hover:border-gray-600 hover:bg-gray-100 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-3 lg:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-1 lg:mb-2 leading-relaxed pr-2">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-green-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-relaxed">
            Start Your Journey Today
          </h2>
          <p className="text-lg sm:text-xl mb-6 lg:mb-8 opacity-90 leading-relaxed px-2">
            We are with you to make your dream of studying abroad a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center px-4">
            <Link to="/contact">
              <Button className="w-full sm:w-auto bg-white text-purple-600 hover:bg-gray-100 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-white hover:bg-white text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-purple-600"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyAbroadProcess;
