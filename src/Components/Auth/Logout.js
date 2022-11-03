
import React from 'react'
import { useAuth } from '../../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import UserProfile from './UserProfile'



export default function Logout() {
    const { logout } = useAuth()
    const navigate = useNavigate()

    function handleAuth() {
        logout()
        navigate('/')
    }

  return (
    <div className='logout text-center p-4 bg-dark text-white'>
        <UserProfile />
        <button onClick={() => handleAuth()} className='btn btn-info'>
            Logout
        </button>
    </div>
  )
}