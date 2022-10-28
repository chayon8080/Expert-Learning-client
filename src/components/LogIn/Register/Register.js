import React from 'react';
import { useContext } from 'react';
import AuthProvider, { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext)
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
                form.reset()
            })
            .catch(e => console.error(e))
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
            </form>
            {/* <p>Already have an account ?? please <Link to='/login'>Log In</Link></p>
            <p>Forget password? <button type="button" onClick={handlePasswordReset} className="btn btn-link">Reset Password</button></p> */}
        </div>
    );
};

export default Register;