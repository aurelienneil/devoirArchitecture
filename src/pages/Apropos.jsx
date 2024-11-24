import React from 'react'
import Entete from '../components/entete'
import "./apropos.css"

const Apropos = () => {
  return (
   <>
   <Entete></Entete>
   <div className="corpsApropos">
    <div className='logoapropos'>
      <img src="./book.png" alt="" />
      <p><span>A</span>-Book</p>
    </div>
      <p className="texteApropos">Chaque projet de formation doit pouvoir s’appuyer sur des besoins clairement  identifiés. 
L’analyse des besoins peut se faire de façon proactive (planifiée) ou réactive,
(à  chaque demande de formation).  Le processus de développement de la formation étant long et coûteux, le mieux est
 évidemment de prévoir, autant que faire se peut, de façon à réserver les ressources, prioriser  les efforts, minimiser les interventions
 faussement urgentes et mieux gérer toute l’activité de  formation.</p>
 <button className="buttonApropos">En savoir plus</button>
   </div>
   <div className='footerAcceuil' >
   <div className='logoaproposFooter'>
      <img src="./book.png" alt="" />
      <p><span>A</span>-Book</p>
    </div>
    </div>
   </>
  )
}

export default Apropos