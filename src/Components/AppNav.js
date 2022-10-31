
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AppNav() {
  return (
    
    <Navbar expand='lg' variant='light' bg='light' className='p-3'>
        <Navbar.Brand href='/'>[Image] <em><strong>React ToDo App</strong></em></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Nav>
                    <Link to='/' className='nav-link'>ToDo</Link>
                    <Link to='/categories' className='nav-link'>Categories</Link>
                    <Link to='/login' className='nav-link'>Login</Link>
                </Nav>
            </Navbar.Collapse>       
    </Navbar>
  )
}
