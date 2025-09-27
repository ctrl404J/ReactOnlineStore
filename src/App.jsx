import { useState } from 'react'
import './App.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import data from './data.jsx';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail.jsx'

function App() {
  let [itemData, setData] = useState(data);
  let copy = [...itemData];
  let navigate = useNavigate(); //1. useNavigate의 사용법

  return (
    <div className='App'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">WOWShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link href="#features">New</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Cart</Nav.Link>
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
        <Route path='/detail' element={<Detail/>} />
        {/* nested routes 사용법 */}
        <Route path='/about' element={<About/>}>  
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<div>위치정보임</div>} />
        </Route>
        
        <Route path='*' element={<div>없는 페이지입니다.</div>}></Route>
      </Routes>

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
function About(){
  return (
    <div>
      <h4>회사정보</h4>
      {/* Outlet으로 nested routes하단 페이지의 내용을 원하는 위치에 랜더링 시키기  */}
      <Outlet></Outlet>
    </div>
  )
}

export default App
