import PageLayout from '../components/PageLayout';
import Link from 'next/link';

export default function Catalyst() {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-6 py-8 sm:py-12">
        
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-heading font-light text-gray-900 dark:text-white">
            <span className="italic">technology</span>
            <span className="font-normal mx-1">amplifies</span>
            <span className="italic">potential</span>
          </h1>
          <p className="mt-2 text-lg font-sans italic text-gray-500 dark:text-gray-400">
            – parth langalia
          </p>
        </div>

        {/* Why Section */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            why this exists
          </h2>
          <p className="text-lg font-sans text-gray-700 dark:text-gray-300 mb-4">
            because businesses sitting on old systems or gut-based decisions will get outpaced. cutting-edge tech like ai, data-driven thinking, and automation is no longer optional—it's survival. i help entrepreneurs, small businesses, and legacy brands who:
          </p>
          <ul className="space-y-3 text-lg font-sans text-gray-700 dark:text-gray-300">
            {[
              "feels tech could unlock growth—but don't know where to start",
              "See competitors moving faster with AI—and worry they're falling behind",
              "Have data piling up—but zero actionable insights from it",
              "Lack in-house tech skills to solve pressing problems",
              "Want to future-proof their business—before disruption hits"
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
            how i can help you
          </h2>
          <ul className="space-y-3 text-lg font-sans text-gray-700 dark:text-gray-300">
            {[
              "Analyze your business through a tech-first lens—spot hidden opportunities others miss",
              "Implement modern, proven tech—not buzzword bingo—that actually moves your needle",
              "Turn your raw data into automated decisions and clear growth insights",
              "Build custom software/AI tools tailored to your unique operational gaps",
              "Work 1:1 with you—no agency fluff, just solutions wired to your business goals"
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
            in just 27 minutes (yes, we time it):
          </p>
          <ol className="space-y-3 text-lg font-sans text-gray-700 dark:text-gray-300 list-decimal list-inside">
            {[
              "you'll explain your problem and dream outcome",
              "i'll suggest real-world tech paths you could take",
              "you'll walk away with one clear tech solution to explore further"
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
            free call offer:
          </h2>
          <p className="text-lg font-sans italic text-gray-700 dark:text-gray-300 mb-6">
            "don't let old tools block new growth. let's explore how cutting-edge technology can unlock the next level for your business. no cost, no pressure—just pure, practical momentum."
          </p>
          <div className="text-center">
            <Link
              href="https://cal.com/parth-langalia/27min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-700 dark:hover:bg-gray-200 transition-all duration-200 hover:scale-[1.02]"
            >
              claim your 27 minutes
            </Link>
            <p className="mt-4 text-sm font-sans text-gray-500 dark:text-gray-400">
              you'll be redirected to cal.com for scheduling. The more context you provide, the better I can do my homework ;)
            </p>
          </div>
        </div>

      </div>
    </PageLayout>
  );
}
