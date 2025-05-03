// components/Footer.js
import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-700 mt-8"> {/* Reduced mt-10 to mt-8 CHANGED - to reduce space between footer and content-end*/}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center flex-col sm:flex-row space-y-4 sm:space-y-0">

          {/* Left - Logo */}
          <Link href="/" className="select-none">
            <Logo className="h-6" />
          </Link>

          {/* Center - Copyright */}
          <p className="text-sm font-sans text-gray-500 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} all energy reserved
          </p>

          {/* Right - Feedback Link */}
          <a
            href="https://forms.gle/75jKNh4XBAdg7DfP9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-900 dark:text-white hover:underline underline-offset-4"
          >
            Share your feedback →
          </a>

        </div>
      </div>
    </footer>
  );
}
