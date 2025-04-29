// pages/thankyou.js
import Link from 'next/link';
import PageLayout from '../components/PageLayout';

export default function ThankYou() {
  return (
    <PageLayout>
      <div className="max-w-xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Thank you for your feedback! 🙌
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Your thoughts mean a lot. You're helping shape something better.
        </p>
        <div className="space-x-4">
          <Link
            href="/feedback"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Wanna Give More Feedback?
          </Link>
          <Link
            href="/"
            className="bg-gray-200 text-gray-800 px-5 py-2 rounded hover:bg-gray-300 transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            Explore More
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
