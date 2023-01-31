import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import "./header.css";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useSelector } from "react-redux";
import useAuth from "../../custom hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
  {
    path: "login",
    display: "Login",
  },
  {
    path: "signup",
    display: "Signup",
  },
];

const nav__login__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/shop",
    display: "Shop",
  },
  {
    path: "/cart",
    display: "Cart",
  },
];

const Header = () => {
  const profileActionRef = useRef(null);
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  // const { currentUser } = useAuth();
  // console.log(currentUser);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList.add("stick__header");
      } else {
        headerRef.current.classList.remove("stick__header");
      }
    });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/home");
        toast.success("Logged out", { position: "bottom-center" });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const menuToggle = () => {
    return menuRef.current.classList.toggle("active__menu");
  };

  useEffect(() => {
    stickyHeader();
    return () => window.removeEventListener("scroll", stickyHeader);
  }, []);

  return (
    <header ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                      to={item.path}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon" onClick={() => navigate("/cart")}>
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.3 }}
                  src={userIcon}
                  alt=""
                />
              </div>
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
