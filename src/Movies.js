import React from 'react';
import PropTypes from 'prop-types';

function Movies({id, year, title, genres, summary, poster}){
    return (<div>
                <h4>{title}</h4>
            </div>
            );
}

Movies.prototype={
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.string,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movies;