import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state===undefined) {
            history.push('/');
        }
    }

    render(){
        const {location:{state:{id, title, year, rating, genres, poster, summary}}} = this.props;
        // console.log(id,title, year, rating, genres, poster );
        if(id) {
            return (
                <div className='detail'>
                    <img src={poster} alt={title} title={title}/>
                    <div className='detail__data'>
                        <h2 className='detail__title'>{title}</h2>
                        <h4 className='detail__year'>{year} / {rating}</h4>
                        <ul className='detail__genres'>
                            {genres.map((item, index)=> (
                                <li key={index} className='detail_genres__genre'>{item}</li> )
                            ) }    
                        </ul>
                        {/* <h4 className='movie__genres'>{genresSlash}</h4> */}
                        <p className='detail__summary'>{summary}</p>
                    </div>
                </div>
                // <span>Hi..</span>
            )
        } else{
            return null;
        }
    }
}

export default Detail;