import React, { Component } from 'react';
import Form from './components/Form'
import Recipes from './components/Recipes';
import './App.css';


const API_KEY = "25be73b76767b72f085dcd66f61bb7a5";

class App extends Component {
  state = {
    recipes:[]
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=5`);
    const data = await api_call.json();
    this.setState ({
      recipes: data.recipes
    })
    console.log(this.state.recipes);
  }
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }
  componentDidUpdate = () => {
    const recipes =  JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
        
      </div>
    );
  }
}

export default App;

//https://www.food2fork.com/api/search?key=25be73b76767b72f085dcd66f61bb7a5&q=shredded%20chicken
// index.js:2178 Warning: Each child in an array or iterator should have a unique "key" prop.
