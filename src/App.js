import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainSellerConsole from './Components/MainSellerConsole/MainSellerConsole';
import SellerDashboard from './Components/SellerDashboard/SellerDashboard';
import SalesAndOrder from './Components/SalesAndOrder/SalesAndOrder';
import Popular from './Components/Popular/Popular';
import MyStore from './Components/MyStore/MyStore';
import SellerWallet from './Components/SellerWallet/SellerWallet';
import SellerProfile from './Components/SellerProfile/SellerProfile';

function App() {
  return (
    <BrowserRouter>
      <MainSellerConsole>
        <Routes>
          <Route path="/" element={<SellerDashboard/>}/>
          <Route path="/seller-console/sales-and-order" element={<SalesAndOrder/>}/>
          <Route path="/seller-console/popular" element={<Popular/>}/>
          <Route path="/seller-console/my-store" element={<MyStore/>}/>
          <Route path="/seller-console/seller-wallet" element={<SellerWallet/>}/>
          <Route path="/seller-console/seller-profile" element={<SellerProfile/>}/>
        </Routes>
      </MainSellerConsole>
    </BrowserRouter>
  );
}

export default App;
