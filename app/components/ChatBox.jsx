"use client";
import { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { role: "bot", content: "Xin chào! Bạn đang quan tâm gì về chạy bộ?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();

    setMessages([...newMessages, { role: "bot", content: data.reply }]);
    setInput("");
    setLoading(false);
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: 20, maxWidth: 500 }}>
      <div style={{ height: 300, overflowY: "auto", marginBottom: 10 }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              textAlign: msg.role === "user" ? "right" : "left",
              marginBottom: 5,
            }}
          >
            <b>{msg.role === "user" ? "Bạn" : "Bot"}:</b> {msg.content}
          </div>
        ))}
        {loading && (
          <div>
            <i>Đang trả lời...</i>
          </div>
        )}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập câu hỏi..."
        style={{ width: "100%", padding: 8 }}
      />
      <button
        onClick={sendMessage}
        disabled={!input || loading}
        style={{ marginTop: 10 }}
      >
        Gửi
      </button>
    </div>
  );
}
