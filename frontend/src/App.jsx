// frontend/src/App.jsx
import { useState, useEffect } from 'react'
import axios from 'axios'
import DuvidaCard from './components/DuvidaCard'
import DuvidaForm from './components/DuvidaForm'
import './App.css'

export default function App() {
  const [duvidas, setDuvidas] = useState([])

  // Função para buscar as dúvidas no Django
  const carregarDuvidas = () => {
    axios.get('http://127.0.0.1:8000/api/duvidas/')
      .then(response => {
        setDuvidas(response.data)
      })
      .catch(error => {
        console.error("Erro ao buscar dados:", error)
      })
  }

  
  useEffect(() => {
    carregarDuvidas()
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Painel de Monitoria 💻</h1>
      <hr />
      
      
      <DuvidaForm aoEnviar={carregarDuvidas} />
      
      <h2>Dúvidas da Galera:</h2>
      
      {duvidas.length === 0 ? (
        <p>Carregando dúvidas ou nenhuma dúvida cadastrada...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {/* Exibindo as dúvidas */}
          {[...duvidas].reverse().map(duvida => (
            <DuvidaCard key={duvida.id} duvida={duvida} />
          ))}
        </ul>
      )}
    </div>
  )
}