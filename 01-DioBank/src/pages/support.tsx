import { Header } from "../components/Header/header";
import { Navbar } from "../components/Navbar/navbar";
import { GetSupport } from "../services/Support/get-support";
import { Footer } from "../components/Footer/footer";

import { FC } from "react";

export const Support: FC = () => {
  return (
    <>
      <Header />
      <Navbar />      
      <GetSupport />      
      <Footer />
    </>
  );
};
