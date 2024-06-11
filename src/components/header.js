import React from 'react'

export default function Header() {
  return (
    <div className='Header'>
        <img className='logo' src='Logo.png' />
        <img className='name' src='Name.png' />
            <button className='Ballina'>BALLINA</button>
            <button className='Klubi'>KLUBI</button>
            <button className='Ekipi'>EKIPI</button>
            <button className='Lajme'>LAJME</button>
            <button className='Historiku'>HISTORIKU</button>
            <button className='Nav'><i class="fa-solid fa-bars"></i></button>
    </div>
  )
}
