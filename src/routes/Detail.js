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
        temp_s = summary+"....."+temp_s;

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
                        <p className='detail__summary'>{temp_s}</p>
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