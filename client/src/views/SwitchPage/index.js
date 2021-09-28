import React from 'react';
import { useSelector } from "react-redux";
import { Home, DashBoardBeta } from './../'

const SwitchPage = () => {
    const { isAuth } = useSelector((state) => state.auth);
    if(isAuth) {
        return(<DashBoardBeta />)
    } else {
        return(<Home />)
    } 
}

export default SwitchPage;