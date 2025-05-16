import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const message = body.message;

  const userData = {
    // ✨ Ví dụ dữ liệu người dùng (có thể lấy từ form client)
    nickname: "Linh",
    goal: "Hoàn thành half-marathon < 2 giờ",
    targetDistancePerDayKm: 8, // quãng chạy trung bình mong muốn mỗi ngày
    currentWeeklyMileageKm: 35, // thực tế
    preferredSurface: "Đường bê tông",
    raceDate: "2025-09-07",
  };

  const prompt = `
Bạn là một huấn luyện viên chạy bộ giàu kinh nghiệm.
Thông tin người chạy: ${JSON.stringify(userData)}.
Người dùng hỏi: "${message}".
Hãy tư vấn ngắn gọn, súc tích, thân thiện, có thể gợi ý cường độ, dinh dưỡng hoặc phụ kiện phù hợp.
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
