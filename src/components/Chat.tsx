"use client";
import {
  IconMessageCircleFilled,
  IconX,
  IconSend,
  IconLoader2,
} from "@tabler/icons-react";
import React, { useState, useRef, useEffect } from "react";

type Message = {
  sender: "user" | "bot";
  text: string;
};
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const ChatComponent = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Ref for focusing input
  const inputRef = useRef<HTMLInputElement>(null);

  // Some default questions
  const defaultQuestions = [
    "What is this website about?",
    "Show me the latest blogs",
    "Who is the author?",
    "Summarize today's top blog",
  ];

  useEffect(() => {
    if (isChatOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isChatOpen]);

  const handleSend = async (customMessage?: string) => {
    const text = customMessage || input;
    if (!text.trim()) return;

    const newMessage: Message = { sender: "user", text };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: newMessage.text }),
      });

      const data = await res.json();
      if (res.ok) {
        const botMessage: Message = { sender: "bot", text: data.response };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: data.error || "Something went wrong." },
        ]);
      }
    } catch (err) {
      console.log(err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Server error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Box */}
      {isChatOpen && (
        <div className="w-80 h-96 bg-white shadow-2xl rounded-2xl flex flex-col p-4 animate-slide-up border border-gray-200">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-800">💬 Ask Me Anything</h3>
            <button
              onClick={() => setIsChatOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <IconX size={20} className="text-gray-600" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto mb-3 space-y-2 p-2 bg-gray-50 rounded-lg text-sm">
            {messages.length === 0 && (
              <div className="space-y-2">
                <p className="italic text-gray-400 mb-2">
                  Try asking one of these:
                </p>
                <div className="flex flex-wrap gap-2">
                  {defaultQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(q)}
                      className="bg-white border border-gray-300 rounded-lg px-2 py-1 text-xs hover:bg-gray-100 transition"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg text-[16px] leading-5 max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-green-500 text-white ml-auto"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <IconLoader2 className="animate-spin" size={16} /> Typing...
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 rounded-xl border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={() => handleSend()}
              disabled={loading}
              className="bg-green-500 text-white p-2 rounded-xl hover:bg-green-600 transition flex items-center justify-center disabled:opacity-50"
            >
              <IconSend size={18} />
            </button>
          </div>
        </div>
      )}

      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
        >
          <IconMessageCircleFilled size={28} />
        </button>
      )}
    </div>
  );
};

export default ChatComponent;
