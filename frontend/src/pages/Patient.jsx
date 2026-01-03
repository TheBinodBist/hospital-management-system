import React from "react";  
import {
  Heart,
  Calendar,
  Pill,
  FileText,
  User,
  Phone,
  Plus,
  AlertCircle,
} from "lucide-react";

export default function Patient() {
  const healthMetrics = [
    {
      label: "Blood Pressure",
      value: "120/80",
      icon: Heart,
      color: "bg-red-100 text-red-600",
      status: "Normal",
    },
    {
      label: "Heart Rate",
      value: "72 bpm",
      icon: Heart,
      color: "bg-pink-100 text-pink-600",
      status: "Healthy",
    },
    {
      label: "Active Medications",
      value: "3",
      icon: Pill,
      color: "bg-orange-100 text-orange-600",
      status: "Active",
    },
    {
      label: "Next Appointment",
      value: "Dec 20",
      icon: Calendar,
      color: "bg-blue-100 text-blue-600",
      status: "Scheduled",
    },
  ];

  const recentVisits = [
    {
      id: 1,
      doctor: "Dr. Emily Watson",
      date: "Dec 8, 2024",
      reason: "General Checkup",
      notes: "Patient doing well, continue current medication",
    },
    {
      id: 2,
      doctor: "Dr. James Miller",
      date: "Nov 24, 2024",
      reason: "Follow-up Visit",
      notes: "Blood work results normal, no concerns",
    },
    {
      id: 3,
      doctor: "Dr. Sarah Cooper",
      date: "Nov 10, 2024",
      reason: "Consultation",
      notes: "Prescribed new medication for symptom management",
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Patient Portal</h1>
          <p className="text-emerald-100 text-lg">
            Manage your health records, appointments, and medications
          </p>
        </div>
      </section>

      {/* Patient Info Card */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl border-2 border-gray-100 p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="flex items-center gap-6">
                <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center">
                  <User className="text-emerald-600" size={40} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    John Patient
                  </h2>
                  <p className="text-gray-600">Patient ID: PT-001234</p>
                  <p className="text-gray-600">DOB: January 15, 1990</p>
                </div>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone size={18} />
                  +1 (555) 123-4567
                </div>
                <div className="text-sm">
                  Registered: June 2023
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Health Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className={`${metric.color} w-fit p-3 rounded-lg mb-4`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-gray-600 text-sm font-medium mb-1">
                    {metric.label}
                  </h3>
                  <p className="text-3xl font-bold text-gray-900 mb-2">
                    {metric.value}
                  </p>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {metric.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Visits */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Medical History</h2>
            <button className="text-emerald-600 font-semibold hover:text-emerald-700">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentVisits.map((visit) => (
              <div
                key={visit.id}
                className="bg-white rounded-xl border-2 border-gray-100 p-6 hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {visit.doctor}
                    </h3>
                    <p className="text-gray-600 text-sm">{visit.reason}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{visit.date}</span>
                </div>
                <p className="text-gray-600 text-sm">{visit.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="bg-white rounded-xl border-2 border-gray-100 p-6 text-left hover:shadow-lg hover:border-emerald-300 transition-all">
              <Calendar className="text-emerald-600 mb-4" size={28} />
              <h3 className="font-bold text-gray-900 mb-2">Book Appointment</h3>
              <p className="text-gray-600 text-sm">
                Schedule a consultation with a doctor
              </p>
            </button>
            <button className="bg-white rounded-xl border-2 border-gray-100 p-6 text-left hover:shadow-lg hover:border-emerald-300 transition-all">
              <FileText className="text-emerald-600 mb-4" size={28} />
              <h3 className="font-bold text-gray-900 mb-2">View Records</h3>
              <p className="text-gray-600 text-sm">
                Access your complete medical records
              </p>
            </button>
            <button className="bg-white rounded-xl border-2 border-gray-100 p-6 text-left hover:shadow-lg hover:border-emerald-300 transition-all">
              <Pill className="text-emerald-600 mb-4" size={28} />
              <h3 className="font-bold text-gray-900 mb-2">My Medications</h3>
              <p className="text-gray-600 text-sm">
                View your current prescriptions
              </p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
