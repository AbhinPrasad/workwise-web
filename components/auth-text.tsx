"use client"

import { usePathname } from "next/navigation"

export default function AuthText() {
  const pathname = usePathname()
  const isLogin = pathname.includes("login")

  return (
    <p className="text-gray-600 mt-2 text-xs">
      {isLogin ? "Login" : "Sign up"} to continue
    </p>
  )
}
