import Button from 'react-bootstrap/Button';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import{Link} from 'react-router-dom'

const Header = () => {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
			<Container>
          <Navbar.Brand> <Link id='link' to={'/'}>A&B</Link> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={'/'} id='link'> 
              Главная
              </Link>
            </Nav.Link>
            <Nav.Link> 
            <Link to={'/favorites'} id='link'>
            Избранное
            </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/cart'} id='link'>
              Корзина
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={'/description'} id='link'>
              Описание
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary">
                    Войти
            </Button>
          </Nav>
        </Container>
      </Navbar>
		</div>
	)
}

export default Header