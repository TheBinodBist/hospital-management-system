import React from "react";
import {
  Users,
  Pill,
  Stethoscope,
  DollarSign,
  TrendingUp,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

export default function Admin() {
  const stats = [
    {
      label: "Total Patients",
      value: "12,543",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
      trend: "+5.2%",
    },
    {
      label: "Active Doctors",
      value: "187",
      icon: Stethoscope,
      color: "bg-emerald-100 text-emerald-600",
      trend: "+2.1%",
    },
    {
      label: "Medications",
      value: "3,421",
      icon: Pill,
      color: "bg-orange-100 text-orange-600",
      trend: "-1.3%",
    },
    {
      label: "Revenue (Month)",
      value: "$542K",
      icon: DollarSign,
      color: "bg-purple-100 text-purple-600",
      trend: "+12.5%",
    },
  ];

  const sections = [
    {
      title: "System Management",
      items: [
        "User Accounts & Roles",
        "Department Management",
        "Staff Assignments",
        "Access Control",
      ],
    },
    {
      title: "Financial Management",
      items: [
        "Billing & Invoicing",
        "Payment Processing",
        "Financial Reports",
        "Budget Planning",
      ],
    },
    {
      title: "Hospital Settings",
      items: [
        "Hospital Configuration",
        "Working Hours",
        "Holiday Calendar",
        "Department Setup",
      ],
    },
    {
      title: "Reports & Analytics",
      items: [
        "Performance Metrics",
        "Occupancy Reports",
        "Patient Statistics",
        "Revenue Analysis",
      ],
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-purple-100 text-lg">
            Manage hospital operations, staff, and system settings
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Key Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${stat.color} p-3 rounded-lg`}>
                      <Icon size={24} />
                    </div>
                    <span className="text-green-600 font-semibold text-sm">
                      {stat.trend}
                    </span>
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

      {/* Management Sections */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Management Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section) => (
              <div
                key={section.title}
                className="bg-white rounded-xl border-2 border-gray-100 p-8 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-gray-700 hover:text-purple-600 cursor-pointer transition-colors"
                    >
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
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
            <button className="bg-white rounded-xl border-2 border-gray-100 p-6 text-left hover:shadow-lg hover:border-purple-300 transition-all group">
              <Settings className="text-purple-600 mb-4 group-hover:translate-x-1 transition-transform" />
              <h3 className="font-bold text-gray-900 mb-2">System Settings</h3>
              <p className="text-gray-600 text-sm">
                Configure hospital settings and preferences
              </p>
            </button>
            <button className="bg-white rounded-xl border-2 border-gray-100 p-6 text-left hover:shadow-lg hover:border-purple-300 transition-all group">
              <BarChart3 className="text-purple-600 mb-4 group-hover:translate-x-1 transition-transform" />
              <h3 className="font-bold text-gray-900 mb-2">View Reports</h3>
              <p className="text-gray-600 text-sm">
                Access detailed analytics and reports
              </p>
            </button>
            <button className="bg-white rounded-xl border-2 border-gray-100 p-6 text-left hover:shadow-lg hover:border-purple-300 transition-all group">
              <Users className="text-purple-600 mb-4 group-hover:translate-x-1 transition-transform" />
              <h3 className="font-bold text-gray-900 mb-2">Manage Staff</h3>
              <p className="text-gray-600 text-sm">
                Add, edit, or manage staff members
              </p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
