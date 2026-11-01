export function SectionHeading({ label }: { label: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{label}</span>
      <span className="section-line" aria-hidden="true" />
    </div>
  );
}
