import PageLayout from '../components/PageLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto px-6 py-8 sm:py-12"> {/* Reduced py-16 to py-8, sm:py-24 to sm:py-12 CHANGED - to reduce space between header and content */}
        <h1 className="text-4xl sm:text-5xl font-heading font-bold leading-tight text-gray-900 dark:text-white">
          Hi, I'm Parth Langalia.
        </h1>
        <p className="mt-6 text-lg font-sans text-gray-700 dark:text-gray-300 leading-relaxed">
          Stuck on an idea you're dying to bring to life? Boom—you've just found your launchpad. I help visionaries like you cut through the noise, think sharper, build smarter, and take relentless action. Jump into <Link href="brainstorming" className="font-medium text-gray-900 dark:text-white hover:underline underline-offset-4"><u>Brainstorming</u></Link> to crush roadblocks and turn "what ifs" into "hell yes." Let's build something meaningful, together.
          <br /><br />
          Building a business? Most hit the same wall - wasting time on repetitive work, missing insights in their customer data, or not using tech that could push them forward. That's where <Link href="catalyst" className="font-medium text-gray-900 dark:text-white hover:underline underline-offset-4"><u>Catalyst</u></Link> comes in - where i help to bridge the gap between everyday problems and ai driven technical solutions that grow your business.
          <br /><br />
          And if you love learning like I do, dive into <Link href="insights" className="font-medium text-gray-900 dark:text-white hover:underline underline-offset-4"><u>Insights</u></Link> — a weekly dose of handpicked thoughts from the books I read, crafted to guide and inspire your journey.
        </p>
      </div>

      {/* Who I Am Section */}
      <div className="max-w-3xl mx-auto px-6 py-8 border-t border-gray-200 dark:border-gray-700"> {/* Reduced py-12 to py-8 CHANGED - to reduce space between header and content */}
        <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">Who I Am</h2>
        <ul className="space-y-4 text-lg font-sans text-gray-700 dark:text-gray-300">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Sporty Software engineer who loves solving both idea puzzles & code</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Data geek who's always exploring tech that's actually useful for real-world problems</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Your thinking partner - no judgment, just direction</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Deep listener - helping you feel heard and understood (
              <Link href="brainstorming" className="font-medium text-gray-900 dark:text-white hover:underline underline-offset-4">
                checkout Brainstorming
              </Link>
              )
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Problem-solver for businesses - helping you grow smarter, not just bigger (
              <Link href="catalyst" className="font-medium text-gray-900 dark:text-white hover:underline underline-offset-4">
                learn about catalyst
              </Link>
              )
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Daily reader - I pull top ideas and give them to you, distilled (
              <Link href="insights" className="font-medium text-gray-900 dark:text-white hover:underline underline-offset-4">
                explore Insights
              </Link>
              )
            </span>
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}
