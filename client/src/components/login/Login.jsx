import './Login.css'
import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { login }  from '../../redux/actions'
import LogoBox from '../../image/logo-home.png'


function Loggin (props) {
const dispatch = useDispatch();

const [input, setInput] = useState({
    username :'',
    password :''
 });
 function handleChange(e) { 
    setInput({...input, 
      [e.target.name]: e.target.value});
}  
function handleSubmit(e) {
    e.preventDefault()
    dispatch(login(input.username,input.password))
}
return (
  <div className="container-login">
    <div className='box-register'>
    <img className="home-img" src={LogoBox} alt="logo-box" />
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="username">
        <label >Usuario: </label>
        <input
            className="form"
            type= 'text'
            name='username'
            value={input.username}
            onChange={(e)=>handleChange(e)} 
            placeholder='usuario'/>
        </div>
        <div className="password">
        <label>Clave: </label>
        <input
            className="form"
            type= 'password'
            name='password'
            value={input.password}
            onChange={(e)=>handleChange(e)} 
            placeholder='clave'/>
        </div>
        <button className='btn-enter' type="submit">entrar</button> 
    </form>  
         </div>
         <div className="down-card">
            <p>Olvidaste tu clave?</p>
            <label className="dont-have" onClick={props.register}>No tienes una cuenta? Regístrate!</label>
         </div>
    </div>
  
)
}

export default Loggin 