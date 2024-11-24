import React from 'react'
import Entete from '../components/entete'
import "./acceuil.css"
const Acceuil = () => {
  return (
    <>
    <Entete></Entete>
    <div className="section1">
        <div className="gauchesection1">
          <h2>Notre bibliotheque prete pour vous</h2>
          <h4>telechargez ici vos livres audios favoris</h4>
        </div>
        <button>En savoir plus</button>
    </div>
    <div className="section2">
      <p className="welcometoabook">
        Bienvenu sur A-Book
      </p>
      <div className="separateur">
        <div className="gaucheseaparateur"></div>
        <div className="milieuseparateur"></div>
        <div className="droiteseparateur"></div>
      </div>
      <p className="textwelcome">
        ici vous pouvez decouvrir les livres que vous voulez lire ou ecouter  , sans aucun paiement
      </p>
    </div> <br /> <br />
    <div className="section3">
      <div className="elementsection3">
        <img src="https://static.vecteezy.com/system/resources/previews/008/367/375/original/gift-icon-vector.jpg" alt="" />
        <p className="titresection3">
          EBOOKS
        </p> 
        <p className="textesection3">
          telecharger vos livres en version pdf ici 
          tout vos favoris  sont ici 
        </p>
        <button className="buttonelementsection3">lire la suite</button>

      </div>
      <div className="elementsection3">
        <img src="https://static.vecteezy.com/system/resources/previews/008/367/375/original/gift-icon-vector.jpg" alt="" />
        <p className="titresection3">
          AUDIOBOOKS
        </p> 
        <p className="textesection3">
          telecharger vos livres audio  ici 
          tout vos favoris  sont ici 
        </p>
        <button className="buttonelementsection3">lire la suite</button>
      </div>
      <div className="elementsection3"> 
        <img src="https://static.vecteezy.com/system/resources/previews/008/367/375/original/gift-icon-vector.jpg" alt="" />
        <p className="titresection3">
          EBOOKS
        </p> 
        <p className="textesection3">
          telecharger vos livres en version pdf ici 
          tout vos favoris  sont ici 
        </p>
        <button className="buttonelementsection3">lire la suite</button>
      </div>
    </div>
    <div className="section4">
          <div className="soussection4">
            <p className="titresoussection4">Nos meilleures categories</p>
            <p className="soustitresoussection4">Voici une liste des meilleures categories de livres disponibles </p>
          </div>
          <div className="soussection5">
            <button className="catergoriesoussection5">Thriller</button>
            <button className="catergoriesoussection5">Poesie</button>
            <button className="catergoriesoussection5">Roman</button>
            <button className="catergoriesoussection5">Drama</button>
            <div className="searchsoussection5">
              <input placeholder='Search' type="text" className="inputsoussection5" />
              <button>
              <img src="https://th.bing.com/th/id/OIP.UQoWSulAlBGcaQxQPIAVJAHaHa?rs=1&pid=ImgDetMain" alt="" />
              </button>
            </div>
          </div>
          <div className="soussection6">
            <div className="cartesoussection6">
              <img src="https://www.babelio.com/users/blobid1641487673843.jpg" alt="" /> <br />
              <p><b>La fin des etiages</b></p>
            </div>
            <div className="cartesoussection6">
              <img src="https://th.bing.com/th/id/OIP.s6ZRJJDTl8l5NsvY-usf1AHaK1?rs=1&pid=ImgDetMain" alt="" /> <br />
              <p><b>la nuti du faune</b></p>
            </div>
            <div className="cartesoussection6">
              <img src="https://marketplace.canva.com/EADt53vT97k/1/0/512w/canva-couverture-de-livre-thriller-de-for%C3%AAt-monochrome-avec-photo-3dpJXQvxnoY.jpg" alt="" /> <br />
              <p><b>la burme des bois</b></p>
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
      <h1 className=''>A-Book</h1>
    </div>
    </>
  )
}

export default Acceuil