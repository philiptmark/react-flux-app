/** @jsx React.DOM */

'use strict';

var React = require('react');

var MainSearchBar = require('./components/MainSearchBar');

React.render(
    /*jshint ignore:start */
    <MainSearchBar />,
    /*jshint ignore:end */
    document.getElementById('app')
);
