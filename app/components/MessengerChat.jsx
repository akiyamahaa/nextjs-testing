"use client"; // chạy client-side

import { useEffect } from "react";
import { CustomChat, FacebookProvider } from "react-facebook";

export default function MessengerChat() {
  // Quan sát và xoá thuộc tính crossorigin khi SDK được chèn
  useEffect(() => {
    const obs = new MutationObserver((muts) => {
      muts.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (
            node.tagName === "SCRIPT" &&
            node.src.includes("connect.facebook.net") &&
            node.crossOrigin
          ) {
            node.removeAttribute("crossorigin");
          }
        });
      });
    });
    obs.observe(document.head, { childList: true });
    return () => obs.disconnect();
  }, []);
  return (
    <FacebookProvider appId="1006118231101193" chatSupport>
      <CustomChat pageId="112101361829815" />
    </FacebookProvider>
  );
}
