import React from 'react';
import PropTypes from 'prop-types';


function Foods({name, rating, image}){
    return <div>
        <br></br>
        <li>I love {name} very much~~~.</li>
        <li>rating : {rating.toFixed(1)}/5.0</li>
        <img className='image' src = {image} alt={name}/>
        </div>
}

export default Foods;

Foods.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number,
    image: PropTypes.string.isRequired
}