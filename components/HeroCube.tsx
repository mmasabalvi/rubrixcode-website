import type { CSSProperties } from "react";

const serviceChips = ["Web Dev", "App Dev", "Blockchain", "UI/UX", "SMM"];
const cubeCells = Array.from({ length: 9 }, (_, index) => index);
const cubeFaces = [
  "translateZ(96px)",
  "rotateY(180deg) translateZ(96px)",
  "rotateY(90deg) translateZ(96px)",
  "rotateY(-90deg) translateZ(96px)",
  "rotateX(90deg) translateZ(96px)",
  "rotateX(-90deg) translateZ(96px)"
];

export default function HeroCube() {
  return (
    <div className="hero-orbit-stage glass-card relative aspect-square w-[min(39vw,520px)] overflow-hidden rounded-[28px]">
      <div className="absolute inset-8 rounded-2xl border border-cyan/15" />
      <div className="hero-orbit-ring absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div className="absolute left-[18%] top-[20%] h-2 w-2 rounded-full bg-cyan shadow-[0_0_24px_rgba(0,191,255,0.9)]" />
      <div className="absolute right-[19%] top-[20%] h-2 w-2 rounded-full bg-cyan shadow-[0_0_24px_rgba(0,191,255,0.9)]" />
      <div className="absolute right-[15%] top-1/2 h-2 w-2 rounded-full bg-cyan shadow-[0_0_24px_rgba(0,191,255,0.9)]" />
      <div className="absolute bottom-[18%] right-[19%] h-2 w-2 rounded-full bg-cyan shadow-[0_0_24px_rgba(0,191,255,0.9)]" />
      <div className="absolute bottom-[18%] left-[19%] h-2 w-2 rounded-full bg-cyan shadow-[0_0_24px_rgba(0,191,255,0.9)]" />

      <div
        className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2"
        style={{ perspective: "900px" }}
      >
        <div className="cube-service-orbit absolute inset-0">
          {serviceChips.map((chip, index) => (
            <span
              key={chip}
              className="cube-service-chip"
              style={
                {
                  "--angle": `${index * 72 - 90}deg`,
                  "--counter-angle": `${90 - index * 72}deg`
                } as CSSProperties
              }
            >
              <span className="cube-service-chip-inner label-caps">
                {chip}
              </span>
            </span>
          ))}
        </div>

        <div className="hero-cube-float absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2">
          <div className="rubrix-cube relative h-48 w-48">
            {cubeFaces.map((transform) => (
              <div
                key={transform}
                className="rubrix-cube-face"
                style={{ transform }}
              >
                {cubeCells.map((cell) => (
                  <span key={cell} className="cube-cell" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
