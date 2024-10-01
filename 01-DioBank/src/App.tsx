import { useState } from 'react'

import { Header } from "./components/Header/header";
import { Navebar } from "./components/Navebar/navebar";
import { Footer } from "./components/Footer/footer";
import { Login } from "./components/Main/login-main";

export function App() {
  const [value, setValue] = useState('')
  console.log(value)
  return (<>
    <Header />
    <Navebar />
    <Login />
    <Footer />
</>);
}