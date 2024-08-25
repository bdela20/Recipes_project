import React, { useState } from 'react';

function Recipes() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData() {
        setLoading(true);
        setError(null);

        await new Promise(resolve => setTimeout(resolve, 1000));

        try {
            const response = await fetch(import.meta.env.VITE_API_URL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    const groupedByCountry = data.reduce((acc, item) => {
        (acc[item.country] = acc[item.country] || []).push(item);
        return acc;
    }, {});

    return (
        <div className="main-container">
            <h1>Recipes</h1>
            <button onClick={fetchData} className="fetch-button">The Recipes</button>

            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {Object.keys(groupedByCountry).length > 0 && !loading ? (
                <div className="country-container">
                    {Object.entries(groupedByCountry).map(([country, recipes]) => (
                        <div key={country} className="country-section">
                            <h2>{country}</h2>
                            <div className="grid-container">
                                {recipes.map((item, index) => (
                                    <div key={index} className="grid-item">
                                        {item.photo && <img src={item.photo} alt={item.recipe} className="recipe-photo" />}
                                        <h4>{item.recipe}</h4>
                                        <p>{item.description}</p>
                                        <p><strong>Price: </strong>${item.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                !loading && data.length === 0 && <p>No data available...</p>
            )}
        </div>
    );
}

export default Recipes;
