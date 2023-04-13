import React from "react";
import profile from "../assets/images/profile.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__title d-f ai-c jc-sb">
        <h1>
          <span>Welcome Vikas 👋</span> <br />
          Let's relax and watch a movie!
        </h1>
        <img src={profile} alt="" className="logo" />
      </div>
      <div className="header__search d-f ai-c">
        <ion-icon name="search-outline"></ion-icon>
        <input type="text" placeholder="Search" />
      </div>
    </header>
  );
};

export default Header;
