"use client";

import { useState } from "react";

const cards = [
  {
    title: "人们并不是在回应事实，而是在回应自己的解释",
    body: "当信息不完整时，大脑会自动补全叙事。",
    boundary: "但解释不等于现实。",
  },
  {
    title: "情绪往往比事实更快形成判断",
    body: "在信息缺失时，人会自动用经验填补空白。",
    boundary: "但情绪不是事实本身。",
  },
  {
    title: "人类更相信解释的连贯性，而不是准确性",
    body: "一个完整的故事，比真实但混乱的信息更容易被接受。",
    boundary: "但连贯不等于正确。",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  const card = cards[index];

  const next = () => {
    setIndex((index + 1) % cards.length);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#E9E4DB",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "serif",
        padding: 24,
      }}
    >
      <div
        style={{
          maxWidth: 600,
          background: "#F5F1EA",
          padding: 32,
          borderRadius: 16,
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >
        <h1 style={{ fontSize: 22, marginBottom: 20 }}>
          {card.title}
        </h1>

        <p style={{ marginBottom: 12, lineHeight: 1.6 }}>
          {card.body}
        </p>

        <p style={{ fontStyle: "italic", color: "#666" }}>
          {card.boundary}
        </p>

        <div style={{ marginTop: 24, display: "flex", gap: 12 }}>
          <button onClick={next}>Next</button>
          <button>Save</button>
        </div>
      </div>
    </main>
  );
}