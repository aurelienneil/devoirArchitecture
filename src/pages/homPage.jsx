import React from 'react'
import Entete from '../components/entete'
import "./home.css"
const Home = () => {
  return (
    <>
    <Entete></Entete>
    <div className="section1Home">
        <div className="hautSection1home"> Nouveau</div>
        <div className="basSection1home">
            <div className="cardsection1Home">
                <div className="gaucheCardsection1home">
                    <img src="livre1.jpg" alt="" />
                </div>

                <div className="droitCardsection1home">
                            <p>Arretez d'oublier ce que vous ecoutez</p>
                            <span>******</span>
                            <p><b>auteur :</b> Eliot meunier</p>
                </div>
            </div>
        </div>
    </div>
    <div className="section2Home">
        <div className="hautSection2home"> Pour toi</div>
        <div className="basSection2home">
            <div className="cardsection2Home">
                <div className="gaucheCardsection2home">
                    
                </div>
                <div className="droitCardsection2home">

                </div>
            </div>
        </div>
    </div>
    <div className="section5">
      <div className="gauchesection5">

      </div>
      <div className="droitesection5">
        <h3>inscrivez vous ici</h3> <br />
        Nom et prenom <br />
        <input type="text"  id="" /> <br />
        E-mail <br />
        <input type="email" name="email" id="" /> <br />
        <button>Send</button>
      </div>
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

export default Home