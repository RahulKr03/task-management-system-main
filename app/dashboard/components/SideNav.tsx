'use client'
import { AlertCircle, ListChecks, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const SideNav = () => {
  const path = usePathname()

  const TaskMenu = [
    { name: 'Assigned Tasks', icon: Users, path: '/dashboard/task-assigned' },
    { name: 'Created Tasks', icon: ListChecks, path: '/dashboard/task-created' },
    { name: 'Overdue Tasks', icon: AlertCircle, path: '/dashboard/task-overdue' },
  ]

  useEffect(() => {
    console.log(path)
  }, [path])

  return (
    <div className="h-screen p-5 shadow-sm border-r bg-white dark:bg-slate-900 dark:border-slate-700 flex flex-col justify-between">
      <div>
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Link href="/">
            <Image src="/images/logo/logo.svg" alt="logo" width={120} height={100} />
          </Link>
        </div>

        <hr className="border-slate-300 dark:border-slate-700 mb-6" />

        {/* Task Navigation Only */}
        <div>
          <h4 className="text-xs uppercase text-gray-500 dark:text-gray-400 font-semibold mb-2 px-3">Tasks</h4>
          <nav className="space-y-2">
            {TaskMenu.map((menu, index) => {
              const isActive = path === menu.path
              return (
                <Link href={menu.path} key={index}>
                  <div
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                      isActive
                        ? 'bg-primary text-white dark:text-black'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <menu.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{menu.name}</span>
                  </div>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default SideNav
