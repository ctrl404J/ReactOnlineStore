import { useState } from 'react'
import './App.css'
import {Navbar, Container, Nav} from 'react-bootstrap';
import data from './data.jsx';

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
      <div className='main-bg'></div>
      <div>
        <ul className='item-container'>
          {
            copy.map(function(param, i){
              return(
                <li className='shop-item' key={i}>
                  <img src={data[i].imageUrl} alt='No Image'></img>
                  <h4>{data[i].title}</h4>
                  <div>{data[i].content}</div>
                  <div>{data[i].price}$</div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default App
