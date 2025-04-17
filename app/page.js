import ChatBox from "./components/ChatBox";
import MessengerChat from "./components/MessengerChat";

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>🕯️ Chatbot tư vấn nến thơm</h1>
      <ChatBox />
      <MessengerChat />
    </main>
  );
}
