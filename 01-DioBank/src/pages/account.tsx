import { Header } from "../components/Header/header"
import { Navbar } from "../components/Navbar/navbar"
import { GetData } from "../services/Datas/get-data-user-service"
import { Footer } from "../components/Footer/footer"
import { FC } from "react"

export const Account: FC = () => {
  return (
  <>
    <Header />
    <Navbar />
    <GetData />
    <Footer />
  </>
)} 