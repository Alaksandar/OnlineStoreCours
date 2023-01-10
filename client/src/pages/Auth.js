import { useContext, useState } from 'react'
import { Container, Card, Form, Button } from 'react-bootstrap'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { login, registration } from '../http/userAPI'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/constants'
import { Context } from '..' 

const Auth = observer(() => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const isWarning = password && password2 && password !== password2

    const click = async () => {
        try {
            let data
            if(isLogin) {
                data = await login(email, password)
                setEmail('')
            } else {
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (error) {
            alert(error.response.data.message)
        }
        
    }

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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        type='password'
                        className='mt-3'
                        placeholder='your password..'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {!isLogin &&
                        <Form.Control
                            type='password'
                            className='mt-3'
                            placeholder='сonfirm your password..'
                            value={password2}
                            onChange={e => setPassword2(e.target.value)}
                            style={isWarning ? {borderColor: 'rgb(253 13 13 / 25%)', boxShadow: '0 0 0 0.25rem rgb(253 13 13 / 25%)'} : null}
                        />
                    }
                    {!isLogin && isWarning &&
                        <span style={{color: 'rgb(253 13 13 / 70%)'}}>Confirm your password!</span>
                    }
                    <div className='d-flex justify-content-between align-items-center mt-3'>
                        {isLogin ?
                            <div>Have no account? <NavLink to={REGISTRATION_ROUTE}>Sign Up!</NavLink></div>
                                :
                            <div>Have an account? <NavLink to={LOGIN_ROUTE}>Log In!</NavLink></div>
                        }
                        <Button variant={'outline-success'} onClick={click}>
                            {isLogin ? 'Log In' : 'Sign Up'}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
})

export default Auth
