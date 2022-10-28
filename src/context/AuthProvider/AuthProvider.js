import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { useState } from 'react';
import { useEffect } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const providerLogIn = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userUpdateProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change', currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubcribe()
        }
    }, [])

    const AuthInfo = { user, providerLogIn, logOut, createUser, signIn, loading, userUpdateProfile }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;