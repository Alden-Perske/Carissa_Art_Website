import React from 'react'
import { useParams } from 'react-router-dom';

function ArtPiecePage() {
    const { id } = useParams();

  return (
    <div>ArtPiecePage {id}</div>
  )
}

export default ArtPiecePage