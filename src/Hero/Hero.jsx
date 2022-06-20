import HeroImg from "../../images/bg-intro-desktop.svg";
import Mobile from "../../images/image-mockups.png";
import "./Hero.css";
export default function Hero() {
  return (
    <div className="hero">
      <div className="one">
        <div className="one-text one-left">
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing and much
            more.
          </p>
          <button>Request Invite</button>
        </div>
        <div className="one-img one-right">
          <img src={HeroImg} alt="Hero-img" />
          <img src={Mobile} alt="Mobile" />
        </div>
      </div>
      <div className="two"></div>
      <div className="three"></div>
    </div>
  );
}
