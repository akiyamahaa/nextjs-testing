// components/FacebookChat.jsx
"use client";

import { useEffect } from "react";

export default function FacebookChat() {
  useEffect(() => {
    // Inject Facebook SDK script
    if (window.FB) return; // tránh inject lại nếu đã có
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: "v17.0",
      });
    };

    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.nonce = "facebook-chat";
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="YOUR_PAGE_ID" // 👉 Thay bằng ID trang thật của bạn
        theme_color="#0084ff"
        logged_in_greeting="Chào bạn! Tôi có thể giúp gì?"
        logged_out_greeting="Chào bạn! Hãy đăng nhập để chat nhé!"
      ></div>
    </>
  );
}
