import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-700 mt-8">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex flex-col items-center space-y-3">
          <Link href={`${process.env.NODE_ENV === 'production' ? '' : ''}/`} className="select-none">
            <Logo className="h-6" />
          </Link>
          <p className="text-sm font-sans text-gray-500 dark:text-gray-400 select-none">
            © {new Date().getFullYear()} all energy reserved
          </p>
        </div>
      </div>
    </footer>
  );
}