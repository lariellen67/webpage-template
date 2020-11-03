/* eslint-disable no-console */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '~/assets/logo.svg'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin() {
    console.log(email, 'aqui o email')
    console.log(password, 'aqui a senha')
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} type="submit">Entrar</button>
        <Link to="/register">Ainda não possui conta?</Link>
      </form>
    </>
  )
}
