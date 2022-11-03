
import React from 'react'
import Logout from './Auth/Logout'
import { useAuth } from '../Contexts/AuthContext';


export default function Footer() {
    const year = new Date().getFullYear()
    const {currentUser} = useAuth();
  return (
    <>
    {currentUser && <Logout />}
    <footer className='text-center bg-light text-dark p-4 my-1'>      
        <h5>
          <em><strong>&copy; {year} Tanner Lampson</strong></em>
        </h5>                  
    </footer>
    </>
  )
}
