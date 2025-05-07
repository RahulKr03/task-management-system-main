'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="h-screen w-full bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-black py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Manage Tasks <br className="hidden md:block" />
            with Confidence
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Stay organized and productive with our intuitive task management system. Track, assign, and complete with ease.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <Link href="/dashboard">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/features">
              <Button variant="outline" size="lg">Learn More</Button>
            </Link>
          </div>
        </div>

        {/* Image or Illustration */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/task-management-illustration.webp"
            alt="Task Management Illustration"
            width={500}
            height={500}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
