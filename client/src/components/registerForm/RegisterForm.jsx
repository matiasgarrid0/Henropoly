import React, { useState} from 'react';
import { useDispatch} from 'react-redux';
import { register } from '../../redux/actions';




/* const expressions = {
   expressionStandar: /^[a-zA-Z0-9_-]+$/, // Letras, numeros, guion y guion_bajo
   usernameLong: /^.{4,25}$/, // 4 a 25 digitos.
   passwordLong: /^.{8,16}$/, // 4 a 16 digitos.
 }; */
//!/^[a-zA-Z0-9_-]+$/.test(input.username)
function validate(input) { 
   let errors = {};
      if( !input.mail || !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(input.mail)) {
        errors.mail= 'mail not valid';
      } 
      else if(!input.username || !/^.{4,25}$/.test(input.username) || !/^[a-zA-Z0-9_-]+$/.test(input.username)) {
        errors.username= 'username must be from 4 to 25 characters'
      }
      else if(!input.password || !/^.{8,16}$/.test(input.password)) {
         errors.password ='password must be from 8 to 16 characterers'
      }

   return errors
}

function RegisterForm (props) {
const dispatch = useDispatch();

const [input, setInput] = useState({
    username :'',
    password :'',
    mail:''
 });
 const [errors, setErrors] = useState({})

 function handleChange(e) { 
    setInput({...input, 
      [e.target.name]: e.target.value});

      setErrors(validate({...input,[e.target.name]: e.target.value}));
}  
function handleSubmit(e) {
    e.preventDefault()
    if(!errors.username && !errors.mail && !errors.password) {
     dispatch(register(input.username, input.mail, input.password))
     setInput({
       username:'',
       password:'',
       mail:''
     })
    } 
    else {
    alert("Fill all required fields")
    }
}
 return (
    <>
          <div className='dfgfg'>
          <form onSubmit={(e)=>handleSubmit(e)} >
              <label>Email *</label>
              <input
               className ='jhh'
               type= 'text'
			     name='mail'
			     value={input.mail}
				  onChange={(e)=>handleChange(e)} 
				placeholder='mail'
		    /> 
          {errors.mail && (<p className='bjjjbjb'>{errors.mail}</p>)}
              <label>UserName *</label>
              <input
                className ='hjhjgh'
                type= 'text'
			     name='username'
			     value={input.username}
				onChange={(e)=>handleChange(e)} 
			   placeholder='username'
		    /> 
           {errors.username && (<p className='b'>{errors.username}</p>)}

            <label>Password *</label>
              <input
                className ='hjhjgh'
                type= 'text'
			     name='password'
			     value={input.password}
				onChange={(e)=>handleChange(e)} 
			   placeholder='password'
		    /> 
          {errors.password && (<p className='b'>{errors.password}</p>)}
            <button className='fdf' type="submit">send</button>
          </form>  
        

          </div>
          
     </>
   
 )
}

export default RegisterForm