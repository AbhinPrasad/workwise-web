import url from "@/constants/url-constants"

import { UserData } from "@/lib/types"

import api from "../api"

export const createUser = async (data: UserData) => {
  try {
    const response = await api.post(url.users, data)
    return response && response?.data
  } catch (err) {
    console.log("create-user-err", err)
    return err
  }
}
