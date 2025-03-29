"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
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
  await setCookie("AUTH_USER_EMAIL", email, 60 * 60)
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
  const password = formData.get("password") as string
  const login = await signInWithEmailAndPassword(auth, email, password)
  if (login.user) {
    const userData = login.user
    const authToken = await userData.getIdToken()
    await setCookie("ACCESS_TOKEN", authToken, 60 * 60)
    await setCookie("REFRESH_TOKEN", userData.refreshToken)
    const user = { email: userData.email, uid: userData.uid }
    await setCookie("AUTH_USER", JSON.stringify(user))
  }
  redirect("/")
}

export const signInByEmailLink = async (formData: FormData) => {
  const email = formData.get("email") as string
  await sendSignInLinkToEmail(auth, email, actionCodeSettings)
}

const setCookie = async (key: string, value: any, maxAge: any = null) => {
  const CookieStore = await cookies()
  CookieStore.set(key, value, {
    secure: false,
    path: "/",
    sameSite: "lax",
    maxAge,
  })
}
