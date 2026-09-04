import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI Power Worker Pro — Curso de IA para productividad | InnoGrowth";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:
            "linear-gradient(135deg, #A46BFF 0%, #6B3FD4 55%, #3A1F7A 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "10px 24px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.15)",
              color: "#fff",
              fontSize: 28,
              fontWeight: 600,
            }}
          >
            InnoGrowth
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            color: "#fff",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "28px",
          }}
        >
          AI Power Worker Pro
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "rgba(255,255,255,0.92)",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Aumente su productividad x5 con IA
        </div>
        <div
          style={{
            display: "flex",
            gap: "24px",
            fontSize: 28,
            color: "#fff",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "12px 28px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.15)",
            }}
          >
            3 domingos
          </div>
          <div
            style={{
              display: "flex",
              padding: "12px 28px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.15)",
            }}
          >
            $200.000 COP
          </div>
          <div
            style={{
              display: "flex",
              padding: "12px 28px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.15)",
            }}
          >
            ChatGPT · Claude · Gemini
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
