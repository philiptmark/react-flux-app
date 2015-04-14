'use strict';

var React = require('react');
var ReceptguidenActions = require('../actions/ReceptguidenActions');
var ReceptguidenStores = require('../stores/ReceptguidenStores');

var RecipeItemList = React.createClass({
	
  render: function() {
  	var recipesRecieved = this.props.recipes;

  	var recipes = [];
  	/*jshint ignore:start */
  	for(var key in recipesRecieved)
  	{
  	var recipeName = recipesRecieved[key].name;
  	
	recipes.push(
    <div id="recipeItem">
<div id="recipeImage"></div>
<div id="recipeContent">
<h3>{recipeName}</h3>
Lorem ipsum dolor sit amet, consectetur adipiscing elit!

            <br />
            <br />
            743 kcal/portion
</div>
</div>
    
                            );

	}


	/*jshint ignore:end */

        return (
        	/*jshint ignore:start */
             <div id="recipeList">
                        {recipes}
                    </div>
            /*jshint ignore:end */
            );
    }
});

module.exports = RecipeItemList;