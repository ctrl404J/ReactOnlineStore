import { useState } from 'react'
import './App.css'
import {Navbar, Container, Nav} from 'react-bootstrap';
import data from './data.jsx';

function App() {
  
  return (
    <div className='App'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">WOWShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">New</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <div>
        <ul className='item-Container'>
          <li className='shop-item'>
            <img src='/c1.png' alt="상품 이미지"/>
            <h4>상품명</h4>
            <div>상품설명</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
