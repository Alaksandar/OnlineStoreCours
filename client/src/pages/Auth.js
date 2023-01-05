import React from 'react'
import { Container, Card, Form, Col, Row, Button } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/constants'

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 500}} className='p-5'>
                <h2 className='m-auto' style={{color: 'gray'}}>{isLogin ? 'Log In' : 'Sign Up' }</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        type='email'
                        className='mt-3'
                        placeholder='your email..'
                    />
                    <Form.Control
                        type='password'
                        className='mt-3'
                        placeholder='your password..'
                    />
                    {!isLogin &&
                        <Form.Control
                            type='password'
                            className='mt-3'
                            placeholder='сonfirm your password..'
                        />
                    }
                    <div className='d-flex justify-content-between align-items-center mt-3'>
                        {isLogin ?
                            <div>Have no account? <NavLink to={REGISTRATION_ROUTE}>Sign Up!</NavLink></div>
                                :
                            <div>Have an account? <NavLink to={LOGIN_ROUTE}>Log In!</NavLink></div>
                        }
                        <Button variant={'outline-success'}>
                            {isLogin ? 'Log In' : 'Sign Up'}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth
