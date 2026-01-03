import React from "react";
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  PhoneOff,
  Monitor,
  Settings,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

export default function VideoCall() {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [callDuration, setCallDuration] = useState("12:34");
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="bg-black rounded-xl overflow-hidden h-full flex flex-col">
      {/* Video Area */}
      <div className="flex-1 bg-gray-900 relative">
        {/* Main Video - Doctor */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-white text-4xl font-bold">DR</span>
            </div>
            <p className="text-white text-xl font-semibold">Dr. Sarah Johnson</p>
            <p className="text-gray-400 text-sm mt-2">{callDuration}</p>
          </div>
        </div>

        {/* PIP - Patient */}
        <div className="absolute bottom-6 right-6 w-32 h-32 bg-gray-800 rounded-lg overflow-hidden border-2 border-blue-600">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700">
            <span className="text-white text-2xl font-bold">PA</span>
          </div>
        </div>

        {/* Call Duration Badge */}
        <div className="absolute top-6 left-6 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
          <p className="text-sm font-semibold">Call Active • {callDuration}</p>
        </div>

        {/* Recording Badge */}
        <div className="absolute top-6 right-6 bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold">Recording</span>
        </div>
      </div>

      {/* Control Bar */}
      <div className="bg-gray-950 border-t border-gray-800 px-6 py-4">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setIsMicOn(!isMicOn)}
            className={`p-4 rounded-full transition-all ${
              isMicOn
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-red-600 text-white hover:bg-red-700"
            }`}
            title="Toggle Microphone"
          >
            {isMicOn ? <Mic size={24} /> : <MicOff size={24} />}
          </button>

          <button
            onClick={() => setIsVideoOn(!isVideoOn)}
            className={`p-4 rounded-full transition-all ${
              isVideoOn
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-red-600 text-white hover:bg-red-700"
            }`}
            title="Toggle Video"
          >
            {isVideoOn ? <Video size={24} /> : <VideoOff size={24} />}
          </button>

          <button
            className="p-4 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all"
            title="Share Screen"
          >
            <Monitor size={24} />
          </button>

          <button
            onClick={() => setShowChat(!showChat)}
            className={`p-4 rounded-full transition-all ${
              showChat
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
            title="Show Chat"
          >
            <MessageSquare size={24} />
          </button>

          <button
            className="p-4 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all"
            title="Settings"
          >
            <Settings size={24} />
          </button>

          <div className="ml-4 border-l border-gray-800 pl-4">
            <button
              className="p-4 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all"
              title="End Call"
            >
              <PhoneOff size={24} />
            </button>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="flex justify-center gap-6 mt-4 text-xs text-gray-400">
          <span className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                isMicOn ? "bg-green-500" : "bg-red-600"
              }`}
            ></div>
            Microphone {isMicOn ? "ON" : "OFF"}
          </span>
          <span className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                isVideoOn ? "bg-green-500" : "bg-red-600"
              }`}
            ></div>
            Camera {isVideoOn ? "ON" : "OFF"}
          </span>
        </div>
      </div>
    </div>
  );
}
