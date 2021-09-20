import React, { useState} from 'react';
import { useDispatch} from 'react-redux';
import { register } from '../../redux/actions';
import LogoBox from '../../image/logo-home.png'
import './RegisterForm.css'




/* const expressions = {
   expressionStandar: /^[a-zA-Z0-9_-]+$/, // Letras, numeros, guion y guion_bajo
   usernameLong: /^.{4,25}$/, // 4 a 25 digitos.
   passwordLong: /^.{8,16}$/, // 4 a 16 digitos.
 }; */
//!/^[a-zA-Z0-9_-]+$/.test(input.username)
function validate(input) { 
   let errors = {};
      if( !input.email || !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(input.email)) {
        errors.email= 'email inválido';
      } 
      else if(!input.username || !/^.{4,25}$/.test(input.username) || !/^[a-zA-Z0-9_-]+$/.test(input.username)) {
        errors.username= 'el usuario debe contener entre 4 y 25 caracteres'
      }
      else if(!input.password || !/^.{8,16}$/.test(input.password)) {
         errors.password ='la clave debe contener entre 8 y 16 caracteres'
      }

   return errors
}

function RegisterForm (props) {
const dispatch = useDispatch();

const [input, setInput] = useState({
    username :'',
    password :'',
    email:''
 });
 const [errors, setErrors] = useState({})

 function handleChange(e) { 
    setInput({...input, 
      [e.target.name]: e.target.value});

      setErrors(validate({...input,[e.target.name]: e.target.value}));
}  
function handleSubmit(e) {
    e.preventDefault()
    if(!errors.username && !errors.email && !errors.password) {
     dispatch(register(input.username, input.email, input.password))
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
<div className='container-register'>
          <div className='box-register'>
            <img className="home-img" src={LogoBox} alt="logo-box" />
            <form onSubmit={(e)=>handleSubmit(e)} >
                <div className='email'>
                  <label>Email: </label>
                  <input
                  className ='email-text'
                  type= 'text'
                  name='email'
                  value={input.email}
                  onChange={(e)=>handleChange(e)} 
                  placeholder='email'
                  />
                  {errors.email && (<p className='bjjjbjb'>{errors.email}</p>)}
                </div>

                <div className='username-reg'>
                  <label>Usuario: </label>
                  <input
                    className ='username-text'
                    type= 'text'
                    name='username'
                    value={input.username}
                    onChange={(e)=>handleChange(e)} 
                    placeholder='usuario'
                  /> 
                  {errors.username && (<p className='b'>{errors.username}</p>)}
                </div>

                <div className='password'>
                  <label>Clave: </label>
                    <input
                      className ='password-text'
                      type= 'password'
                      name='password'
                      value={input.password}
                      onChange={(e)=>handleChange(e)} 
                      placeholder='clave'
                    /> 
                    {errors.password && (<p className='b'>{errors.password}</p>)}
                </div>

              <button className='btn-send' type="submit">Registrarse</button>

            </form>  
          </div>
          
     </div>
   
 )
}

export default RegisterForm