
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
    dispatch(login(input.username,input.password))
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
           <button className='' type="submit">enter</button>
          </form>  
      

          </div>
          <p>forgot your password?</p>

          <label  onClick={props.register}>You don't have an account, singn up</label>
     </>
   
 )
}

export default Loggin 