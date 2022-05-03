export default function SectionHeader({ title }: {title: string}) {
  return (
    <h2 className="text-3xl font-semibold text-white underline underline-offset-4 decoration-2 decoration-accent mb-8">
      {title}
    </h2>
  );
}