import './Nav.css';
import React from 'react';
import { useSelector } from "react-redux";
import { Portal, RegisterForm, Loggin, LogOut } from './../'

const Nav = () => {
   const { isAuth } = useSelector((state) => state.auth);
    const [values, setValues] = React.useState({
        portal: null,
    });
    const setPortal = (popUp) => {
        return () => {
          setValues((values) => ({ ...values, portal: popUp }));
        };
    };
    
    return(
    <div>
        <div className='principal'>
            <h1 className='logo'>HENROPOLY</h1>
        {!isAuth && values.portal ==='login' && <Portal onClose={setPortal(null)}><Loggin register ={setPortal('register')} /></Portal>}
        {!isAuth && values.portal ==='register' && <Portal onClose={setPortal(null)}><RegisterForm /></Portal>}
        {isAuth ? <LogOut /> :
        <div className="btn-direction">
            <button className='login btn btn-verde' onClick={setPortal('login')}>Log In</button>
            <button className='register btn btn-verde' onClick={setPortal('register')}>Register</button>
        </div>}
        </div>
    </div>
    )
}
export default Nav;

 /* 
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
     */


 /*    return(<header>
        <div className='principal'>
            <h1 className='logo'>HENROPOLY</h1>
        {!isAuth && values.portal ==='login' && <Portal onClose={setPortal(null)}><Loggin register ={setPortal('register')} /></Portal>}
        {!isAuth && values.portal ==='register' && <Portal onClose={setPortal(null)}><RegisterForm /></Portal>}
        {isAuth ? <LogOut/> :
        <div>
            <button className='login btn btn-verde' onClick={setPortal('login')}>Log In</button>
            <button className='register btn btn-verde' onClick={setPortal('register')}>Register</button>
        </div>}
        </div>
    </header>)
} */