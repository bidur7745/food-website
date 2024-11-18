import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import {Link, useNavigate} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");

  const{getTotalCartAmount, token, setToken} = useContext(StoreContext);
  const navigate = useNavigate();
  const logout =()=>{
    localStorage.removeItem("token")
  setToken(null); 
  // setShowLogin(true); 
  navigate("/");

  }

  return (
    <div className='navbar'>
     <Link to='/'>  <img src={assets.logo} alt="Logo" className="logo" /></Link> 
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#menu'  onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
        <a href='#footer' onClick={() => setMenu('contact-us')} className={menu === "contact-us" ? "active" : ""}>Contact-us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navbar-search-icon">
       <Link to='/cart'>  <img src={assets.basket_icon} alt="Basket Icon" /></Link> 
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>
        :<div className='navbar-profile'>
          <img src={assets.profile_icon}></img>
          <ul className="nav-profile-dropdown">
          <Link to='/cart'> <li>   <img  src={assets.bag_icon} alt="" /><p>Order</p></li> </Link>
            <hr/>
            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
          </ul>
          </div>}
      </div>
    </div>
  );
}

export default Navbar;
