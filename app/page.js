import ChatBox from "./components/ChatBox";

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>🕯️ Chatbot tư vấn</h1>
      <ChatBox />
      <a
        href="https://m.me/112101361829815"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: "#0084ff",
          color: "white",
          padding: "12px 16px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        💬 Chat với chúng tôi
      </a>
    </main>
  );
}
