import React from 'react';
import { useNavigate } from 'react-router-dom';

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

export default Home;


