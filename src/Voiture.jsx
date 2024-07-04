// src/Voiture.jsx
import React from 'react'
import ChangerCouleur from "./ChangerCouleur.jsx";

class Voiture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            marque: "Ford",
            modele: "Mustang",
            couleur: "rouge",
            annee: 1964
        }
    }

    changerCouleur = (nouvelleCouleur) => {
        this.setState({ couleur: nouvelleCouleur });
    }

    render() {
        return (
            <div>
                <h1>Ma voiture est {this.state.couleur}</h1>
                <ChangerCouleur changer={this.changerCouleur} />
            </div>
        )
    }
}

export default Voiture
