import React, { useRef } from 'react';

export const SignUp = () => {

        const emailRef = useRef();
        const nameRef = useRef();
        const passwordRef = useRef();
    
      
        const onSubmit = (e) => {
          e.preventDefault();
          const email = emailRef.current.value;
          const name = nameRef.current.value;
          const password = passwordRef.current.value;
         
        };

  return <div>
      <div className="form">
      <h2> New User</h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Name" type="name" ref={nameRef} />
        <input placeholder="Password" type="password" ref={passwordRef} />
        <button type="submit">Register</button>
      </form>
    </div>
  </div>;
};

