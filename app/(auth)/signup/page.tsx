"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Signup = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md"
      >
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <Image
              src="/workwise-logo.png"
              alt="Workwise Logo"
              width={60}
              height={60}
              className="mr-2"
            />
            <h2 className="text-2xl font-bold font-codec text-gray-900">
              workwise
            </h2>
          </div>
          <p className="text-gray-600 mt-2 text-xs">Sign up to continue</p>
        </div>

        {/* Email Input */}
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Email Address
          </label>
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full"
          />
        </div>

        {/* Terms & Conditions */}
        <p className="text-xs text-gray-500 mt-3 text-center">
          By signing up, I accept the{" "}
          <span className="font-codec font-bold">workwise</span>{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            Terms of Service{" "}
          </Link>
          and acknowledge the{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>

        {/* Signup Button */}
        <Button className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700">
          Sign Up
        </Button>

        {/* Social Login */}
        <p className="text-sm text-gray-600 text-center mt-4">
          Or continue with:
        </p>
        <div className="mt-2 space-y-2">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center"
          >
            <Image
              src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/google-logo.5867462c.svg"
              alt="Google"
              width={20}
              height={20}
            />
            Google
          </Button>
          <Button
            variant="outline"
            className="w-full flex items-center justify-center"
          >
            <Image
              src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/microsoft-logo.c73d8dca.svg"
              alt="Microsoft"
              width={20}
              height={20}
            />
            Microsoft
          </Button>
          <Button
            variant="outline"
            className="w-full flex items-center justify-center"
          >
            <Image
              src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/apple-logo.54e0d711.svg"
              alt="Apple"
              width={20}
              height={20}
            />
            Apple
          </Button>
          <Button
            variant="outline"
            className="w-full flex items-center justify-center"
          >
            <Image
              src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/slack-logo.5d730c10.svg"
              alt="Slack"
              width={20}
              height={20}
            />
            Slack
          </Button>
        </div>

        {/* Already Have an Account */}
        <p className="text-sm text-center mt-4">
          Already have a <span className="font-codec font-bold">workwise</span>{" "}
          account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>

        {/* Divider */}
        <div className="border-t mt-6 pt-4 text-center text-xs text-gray-500">
          <div className="flex items-center justify-center">
            <Image
              src="/workwise-logo.png"
              alt="Workwise Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-lg font-bold font-codec">workwise</span>
          </div>
          <p className="mt-2">
            This site is protected by reCAPTCHA and the Google{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </Link>{" "}
            apply.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Signup
