import "./Nav.css";
import LogoNav from '../../image/logo-nav.png'
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
         <Link to='/'><img className="logo-nav" src={LogoNav} alt="logo" /></Link>
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
                <Link to='/ViewBoard'><button  className="button-one nav-btn">Tablero</button></Link> <LogOut />
              </>
            ) : (
              <>
                <button
                  className="button-one nav-btn"
                  onClick={setPortal("login")}
                >
                  Iniciar Sesión
                </button>
                <button
                  className="button-one nav-btn"
                  onClick={setPortal("register")}
                >
                  Registrarse
                </button>
              </>
            )}
          </div>
        </div>
        <div></div>
      </header>
    </>
  );
};
export default Nav;
