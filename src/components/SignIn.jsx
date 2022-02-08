import React, { useRef } from 'react';

export const SignIn = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    }

    const forgotPasswordHandler = () => {
        const email = emailRef.current.value;
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
