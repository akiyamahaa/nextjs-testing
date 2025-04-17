"use client"; // chạy client-side

import dynamic from "next/dynamic";
import { CustomChat, FacebookProvider } from "react-facebook";

export default function MessengerChat() {
  return (
    <FacebookProvider appId="1006118231101193" chatSupport>
      <CustomChat pageId="112101361829815" />
    </FacebookProvider>
  );
}
