import Mobile from "../../images/image-mockups.png";
import OnlineBanking from "../../images/logo/icon-online.svg";
import SimpleBudget from "../../images/logo/icon-budgeting.svg";
import FastOnBoarding from "../../images/logo/icon-onboarding.svg";
import OpenApi from "../../images/logo/icon-api.svg";
import currency from "../../images/image-currency.jpg";
import restaurant from "../../images/image-restaurant.jpg";
import plane from "../../images/image-plane.jpg";
import confetti from "../../images/image-confetti.jpg";
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
          <img className="mobile-img" src={Mobile} alt="Mobile" />
        </div>
      </div>
      <div className="two">
        <div className="two-top">
          <h1>Why choose EasyBank?</h1>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before .
          </p>
        </div>
        <div className="two-bottom">
          <div>
            {" "}
            <img src={OnlineBanking} alt="online-banking" />
            <h2>Online Banking</h2>
            <p>
              Our modern wen and mobile applications allow you to keep track of
              your finances wherever you are in the world.{" "}
            </p>{" "}
          </div>
          <div>
            <img src={SimpleBudget} alt="simple-budgeting" />
            <h2>Simple Budgeting</h2>
            <p>
              See exactly where your money goes each month. Receive
              notifications when your're close to hitting your limits.
            </p>
          </div>
          <div>
            <img src={FastOnBoarding} alt="fast-onboarding" />
            <h2>Fast Onboarding</h2>
            <p>
              We don't do branches. Open your account in a minute online and
              start taking your finances right away.
            </p>
          </div>
          <div>
            <img src={OpenApi} alt="open-api" />
            <h2>Open Api</h2>
            <p>
              Manage your savings, investments, pensions, and much more from one
              account. Tracking has never been easier.
            </p>
          </div>
        </div>
      </div>
      <h1 className="last-article">Last Article</h1>
      <div className="three">
        <div>
          <img src={currency} alt="" />
          <p>By Claire Robinson</p>
          <a href="#">Receive money in any currency with no fees</a>
          <p>
            The world is getting smaller and we're becoming more mobile. So why
            should you be forced to only receive money in a single...
          </p>
        </div>
        <div>
          <img src={restaurant} alt="" />
          <p></p>
          <a href="#"></a>
          <p></p>
        </div>
        <div>
          <img src={plane} alt="" />
          <p></p>
          <a href="#"></a>
          <p></p>
        </div>
        <div>
          <img src={confetti} alt="" />
          <p></p>
          <a href="#"></a>
          <p></p>
        </div>
      </div>
    </div>
  );
}
