import React from 'react';
import { useSelector } from "react-redux";

const DashBoard = () => {
    const { user } = useSelector((state) => state.auth);
    return(<div> hola denuevo: {user.username}
    </div>)
}
export default DashBoard;