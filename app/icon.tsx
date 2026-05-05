import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#ffffff",
          borderRadius: "18px",
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
            borderRadius: "14px",
            color: "#ffffff",
            display: "flex",
            fontSize: 20,
            fontWeight: 900,
            height: 48,
            justifyContent: "center",
            letterSpacing: 0,
            width: 48
          }}
        >
          RC
        </div>
      </div>
    ),
    size
  );
}
