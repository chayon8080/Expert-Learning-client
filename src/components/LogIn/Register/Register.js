import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const { createUser, userUpdateProfile } = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset()
                handleUserUpdateProfile(name, photoURL)
                    .then(() => { })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    const handleUserUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        userUpdateProfile(profile)
    }
    return (
        <div className='w-25 mx-auto'>
            <h3 className='text-success'>Please Register!!</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                    <input type="text" name='name' className="form-control" id="formGroupExampleInput" placeholder="Please enter your Name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Photo URL</label>
                    <input type="text" name='photoURL' className="form-control" id="formGroupExampleInput" placeholder="Please enter your photo URL" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                    <input type="email" name='email' className="form-control" id="formGroupExampleInput" placeholder="Please enter your email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Password" required />
                </div>
                <button type="submit" className="btn btn-success">Register</button>
                <p className='text-danger'>{error}</p>
            </form>
            <p>Already have an account ?? please <Link to='/login'>Log In</Link></p>
        </div>
    );
};

export default Register;