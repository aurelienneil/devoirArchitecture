import React from 'react'
import "./inscription.css"
const Inscription = () => {
  return (
   <div className="loginpage">
    <div className="gaucheloginpage"></div>
    <div className="droitloginpage">
      <div className="couche1loginpage">
        <div className="couche2loginpage">
          <div className="couche3loginpage">
                <div className="couche4loginpage">
                <h3>inscrivez vous ici</h3> <br />
                Nom et prenom <br />
                <input type="text"  id="" /> <br />
                E-mail <br />
                <input type="email" name="email" id="" /> <br /> <br />
                vou avez deja un compte? <a href="#">connectez vous</a>
                <button>inscription</button>
              </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Inscription