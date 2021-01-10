import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movies.css';

function Movies({id, year, rating, title, genres, summary, poster}){
    // let genresSlash='';
    // genres.forEach(item=>{
    //     genresSlash = genresSlash+item + '/';
    // })
    // console.log(genresSlas.substr(genresSlash));
    // genresSlash=genresSlash.slice(0,genresSlash.length-1);
    let temp_s ='';
    if(summary.length<300){
        var i;
        // temp_s+=" .";
        for (i = 0; i < (300-summary.length)/2; i++) {
            temp_s+=" \u00A0";
            // temp_s=temp_s.slice(0,temp_s.length-3)+temp_s.slice(temp_s.length-2, temp_s.length);
            // console.log(temp_s);
        }
        temp_s+=".";
        // console.log(temp_s);
    }
    temp_s = summary.slice(0,300)+"....."+temp_s;
    // let temp_s="<p>&nbsp;&nbsp;&nbsp;!</p>"
    // let temp_s="\u00A0\u00A0\u00A0\u00A0\u00A0!"

    return (
            <div className='movie'>
                
                <img src={poster} alt={title} title={title}/>

                <div className='movie__data'>
                <Link to={{
                    pathname: `/movie/id${id}`,
                    state: {
                        id,
                        year,
                        rating,
                        title,
                        genres,
                        summary,
                        poster
                    }
                }}>
                    <h2 className='movie__title'>{title}</h2>
                    </Link>    
                    <h4 className='movie__year'>{year} / {rating}</h4>
                    <ul className='movie__genres'>
                        {genres.map((item, index)=> (
                            <li key={index} className='genres__genre'>{item}</li> )
                        ) }    
                    </ul>
                    {/* <h4 className='movie__genres'>{genresSlash}</h4> */}
                    <p className='movie__summary'>{temp_s}</p>
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