"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Banknote,
  BarChart,
  Briefcase,
  Code,
  Database,
  Globe,
  MessageSquare,
  Paintbrush,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const workOptions = [
  {
    id: 1,
    name: "Software Development",
    icon: Code,
    color: "text-purple-500 bg-purple-100",
  },
  {
    id: 2,
    name: "Product Management",
    icon: Briefcase,
    color: "text-green-500 bg-green-100",
  },
  {
    id: 3,
    name: "Marketing",
    icon: BarChart,
    color: "text-yellow-500 bg-yellow-100",
  },
  {
    id: 4,
    name: "Design",
    icon: Paintbrush,
    color: "text-pink-500 bg-pink-100",
  },
  {
    id: 5,
    name: "Project Management",
    icon: Settings,
    color: "text-blue-500 bg-blue-100",
  },
  {
    id: 6,
    name: "Operations",
    icon: Database,
    color: "text-red-500 bg-red-100",
  },
  {
    id: 7,
    name: "IT Support",
    icon: MessageSquare,
    color: "text-indigo-500 bg-indigo-100",
  },
  {
    id: 8,
    name: "Human Resources",
    icon: Users,
    color: "text-teal-500 bg-teal-100",
  },
  {
    id: 9,
    name: "Customer Service",
    icon: MessageSquare,
    color: "text-orange-500 bg-orange-100",
  },
  {
    id: 10,
    name: "Legal",
    icon: Briefcase,
    color: "text-gray-500 bg-gray-100",
  },
  {
    id: 11,
    name: "Finance",
    icon: Banknote,
    color: "text-blue-600 bg-blue-100",
  },
  {
    id: 12,
    name: "Sales",
    icon: ShoppingCart,
    color: "text-rose-500 bg-rose-100",
  },
  {
    id: 13,
    name: "Data Science",
    icon: Database,
    color: "text-violet-500 bg-violet-100",
  },
  { id: 14, name: "Other", icon: Globe, color: "text-black bg-gray-200" },
]

const WorkSelection = () => {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Logo & App Name */}
      <div className="flex items-center space-x-2 mb-3">
        <Image
          src="/workwise-logo.png"
          alt="Workwise Logo"
          width={50}
          height={50}
        />
        <h1 className="text-2xl text-gray-900 font-bold font-codec">
          workwise
        </h1>
      </div>

      {/* Heading & Description */}
      <h2 className="text-2xl font-semibold text-gray-900">
        What kind of work do you do?
      </h2>
      <p className="text-gray-600 text-center mt-2 mb-6">
        This helps us suggest templates that help your team do their best work.
      </p>

      {/* Work Options (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl w-full">
        {workOptions.map((option) => (
          <motion.div
            key={option.id}
            onClick={() => setSelected(option.id)}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer flex items-center space-x-3 p-3 border rounded-lg shadow-sm w-full transition-all ${
              selected === option.id
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white hover:bg-gray-200 border-gray-300"
            }`}
          >
            <span className={`p-2 rounded-lg ${option.color}`}>
              <option.icon className="w-6 h-6" />
            </span>
            <span className="text-lg font-medium">{option.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Next Button */}
      <Button className="mt-6 bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg">
        Next
      </Button>
    </div>
  )
}

export default WorkSelection
