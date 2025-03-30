"use client"

import { useEffect, useState } from "react"

import { signInByEmail, signUpByEmail } from "@/lib/actions/auth.action"

import { Button } from "../../ui/button"
import WtoolTip from "../../ui/custom/WToolTip"
import { Input } from "../../ui/input"
import { Label } from "../../ui/label"
import AuthFooter from "./AuthFooter"
import SocialSignInBtns from "./AuthSocialBtn"
import TermsAndConditions from "./AuthTerms"

const AuthForm = ({
  isLogin,
  userEmail,
}: {
  isLogin: boolean
  userEmail?: string
}) => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  useEffect(() => {
    if (isLogin && userEmail) {
      setEmail(userEmail)
    }
  }, [isLogin, userEmail])

  return (
    <>
      <form action={isLogin ? signInByEmail : signUpByEmail}>
        <div className="mt-4">
          <Label className="block text-gray-700 text-sm font-medium mb-1">
            Email Address
          </Label>
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <Label className="block text-gray-700 text-sm font-medium mb-1">
            Password
          </Label>
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
            className="w-full"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {!isLogin && <TermsAndConditions />}

        {isLogin && (
          <div className="flex items-center mt-3 space-x-2">
            <Input type="checkbox" id="rememberMe" className="h-4 w-4" />
            <Label htmlFor="rememberMe" className="text-sm text-gray-700">
              Remember me
            </Label>
            <WtoolTip />
          </div>
        )}

        <Button
          type="submit"
          className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700 hover:cursor-pointer"
        >
          {isLogin ? "Continue" : "Sign Up"}
        </Button>
      </form>

      <p className="text-sm text-gray-600 text-center mt-4">
        Or continue with:
      </p>
      <SocialSignInBtns />

      <AuthFooter isLogin={isLogin} />
    </>
  )
}

export default AuthForm
