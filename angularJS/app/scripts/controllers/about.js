'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('AboutCtrl', function ($location, getProjects) {
    this.projects = getProjects.projects;
    
    this.goToProject = function(index) {
	    $location.path('project/' + index);
    };
  });
