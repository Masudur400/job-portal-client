import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";





export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // useEffect(()=>{
    //     const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
    //           setUser(currentUser);
    //           setLoading(false);
    //       })
    //       return () =>{
    //           unsubscribe();
    //       }
    //   },[])

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                const userInfo ={email: currentUser?.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                        setLoading(false)
                    }
                })
            }
            else{
                localStorage.removeItem('access-token')
                setLoading(false)
            }
            setUser(currentUser)
            setLoading(false)
       
    })
        return () =>{
            unSubscribe()
        }
    }, [axiosPublic])

    const userInfo = {
        user,
        loading,
        setLoading,
        createUser,
        login,
        logOut
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;