import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Istofi Yusuf - Full Stack Developer & AI Specialist";
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0a",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 40,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            background: "linear-gradient(135deg, #007AFF, #5856D6)",
            borderRadius: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 24,
          }}
        >
          <span style={{ fontSize: 36, color: "white", fontWeight: "bold" }}>
            IY
          </span>
        </div>
        <h1 style={{ fontSize: 48, fontWeight: "bold", color: "white" }}>
          Istofi Yusuf
        </h1>
        <p style={{ fontSize: 20, color: "#34C759", marginTop: 8 }}>
          Available for Work
        </p>
      </div>
    </div>,
    { ...size },
  );
}
