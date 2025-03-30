"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendSignInLinkToEmail,
  signInWithEmailAndPassword,
  type User,
} from "firebase/auth"

import { auth } from "@/config/firebase.config"

import { UserData } from "../types"

export const signUpByEmail = async (formData: FormData) => {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const userCredentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
  if (userCredentials.user) {
    const user = userCredentials.user
    await setCookie("AUTH_USER_EMAIL", email, 60 * 60)
    const userData: UserData = {
      email: user.email,
      uid: user.uid,
      password,
      refreshToken: user.refreshToken,
    }
    const insertUserInDb = await createUser(user)
    const actionCodeSettings = {
      url: "http://localhost:3000/email-verification-success", // Redirect URL after verification
      handleCodeInApp: true, // If you want to handle it within your app
    }
    await sendEmailVerification(user, actionCodeSettings)
    redirect(`/verify-email?email=${email}`)
  }
}

export const signInByEmail = async (formData: FormData) => {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const login = await signInWithEmailAndPassword(auth, email, password)
  if (login.user) {
    const user = login.user
    await createSession(user)
    redirect("/")
  }
}

export const signInByEmailLink = async (formData: FormData) => {
  const email = formData.get("email") as string
  // await sendSignInLinkToEmail(auth, email, actionCodeSettings)
}

export const createUser = async (
  user: UserData,
  isSocialSignIn: boolean = true
) => {
  // if socialSignIn, check whether the user exists in db by calling the get user by uid
  // if exists call the create session action else continue with the create user;
  const uid = user.uid
  const refreshToken = user.refreshToken
  delete user.refreshToken
  console.log("userData", user)

  // call the create user api
  // set custom claims (user uuid) from backend
  if (isSocialSignIn) {
    // generate new access token using the refresh token
  }
  // call the createSession action, pass the user and userData from api
}

export const createSession = async (user: User, userData = null) => {
  const uid = user.uid
  await setCookie("REFRESH_TOKEN", user.refreshToken)
  const authToken = user.getIdToken()
  await setCookie("ACCESS_TOKEN", authToken, 60 * 60)
  let authUser = userData
  if (!authUser) {
    //retrieve the user details from API using FIREBASE_UID
    // authUser = GET PROFILE API
  }
  // await setCookie("AUTH_USER", JSON.stringify(authUser))
  redirect("/")
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
