import Image from "next/image"

export default async function VerificationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-100">
      <Image
        src="/otp-left-bg.svg"
        alt="Background Left"
        width={10}
        height={10}
        className="absolute left-0 bottom-0 w-1/3 max-w-xs"
      />
      <Image
        src="/otp-right-bg.svg"
        alt="Background Right"
        className="absolute right-0 bottom-0 w-1/3 max-w-xs"
        width={10}
        height={10}
      />

      <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full text-center">
        <div className="flex items-center justify-center mb-4">
          <Image
            src="/workwise-logo.png"
            alt="App Logo"
            width={50}
            height={50}
          />
          <span className="text-xl font-bold font-codec text-gray-900 ml-2">
            workwise
          </span>
        </div>
        {children}
        <div className="mt-4 border-t border-gray-300"></div>
        <div className="flex items-center justify-center mt-4">
          <Image
            src="/workwise-logo.png"
            alt="App Logo"
            width={40}
            height={40}
          />
          <span className="text-lg font-bold font-codec text-gray-500 ml-2">
            workwise
          </span>
        </div>
      </div>
    </div>
  )
}
