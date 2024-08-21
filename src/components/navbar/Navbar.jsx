import { useState } from "react";
import "./navbar.scss";
import { userData } from "../../lib/dummyData";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <nav className="nav">
      <div className="left">
        <a href="/" className="logo">
          <img src="./logo.png" alt="" />
          <span>LamEstate</span>
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src={userData.img} alt="" />
            <span>{userData.name}</span>
            <Link to="/profile" className="profile">
              Profile
              <div className="notification">3</div>
            </Link>
          </div>
        ) : (
          <>
            <a href="">Sign in</a>
            <a href="" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={() => setOpen((pre) => !pre)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="">Sign up</a>
          <a href="">Sign in</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
