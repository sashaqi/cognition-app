"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [card, setCard] = useState<any>(null);

  const generate = async () => {
    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ input }),
    });

    const data = await res.json();
    setCard(data);
    setLoading(false);
  };

  return (
    <main style={{ padding: 40, fontFamily: "serif" }}>
      <h1>Human Cognition</h1>

      {/* 输入区 */}
      <textarea
        placeholder="今天什么事引起了你怎样的感受？"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%", height: 80, marginTop: 20 }}
      />

      <button onClick={generate} disabled={loading}>
        {loading ? "Generating..." : "Generate Cognition"}
      </button>

      {/* 卡片 */}
      {card && (
        <div
          style={{
            marginTop: 30,
            padding: 20,
            background: "#F5F1EA",
          }}
        >
          <h2>{card.title}</h2>
          <p>{card.body}</p>
          <p style={{ fontStyle: "italic" }}>{card.boundary}</p>
        </div>
      )}
    </main>
  );
}