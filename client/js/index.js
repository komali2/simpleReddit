'use strict'; // Allows block-scope and other useful es6 syntax

// Main App Declaration
// ngAnimate only dependency - needed to have Angular attach animation classes
var app = angular.module('redditApp', ['ngAnimate'])
  // Parent controller, highest scope in this app
  .controller('mainController', [
    '$scope',
    ($scope) => {


    }]);