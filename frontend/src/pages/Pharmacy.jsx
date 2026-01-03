import React from "react";  
import { Pill, Box, TrendingDown, AlertTriangle, Plus, Search } from "lucide-react";

export default function Pharmacy() {
  const inventoryStats = [
    {
      label: "Total Medications",
      value: "3,421",
      icon: Pill,
      color: "bg-orange-100 text-orange-600",
      subtext: "In Stock",
    },
    {
      label: "Low Stock Items",
      value: "12",
      icon: AlertTriangle,
      color: "bg-red-100 text-red-600",
      subtext: "Need Restocking",
    },
    {
      label: "Monthly Dispensed",
      value: "8,543",
      icon: Box,
      color: "bg-purple-100 text-purple-600",
      subtext: "Prescriptions",
    },
    {
      label: "Pending Refills",
      value: "47",
      icon: TrendingDown,
      color: "bg-yellow-100 text-yellow-600",
      subtext: "To be Processed",
    },
  ];

  const medications = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      stock: 2543,
      reorderLevel: 500,
      status: "In Stock",
      lastRestocked: "Dec 10, 2024",
    },
    {
      id: 2,
      name: "Amoxicillin 250mg",
      stock: 234,
      reorderLevel: 300,
      status: "Low Stock",
      lastRestocked: "Dec 5, 2024",
    },
    {
      id: 3,
      name: "Ibuprofen 400mg",
      stock: 1823,
      reorderLevel: 500,
      status: "In Stock",
      lastRestocked: "Dec 12, 2024",
    },
    {
      id: 4,
      name: "Metformin 500mg",
      stock: 456,
      reorderLevel: 200,
      status: "In Stock",
      lastRestocked: "Dec 8, 2024",
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">Pharmacy Management</h1>
              <p className="text-orange-100 text-lg">
                Manage inventory, prescriptions, and medication distribution
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all">
              <Plus size={20} /> New Prescription
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Inventory Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inventoryStats.map((stat) => {
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
                  <p className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500">{stat.subtext}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Medication Inventory */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Medication Inventory
            </h2>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search medications..."
                className="pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-400"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b-2 border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Medication Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Stock Count
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Reorder Level
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Last Restocked
                  </th>
                </tr>
              </thead>
              <tbody>
                {medications.map((med) => (
                  <tr
                    key={med.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {med.name}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{med.stock}</td>
                    <td className="px-6 py-4 text-gray-600">
                      {med.reorderLevel}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          med.status === "Low Stock"
                            ? "bg-red-100 text-red-700"
                            : "bg-emerald-100 text-emerald-700"
                        }`}
                      >
                        {med.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      {med.lastRestocked}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            <button className="bg-white rounded-xl border-2 border-gray-100 p-6 text-left hover:shadow-lg hover:border-orange-300 transition-all">
              <Pill className="text-orange-600 mb-4" size={28} />
              <h3 className="font-bold text-gray-900 mb-2">Dispense Medication</h3>
              <p className="text-gray-600 text-sm">
                Record medication dispensing to patients
              </p>
            </button>
            <button className="bg-white rounded-xl border-2 border-gray-100 p-6 text-left hover:shadow-lg hover:border-orange-300 transition-all">
              <Box className="text-orange-600 mb-4" size={28} />
              <h3 className="font-bold text-gray-900 mb-2">Restock Inventory</h3>
              <p className="text-gray-600 text-sm">
                Add new medications to stock
              </p>
            </button>
            <button className="bg-white rounded-xl border-2 border-gray-100 p-6 text-left hover:shadow-lg hover:border-orange-300 transition-all">
              <AlertTriangle className="text-orange-600 mb-4" size={28} />
              <h3 className="font-bold text-gray-900 mb-2">Low Stock Items</h3>
              <p className="text-gray-600 text-sm">
                View medications needing reorder
              </p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
