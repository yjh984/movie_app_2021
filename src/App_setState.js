import React from 'react';
// import PropTypes from 'prop-types';

class App extends React.Component{
  state={
    count: 0
  }

  add = ()=>{
    // console.log("Add");
    // const count = this.state.count+1;
    // console.log(count);
    // this.setState({count: this.state.count+1});
    this.setState(current=>({count: current.count+1}));  // better than the above..
  }

  minus = ()=>{
    // console.log("Minus");
    this.setState(current => ({count: current.count-1}));
  }

  render(){
    return (
      <div>
        <h1> The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
