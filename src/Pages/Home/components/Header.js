import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

const Header = () => {
  const user = localStorage.getItem("user");

  return (
    <div className="header">
      <nav className="nav">
        <div className="frame">
          <MobileNav />
          <div className="logo">
            <img src="images/logo-wo-subtitle.png" alt="" />
          </div>

          <ul className="group">
            <li className="text">
              <Link to="/">Home</Link>
            </li>
            <li className="text">
              <Link to="/services">Service</Link>
            </li>
            <li className="text">
              <Link to="/about">About us</Link>
            </li>
          </ul>
          {user?.username || user === null ? (
            <Link to="/login">
              <button className="btn">
                <img src="images/White.png" alt="" className="btnIcon" />
                <span className="btnText">Login</span>
              </button>
            </Link>
          ) : (
            <button
              className="btn"
              onClick={() => {
                localStorage.removeItem("user");
                window.location = "/login";
              }}
            >
              <img src="images/White.png" alt="" className="btnIcon" />
              <span className="btnText">LogOut</span>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
