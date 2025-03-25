import Link from "next/link"

export default function AuthFooter({ isLogin }: { isLogin: boolean }) {
  return (
    <>
      {!isLogin && (
        <p className="text-sm text-center mt-4">
          Already have a <span className="font-codec font-bold">workwise</span>{" "}
          account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      )}

      {isLogin && (
        <div className="flex items-center justify-center mt-4 space-x-2 text-sm">
          <Link href="#" className="text-blue-600 hover:underline">
            Can't log in?
          </Link>
          <span className="text-gray-400">•</span>
          <Link href="/signup" className="text-blue-600 hover:underline">
            Create an account
          </Link>
        </div>
      )}
    </>
  )
}
