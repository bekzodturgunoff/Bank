import Logo from "../../images/logo/logo.svg";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <div className="nav-log">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="nav-links">
          <span>
            <a href="#">Home</a>
          </span>
          <span>
            <a href="#">About</a>
          </span>
          <span>
            {" "}
            <a href="#">Contact</a>
          </span>
          <span>
            <a href="#">Blog</a>
          </span>
          <span>
            {" "}
            <a href="#">Carers</a>
          </span>
        </div>
        <div className="nav-btn">
          <button>Request Invite</button>
        </div>
      </nav>
    </div>
  );
}
