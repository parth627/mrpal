import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

const NavLink = ({ href, children }) => (
  <Link href={href} className="nav-link ml-6 first:ml-0 font-heading">
    {children}
  </Link>
);

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-5 py-3"> {/* Reduced py-4 to py-3 CHANGED - to reduce space between Header and content */}
        <div className="flex justify-between items-center">
          <Link href="/" className="select-none">
            <Logo className="h-8" />
          </Link>
          
          <div className="flex items-center">
            <nav className="flex mr-6">
              <NavLink href="/brainstorming">brainstorming</NavLink>
              <NavLink href="/catalyst">catalyst</NavLink>
              <NavLink href="/insights">insights</NavLink>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}