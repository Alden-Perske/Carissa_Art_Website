import React from 'react'
import '../CSS/CTA.css'
import Head from '../Assests/Carissa_Head.png'

function Me() {
  return (
    <>
        <div className='CTA'>
            <div className='leftbox'>
                <div>
                <h1>Hey i'm ,<div className='Textcolour'>Carissa</div> Peach</h1>
                <h1>a Conecpt <div className='Textcolour'>Artist</div></h1>
                <h1>based in Cape Town ,SA</h1>
                <button >Work with me</button>
                </div>
            </div>
            <div className='rightbox'>
                <img src={Head} alt="" />
            </div>
        </div>
    </>
  )
}

export default Me