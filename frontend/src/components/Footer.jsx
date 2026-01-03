import React from 'react'
import { Link } from 'react-router-dom'
import { Stethoscope } from 'lucide-react'

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 rounded-lg p-2">
                  <Stethoscope className="text-white" size={20} />
                </div>
                <span className="font-bold text-white">HospitalHub</span>
              </div>
              <p className="text-sm">
                Comprehensive hospital management solution for modern healthcare.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Modules</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/admin" className="hover:text-white transition">
                    Admin Panel
                  </Link>
                </li>
                <li>
                  <Link to="/doctor" className="hover:text-white transition">
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link to="/patient" className="hover:text-white transition">
                    Patients
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/pharmacy" className="hover:text-white transition">
                    Pharmacy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/reception"
                    className="hover:text-white transition"
                  >
                    Reception
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: info@hospitalhub.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Medical Center, Healthcare City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>
              &copy; 2024 HospitalHub. All rights reserved. | Privacy Policy |
              Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
