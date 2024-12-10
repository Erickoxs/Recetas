import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import routes from './routes/routes'
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return ( 
    <Router>
      <Navbar/>
      <div className='content'>
        <Routes>
          {routes.map((route,index) => (
            <Route key={index} path={route.path} element={<route.component/>} />
          ))}
        </Routes>
      </div>
    </Router>
  )
}
 
export default App;
