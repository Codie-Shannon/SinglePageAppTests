//Pages
import { Trucks } from './components/trucksComponent';
import { Home } from './components/homeComponent';

//Router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//Navigation Bar
import { Container, Nav, Navbar } from 'react-bootstrap';

//UI Components
import {  } from 'react-bootstrap';

//App Function
function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <>
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to="/">MT International</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/trucks">Trucks</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          </>
        </header>

        <main className='container'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/trucks' element={<Trucks/>}/>
            </Routes>
        </main>

        <footer className='pt-3 pb-1 bg-primary mt-5'>
          <Container>
            <p className='text-center text-white'>Copyright &copy; Codie Shannon 2023</p>
          </Container>
        </footer>
      </div>
    </BrowserRouter>
  );
}

//Export App Function
export default App;