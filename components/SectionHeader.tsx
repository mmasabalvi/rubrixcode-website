type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light"
}: SectionHeaderProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={`flex max-w-3xl flex-col gap-4 ${
        align === "center" ? "mx-auto items-center text-center" : ""
      }`}
    >
      {eyebrow ? (
        <p className={`label-caps ${isDark ? "text-cyan" : "text-cyan-deep"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-bold leading-tight md:text-4xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`text-base leading-7 md:text-lg ${
            isDark ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
      <div className="h-1 w-24 rounded-full bg-cyan" />
    </div>
  );
}
