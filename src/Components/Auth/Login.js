
import React from 'react'

import { useAuth } from '../../Contexts/AuthContext'
import { Container, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom' 

export default function Login() {

    const { login } = useAuth()
    const navigate = useNavigate()

    async function handleAuth() {
        // Await keyword to pause any more code from executing  until we get a response back from firebase
        await login()

        // Return the user to a specific location using useNavigate from react-router-dom
        return navigate('/')
    }

  return (
    <div className='login'>
        <article className='bg-secondary mb-5 p-4 text-info'>
            <h1 className='text-center'>React ToDo</h1>
        </article>
        <Container>
            <Card className='m-2 border-dark text-center'>
                <Card.Header className='bg-dark text-info p-5'>
                    <h2>Login w/ GitHub</h2>
                </Card.Header>
                <Card.Body>
                    <button className='btn btn-info' onClick={() => handleAuth()}>
                        Login w/ Github
                    </button>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}