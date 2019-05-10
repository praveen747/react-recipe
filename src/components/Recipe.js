import React from 'react';

import { Link } from 'react-router-dom';

const API_KEY = "25be73b76767b72f085dcd66f61bb7a5";

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}&`);
        const res = await req.json();
        this.setState ({
        activeRecipe: res.recipes[0]
        });
        console.log(this.state.activeRecipe);
    }
    
    render () {
        console.log(this.props);
        const recipe = this.state.activeRecipe;
        return(
            <div className="container">
               { this.state.activeRecipe.length !== 0 &&  
                 <div className="active-recipe">
                    <img className="active-recipe__img" src ={recipe.image_url} alt="{recipe.title"/>
                    <h3 className="active-recipe_title">{ recipe.title } </h3>
                    <h4 className="active-recipe__pubisher">
                        Publisher: <span> { recipe.Publisher}</span>
                    </h4>
                    <p className="active-recipe__website">
                        Website: <span> <a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
                    </p>
                    <button className="active-recipe__button">
                    <Link to="/">Go Home </Link></button>
                </div>
               }
            </div>
        )
    }
} 

/* const Recipe = () => (

    <div>
        ReactComponent
    </div>
); */
export default Recipe;