'use strict';

var React = require('react');
var ReceptguidenActions = require('../actions/ReceptguidenActions');
var ReceptguidenStores = require('../stores/ReceptguidenStores');
var RecipeItemList = require('./RecipeItemList');

function getReceptguidenState(){
    return {
        recipeName: ReceptguidenStores.getRecipeName(),
        recipes: [{id: '1', name: 'kycklingwrap'}, {id: '2', name: 'kycklingsoppa'}, {id: '3', name: 'kycklingsoppa'}, {id: '4', name: 'kycklingsoppa'}, 
        {id: '5', name: 'kycklingsoppa'}, {id: '6', name: 'kycklingsoppa'}, {id: '7', name: 'kycklingsoppa'},  {id: '8', name: 'Pasta'},
        {id: '9', name: 'Potatis'},  {id: '10', name: 'Potatis'},  {id: '11', name: 'Potatis'} ]
    };
}

//**
//Creates the react class for the Searchbox
//**
var MainSearchBar = React.createClass({
    getInitialState: function() {
        return{
            recipeName: ReceptguidenStores.getRecipeName()
        };
    },

    componentDidMount: function() {
        ReceptguidenStores.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ReceptguidenStores.removeChangeListener(this._onChange);
    },

    searchRecipe: function() {
        var recipeName = React.findDOMNode(this.refs.recipeName).value.trim();
        ReceptguidenActions.getRecipe(recipeName);
    },

    render: function() {
        return (
        	/*jshint ignore:start */

<div id="mainApp">
            <div id="searchBarContainer">
        <div id="contentContainer">
            <div id="searchBar">
                <div id="searchBox">
                    <input type="text" placeholder="Sök recept..." ref="recipeName" />
                </div>
                <button onClick={this.searchRecipe}>Sök</button>
            </div>
        </div>
    </div>



<div id="contentContainer">
        <div id="mainContent">
            <div id="leftMainContent">
                <div id="filterHeader">
                    <h2>Filter</h2>
                </div>
            </div>

               <RecipeItemList recipes={this.state.recipes} />
               
            
            <div id="rightMainContent">
                <div id="rightMainContentBox">
                    <div id="rightMainContentHeader">
                        <h3>RightHeader</h3>
                    </div>
                    <div id="rightMainContentText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </div>
                </div>


                <div id="rightMainContentBox">
                    <div id="rightMainContentHeader">
                        <h3>RightHeader</h3>
                    </div>
                    <div id="rightMainContentText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </div>
                </div>
            </div>

        </div>

    </div>

</div>
            /*jshint ignore:end */
            );
    },

    _onChange: function() {
        this.setState(getReceptguidenState());

    }
});

module.exports = MainSearchBar;