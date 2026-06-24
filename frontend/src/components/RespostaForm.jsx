// frontend/src/components/RespostaForm.jsx
import { useState } from 'react'
import axios from 'axios'

export default function RespostaForm({ duvidaId, aoResponder }) {
  const [conteudo, setConteudo] = useState('')

  const enviar = (e) => {
    e.preventDefault()
    
    
    const novaResposta = {
      descricao: texto,
      duvida: duvidaId,
      autor: 1 
    }

    axios.post('http://127.0.0.1:8000/api/respostas/', novaResposta)
      .then(() => {
        setConteudo('')
        aoResponder() 
      })
  }

  return (
    <form onSubmit={enviar} style={{ marginTop: '10px', display: 'flex', gap: '5px' }}>
      <input 
        value={conteudo}
        onChange={(e) => setConteudo(e.target.value)}
        placeholder="Escreva uma resposta..."
        required
        style={{ flex: 1, padding: '5px' }}
      />
      <button type="submit" style={{ padding: '5px 10px' }}>Responder</button>
    </form>
  )
}