import { Header } from "../components/Header/header"
import { Navbar } from "../components/Navbar/navbar"
import { Login } from "../services/Login/login"
import { Footer } from "../components/Footer/footer"
import { FC } from "react"

export const AuthLogin: FC = () => {
  return (
  <>
    <Header />
    <Navbar />
    <Login />
    <Footer />
  </>
)} 