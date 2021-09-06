import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions';

const LogOut = () => {
    const dispatch = useDispatch();
    const closeSession =()=>{
        dispatch(logOut());
    }
    return(<button className='button-one nav-btn' onClick={closeSession} >Cerrar Sesión</button>)
}
export default LogOut;