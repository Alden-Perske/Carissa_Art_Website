import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ArtPiecePage from './Pages/ArtPiecePage';
import ArtPage from './Pages/ArtPage';

function App() {
    const [message, setMessage] = useState('');

    // useEffect(() => {
    //     fetch('http://localhost:5000/api')
    //         .then(response => response.json())
    //         .then(data => setMessage(data.message));
    // }, []);

    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<HomePage />}/>
            <Route path='/' element={<ArtPage/>}/>
            <Route path='/ArtPiece/:id' element={<ArtPiecePage/>}/>

          </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;
