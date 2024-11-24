import React from 'react'
import Entete from '../components/entete'
import "./produit.css"
const Produit = () => {
  return (
    <>
    <Entete></Entete>
    <div className="sectionProduct1">
        <div className="gauchesectionProduct1">
          <h2>Notre bibliotheque prete pour vous</h2>
          <h4>telechargez ici vos livres audios favoris</h4>
        </div>
        <button>En savoir plus</button>
    </div>
    <div className="sectionProduct2">
      <h4>Our product</h4>
    </div> 
    <div className="sectionProduct3">
      <div className="elementsectionProduct3">
        <img src="livre7.jpg" alt="" />
        <div className="baselementsectionproduct3">
          <p className="titresectionProduct3">
          ****
        </p> <span>**</span>
        <button className="buttonelementsectionProduct3">telecharger</button>
          </div>
        

      </div>
      <div className="elementsectionProduct3">
        <img src="livre7.jpg" alt="" />
        <div className="baselementsectionproduct3">
          <p className="titresectionProduct3">
          *****
        </p> <span>*</span>
        <button className="buttonelementsectionProduct3">telecharger</button>
          </div>
      </div>
      <div className="elementsectionProduct3"> 
        <img src="livre7.jpg" alt="" />
        <div className="baselementsectionproduct3">
          <p className="titresectionProduct3">
          ******
        </p>
        <button className="buttonelementsectionProduct3">telecharger</button>
          </div>
        
      </div>
    </div>
    <div className="sectionProduct4">
          <div className="soussectionProduct4">
            <p className="titresoussectionProduct4">Nos meilleures categories</p>
            <p className="soustitresoussectionProduct4">Voici une liste des meilleures categories de livres disponibles </p>
          </div>
          <div className="soussectionProduct5">
            <button className="catergoriesoussectionProduct5">Thriller</button>
            <button className="catergoriesoussectionProduct5">Poesie</button>
            <button className="catergoriesoussectionProduct5">Roman</button>
            <button className="catergoriesoussectionProduct5">Drama</button>
            <div className="searchsoussectionProduct5">
              <input placeholder='Search' type="text" className="inputsoussectionProduct5" />
              <button>
              <img src="https://th.bing.com/th/id/OIP.UQoWSulAlBGcaQxQPIAVJAHaHa?rs=1&pid=ImgDetMain" alt="" />
              </button>
            </div>
          </div>
          <div className="soussectionProduct6">
            <div className="cartesoussectionProduct6">
              <img src="https://www.babelio.com/users/blobid1641487673843.jpg" alt="" /> <br />
              <p><b>La fin des etiages</b></p>
            </div>
            <div className="cartesoussectionProduct6">
              <img src="https://th.bing.com/th/id/OIP.s6ZRJJDTl8l5NsvY-usf1AHaK1?rs=1&pid=ImgDetMain" alt="" /> <br />
              <p><b>la nuti du faune</b></p>
            </div>
            <div className="cartesoussectionProduct6">
              <img src="https://marketplace.canva.com/EADt53vT97k/1/0/512w/canva-couverture-de-livre-thriller-de-for%C3%AAt-monochrome-avec-photo-3dpJXQvxnoY.jpg" alt="" /> <br />
              <p><b>la burme des bois</b></p>
            </div>
          </div>
    </div>
    <div className="sectionProduct5">
      <div className="gauchesectionProduct5">

      </div>
      <div className="droitesectionProduct5">
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

export default Produit