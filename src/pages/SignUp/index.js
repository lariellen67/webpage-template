/* eslint-disable no-console */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleRegister() {
    console.log(name, 'aqui o nome')
    console.log(email, 'aqui o email')
    console.log(password, 'aqui a senha')
  }
  return (
    <>
      <form>
        <input
          placeholder="Nome completo"
          value={name}
          onChange={e => setName(e.target.value)}
        />
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
        <button onClick={handleRegister} type="submit">Criar conta</button>
        <Link to="/">Ja tenho conta!</Link>
      </form>
    </>
  )
}
