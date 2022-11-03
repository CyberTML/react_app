
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Navigation */
import AppNav from './Components/AppNav';
import Footer from './Components/Footer'

/* Pages */
import Login from './Components/Auth/Login';
import ToDos from './Components/ToDo/ToDos';
import Categories from './Components/Categories/Categories';
import NotFound from './Components/NotFound'

/* Styling */
import './App.css';
import AuthProvider from './Contexts/AuthContext';
import ProtectedRoute from './Components/Navigation/ProtectedRoute';


function App() {
  return (    
    <div className="App">
      <AuthProvider>
        <Router>
          <AppNav />
          <Routes>
            <Route path='/' element={<Categories />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/todo' element={<ToDos />} />          
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />     
        </Router>
      </AuthProvider>     
    </div>    
  );
}

export default App;
