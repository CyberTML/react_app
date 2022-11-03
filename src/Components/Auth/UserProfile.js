

import React from 'react'
import { useAuth } from '../../Contexts/AuthContext'
import './Profile.css'


export default function UserProfile() {

    const {currentUser} = useAuth()

  return (
    <span className='userProfile p-4'>
        Welcome, {!currentUser.displayName ? currentUser.email : currentUser.displayName.split(' ')[0]}
        <img src={currentUser.photoURL} alt='User profile pic' />
    </span>
  )
}
