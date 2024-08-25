import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Recipes from './Recipes/';
import About from './About/';
import Contact from './Contact/';

function App() {
    return (
        <Router>
            <div className="container">
                <header>
                    <nav>
                        <h3><Link to="/">World Recipes</Link></h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/recipes">Recipes</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </header>

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/recipes" element={<Recipes />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>

                <footer>
                    <p>&copy; 2024 Recipes Project. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

function Home() {
    const navigate = useNavigate();

    return (
        <div className="main-container">
            <h1>Welcome to World Recipes</h1>
            <p>Click the button below to view the recipes.</p>
            <button onClick={() => navigate('/recipes')} className="fetch-button">
                Go to Recipes
            </button>
        </div>
    );
}

export default App;
