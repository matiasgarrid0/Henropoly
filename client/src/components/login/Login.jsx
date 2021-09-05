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
   <div className="principal-login">
   <div className='body-form'>
     <form onSubmit={(e)=>handleSubmit(e)} className="form">
        {/* <label className="lbl-form">
          <span className="text-form">Username</span>
          </label>
        <input
          //  className="searchBar"
           type= 'text'
           name='username'
           value={input.username}
           onChange={(e)=>handleChange(e)} 
           placeholder='username'/>  */}
  
       <label className="lbl-form">
         <span className="text-form">Password</span>
       </label>
       <input
          //  className="searchBar"
           type= 'text'
           name='password'
           value={input.password}
           onChange={(e)=>handleChange(e)} 
           placeholder='password'/>
         {/* <button className='btn-enter' type="submit">enter</button>  */}
     </form>  
   
      

          </div>
          {/* <p>forgot your password?</p>

          <label  onClick={props.register}>You don't have an account, singn up</label> */}
     </div>
   
 )
}

export default Loggin 