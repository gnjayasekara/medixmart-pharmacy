"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

type User = {
  username: string
}

type AuthContextType = {
  user: User | null
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check if admin is logged in on initial load
    const storedUser = localStorage.getItem("adminUser")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (username: string, password: string) => {
    // In a real app, validate credentials against a backend
    if (username === "admin" && password === "password") {
      const user = { username }
      setUser(user)
      localStorage.setItem("adminUser", JSON.stringify(user))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("adminUser")
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

