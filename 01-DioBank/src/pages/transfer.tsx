import { Header } from "../components/Header/header";
import { Navbar } from "../components/Navbar/navbar";
import { GetTransfer } from "../services/Transfer/get-transfer";
import { Footer } from "../components/Footer/footer";

import { FC } from "react";

export const Transfer: FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <GetTransfer />
      <Footer />
    </>
  );
};