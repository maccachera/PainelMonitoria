
import { useState } from 'react'
import axios from 'axios'

export default function DuvidaForm({ aoEnviar }) {
  // Guardamos o que o usuário digita na memória do componente
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [linguagem, setLinguagem] = useState('GERAL')

  const handleSubmit = (e) => {
    e.preventDefault() // Impede a página de recarregar quando clica em enviar

    // 
    const novaDuvida = {
      titulo: titulo,
      descricao: descricao,
      linguagem: linguagem,
      autor: 1 // 
    }

    
    axios.post('http://127.0.0.1:8000/api/duvidas/', novaDuvida)
      .then(response => {
        alert('Dúvida enviada com sucesso!')
        
        setTitulo('')
        setDescricao('')
        setLinguagem('GERAL')
        
        aoEnviar()
      })
      .catch(error => {
        console.error("Erro ao enviar a dúvida:", error)
        alert('Deu erro ao enviar. Olhe o console.')
      })
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f8f9fa' }}>
      <h3>Faça uma Pergunta</h3>
      
      <div style={{ marginBottom: '10px' }}>
        <input 
          type="text" 
          placeholder="Título (ex: Imagem não carrega)" 
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <select 
          value={linguagem} 
          onChange={(e) => setLinguagem(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        >
          <option value="GERAL">Dúvida Geral</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JS">JavaScript</option>
        </select>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <textarea 
          placeholder="Descreva o problema e cole seu código aqui..." 
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
          rows="4"
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>

      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Enviar Dúvida
      </button>
    </form>
  )
}