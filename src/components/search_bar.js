import React, { Component } from 'react';

//"class" is used instead of "function" if you want to extend
//"class" is also used if the state is being changed
//"Component" could also be replaced with "React.Component"
//this inherits from React.Component
//render method must be used with class
class SearchBar extends Component {

  constructor(props) { //this allows to create a new "SearchBar"
  super(props); //"props" is inherited from "Component". "props" allows us to grab a property from an element.

    //constructor method is only used to change the state
    //this is initialized by creating an object
    //to get access to the value: this.state.term
    //this is the initial state
    //the initial state can be manually changed to this.state = { term = 'hi!' }
    this.state = {
      //term is the property
      term: "Search"
    };
  }

  //this is the old way:
  //<input className="search-bar" value={this.state.term} onChange={ event => this.setState(event.target.value) } />

  //"onChange" is a javascript event
  //"this.setState()" is updates the state to whatever is typed in the input
  //everytime "this.setState()" changes, it re-renders
  //"value={this.state.term}" actually saves the value
  //"Value of the input: this.state.term" displays the update state (whatever is typed in the input)
	render () {
    return (
  		<div className="search-bar">
        <input className="search-bar" onChange={ event => this.onInputChange(event.target.value) } />
  		</div>
    );
	}

  //create a new method here
  //event.target.value" above is being passed as "searchTerm" above
  onInputChange(searchTerm) {
      //the state is updated with whatever is in the input
      //this will not affect the app if not you don't update the state
      this.setState({term: searchTerm});
      //"this.props" is used because this is inside a "class" component
      //"this.props.onSearchTermChange" grabs the prop name from <SearchBar/>
      //this fires off the function from <SearchBar/> in index.js
      this.props.onSearchTermChange(searchTerm);
  }
}

//OR this can also be written as:

//every class must have a render function
// render () {
//   return <input onChange={this.onInputChange} />;
// }

//whatever is typed in the input will be dispalyed in the console
// onInputChange (event) {
//   console.log(event.target.value);
// }

export default SearchBar;
