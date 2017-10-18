'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('ProjectCtrl', function ($routeParams, getProjects) {
    this.projects = getProjects.projects;
    this.projectIndex = $routeParams.projectIndex;
    
    this.thisProject = this.projects[this.projectIndex];
    
    this.currentGalleryPhoto = undefined;
    
    this.showLarger = function(index) {
	    this.currentGalleryPhoto = 'images/projects/' + this.thisProject.photoDir + '/' + index + '.png';
    };
  });
