"use client"

import { useRouter } from "next/navigation"

import { Button } from "../../button"

type BtnType = "email" | "login"

export default function OpenEmailApp({
  type,
  email,
}: {
  type: BtnType
  email?: string
}) {
  const router = useRouter()

  const handleClick = () => {
    if (type === "email") {
      window.location.href = "mailto:"
    } else {
      const loginUrl = email
        ? `/login?email=${encodeURIComponent(email)}`
        : "/login"
      router.push(loginUrl)
    }
  }

  return (
    <Button
      className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 hover:cursor-pointer"
      onClick={handleClick}
    >
      {type === "email" ? "Open Email App" : "Go to Login"}
    </Button>
  )
}
