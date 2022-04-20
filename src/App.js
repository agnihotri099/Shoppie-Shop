import React  from 'react';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
// import { Route, Router } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header'
import HomeScreen from './screens/HomeScreen';
import ProductDetails from './screens/ProductDetails';


function App() {
  return (
    <Router>
    
    <Header/>
    <main className='my-3'>
      <Container>
      <h1 className='text-center my-3' style={{color:'black'}}>Ecommerce App</h1>
      <Routes>
      <Route path="/" element={<HomeScreen/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
      </Routes>
      </Container>
    </main>
    
      <Footer/>
      
    </Router>
  );
}

export default App;
