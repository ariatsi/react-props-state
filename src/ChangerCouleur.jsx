// src/ChangerCouleur.jsx
import React from 'react'
import PropTypes from 'prop-types';


function ChangerCouleur(props) {
    return (
        // eslint-disable-next-line react/prop-types
        <button onClick={() => props.changer("bleu")}>
            Changer la couleur en bleu
        </button>
    )
}

ChangerCouleur.propTypes = {
    changer: PropTypes.func.isRequired
};
export default ChangerCouleur