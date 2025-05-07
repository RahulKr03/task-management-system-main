'use client'
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DashboardHero() {
  const { user } = useUser()

  return (
    <section className="min-h-screen w-full px-6 py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">

        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-800 dark:text-white">
            Welcome back{user?.firstName ? `, ${user.firstName}` : ''}!
          </h1>
          <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-xl">
            Stay on top of your goals. Manage your tasks, collaborate with your team, and track your progress—all in one place.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href={'/dashboard/task-assigned'}>
              <Button className="px-6 py-2 text-base">🚀 View Assigned Tasks</Button>
            </Link>
            <Link href={'/dashboard/create-task'}>
              <Button variant="outline" className="px-6 py-2 text-base">➕ Create New Task</Button>
            </Link>
          </div>
        </motion.div>

        {/* Image / Illustration */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="rounded-xl overflow-hidden shadow-xl border dark:border-slate-700">
            <Image
              src="/images/Dashboard.webp"
              alt="Dashboard Illustration"
              width={500}
              height={350}
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
