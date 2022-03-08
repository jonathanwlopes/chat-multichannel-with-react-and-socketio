import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useChannelContext } from "../hooks/useChannelContext"

export const Login = () => {
  const [userName, setUserName] = useState("")
  const navigate = useNavigate()
  const { login } = useChannelContext()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    login(userName)
    navigate('/channels')
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input type="text" placeholder="Seu usuário" value={userName} onChange={(e) => setUserName(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}
