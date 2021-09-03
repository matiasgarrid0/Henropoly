import React from 'react';
import { useSelector } from "react-redux";


const DashBoard = () => {
    const { user } = useSelector((state) => state.auth);

    return(
    <div>


        <h1> hola denuevo: {user.username}</h1>
    
    </div>)
}
export default DashBoard;