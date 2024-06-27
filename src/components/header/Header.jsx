import React from "react";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import "./Header.scss";

function Header() {
  return (
    <header className="header header__container">
      <div className="header__left">
        <div className="header__language">EN ▾</div>
        <div className="header__currency">USD ▾</div>
      </div>
      <div className="header__right">
        <div className="header__icons">
          <div className="header__icon">
            <FaUser />
          </div>
          <div className="header__icon">
            <FaHeart />
          </div>
          <div className="header__icon header__cart">
            <FaShoppingCart />
            <span className="header__cart-badge">2</span>
          </div>
        </div>
        <div className="header__items">Items $0.00</div>
      </div>
    </header>
  );
}

export default Header;