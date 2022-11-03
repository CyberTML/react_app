
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { useAuth } from './Auth/AuthContext'

export default function AppNav() {
  // const {currentUser} = useAuth();
  return (
    
    <Navbar expand='lg' variant='light' bg='light' className='p-3'>
        <Navbar.Brand href='/'>[Image] <em><strong>React ToDo App</strong></em></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Nav>
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/ToDos' className='nav-link'>Todo</Link>
                    <Link to='/login' className='nav-link'>Login</Link>
                    {/* if (currentUser === login) {
                      <img src={currentUser.photoURL} alt='User profile pic' />                     
                    } */}
                </Nav>
            </Navbar.Collapse>       
    </Navbar>
  )
}
