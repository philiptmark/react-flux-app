'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ReceptguidenConstants = require('../constants/ReceptguidenConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var recipeName = 'Default';
var recipes = [];

function getRecipe(name) {
		recipeName = name;
		//recipeName = name;
		//this.setState({recipeName: name});
		//window.location.replace('../../page2.html');
	}

var ReceptguidenStores = assign({}, EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	getRecipeName: function() {
		return recipeName;
	},

  /**
   * @param {function} callback
   */
   addChangeListener: function(callback) {
   	this.on('change', callback);
   },

  /**
   * @param {function} callback
   */
   removeChangeListener: function(callback) {
   	this.removeListener('change', callback);
   }
});

AppDispatcher.register(function(action) {
	console.log(action.name);
	var id;
	var name = action.name;
	switch(action.actionType) {
		case ReceptguidenConstants.ADD_RECIPE:
		
		getRecipe();
		ReceptguidenStores.emitChange();
		break;

		case ReceptguidenConstants.GET_RECIPE:
		getRecipe(name);
		ReceptguidenStores.emitChange();
		break;




		default:
	}
});

module.exports = ReceptguidenStores;