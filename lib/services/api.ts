"server-only"

import { cookies } from "next/headers"
import axios from "axios"

// Create base axios instance
const api = axios.create({
  //   baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:your-port",
  baseURL: "http://localhost:8080/workwise/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
})

// Request interceptor
api.interceptors.request.use(
  async (config) => {
    const CookieStore = await cookies()
    const token = CookieStore.get("ACCESS_TOKEN")?.value ?? null

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors (401, 403, etc.)
    console.log("api-err", error)
    if (error.response?.status === 401) {
      // Handle unauthorized
    }

    return Promise.reject(error)
  }
)

export default api
