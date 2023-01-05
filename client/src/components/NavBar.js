import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { Context } from '..'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/constants'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    console.log(user.isAuth);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>BuyDevice</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button 
                            variant={'outline-light'}
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Admin
                        </Button>
                        <Button 
                            variant={'outline-light'}
                            onClick={() => navigate(LOGIN_ROUTE)}
                            className="ms-2"
                            // onClick={() => user.setIsAuth(false)}
                        >
                            Log out
                        </Button>
                    </Nav>  
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'} 
                            onClick={() => user.setIsAuth(true)}
                        >Sign in</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar
