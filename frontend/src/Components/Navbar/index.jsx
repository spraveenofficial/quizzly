import "./style.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Hamburger from "../Hamburger/index";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Actions/user";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [deviceType, setDeviceType] = useState("desktop");
  useEffect(() => {
    updateDeviceType(window.innerWidth);
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      updateDeviceType(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        updateDeviceType(window.innerWidth);
      });
    };
  });
  const pushToHome = () => {
    navigate("/");
  };
  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };
  const [showNav, setNav] = useState(false);
  const hideNav = () => {
    setNav(false);
  };
  const updateDeviceType = (width) => {
    if (width >= 768) {
      setDeviceType("desktop");
      hideNav();
      return;
    }
    setDeviceType("mobile");
  };
  const navVariants = {
    hidden: { y: -10, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 1,
        type: "tween",
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <>
      <AnimatePresence>
        {true ? (
          <motion.nav
            initial="hidden"
            animate="show"
            variants={navVariants}
            exit="hidden"
            className={`${deviceType === "mobile" ? "mobile-nav" : ""}`}
          >
            {deviceType === "desktop" ? (
              <>
                <motion.div className="desktop-navbar">
                  <motion.div className="navheader">
                    <h1 onClick={pushToHome} className="logo pointer">
                      Quizzly
                    </h1>
                  </motion.div>
                  <motion.div className="navitems">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/leaderboard"}>Leader Board 🚀</Link>
                    {isAuthenticated ? (
                      <p>
                        <Link to={"/profile"}>{user.name}</Link>,{" "}
                        <span onClick={() => handleLogout()}>
                          {" "}
                          &nbsp; Logout?
                        </span>
                      </p>
                    ) : (
                      <Link to={"/login"}>Login</Link>
                    )}
                  </motion.div>
                </motion.div>
              </>
            ) : (
              <div className="mobile-menu">
                <h1 onClick={pushToHome} className="logo pointer">
                  Quizzly
                </h1>
                <Hamburger
                  onClick={() => {
                    setNav(!showNav);
                  }}
                  show={showNav}
                />
              </div>
            )}
          </motion.nav>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {showNav ? (
          <motion.div
            className="mobile-nav-container"
            initial={{
              y: "-100%",
            }}
            animate={{
              y: "0%",
            }}
            exit={{
              y: "-100%",
            }}
            transition={{
              type: "tween",
              ease: [0.87, 0.07, 0.37, 0.97],
              duration: 0.5,
            }}
          >
            <motion.div className="mobnavitems">
              <Link onClick={() => hideNav()} to={"/"}>
                Home
              </Link>
              <Link onClick={() => hideNav()} to={"/leaderboard"}>
                Leader Board 🚀
              </Link>
              {isAuthenticated ? (
                <p>
                  <Link onClick={() => hideNav()} to={"/profile"}>
                    {user.name}
                  </Link>
                  , <span onClick={() => handleLogout()}> &nbsp; Logout?</span>
                </p>
              ) : (
                <Link onClick={() => hideNav()} to={"/login"}>
                  Login
                </Link>
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
