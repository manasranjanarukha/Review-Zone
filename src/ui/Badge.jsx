export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 ${className}`}
    >
      {children}
    </span>
  );
}
export { Badge };
