import Image from "next/image"
import Link from "next/link"

import AuthText from "@/components/auth-text"

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 bg-[url('/auth-bg.svg')] bg-cover bg-center">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md opacity-0 translate-y-5 animate-fade-in">
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
          <AuthText />
        </div>
        {children}
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
      </div>
    </div>
  )
}
