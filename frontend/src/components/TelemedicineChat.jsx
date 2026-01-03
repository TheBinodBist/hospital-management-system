import { Send, Paperclip } from "lucide-react";
import React,{ useState } from "react";



export default function TelemedicineChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "doctor",
      text: "Hi Sarah, how are you feeling today?",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      sender: "patient",
      text: "Hello Doctor, I'm doing better. The medication has been helping.",
      timestamp: "10:31 AM",
    },
    {
      id: 3,
      sender: "doctor",
      text: "That's great to hear. Continue with the current dose for another week.",
      timestamp: "10:32 AM",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "doctor",
          text: newMessage,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-xl border-2 border-gray-100">
      {/* Chat Header */}
      <div className="border-b-2 border-gray-100 p-4">
        <h3 className="font-bold text-gray-900">Consultation Chat</h3>
        <p className="text-sm text-gray-600">Session ID: #TM2024001</p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "doctor" ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-xs px-4 py-3 rounded-lg ${
                msg.sender === "doctor"
                  ? "bg-gray-100 text-gray-900"
                  : "bg-blue-600 text-white"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <p
                className={`text-xs mt-2 ${
                  msg.sender === "doctor"
                    ? "text-gray-600"
                    : "text-blue-100"
                }`}
              >
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t-2 border-gray-100 p-4">
        <div className="flex gap-2">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">
            <Paperclip size={20} />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            onClick={handleSendMessage}
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
