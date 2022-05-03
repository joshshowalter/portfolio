import Link from "next/link";

export default function Nav() {

  const navItems = [
    {title: 'About', url: '#about'}, 
    {title: 'Experience', url: '#experience'}, 
    {title: 'Work', url: '#work'}  
  ]
  return (
    <header className="bg-base-200/[.80] flex justify-center h-[80px] px-8 fixed w-full backdrop-blur z-10">
      <nav className="flex justify-between items-center w-full">
        <h1 className="text-3xl text-accent">
          <Link href="#"><a>JS</a></Link>
        </h1>
        <ul className="flex space-between items-center gap-12">
          {
            navItems.map(item => (
              <li key={item.title} className="hover:text-accent cursor-pointer text-lg">
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))
          }
          <li className="text-accent text-lg">
            <a href="/showalter_resume.pdf" target="_blank">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
