import { useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function App() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!message.trim()) return

    const userMessage = {
      role: "user",
      text: message,
    }

    setMessages((prev) => [...prev, userMessage])

    const currentMessage = message

    setMessage("")
    setLoading(true)

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/chat",
        {
          message: currentMessage,
        }
      )

      const botMessage = {
        role: "bot",
        text: response.data.reply,
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Error connecting to AI backend.",
        },
      ])
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl h-[85vh] bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            AI Chatbot
          </h1>

          <p className="text-gray-400 mt-2">
            Offline AI chatbot powered by FastAPI & Ollama
          </p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${
                msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] px-5 py-3 rounded-2xl shadow-lg text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-blue-600"
                    : "bg-white/10 border border-white/10"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}

          {loading && (
            <div className="text-gray-400 animate-pulse">
              AI is typing...
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-white/10 bg-black/20">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Ask anything..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage()
                }
              }}
              className="flex-1 bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <button
              onClick={sendMessage}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all px-6 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}