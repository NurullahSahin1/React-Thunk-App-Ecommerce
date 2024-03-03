import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const store = useSelector((store) => store.basket);

  const total = store.basket.reduce((total, item) => total + item.amount, 0);
  return (
    <header className="navbar bg-body-tertiary position-sticky top-0 z-3 shadow shadow-lg">
      <div className="container-fluid">
        <Link to={"/"} className="d-flex gap-3 align-items-center ">
          <img src="react.svg" alt="logo" />
          <span className="text-decoration-none center align-items-center logo">
            Redux Thunk
          </span>
        </Link>

        <div className="d-flex gap-3">
          <NavLink to={"/"}>ANASAYFA</NavLink>
          <NavLink to={"/sepet"}>
            <span>Sepet</span>
            <span className="badge bg-danger mx-2">{total}</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
