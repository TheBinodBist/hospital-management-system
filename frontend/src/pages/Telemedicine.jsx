import React from "react";  
import {
  Clock,
  Users,
  CheckCircle,
  AlertCircle,
  Plus,
  Phone,
  User,
} from "lucide-react";

export default function Reception() {
  const receptionStats = [
    {
      label: "Check-ins Today",
      value: "47",
      icon: CheckCircle,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      label: "Waiting Patients",
      value: "8",
      icon: Clock,
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "Total Appointments",
      value: "52",
      icon: Users,
      color: "bg-purple-100 text-purple-600",
    },
    {
      label: "No-shows Today",
      value: "2",
      icon: AlertCircle,
      color: "bg-red-100 text-red-600",
    },
  ];

  const waitingPatients = [
    {
      id: 1,
      name: "John Smith",
      checkInTime: "09:15 AM",
      appointmentTime: "09:30 AM",
      doctor: "Dr. Emily Watson",
      status: "Waiting",
      waitTime: "8 mins",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      checkInTime: "09:45 AM",
      appointmentTime: "10:00 AM",
      doctor: "Dr. James Miller",
      status: "Waiting",
      waitTime: "0 mins",
    },
    {
      id: 3,
      name: "Mike Brown",
      checkInTime: "09:20 AM",
      appointmentTime: "09:30 AM",
      doctor: "Dr. Sarah Cooper",
      status: "In Consultation",
      waitTime: "-",
    },
  ];

  const appointments = [
    {
      id: 1,
      time: "09:30 AM",
      patientName: "John Smith",
      doctor: "Dr. Emily Watson",
      type: "General Checkup",
      status: "In Progress",
    },
    {
      id: 2,
      time: "10:00 AM",
      patientName: "Sarah Johnson",
      doctor: "Dr. James Miller",
      type: "Follow-up",
      status: "Upcoming",
    },
    {
      id: 3,
      time: "10:30 AM",
      patientName: "Mike Brown",
      doctor: "Dr. Sarah Cooper",
      type: "Consultation",
      status: "Upcoming",
    },
    {
      id: 4,
      time: "11:00 AM",
      patientName: "Emma Davis",
      doctor: "Dr. Emily Watson",
      type: "General Checkup",
      status: "Upcoming",
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">Reception Desk</h1>
              <p className="text-pink-100 text-lg">
                Manage patient check-ins, appointments, and visitor registration
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-all">
              <Plus size={20} /> New Check-in
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Today's Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {receptionStats.map((stat) => {
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

      {/* Waiting Patients */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Waiting Patients
          </h2>
          <div className="space-y-4">
            {waitingPatients.map((patient) => (
              <div
                key={patient.id}
                className="bg-white rounded-xl border-2 border-gray-100 p-6 hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center">
                      <User className="text-pink-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {patient.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Dr. {patient.doctor.split(" ")[1]}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-lg font-semibold text-sm ${
                      patient.status === "In Consultation"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {patient.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    Check-in: {patient.checkInTime}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    Appointment: {patient.appointmentTime}
                  </div>
                  <div>Wait Time: {patient.waitTime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Appointments */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Today's Schedule
            </h2>
            <button className="text-pink-600 font-semibold hover:text-pink-700">
              View Full Schedule
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-white border-b-2 border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Time
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Patient Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Doctor
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((apt) => (
                  <tr
                    key={apt.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {apt.time}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{apt.patientName}</td>
                    <td className="px-6 py-4 text-gray-600">{apt.doctor}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      {apt.type}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          apt.status === "In Progress"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {apt.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="bg-white rounded-xl border-2 border-gray-100 p-6 text-left hover:shadow-lg hover:border-pink-300 transition-all">
              <User className="text-pink-600 mb-4" size={28} />
              <h3 className="font-bold text-gray-900 mb-2">Check-in Patient</h3>
              <p className="text-gray-600 text-sm">
                Register new patient arrival
              </p>
            </button>
            <button className="bg-white rounded-xl border-2 border-gray-100 p-6 text-left hover:shadow-lg hover:border-pink-300 transition-all">
              <Plus className="text-pink-600 mb-4" size={28} />
              <h3 className="font-bold text-gray-900 mb-2">New Appointment</h3>
              <p className="text-gray-600 text-sm">
                Schedule a new appointment
              </p>
            </button>
            <button className="bg-white rounded-xl border-2 border-gray-100 p-6 text-left hover:shadow-lg hover:border-pink-300 transition-all">
              <Phone className="text-pink-600 mb-4" size={28} />
              <h3 className="font-bold text-gray-900 mb-2">Visitor Registration</h3>
              <p className="text-gray-600 text-sm">
                Register hospital visitors
              </p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
