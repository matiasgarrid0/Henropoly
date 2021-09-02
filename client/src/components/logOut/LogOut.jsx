import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions';

const LogOut = () => {
    const dispatch = useDispatch();
    const closeSession =()=>{
        dispatch(logOut());
    }
    return(<button onClick={closeSession} >Log Out</button>)
}
export default LogOut;