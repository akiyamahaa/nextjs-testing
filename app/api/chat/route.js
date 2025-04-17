import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const message = body.message;

  const productData = [
    {
      name: "Nến Lavender",
      scent: "Oải hương",
      purpose: "Thư giãn",
      notes: "Lavender, gỗ tuyết tùng",
    },
    {
      name: "Nến Vanilla",
      scent: "Vanilla ngọt ngào",
      purpose: "Ấm cúng",
      notes: "Vanilla, quế",
    },
  ];

  const prompt = `
Bạn là một chuyên gia tư vấn nến thơm.
Danh sách sản phẩm: ${JSON.stringify(productData)}.
Khách hàng nói: "${message}".
Hãy tư vấn một cách ngắn gọn và thân thiện.
`;

  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "http://localhost:3000/", // bắt buộc
        "X-Title": "NextJS Candle Bot", // tùy chọn
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await res.json();
    const reply =
      data.choices?.[0]?.message?.content || "Xin lỗi, tôi chưa thể phản hồi.";
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("[OpenRouter Error]", err);
    return NextResponse.json({ error: "Lỗi từ OpenRouter" }, { status: 500 });
  }
}
