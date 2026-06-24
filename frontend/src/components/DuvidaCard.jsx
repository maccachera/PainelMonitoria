import './DuvidaCard.css' 

export default function DuvidaCard({ duvida }) {
  return (
    <li className="duvida-card">
      <h3>
        {duvida.titulo} 
        <span className="duvida-tag">
          {duvida.linguagem}
        </span>
      </h3>
      <p><strong>Descrição do problema:</strong> {duvida.descricao}</p>
    </li>
  )
}