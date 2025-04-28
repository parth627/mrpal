// components/PageLayout.js
import Header from './Header';
import Footer from './Footer';

export default function PageLayout({ children, title }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-6 py-6">
          {title && (
            <h1 className="text-4xl font-heading font-bold mb-8 text-gray-900 dark:text-white">
              {title}
            </h1>
          )}
          <div className="text-gray-700 dark:text-gray-300">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
