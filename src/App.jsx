import { useState } from 'react'
import './App.css'
import {Navbar, Container, Nav} from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">StyleShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">New</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default App
