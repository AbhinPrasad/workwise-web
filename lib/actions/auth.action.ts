"use server"

import { cookies } from "next/headers"
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
  const CookieStore = await cookies()
  CookieStore.set("AUTH_USER_EMAIL", email, {
    maxAge: 60 * 60,
    secure: false,
    path: "/",
    sameSite: "lax",
  })
  const user = userCredentials.user
  const actionCodeSettings = {
    url: "http://localhost:3000/email-verification-success", // Redirect URL after verification
    handleCodeInApp: true, // If you want to handle it within your app
  }
  await sendEmailVerification(user, actionCodeSettings)
  redirect(`/verify-email?email=${email}`)
}

export const signInByEmail = async (formData: FormData) => {
  const email = formData.get("email") as string
  await sendSignInLinkToEmail(auth, email, actionCodeSettings)
}
