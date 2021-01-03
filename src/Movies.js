import React from 'react';
import PropTypes from 'prop-types';
import './Movies.css';

function Movies({year, rating, title, genres, summary, poster}){
    // let genresSlash='';
    // genres.forEach(item=>{
    //     genresSlash = genresSlash+item + '/';
    // })
    // console.log(genresSlas.substr(genresSlash));
    // genresSlash=genresSlash.slice(0,genresSlash.length-1);

    return (<div className='movie'>
                <img src={poster} alt={title} title={title}/>
                <div className='movie__data'>
                    <h2 className='movie__title'>{title}</h2>
                    <h4 className='movie__year'>{year} / {rating}</h4>
                    <ul className='movie__genres'>
                        {genres.map((item, index)=> (
                            <li key={index} className='genres__genre'>{item}</li> )
                        ) }    
                    </ul>
                    {/* <h4 className='movie__genres'>{genresSlash}</h4> */}
                    <p className='movie__summary'>{summary.slice(0,300)}...</p>
                </div>
            </div>
            );
}

Movies.prototype={
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movies;