import Link from "next/link";

export default function Nav() {

  const navItems = [
    {title: 'About', url: '/#about'}, 
    {title: 'Experience', url: '/#experience'}, 
    {title: 'Work', url: '/#work'}, 
    {title: 'Resume', url: '/#resume'}
  ]
  return (
    <header className="bg-base-200/[.80] flex justify-center h-[80px] px-8 fixed w-full backdrop-blur z-10">
      <nav className="flex justify-between items-center w-full">
        <h1 className="text-3xl text-accent">JS</h1>
        <ol className="flex space-between items-center gap-12 list-decimal">
          {
            navItems.map(item => (
              <li key={item.title} className="hover:text-accent cursor-pointer">
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))
          }
        </ol>
      </nav>
    </header>
  );
}
