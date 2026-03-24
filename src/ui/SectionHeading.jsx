import Badge from "./Badge";
export default function SectionHeading({
  badge,
  title,
  subtitle,
  center = true,
}) {
  return (
    <div className={`mb-16 ${center ? "text-center" : ""}`}>
      {badge && <Badge className="mb-4">{badge}</Badge>}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mt-3 mb-4">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-gray-400 text-lg max-w-auto leading-relaxed ${
            center ? "mx-auto text-center" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
export { SectionHeading };
