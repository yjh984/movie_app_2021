import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state ={
    isLoading: true
  }
  
  // getMoviesList = async () =>{
  //   const moviesList = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  //   console.log(moviesList);
  // }

  componentDidMount(){
    console.log("didM starting");
    setTimeout(current=>
      this.setState({isLoading: false}), 3000);
    console.log("didM ending");
  }

  render(){
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? 'Please, wait for loading...' : 'We are ready...'}
        {console.log("rendering")}
      </div>
    )
  }
}

export default App;
