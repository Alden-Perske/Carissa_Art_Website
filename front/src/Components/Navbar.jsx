import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'


function Navbar() {
  return (
        <div id='Navbar'>
            <ul>
                <Link to='/ArtPiece/1'><li>Art</li></Link>
                <Link to='/Home'><li>About Me</li></Link>
                <Link to='/ArtPiece/1'><li>CV</li></Link>
                
            </ul>
        </div>
    
    
  )
}

export default Navbar