import React from "react"
import { useAuthStatus } from "../hooks/useAuthStatus"
import { Profile } from "../pages/Profile"
import { SignIn } from "../pages/SignIn"
import { Spinner } from "./Spinner"

export const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus()

  if (checkingStatus) {
    return <Spinner />
  }

  return loggedIn ? <Profile /> : <SignIn />
}
