export default function SectionHeader({ title }: {title: string}) {
  return (
    <h2 className="text-3xl font-semibold text-white mb-8">
      {title}
    </h2>
  );
}