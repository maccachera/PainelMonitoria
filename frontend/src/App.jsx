import { useState, useEffect } from 'react'
import axios from 'axios'
import DuvidaCard from './components/DuvidaCard'
import './App.css'

export default function App() {
  const [duvidas, setDuvidas] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/duvidas/')
      .then(response => {
        setDuvidas(response.data)
      })
      .catch(error => {
        console.error("Ops! Deu erro ao buscar os dados:", error)
      })
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Painel de Monitoria 💻</h1>
      <hr />
      
      <h2>Dúvidas da Galera:</h2>
      
      {duvidas.length === 0 ? (
        <p>Carregando dúvidas...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {duvidas.map(duvida => (
            <DuvidaCard key={duvida.id} duvida={duvida} />
          ))}
        </ul>
      )}
    </div>
  )
}