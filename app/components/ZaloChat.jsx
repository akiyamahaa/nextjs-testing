"use client";

import { useEffect } from "react";

export default function ZaloChat() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sp.zalo.me/plugins/sdk.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div
        className="zalo-chat-widget"
        data-oaid="YOUR_OA_ID" // 👈 thay bằng OA ID của bạn
        data-welcome-message="Chào bạn! Zalo này hỗ trợ gì cho bạn?"
        data-autopopup="0"
        data-width="300"
        data-height="400"
      ></div>
      <a
        href="https://zalo.me/1234567890123456789" // OA ID thật khi có
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          background: "#0084ff",
          color: "white",
          padding: "10px 16px",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        💬 Chat Zalo
      </a>
    </>
  );
}
