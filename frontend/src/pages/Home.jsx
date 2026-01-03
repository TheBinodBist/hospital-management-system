import React from "react";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  Users,
  Pill,
  Shield,
  ClipboardList,
  Heart,
  TrendingUp,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  const modules = [
    {
      title: "Admin Panel",
      description:
        "Comprehensive administrative dashboard to manage the entire hospital system, staff, and operations.",
      icon: Shield,
      path: "/admin",
      color: "from-purple-600 to-purple-700",
      lightBg: "bg-purple-50",
    },
    {
      title: "Doctors",
      description:
        "Manage doctor profiles, schedules, specializations, and patient consultations.",
      icon: Stethoscope,
      path: "/doctor",
      color: "from-blue-600 to-blue-700",
      lightBg: "bg-blue-50",
    },
    {
      title: "Patients",
      description:
        "Patient registration, medical history, appointments, and treatment records.",
      icon: Users,
      path: "/patient",
      color: "from-emerald-600 to-emerald-700",
      lightBg: "bg-emerald-50",
    },
    {
      title: "Pharmacy",
      description:
        "Medication inventory, prescriptions, distribution, and pharmaceutical management.",
      icon: Pill,
      path: "/pharmacy",
      color: "from-orange-600 to-orange-700",
      lightBg: "bg-orange-50",
    },
    {
      title: "Reception",
      description:
        "Patient check-in, appointment scheduling, and visitor management system.",
      icon: ClipboardList,
      path: "/reception",
      color: "from-pink-600 to-pink-700",
      lightBg: "bg-pink-50",
    },
  ];

  const features = [
    {
      icon: Heart,
      title: "Patient-Centric Care",
      description:
        "Focus on delivering excellent healthcare with comprehensive patient tracking.",
    },
    {
      icon: TrendingUp,
      title: "Real-time Analytics",
      description:
        "Access to real-time data and insights for better decision making.",
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      description:
        "Streamlined workflows to improve operational efficiency and reduce wait times.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 bg-clip-text text-transparent">
                  Hospital Management
                </span>
                <br />
                <span className="text-gray-900">Made Simple</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Complete healthcare management solution designed to streamline
                hospital operations, improve patient care, and enhance staff
                productivity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/admin"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all"
                >
                  Book appointment <ArrowRight size={20} />
                </Link>
                <a
                  href="#modules"
                  className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all"
                >
                  Explore Modules
                </a>
              </div>
            </div>
            <div className="relative h-96 hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30 -top-8 -left-8"></div>
                  <div className="absolute w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30 -bottom-8 -right-8"></div>
                  <Heart className="w-24 h-24 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful tools designed for different departments to manage their
              specific responsibilities efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <Link
                  key={module.path}
                  to={module.path}
                  className="group relative overflow-hidden rounded-xl bg-white border-2 border-gray-100 p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                  ></div>
                  <div className="relative z-10">
                    <div
                      className={`inline-block ${module.lightBg} rounded-lg p-3 mb-4`}
                    >
                      <Icon className={`w-6 h-6 text-${module.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {module.description}
                    </p>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                      Access <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose HospitalHub?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with healthcare professionals in mind to deliver superior
              results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-8 border-2 border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="bg-blue-100 rounded-lg p-4 w-fit mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Hospitals Worldwide</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <p className="text-blue-100">Active Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <p className="text-blue-100">Patients Managed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <p className="text-blue-100">System Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 text-center border-2 border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to transform your hospital?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Start managing your hospital operations more efficiently today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/admin"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Access Admin Panel <ArrowRight size={20} />
            </Link>
            <button className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-600 font-semibold mb-8">
            Trusted by leading healthcare institutions
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-50 hover:opacity-100 transition-opacity">
            {["Hospital A", "Clinic B", "Medical C", "Health D", "Care E"].map(
              (org) => (
                <div key={org} className="text-gray-600 font-semibold">
                  {org}
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
