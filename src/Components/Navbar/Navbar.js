import React, { useEffect, useState } from 'react'
import noonHut from '../Images/Noon Hut.png';
import { Link } from 'react-router-dom'
import SignUp from '../SignUp/SignUp'
import Login from "../Login/Login"
import "./Navbar.css"
import ResetPassword from '../Login/ResetPassword';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Firebase';

export default function Navbar({setShowLandingPage, showSidebar, setShowSidebar}) {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [LoggedInBuyer,  setLoggedInBuyer] = useState();

  const openSidebar = () => {
    setShowSidebar((prevState) => !prevState);
    setShowLandingPage((prevState) => !prevState);

    if (document.body.style.overflow === "hidden"){
      document.body.style.overflow = "scroll";
    }
    else{
      document.body.style.overflow = "hidden";
    }
  }

  const openLandingPage = () => {
    setShowLandingPage(true);
    setShowSidebar(false);
    document.body.style.overflow = "scroll";
  }

  const openLogin = () => {
    setShowLogin(true);
    document.body.style.overflow = "hidden";

    if (setShowSidebar)
    {
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentBuyer) => {
      setLoggedInBuyer(currentBuyer);
    });
  })
  
  return (
    <>
      <nav className="navbar">
          <div className='left' id={LoggedInBuyer ? "left" : ""}>
              <button onClick={openSidebar}><i className="fa-solid fa-bars"></i></button>
              <Link onClick={openLandingPage}><img src={noonHut} alt="" className='logo-of-noonhut-navbar'/></Link>
          </div>

          <div className="right">
              {LoggedInBuyer ? "" : <button onClick={openLogin}>Log in</button>}
              <button>
                <i className="fa-solid fa-cart-shopping cart-icon-of-navbar"></i>
                <span>0</span>
              </button>
          </div>

          <div>
            {showLogin && <Login showSidebar={showSidebar} setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} setShowResetPassword={setShowResetPassword} setLoggedInBuyer={setLoggedInBuyer}/>}
            {showSignUp && <SignUp showSidebar={showSidebar} setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} setLoggedInBuyer={setLoggedInBuyer}/>}
            {showResetPassword && <ResetPassword showSidebar={showSidebar} setShowResetPassword={setShowResetPassword} setShowSignUp={setShowSignUp} setShowLogin={setShowLogin}/>}
          </div>
      </nav> 
    </>
  )
}
