import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error'>
      <h1 className='error-404'>404</h1>
      <p className='message-error'>Oups! La page que vous demandez n'existe pas</p>
      <Link to="/" className='link'>Retourner sur la page d’accueil.</Link>
    </div>
  )
}

export default Error