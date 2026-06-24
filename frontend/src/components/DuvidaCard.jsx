// frontend/src/components/DuvidaCard.jsx
import { useState, useEffect } from 'react'
import axios from 'axios'
import RespostaForm from './RespostaForm'

export default function DuvidaCard({ duvida }) {
  const [respostas, setRespostas] = useState([])

  const carregarRespostas = () => {
    // Filtro por ID da dúvida
    axios.get(`http://127.0.0.1:8000/api/respostas/?search=${duvida.id}`)
      .then(res => setRespostas(res.data))
  }

  useEffect(() => {
    carregarRespostas()
  }, [duvida.id])

  return (
    <li style={{ border: '1px solid #ccc', margin: '10px 0', padding: '15px', borderRadius: '5px' }}>
      <h3>{duvida.titulo} <span>({duvida.linguagem})</span></h3>
      <p>{duvida.descricao}</p>

      {/* Exibição das Respostas */}
      <div style={{ marginTop: '15px', backgroundColor: '#f9f9f9', padding: '10px' }}>
        <strong>Respostas:</strong>
        {respostas.map(r => (
          <p key={r.id} style={{ fontSize: '0.9em', color: '#555' }}>• {r.descricao}</p>
        ))}
        
        {/* Formulário de resposta embutido no card */}
        <RespostaForm duvidaId={duvida.id} aoResponder={carregarRespostas} />
      </div>
    </li>
  )
}