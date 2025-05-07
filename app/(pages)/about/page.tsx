'use client';


import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { WarpBackground } from '@/components/magicui/warp-background';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background px-4 md:px-8 py-12">
      {/* Background Pattern Wrapper */}
      <WarpBackground>
        <div className="relative z-10 max-w-5xl w-full flex flex-col gap-12">
          {/* Header Section */}
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              About <span className="text-primary">TaskMaster</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              TaskMaster is a powerful and simple task management tool designed to help individuals and teams stay focused, organized, and productive.
            </p>
          </section>

          {/* Cards Section */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
            <Card className="flex-1 bg-white/80 dark:bg-gray-700 backdrop-blur border border-gray-200 shadow-md">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">Who We Are</h2>
                <p className="text-muted-foreground">
                  We're a passionate team of developers and designers committed to making task management seamless and stress-free for everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="flex-1 bg-white/80  dark:bg-gray-700 backdrop-blur border border-gray-200 shadow-md">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">Our Mission</h2>
                <p className="text-muted-foreground">
                  To empower users with intuitive, responsive, and distraction-free tools that simplify task tracking and goal setting.
                </p>
              </CardContent>
            </Card>

            <Card className="flex-1 bg-white/80  dark:bg-gray-700 backdrop-blur border border-gray-200 shadow-md">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">Why TaskMaster?</h2>
                <p className="text-muted-foreground">
                  With smart prioritization, beautiful UI, and real-time updates, TaskMaster helps turn your to-dos into done.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-4 mt-12">
            <h2 className="text-2xl font-semibold">Ready to get started?</h2>
            <div className="flex justify-center">
              <Link href="/dashboard/create-task">
                <ShimmerButton className="shadow-2xl text-white">
                  Create Your First Task
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </div>
      </WarpBackground>
    </div>
  );
}
