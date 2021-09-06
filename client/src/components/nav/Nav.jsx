import "./Nav.css";
import Logo from "../../image/Henropoly.png";
import React from "react";
import { useSelector } from "react-redux";
import { Portal, RegisterForm, Loggin, LogOut, Background3D } from "./../";
import { Link } from "react-router-dom";

const Nav = () => {
  const [values, setValues] = React.useState({
    portal: null,
  });
  const setPortal = (popUp) => {
    return () => {
      setValues((values) => ({ ...values, portal: popUp }));
    };
  };
  const { isAuth, user } = useSelector((state) => state.auth);
  return (
    <>
      <Background3D />
      <header className="nav-body no-select">
        {!isAuth && values.portal === "login" && (
          <Portal onClose={setPortal(null)}>
            <Loggin register={setPortal("register")} />
          </Portal>
        )}
        {!isAuth && values.portal === "register" && (
          <Portal onClose={setPortal(null)}>
            <RegisterForm />
          </Portal>
        )}
        <div className="nav-container">
          <div>
            <img className="logo-nav" src={Logo} alt="logo" />
          </div>
          {isAuth && (
            <div>
              <span className="nav-text-user">
                Bienvenido {user.username} :)
              </span>
            </div>
          )}
          <div>
            {isAuth ? (
              <>
                <LogOut />
              </>
            ) : (
              <>
                <button
                  className="button-one nav-btn"
                  onClick={setPortal("login")}
                >
                  Log In
                </button>
                <button
                  className="button-one nav-btn"
                  onClick={setPortal("register")}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
        <div></div>
      </header>
      <div className="nav-space"></div>
    </>
  );
};
export default Nav;
