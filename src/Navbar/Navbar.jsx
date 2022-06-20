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
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Carers</a>
        </div>
        <div className="nav-btn">
          <button>Request Invite</button>
        </div>
      </nav>
    </div>
  );
}
