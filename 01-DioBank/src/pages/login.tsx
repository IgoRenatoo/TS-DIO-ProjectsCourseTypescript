import { Header } from "../components/Header/header"
import { Navbar } from "../components/Navbar/navbar"
import { Login } from "../services/Login/login"
import { Footer } from "../components/Footer/footer"

export const AuthLogin = () => {
  return (
  <>
    <Header />
    <Navbar />
    <Login />
    <Footer />
  </>
)} 