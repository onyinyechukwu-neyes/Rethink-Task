import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(!open)} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
      {open ? (
        <div className="navbar">
          <ul className={open ? "nav-links active" : "nav-links"}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                About us
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default MobileNav;
