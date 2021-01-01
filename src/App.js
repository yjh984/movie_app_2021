import React from 'react';
import axios from 'axios';
import Movies from './Movies';

let searchYear = new Date().getFullYear();

class App extends React.Component{
  state ={
    isLoading: true,
    isMovie: false,
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
    searchYear = searchYear-1;
    this.getMoviesList();
  }

  handleBtnAddYear=()=>{
    searchYear = searchYear+1;
    this.getMoviesList();
  }

  handleBtnAllList=()=>{
    searchYear = "";
    this.getMoviesList();
  }

  handleBtnBackToYear=()=>{
    searchYear = new Date().getFullYear();
    this.getMoviesList();
  }

  render(){
    const {isLoading, isMovie, moviesList} = this.state;
    return (
      <div>
        {isLoading? '' : (<h1>{searchYear} year.</h1>)}
        {isLoading ? 'Please, wait for loading...' : 
          (isMovie ? moviesList.map(item =>{
              // console.log(item.title);
                          return <Movies key={item.id}
                                        id={item.id}
                                        year={item.year}
                                        title={item.title}
                                        genres={item.genres}
                                        summary={item.summary}
                                        poster={item.medium_cover_image} />}) :
                     <h4>There is no movie which you want..</h4>)
        }
        <div>
        {isLoading? '' : (<button onClick={this.handleBtnMinusYear}>Previous Year</button>)}
        {isLoading? '' : (<button onClick={this.handleBtnAddYear}>Next Year</button>)}
        </div>
        {isLoading? '' : (<button onClick={this.handleBtnAllList}>All Movies</button>)}
        {isLoading? '' : (<button onClick={this.handleBtnBackToYear}>Back to this year</button>)}
      </div>
    )
  }
};

export default App;
