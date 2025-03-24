"use client"

import { motion } from "framer-motion"
import { BsMicrosoft } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

const MainHero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-gradient-to-b  text-white min-h-screen">
      <motion.div
        className="max-w-2xl text-center lg:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-medium leading-tight text-black">
          Achieve More with <span className="font-bold">WorkWise</span>
        </h1>
        <p className="mt-4 text-lg font-normal text-gray-800">
          The ultimate project management tool to streamline planning and
          collaboration for every team.
        </p>
      </motion.div>

      {/* Right Side - Signup Form */}
      <motion.div
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md mt-10 lg:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Input
          placeholder="Enter your work email"
          className="mb-4 text-gray-900"
        />
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Sign Up
        </Button>
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <Button
          variant="outline"
          className="w-full flex items-center gap-2 mb-2 text-gray-900 hover:bg-gray-100"
        >
          <FcGoogle size={20} /> Continue with Google
        </Button>
        <Button
          variant="outline"
          className="w-full flex items-center gap-2 text-gray-900 hover:bg-gray-100"
        >
          <BsMicrosoft size={20} /> Continue with Microsoft
        </Button>
      </motion.div>
    </section>
  )
}

export default MainHero
