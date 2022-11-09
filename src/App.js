import './App.css';
import { BrowserRouter } from 'react-router-dom' 
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <LandingPage/>
    </BrowserRouter>
  );
}

export default App;
