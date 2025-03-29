import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp"

export default function OtpInput() {
  return (
    <div className="flex justify-center mt-4 space-x-2">
      <InputOTP maxLength={6} className="flex justify-center space-x-4 mt-4">
        {[...Array(6)].map((_, index) => (
          <InputOTPSlot
            key={index}
            index={index}
            className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </InputOTP>
    </div>
  )
}
