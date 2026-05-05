import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#ffffff",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%"
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "linear-gradient(135deg, #00bfff 0%, #0d2b4e 100%)",
            borderRadius: "40px",
            boxShadow: "0 24px 70px rgba(0, 191, 255, 0.3)",
            color: "#ffffff",
            display: "flex",
            fontSize: 50,
            fontWeight: 900,
            height: 132,
            justifyContent: "center",
            letterSpacing: 0,
            width: 132
          }}
        >
          RC
        </div>
      </div>
    ),
    size
  );
}
