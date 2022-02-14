import React, { useState } from 'react';
import { useUserContext } from '../context/userContext';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

export const Auth = () => {

    const [index, setIndex] = useState(true);
    const { signInWithGoogle } = useUserContext();


    return <div className="container">

        {index ? <SignIn /> : <SignUp />}
        <button onClick={signInWithGoogle} type="submit">Sign in with Google</button>
        <p onClick={() => setIndex(!index)}>
            {index ? 'New user? Click here' : 'Already have an account?'}
        </p>
        

    </div>;
};
