import React from 'react'
import '../CSS/ScrollWidget.css'
import imagelist from '../Assests/websiteunpreppedartfiles'
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context(imagelist, false, /\.(png|jpe?g|svg)$/));

function ArtScrollDisplay() {
  return (
    <div id='scrollwidget'>
        <div id='c1'>column</div>
        <div id='c2'>column</div>
        <div id='c3'>column</div>
    </div>
  )
}

export default ArtScrollDisplay