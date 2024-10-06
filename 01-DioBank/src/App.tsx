import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Home } from './pages/home';
import { Account } from './pages/account';
import { Transfer } from './pages/transfer';
import { Support } from './pages/support';
import { AuthLogin } from './pages/login';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/account' element={<Account />}/>
        <Route path='/transfer' element={<Transfer />}/>
        <Route path='/support' element={<Support />}/>
        <Route path='/login' element={<AuthLogin />}/>
      </Routes>
    </BrowserRouter>
  );
}