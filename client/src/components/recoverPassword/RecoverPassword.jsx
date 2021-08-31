
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { register }  from '../../redux/actions'
//import { Link, useHistory } from 'react-router-dom';

function RecoverPassword() {
const dispatch = useDispatch();

const [input, setInput] = useState('');

function handleChange(e){
    e.preventDefault()
    setInput(e.target.value)
   }
  function  handleSubmit(e) {
    e.preventDefault();
    setInput('')
  } 

 return (
    <>
          <div className='dfgfg'>
          <form onSubmit={(e)=>handleSubmit(e)} >
         
              <label>Email</label>
              <input
                 className ='jhh'
                 type= 'text'
			     name='username'
			     value={input}
				  onChange={(e)=>handleChange(e)} 
				placeholder='username'
		    />
          </form>  
          <button className='fdf' type="submit">send</button>

          </div>
          
     </>
   
 )
}