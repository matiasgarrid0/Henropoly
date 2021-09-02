import './Nav.css';
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
    
    return(
    <div>
        <div className='principal'>
            <h1 className='logo'>HENROPOLY</h1>
        {values.portal ==='login' && <Portal onClose={setPortal(null)}><Loggin/></Portal>}
        {values.portal ==='register' && <Portal onClose={setPortal(null)}><RegisterForm/></Portal>}
        {isAuth ? <button className='logout'>Log Out</button> :
        <div className="btn-direction">
            <button className='login btn btn-verde' onClick={setPortal('login')}>Log In</button>
            <button className='register btn btn-verde' onClick={setPortal('register')}>Register</button>
        </div>}
        </div>
    </div>
    )
}
export default Nav;