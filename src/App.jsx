import { useState } from 'react'
import './App.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.jsx';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  let [itemData, setData] = useState(data);
  let copy = [...itemData];

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

      <Routes>
        <Route path='/' element={
          <div>
            <div className='main-bg'></div>
            <div>
              <ul className='item-container'>
                {
                  copy.map(function (item, i) {
                    return (
                      <Item data={item} key={i}></Item>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        } />
        <Route path='/detail' element={<div>상세페이지</div>} />
      </Routes>

      <Link to='/'>홈 </Link>
      <Link to='/detail'>상세페이지</Link>

    </div>
  )
}

function Item(props) {
  return (
    <li className='shop-item'>
      <img src={props.data.imageUrl} alt='No Image'></img>
      <h4>{props.data.title}</h4>
      <div>{props.data.content}</div>
      <div>{props.data.price}$</div>
    </li>
  );
}

export default App
