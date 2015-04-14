'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var ReceptguidenConstants = require('../constants/ReceptguidenConstants');

var ReceptguidenActions = {
	//Add a person
	addRecipe: function() {
		AppDispatcher.dispatch({
			actionType: ReceptguidenConstants.ADD_RECIPE,
			id: 'idtest',
			name: 'nametest'
		});
	},

	//Get a persons name
	getRecipe: function(name) {
		AppDispatcher.dispatch({
			actionType: ReceptguidenConstants.GET_RECIPE,
			name: name
		});
	}
};

module.exports = ReceptguidenActions; 