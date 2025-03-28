import Image from "next/image"

import AuthFooter from "./auth-footer"
import TermsAndConditions from "./auth-terms"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import WtoolTip from "./w-tooltip"

const AuthForm = ({ isLogin }: { isLogin: boolean }) => {
  return (
    <form>
      <div className="mt-4">
        <Label className="block text-gray-700 text-sm font-medium mb-1">
          Email Address
        </Label>
        <Input type="email" placeholder="Enter your email" className="w-full" />
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

      <Button className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700">
        {isLogin ? "Continue" : "Sign Up"}
      </Button>

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

      <AuthFooter isLogin={isLogin} />
    </form>
  )
}

export default AuthForm
