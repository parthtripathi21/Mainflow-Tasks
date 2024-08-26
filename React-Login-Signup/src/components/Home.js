// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';   


function Home() {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>
        <button><Link to="/login">Login</Link></button>
      </p>
      <p>
        <button><Link to="/signup">Signup</Link></button>
      </p>
    </div>
  );
}

export default Home;
