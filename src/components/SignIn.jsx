import React, { useRef } from 'react';
import { useUserContext } from '../context/userContext';


export const SignIn = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const { signInUser, forgotPassword } = useUserContext();

    const onSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (email && password) signInUser(email, password);

    }

    const forgotPasswordHandler = () => {
        const email = emailRef.current.value;
        if(email){
            forgotPassword(email ).then(()=>(emailRef.current.value = ''));
            alert('Revisa tu bandeja de entrada')
        }else{
            alert('Escribe tu correo para recuperar la contraseña')
        } 
    }


  return <div className="form">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
          <input type="email" placeholder="Email" ref={emailRef}/>
          <input type="password" placeholder="Password" ref={passwordRef}/>
          <button type="submit">Sign in</button>
          <p onClick={forgotPasswordHandler}> Forgot your password? </p>
      </form>
  </div>;
};
