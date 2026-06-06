import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Istofi Yusuf - Full Stack Developer & AI Specialist";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        padding: "60px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(0,122,255,0.3) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 100,
            height: 100,
            background: "linear-gradient(135deg, #007AFF, #5856D6)",
            borderRadius: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <span style={{ fontSize: 48, fontWeight: "bold", color: "white" }}>
            IY
          </span>
        </div>

        <h1
          style={{
            fontSize: 56,
            fontWeight: "bold",
            color: "white",
            marginBottom: 16,
            letterSpacing: -1,
          }}
        >
          Istofi Yusuf
        </h1>

        <p
          style={{
            fontSize: 24,
            color: "#34C759",
            marginBottom: 12,
          }}
        >
          Available for Work ✨
        </p>

        <p
          style={{
            fontSize: 20,
            color: "#8e8e93",
            maxWidth: 600,
          }}
        >
          Full Stack Developer & AI Specialist
        </p>

        <div
          style={{
            marginTop: 32,
            padding: "8px 20px",
            background: "rgba(0,122,255,0.2)",
            borderRadius: 980,
            fontSize: 14,
            color: "#007AFF",
          }}
        >
          istofiyusuf.com
        </div>
      </div>
    </div>,
    { ...size },
  );
}
