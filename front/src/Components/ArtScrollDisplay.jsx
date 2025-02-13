import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../CSS/ScrollWidget.css'
const importAll = (r) => r.keys().map(r);
const image_list = importAll(require.context('../Assests/websiteunpreppedartfiles', false, /\.(png|jpe?g|svg)$/));
const colum_list_1 = image_list.slice(0, 12)
const colum_list_2 = image_list.slice(12, 26)
const colum_list_3 = image_list.slice(26, 40)


function ArtScrollDisplay() {
  const [prent_nr, setPrent_nr] = useState(0)
  const [show_prent, setShow_prent] = useState(false)


  function handlePlus(prent_nr) {
    setPrent_nr(prent_nr + 1)
  }

  function handleMinus(prent_nr) {
    setPrent_nr(prent_nr - 1)
  }

  function Popup({ prent_nr }) {
    return (
      <>
        <div id='popup'>
          <FontAwesomeIcon icon={faArrowLeft} onClick={() => handleMinus(prent_nr)}/>
          <img src={image_list[prent_nr]} alt="" />
          <FontAwesomeIcon icon={faArrowRight} onClick={() => handlePlus(prent_nr)} />
        </div>
      </>
    )
  }

  return (
    <>
      <div id='scrollwidget'>
        <div id='c1'>
          {/* <img src={image_list[0]} alt="" /> */}
          {
            colum_list_1.map((prent,indeks) => (
              <img key={indeks} className='prent' src={prent} alt="" onClick={() => {
                setShow_prent(true)
                setPrent_nr(indeks)
              }} />))

          }
        </div>
        <div id='c2'>
          {
            colum_list_2.map((prent,indeks) => (
              <img key={indeks} className='prent' src={prent} alt="" onClick={() => {
                setShow_prent(true)
                setPrent_nr(indeks +12)
              }} />))

          }
        </div>
        <div id='c3'>
          {
            colum_list_3.map((prent,indeks) => (
              <img key={indeks} className='prent' src={prent} alt="" onClick={() => {
                setShow_prent(true)
                setPrent_nr(indeks+26)
              }} />
            ))

          }
        </div>
      </div>

      {
        show_prent && <Popup prent_nr={prent_nr} />
      }


    </>
  )
}

export default ArtScrollDisplay