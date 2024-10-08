import { Header } from "../components/Header/header";
import { Navbar } from "../components/Navbar/navbar";
import { GetHome } from "../services/Home/get-home"
import { Footer } from "../components/Footer/footer";

import { FC } from "react";

export const Home: FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <GetHome />
      <Footer />
    </>
  )
};