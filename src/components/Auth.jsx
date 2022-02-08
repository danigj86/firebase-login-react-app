import React, { useState } from 'react';
import { SignIn } from './signIn';
import { SignUp } from './signUp';

export const Auth = () => {

    const [index, setIndex] = useState(false)

    return <div className="container">

        {!index ? <SignIn /> : <SignUp />}
        <p onClick={() => setIndex(!index)}>
            {!index ? 'New user? Click here' : 'Already have an account?'}
        </p>

    </div>;
};
