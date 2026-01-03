import React from "react";
import { Calendar, Users, Clock, FileText, Plus } from "lucide-react";

export default function Doctor() {
  const doctorStats = [
    {
      label: "My Patients",
      value: "287",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "Appointments Today",
      value: "12",
      icon: Calendar,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      label: "Avg. Visit Duration",
      value: "23 min",
      icon: Clock,
      color: "bg-orange-100 text-orange-600",
    },
    {
      label: "Medical Records",
      value: "1,203",
      icon: FileText,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const upcomingAppointments = [
    {
      id: 1,
      patientName: "John Smith",
      time: "09:00 AM",
      duration: "30 min",
      type: "General Checkup",
      status: "Confirmed",
    },
    {
      id: 2,
      patientName: "Sarah Johnson",
      time: "09:45 AM",
      duration: "30 min",
      type: "Follow-up",
      status: "Confirmed",
    },
    {
      id: 3,
      patientName: "Mike Brown",
      time: "10:30 AM",
      duration: "45 min",
      type: "Consultation",
      status: "Pending",
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">Doctors Dashboard</h1>
              <p className="text-blue-100 text-lg">
                Manage appointments, patient records, and medical consultations
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all">
              <Plus size={20} /> New Appointment
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Today's Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctorStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className={`${stat.color} w-fit p-3 rounded-lg mb-4`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-gray-600 text-sm font-medium mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Appointments */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Upcoming Appointments
            </h2>
            <button className="text-blue-600 font-semibold hover:text-blue-700">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {upcomingAppointments.map((apt) => (
              <div
                key={apt.id}
                className="bg-white rounded-xl border-2 border-gray-100 p-6 hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {apt.patientName}
                    </h3>
                    <p className="text-gray-600 text-sm">{apt.type}</p>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-lg font-semibold text-sm ${
                      apt.status === "Confirmed"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {apt.status}
                  </span>
                </div>
                <div className="flex gap-6 text-gray-600 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {apt.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {apt.duration}
                  </div>
                </div>
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
            <button className="bg-white rounded-xl border-2 border-gray-100 p-6 text-left hover:shadow-lg hover:border-blue-300 transition-all">
              <Calendar className="text-blue-600 mb-4" size={28} />
              <h3 className="font-bold text-gray-900 mb-2">Schedule Appointment</h3>
              <p className="text-gray-600 text-sm">
                Create new appointments with patients
              </p>
            </button>
            <button className="bg-white rounded-xl border-2 border-gray-100 p-6 text-left hover:shadow-lg hover:border-blue-300 transition-all">
              <FileText className="text-blue-600 mb-4" size={28} />
              <h3 className="font-bold text-gray-900 mb-2">Medical Records</h3>
              <p className="text-gray-600 text-sm">
                View and update patient medical history
              </p>
            </button>
            <button className="bg-white rounded-xl border-2 border-gray-100 p-6 text-left hover:shadow-lg hover:border-blue-300 transition-all">
              <Users className="text-blue-600 mb-4" size={28} />
              <h3 className="font-bold text-gray-900 mb-2">My Patients</h3>
              <p className="text-gray-600 text-sm">
                Access your patient list and details
              </p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
