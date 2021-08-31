import React from 'react';
import { useSelector } from "react-redux";
import { Portal, RegisterForm, Loggin } from './../'
const Nav = () => {
    const [values, setValues] = React.useState({
        portal: null,
    });
    const setPortal = (popUp) => {
        return () => {
          setValues((values) => ({ ...values, portal: popUp }));
        };
    };
    const { isAuth } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.auth);
    return(<header>
        {values.portal ==='login' && <Portal onClose={setPortal(null)}><Loggin/></Portal>}
        {values.portal ==='register' && <Portal onClose={setPortal(null)}><RegisterForm/></Portal>}
        {isAuth ? <button>Log Out</button> :
        <div>
            <button onClick={setPortal('login')}>Log In</button>
            <button onClick={setPortal('register')}>Register</button>
        </div>}
    </header>)
}
export default Nav;