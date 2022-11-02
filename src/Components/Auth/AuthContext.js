
import React, { useState, useEffect, useContext } from 'react'

import { auth } from '../../base' // Gives us access to the Auth Object which initializes Authentication.
import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

const AuthContext = React.createContext()

//Below we create a funtion that will allow us to use the context in components. We will import this function any time
// we want the currentUser, Login, Logout functionality.
export function useAuth() {
    return useContext(AuthContext)
}

// This component will provide the AuthContext info to the children components nested inside of it. See App.js where we call 
// to an instance of this component and nest all other components inside of it. We renamed AuthContext below to AuthProvider
// to differentiate it from the context storage object above (AuthContext)
export default function AuthProvider({children}) {

    // Create hooks for currentUser and another custom hook to determine if the context has info to share with child components
    // before rendering the child components to the screen.
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    // Login functionality
    // Instantiate a GithubAuthProvider object
    const githubAuthProvider = new GithubAuthProvider()

    async function login() {    
        return (signInWithPopup(auth, githubAuthProvider).then(authData => {

            console.log(authData)
            setCurrentUser(authData.user) // User saved in a storage object upon Login
            // Here we could add some functionality to save the user to a db or decide a default role for them

        }))
    }

    // Logout Functionality
    async function logout() {
        signOut(auth).then(setCurrentUser(null))
    }

    // Below we write an object to hold currentUser info and Login/Logout Functions so we can use them in child components.
    // We will pass this as a prop in the return below.
    const value = {currentUser, login, logout}

    useEffect(() => {
        // authChange will use firebase functionality to get user info, set the current user hook to the value retrieved, and 
        // allow components to load in using the custom hook (Loading).
        const authChange = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return authChange
    }, []) 

  return (
    <AuthContext.Provider value={value}>
        {/* Below we are waiting for the authContext info to populate before loading the child components in the UI */}
        {!loading && children}
    </AuthContext.Provider>
  )
}
