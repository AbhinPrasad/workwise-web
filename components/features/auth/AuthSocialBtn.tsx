import Image from "next/image"
import { socialProviders } from "@/constants/providers"

import { createUser } from "@/lib/actions/auth.action"
import { signInWithGoogle } from "@/lib/firebase/auth"
import { UserData } from "@/lib/types"

import { Button } from "../../ui/button"

export default function SocialSignInBtns() {
  const handleAuth = async (platform: string) => {
    let user

    switch (platform) {
      case "google":
        user = await signInWithGoogle()
        break
      case "microsoft":
        user = await signInWithGoogle()
        break
      default:
        user = await signInWithGoogle()
        break
    }

    if (user) {
      const data: UserData = {
        email: user.email,
        uid: user.uid,
        userName: user.displayName ?? null,
        phone: user.phoneNumber ?? null,
        profileImgUrl: user.photoURL ?? null,
        refreshToken: user.refreshToken,
      }
      await createUser(data)
    }
  }

  return (
    <div className="mt-2 space-y-2">
      {socialProviders.map(({ id, name, logo }) => (
        <Button
          key={id}
          variant="outline"
          className="w-full flex items-center justify-center gap-2 hover:cursor-pointer hover:bg-gray-100"
          onClick={() => handleAuth(id)}
        >
          <Image src={logo} alt={name} width={20} height={20} />
          {name}
        </Button>
      ))}
    </div>
  )
}
