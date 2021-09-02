import React from 'react';
import { useSelector } from "react-redux";
import { Home, DashBoard } from './../'
const SwitchPage = () => {
    const { isAuth } = useSelector((state) => state.auth);
    if(isAuth) {
        return(<DashBoard />)
    } else {
        return(<Home />)
    } 
}
export default SwitchPage;