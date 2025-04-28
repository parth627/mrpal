import { useState } from 'react';
import PageLayout from '../components/PageLayout';

const insightsData = [
  {
    date: 'April 26, 2025',
    points: [
      "All failed companies are the same: they failed to escape competition. (Zero to One by Peter Thiel)",
      "Every moment in business happens only once—the next Bill Gates won't build an OS. (Zero to One by Peter Thiel)",
      "A startup is the largest group of people you can convince of a plan to build a different future. (Zero to One by Peter Thiel)",
    ],
  },
  {
    date: 'April 19, 2025',
    points: [
      "The only way to win is to learn faster than anyone else. (The Lean Startup by Eric Ries)",
      "Build-Measure-Learn: Speed matters more than perfection. (The Lean Startup by Eric Ries)",
      "If you're not embarrassed by your first product, you launched too late. (The Lean Startup by Eric Ries)",
    ],
  },
  {
    date: 'April 12, 2025',
    points: [
      "There are no shortcuts to knowledge, especially knowledge gained from personal experience. (The Hard Thing About Hard Things by Ben Horowitz)",
      "Take care of the people, the products, and the profits—in that order. (The Hard Thing About Hard Things by Ben Horowitz)",
      "Life is struggle. I believe that within that quote is the key to an entire mentality. (The Hard Thing About Hard Things by Ben Horowitz)",
    ],
  },
  {
    date: 'April 5, 2025',
    points: [
      "You do not rise to the level of your goals, you fall to the level of your systems. (Atomic Habits by James Clear)",
      "Every action you take is a vote for the type of person you wish to become. (Atomic Habits by James Clear)",
      "The most effective form of learning is practice, not planning. (Atomic Habits by James Clear)",
    ],
  },
  {
    date: 'March 29, 2025',
    points: [
      "Deep work is like a superpower in our increasingly competitive economy. (Deep Work by Cal Newport)",
      "The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable. (Deep Work by Cal Newport)",
      "Who you are, what you think, feel, and do, what you love—is the sum of what you focus on. (Deep Work by Cal Newport)",
    ],
  },
  {
    date: 'March 22, 2025',
    points: [
      "You don't need a revolutionary idea to start a revolutionary business. (The $100 Startup by Chris Guillebeau)",
      "Value is created when a person makes something useful and shares it with the world. (The $100 Startup by Chris Guillebeau)",
      "Stop guessing what other people want. Help them solve their problems. (The $100 Startup by Chris Guillebeau)",
    ],
  }
];

export default function Insights() {
  const [openIndexes, setOpenIndexes] = useState([0, 1]); // Open the 3 latest Saturdays by default

  const toggleIndex = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-6 py-8 sm:py-12"> {/* Reduced py-16 to py-8, sm:py-24 to sm:py-12 CHANGED - to reduce space between header and content */}
        {/* Page Heading */}
        <h1 className="text-4xl font-bold font-heading text-gray-900 dark:text-white mb-6"> {/* Reduced mb-10 to mb-6 CHANGED - to reduce space between header and content */}
          Saturday Sparks
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8"> {/* Reduced mb-12 to mb-8 CHANGED - to reduce space between header and content */}
          A short collection of mindshifts, strategies, and sparks — distilled from books, real-world experiences, and personal notes. Updated every Saturday.
        </p>

        {/* Accordion List */}
        <div className="space-y-6">
          {insightsData.map((item, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-md">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.date}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  {openIndexes.includes(index) ? '-' : '+'}
                </span>
              </button>
              {openIndexes.includes(index) && (
                <ul className="px-5 pb-4 space-y-3 text-gray-700 dark:text-gray-300">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="list-disc ml-6">{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}