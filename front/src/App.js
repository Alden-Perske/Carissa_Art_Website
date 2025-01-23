import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api')
            .then(response => response.json())
            .then(data => setMessage(data.message));
    }, []);

    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;
