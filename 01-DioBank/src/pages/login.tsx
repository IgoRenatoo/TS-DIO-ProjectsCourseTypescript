import { Header } from "../components/Header/header"
import { Navbar } from "../components/Navbar/navbar"
import { AuthLogin } from "../services/Login/login"
import { Footer } from "../components/Footer/footer"

import { FC } from "react"

export const Login: FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <AuthLogin />
      <Footer />
    </>
  )
};