import React from 'react'
import {Card} from "./Card"

export const Main = () => {
  return (
    <>
        <div className='header'>
            <div className='background'>
                <img src='./imagenes/background.jpg' alt='imagen de fondo'/>
            </div>
            <div className='search-bar'>
                <img src='./imagenes/logo.jpg' alt='Logo' />
                <input type='search' placeholder='Buscar nombre' className='search'/>
            </div>
                
        </div>
        <div className='content'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </>
  )
}
