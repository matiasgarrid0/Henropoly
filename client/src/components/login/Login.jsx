import './Login.css'
import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { login }  from '../../redux/actions'


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
    console.log('dfjdfjfjhffhjfdhjfjhfjhfdhjfdhjfdhjdfhjdf')
    dispatch(login(input.username,input.password))
}
return (
  <div className="container-login">
    <div className='box-register'>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="username">
        <label >Username: </label>
        <input
            className="form"
            type= 'text'
            name='username'
            value={input.username}
            onChange={(e)=>handleChange(e)} 
            placeholder='username'/>
        </div>
        <div className="password">
        <label>Password: </label>
        <input
            className="form"
            type= 'text'
            name='password'
            value={input.password}
            onChange={(e)=>handleChange(e)} 
            placeholder='password'/>
        </div>
        <button className='btn-enter' type="submit">enter</button> 
    </form>  
         </div>
         <div className="down-card">
            <p>forgot your password?</p>
            <label className="dont-have" onClick={props.register}>You don't have an account, singn up</label>
         </div>
    </div>
  
)
}

export default Loggin 