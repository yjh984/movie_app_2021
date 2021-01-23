import React from 'react';
import axios from 'axios';
import Movies from '../components/Movies';
import './Home.css';

let searchYear = new Date().getFullYear();

class Home extends React.Component{
  state ={
    isLoading: true,
    isMovie: false,
    isYear: true,
    moviesList: []
  }
  
  getMoviesList = async () =>{
    // console.log(searchYear);
    const {data:{data:{movies}}} = 
    await axios.get(`https://yts-proxy.now.sh/list_movies.json?query_term=${searchYear}&sort_by=rating`);
    // await axios.get('https://yts-proxy.now.sh/list_movies.json?query_term="2021"&sort_by=rating');
    // console.log(movies==undefined);
    if(movies===undefined) {
      this.setState({isLoading:false, isMovie: false, moviesList: movies });
    } else{
      this.setState({isLoading:false, isMovie: true, moviesList: movies });
    }
  }

  componentDidMount(){
    this.getMoviesList();
  }

  handleBtnMinusYear=()=>{
    this.setState({isLoading:true});
    searchYear = searchYear-1;
    this.getMoviesList();
  }

  handleBtnAddYear=()=>{
    this.setState({isLoading:true});
    searchYear = searchYear+1;
    this.getMoviesList();
  }

  handleBtnAllList=()=>{
    this.setState({isLoading:true, isYear:false});
    searchYear = "";
    this.getMoviesList();
  }

  handleBtnBackToYear=()=>{
    this.setState({isLoading:true, isYear:true});
    searchYear = new Date().getFullYear();
    this.getMoviesList();
  }

  render(){
    const {isLoading, isYear, isMovie, moviesList} = this.state;
    return (
      <section className='container'>
        <div className='front'>
          <div className='year_'>
          {isLoading? '' : 
            isYear? (<h3>YEAR {searchYear}</h3>) : <h3>All YEAR.</h3>}
          </div>
          <div className='btn'>
          {isLoading? '' : 
            isYear? (<button onClick={this.handleBtnMinusYear}>Year-1</button>) : ""}
          {isLoading? '' : 
            isYear? (<button onClick={this.handleBtnAddYear}>Year+1</button>) : ""}
          {isLoading? '' : 
            isYear? (<button onClick={this.handleBtnAllList}>Years..</button>) : ""}
          {isLoading? '' : 
            isYear? '' : (<button onClick={this.handleBtnBackToYear}>BackToYear</button>)}
          </div>
        </div>

        {isLoading ? 
          <div className='loader'>
            <span className='loader__text'>'Please, wait for loading...' </span>
          </div>: 
          (isMovie ? 
            (<div className='movies'>
            {moviesList.map(item =>{
            // console.log(item.title);
                        return <Movies key={item.id}
                                      id={item.id}
                                      year={item.year}
                                      rating={parseFloat(item.rating).toFixed(1)}
                                      title={item.title}
                                      genres={item.genres}
                                      summary={item.summary}
                                      poster={item.medium_cover_image} />})}
            </div>):
            <h4>There is no movie which you want..</h4>
          )
        }
      </section>
    )
  }
};

export default Home;