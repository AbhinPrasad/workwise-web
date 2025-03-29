import { cookies } from "next/headers"

import RedirectLoginBtn from "@/components/ui/custom/buttons/VerificationBtn"

const EmailVerified = async () => {
  const CookieStore = await cookies()
  const email = CookieStore.get("AUTH_USER_EMAIL")?.value

  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-900">
        Email Verified Successfully!
      </h2>
      <p className="text-gray-600 mt-2">
        Your email has been successfully verified. You can now proceed to login.
      </p>

      <RedirectLoginBtn type="login" email={email} />
    </>
  )
}

export default EmailVerified
