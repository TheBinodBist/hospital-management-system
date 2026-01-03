import React from "react";
import {
  FileText,
  Heart,
  AlertCircle,
  Pill,
  Calendar,
} from "lucide-react";



export default function PatientMedicalHistory() {
  const medicalHistory= [
    {
      id: 1,
      type: "Diagnosis",
      title: "Hypertension",
      date: "Nov 2024",
      icon: Heart,
      color: "text-red-600 bg-red-100",
    },
    {
      id: 2,
      type: "Medication",
      title: "Lisinopril 10mg daily",
      date: "Nov 2024",
      icon: Pill,
      color: "text-blue-600 bg-blue-100",
    },
    {
      id: 3,
      type: "Lab Result",
      title: "Blood Pressure: 140/90 mmHg",
      date: "Oct 2024",
      icon: AlertCircle,
      color: "text-orange-600 bg-orange-100",
    },
    {
      id: 4,
      type: "Last Checkup",
      title: "General Health Checkup",
      date: "Oct 15, 2024",
      icon: Calendar,
      color: "text-emerald-600 bg-emerald-100",
    },
  ];

  const allergies = ["Penicillin", "Shellfish"];
  const vitals = {
    bloodPressure: "140/90 mmHg",
    heartRate: "72 bpm",
    temperature: "98.6°F",
    bloodType: "O+",
  };

  return (
    <div className="space-y-6">
      {/* Vital Signs */}
      <div className="bg-white rounded-xl border-2 border-gray-100 p-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Heart size={20} className="text-red-600" />
          Current Vital Signs
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(vitals).map(([key, value]) => (
            <div
              key={key}
              className="bg-gray-50 p-3 rounded-lg border border-gray-200"
            >
              <p className="text-xs text-gray-600 uppercase font-semibold mb-1">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </p>
              <p className="text-lg font-bold text-gray-900">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Allergies */}
      <div className="bg-white rounded-xl border-2 border-gray-100 p-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <AlertCircle size={20} className="text-red-600" />
          Known Allergies
        </h3>
        <div className="flex flex-wrap gap-2">
          {allergies.map((allergy) => (
            <span
              key={allergy}
              className="px-4 py-2 bg-red-100 text-red-700 rounded-full font-medium text-sm"
            >
              {allergy}
            </span>
          ))}
        </div>
      </div>

      {/* Medical History Timeline */}
      <div className="bg-white rounded-xl border-2 border-gray-100 p-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <FileText size={20} className="text-blue-600" />
          Medical History
        </h3>
        <div className="space-y-4">
          {medicalHistory.map((record) => {
            const Icon = record.icon;
            return (
              <div
                key={record.id}
                className="flex gap-4 pb-4 border-b border-gray-200 last:border-b-0"
              >
                <div className={`p-3 rounded-lg ${record.color}`}>
                  <Icon size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-600 font-semibold uppercase">
                    {record.type}
                  </p>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {record.title}
                  </h4>
                  <p className="text-sm text-gray-600">{record.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
