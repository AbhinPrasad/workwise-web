import Link from "next/link"

export default function TermsAndConditions() {
  return (
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
  )
}
