import { Header } from "../components/Header/header"
import { Navbar } from "../components/Navbar/navbar"
import { GetAccount } from "../services/Account/get-account-user-service"
import { Footer } from "../components/Footer/footer"

import { FC } from "react"

export const Account: FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <GetAccount />
      <Footer />
    </>
  )
};