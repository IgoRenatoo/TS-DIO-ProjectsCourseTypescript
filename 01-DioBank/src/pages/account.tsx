import { Header } from "../components/Header/header"
import { Navbar } from "../components/Navbar/navbar"
import { GetData } from "../services/Datas/get-data-user-service"
import { Footer } from "../components/Footer/footer"

export const Account = () => {
  return (
  <>
    <Header />
    <Navbar />
    <GetData />
    <Footer />
  </>
)} 