"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Sparkles, ShieldCheck, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Secure Authentication",
    description: "Register and log in with confidence using encrypted passwords and token-based sessions.",
    icon: <ShieldCheck className="w-8 h-8 text-green-600 dark:text-green-400" />,
    badge: "Core",
  },
  {
    title: "Full Task Control",
    description: "Create, edit, assign, and track tasks with priority and status filters.",
    icon: <LayoutDashboard className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    badge: "Core",
  },
  {
    title: "Real-Time Collaboration",
    description: "Receive instant updates when tasks are assigned or updated via WebSockets.",
    icon: <Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    badge: "Advanced",
  },
  {
    title: "Analytics Dashboard",
    description: "Visualize your productivity with charts showing completion rates and overdue tasks.",
    icon: <CheckCircle className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />,
    badge: "Optional",
  },
];

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen px-4 py-12 bg-gradient-to-br from-white via-zinc-50 to-gray-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-black transition-colors duration-500">
      {/* Magical background layer */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-20 dark:opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, #a855f7 0%, transparent 60%), radial-gradient(circle at 80% 70%, #22d3ee 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 dark:text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🌟 Features That Make Task Management Magical
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Empower your team with modern tools to collaborate, stay organized, and get things done faster.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="w-full max-w-md shadow-2xl rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 shadow-inner">
                    {feature.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                      {feature.title}
                    </CardTitle>
                    <Badge className="mt-1" variant="secondary">
                      {feature.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-600 dark:text-gray-300 text-sm px-6 pb-6">
                  {feature.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
