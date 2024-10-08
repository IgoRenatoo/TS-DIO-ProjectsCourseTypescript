import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './Pages/home';
import { Account } from './Pages/account';
import { Transfer } from './Pages/transfer';
import { Support } from './Pages/support';
import { Login } from './Pages/login';

export function App() {
  return (
    <BrowserRouter basename="/TS-DIO-ProjectsCourseTypescript">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/account' element={<Account />}/>
        <Route path='/transfer' element={<Transfer />}/>
        <Route path='/support' element={<Support />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
};