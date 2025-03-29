import OpenEmailApp from "@/components/ui/custom/buttons/VerificationBtn"

const EmailVerification = async ({
  searchParams,
}: {
  searchParams: { email: string }
}) => {
  const email = (await searchParams).email

  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-900">
        We've sent a verification link
      </h2>
      <p className="text-gray-600 mt-2">
        To complete your account setup, please check your email and click on the
        verification link sent to:
      </p>
      <p className="font-semibold mt-1 text-gray-700">
        {email ?? "your email address"}
      </p>
      <OpenEmailApp type="email" email={email} />
      <p className="mt-4 text-sm text-gray-600">
        Didn't receive an email?{" "}
        <span className="text-blue-600 cursor-pointer">Resend email</span>
      </p>
    </>
  )
}

export default EmailVerification
