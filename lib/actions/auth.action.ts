"use server"

import { redirect } from "next/navigation"
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendSignInLinkToEmail,
} from "firebase/auth"

import { actionCodeSettings, auth } from "@/config/firebase.config"

export const signUpByEmail = async (formData: FormData) => {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const userCredentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
  const user = userCredentials.user
  await sendEmailVerification(user)
  redirect(`/verify-email?email=${email}`)
}

export const signInByEmail = async (formData: FormData) => {
  const email = formData.get("email") as string
  await sendSignInLinkToEmail(auth, email, actionCodeSettings)
}
