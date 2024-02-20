import Link from 'next/link';

export default function Nav() {
  const navItems = [
    { title: 'About', url: '#about' },
    { title: 'Experience', url: '#experience' },
    { title: 'Projects', url: '#work' },
  ];
  return (
    <header className="fixed z-10 flex h-[80px] w-full justify-center bg-base-300/[.80] px-6 backdrop-blur sm:px-8">
      <nav className="flex w-full items-center justify-between">
        <h1 className="text-3xl text-accent">
          <Link href="/">
            <a>JS</a>
          </Link>
        </h1>
        <ul className="space-between text-md flex items-center gap-4 sm:gap-12 sm:text-lg">
          {navItems.map((item) => (
            <li
              key={item.title}
              className="hidden cursor-pointer hover:text-accent sm:flex"
            >
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
          <a
            role="button"
            className="btn btn-outline btn-accent uppercase"
            href="/showalter_resume.pdf"
            target="_blank"
          >
            Resume
          </a>
        </ul>
      </nav>
    </header>
  );
}
