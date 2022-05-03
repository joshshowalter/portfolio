import Link from "next/link";

export default function Nav() {

  const navItems = [
    {title: 'About', url: '#about'}, 
    {title: 'Experience', url: '#experience'}, 
    {title: 'Work', url: '#work'}  
  ]
  return (
    <header className="bg-base-300/[.80] flex justify-center h-[80px] px-6 fixed w-full backdrop-blur z-10 sm:px-8">
      <nav className="flex justify-between items-center w-full">
        <h1 className="text-3xl text-accent">
          <Link href="/"><a>JS</a></Link>
        </h1>
        <ul className="flex space-between items-center gap-4 text-md sm:gap-12 sm:text-lg">
          {
            navItems.map(item => (
              <li key={item.title} className="hidden cursor-pointer hover:text-accent sm:flex">
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))
          }
          <a role="button" className="btn btn-outline btn-accent" href="/showalter_resume.pdf" target="_blank">
            Resume
          </a>
        </ul>
      </nav>
    </header>
  );
}
