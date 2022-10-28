import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const LogIn = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { signIn } = useContext(AuthContext)
    const location = useLocation();
    const from = location.state?.from?.pathname
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                setError('')
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    return (
        <div className='w-25 mx-auto'>
            <h3 className='text-success'>Please Log in!!</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                    <input type="email" name='email' className="form-control" id="formGroupExampleInput" placeholder="Please enter your email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Password" required />
                </div>
                <button type="submit" className="btn btn-success">Log In</button>
                <p className='text-danger'>{error}</p>
            </form>
            {/* {success && <p className='text-success'>Successfully Log In</p>} */}
            {/* <p>New in this site ?? please <Link to='/register'>Register</Link></p> */}
        </div>
    );
};

export default LogIn;