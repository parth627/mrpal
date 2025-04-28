import PageLayout from '../components/PageLayout';
import Link from 'next/link';

export default function Brainstorming() {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-6 py-8 sm:py-12"> {/* Reduced py-16 to py-8, sm:py-20 to sm:py-12 CHANGED - to reduce space between header and content*/}
        {/* Title Section */}
        <div className="text-center mb-8"> {/* Reduced mb-12 to mb-8 CHANGED - to reduce space between header and content */}
          <h1 className="text-4xl font-heading font-light text-gray-900 dark:text-white">
            <span className="italic">action</span>
            <span className="font-normal mx-1">cures</span>
            <span className="italic">fear</span>
          </h1>
          <p className="mt-2 text-lg font-sans italic text-gray-500 dark:text-gray-400">
            – david j. schwartz
          </p>
        </div>

        {/* Why Section */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            why this exists
          </h2>
          <p className="text-lg font-sans text-gray-700 dark:text-gray-300 mb-4">
            Because brilliant ideas die in isolation. I help creators, thinkers, and hesitant visionaries who:
          </p>
          <ul className="space-y-3 text-lg font-sans text-gray-700 dark:text-gray-300">
            {[
              "Know what to do but can't start",
              "See all possible failures before seeing success",
              "Need one clear push to turn 'someday' into 'today'"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* How I Can Help Section */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            How I Can Help You
          </h2>
          <ul className="space-y-3 text-lg font-sans text-gray-700 dark:text-gray-300">
            {[
              "Get your idea out of your head and into a real conversation",
              "Break down big, blurry thoughts into small, clear ones",
              "Spot hidden patterns in your thinking that might be slowing you down",
              "Help you move from 'I don't know where to start' to 'I know what to do next'",
              "Offer honest feedback — not noise or fluff",
              "Give you a calm space to explore — without pressure, deadlines, or expectations"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            the magic of 27 minutes
          </h2>
          <p className="text-lg font-sans text-gray-700 dark:text-gray-300 mb-4">
            In just 27 minutes (yes, we time it):
          </p>
          <ol className="space-y-3 text-lg font-sans text-gray-700 dark:text-gray-300 list-decimal list-inside">
            {[
              "You'll speak freely while I actively listen",
              "We'll identify your single biggest roadblock",
              "You'll leave with one immediate action plan—no more paralysis"
            ].map((item, index) => (
              <li key={index} className="pl-2">
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            FREE Call Offer:
          </h2>
          <p className="text-lg font-sans italic text-gray-700 dark:text-gray-300 mb-6">
            "Your first step costs nothing but could be worth everything. Let's spend 27 minutes ensuring your effort won't dissipate into more 'what-ifs'. I'll be your temporary thinking partner—no strings, just momentum."
          </p>
          <div className="text-center">
            <Link
              href="https://cal.com/parth-langalia/27min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition-all duration-200 hover:scale-[1.02]"
            >
              Claim Your 27 Minutes
            </Link>
            <p className="mt-4 text-sm font-sans text-gray-500 dark:text-gray-400">
              You'll be redirected to Cal.com for scheduling. Feel free to give me some context, so I can do my homework ;)
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
