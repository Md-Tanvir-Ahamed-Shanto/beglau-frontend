import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Award, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollToTop from "@/hooks/ScrollToTop";
const About = () => {
  return (
    <div className="min-h-screen font-bangla bg-gradient-to-br from-blue-50 to-sky-100">
      {/* Hero Section */}
      <ScrollToTop></ScrollToTop>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 leading-relaxed">
              About Us
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With 10 years of experience, we have helped thousands of students
              fulfill their dreams. We will also make your dream of higher
              education abroad come true.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 leading-relaxed">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The main mission of BEGL BD is to create opportunities for
                Bangladeshi students to pursue higher education abroad. We
                believe that every talented student has the right to receive
                world-class education.
              </p>
              <ul className="space-y-3">
                {[
                  "100% honest and transparent service",
                  "Assistance in realizing students' dreams",
                  "Opportunities for admission to world-class educational institutions",
                  "Reliable guidance throughout the entire process",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-brand-green" size={20} />
                    <span className="text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-r from-brand-blue to-brand-green p-8 rounded-2xl text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">5000+</div>
                  <div className="text-white/90 leading-relaxed">
                    Successful Students
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-white/90 leading-relaxed">
                    Countries Represented
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-white/90 leading-relaxed">
                    Years of Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-white/90 leading-relaxed">
                    Visa Success Rate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-relaxed">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Integrity",
                description: "We always provide honest and transparent service",
                icon: <CheckCircle className="text-brand-green" size={48} />,
              },
              {
                title: "Quality Service",
                description:
                  "We provide the highest quality service to every student",
                icon: <Award className="text-brand-blue" size={48} />,
              },
              {
                title: "Reliability",
                description: "You can trust us",
                icon: <Globe className="text-brand-orange" size={48} />,
              },
              {
                title: "International Standards",
                description: "We ensure world-class educational services",
                icon: <Globe className="text-brand-green" size={48} />,
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 leading-relaxed">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 leading-relaxed">
            Join Us Today
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Contact us today and start your journey to studying abroad
          </p>
          <Link to="/">
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-gray-100 text-lg px-8 py-4 rounded-full"
            >
              Get Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
export default About;
