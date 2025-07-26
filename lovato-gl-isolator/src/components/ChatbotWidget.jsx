import React, { useState } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: "bot", text: "Hi! How can I help you today?" }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, newUserMsg]);
    setInput("");

    // Simulate bot response (replace with API call)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Thanks for your message! We'll get back to you soon." },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Avatar */}
      <div
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#FA4515] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX className="text-white text-xl" /> : <FiMessageCircle className="text-white text-xl" />}
      </div>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-xl shadow-lg z-50 flex flex-col overflow-hidden">
          <div className="bg-[#FA4515] text-white px-4 py-2 font-semibold text-sm">
            Lovato Assistant
          </div>
          <div className="flex-1 max-h-80 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.from === "bot" ? "bg-gray-100 text-left" : "bg-[#FA4515]/90 text-white ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex border-t px-2 py-2 bg-white">
            <input
              className="flex-1 text-sm px-2 py-1 border border-gray-300 rounded-l"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="bg-[#FA4515] text-white px-3 py-1 text-sm rounded-r"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
