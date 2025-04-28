// components/Footer.js
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-700 mt-8"> {/* Reduced mt-10 to mt-8 CHANGED - to reduce space between footer and content-end*/}
      <div className="max-w-4xl mx-auto px-4 py-4"> {/* Reduced py-6 to py-4 CHANGED - to reduce space between footer and content-end */}
        <div className="flex flex-col items-center space-y-3">
          <Link href="/" className="select-none">
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