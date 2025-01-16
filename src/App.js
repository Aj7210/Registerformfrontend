import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./home";
import Login from "./login";
import Register from "./register";
import { useState } from 'react';

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              user && user._id ? 
              <Homepage setLoginUser={setLoginUser} /> : 
              <Login setLoginUser={setLoginUser} />
            } 
          />
          <Route 
            path="/login" 
            element={<Login setLoginUser={setLoginUser} />} 
          />
          <Route 
            path="/register" 
            element={<Register />} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;