
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//import { register }  from '../../redux/actions'
//import { Link, useHistory } from 'react-router-dom';

function Loggin () {
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
    
}
 return (
    <>
          <div className='dfgfg'>
          <form onSubmit={(e)=>handleSubmit(e)} >
         
              <label>Username</label>
              <input
                 className =''
                 type= 'text'
			     name='username'
			     value={input.username}
				  onChange={(e)=>handleChange(e)} 
				placeholder='username'
		    /> 
         
              <label>Password</label>
              <input
                 className =''
                 type= 'text'
			     name='password'
			     value={input.password}
				onChange={(e)=>handleChange(e)} 
			   placeholder='password'
		    /> 
          </form>  
          <button className='' type="submit">enter</button>

          </div>
          {/* LINKS? A PORTALES */}
          <p>forgot your password?</p>

          <p>You don't have an account, singn up</p>
     </>
   
 )
}

export default Loggin 