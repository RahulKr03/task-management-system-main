"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen px-6 py-16 bg-white dark:bg-zinc-900 overflow-hidden transition-colors duration-500">
      {/* Magical Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-indigo-400 dark:bg-indigo-700 opacity-20 rounded-full blur-3xl top-[-10%] left-[-10%] animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-pink-300 dark:bg-pink-600 opacity-20 rounded-full blur-2xl bottom-[-10%] right-[-10%] animate-ping"></div>
        <div className="absolute w-80 h-80 bg-blue-300 dark:bg-blue-700 opacity-25 rounded-full blur-2xl top-[30%] right-[10%] animate-spin-slow"></div>
      </div>

      {/* Contact Form Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          📬 Get in Touch
        </motion.h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto">
          We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Info Card */}
          <Card className="flex-1 shadow-lg rounded-2xl bg-white dark:bg-zinc-800">
            <CardHeader>
              <CardTitle className="text-lg text-gray-700 dark:text-white">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-500" />
                contact@taskmagic.app
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-pink-500" />
                123 Magic Lane, Productivity City
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="flex-1 shadow-xl rounded-2xl bg-white dark:bg-zinc-800">
            <CardHeader>
              <CardTitle className="text-lg text-gray-700 dark:text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Input placeholder="Your Name" className="bg-white dark:bg-zinc-700 dark:text-white" />
              <Input type="email" placeholder="Your Email" className="bg-white dark:bg-zinc-700 dark:text-white" />
              <Textarea placeholder="Your Message..." className="bg-white dark:bg-zinc-700 dark:text-white resize-none h-32" />
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}