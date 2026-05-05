import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(135deg, #ffffff 0%, #f4f7fa 48%, #dff7ff 100%)",
          color: "#0d2b4e",
          display: "flex",
          height: "100%",
          padding: "64px",
          position: "relative",
          width: "100%"
        }}
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(#d8edf5 1px, transparent 1px), linear-gradient(90deg, #d8edf5 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            inset: 0,
            opacity: 0.45,
            position: "absolute"
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: 760,
            position: "relative"
          }}
        >
          <div
            style={{
              alignItems: "center",
              color: "#00a9df",
              display: "flex",
              fontSize: 28,
              fontWeight: 800,
              gap: 14,
              letterSpacing: 0
            }}
          >
            <div
              style={{
                alignItems: "center",
                background: "linear-gradient(135deg, #00bfff, #0d2b4e)",
                borderRadius: 12,
                color: "#ffffff",
                display: "flex",
                fontSize: 24,
                fontWeight: 900,
                height: 52,
                justifyContent: "center",
                width: 52
              }}
            >
              RC
            </div>
            RubrixCode
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 900,
              lineHeight: 0.95,
              marginTop: 34,
              maxWidth: 760
            }}
          >
            Every Digital Side, Solved Under One Roof
          </div>
          <div
            style={{
              color: "#334155",
              fontSize: 28,
              lineHeight: 1.45,
              marginTop: 28,
              maxWidth: 760
            }}
          >
            Web, app, UI/UX, blockchain, and growth systems for startup
            founders.
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            height: 400,
            justifyContent: "center",
            position: "absolute",
            right: 72,
            top: 112,
            width: 400
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #00bfff, #0d2b4e)",
              borderRadius: 44,
              boxShadow: "0 36px 120px rgba(0, 191, 255, 0.34)",
              height: 270,
              transform: "rotate(12deg)",
              width: 270
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
