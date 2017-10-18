'use strict';

/**
 * @ngdoc service
 * @name portfolioApp.getProjects
 * @description
 * # getProjects
 * Service in the portfolioApp.
 */
angular.module('portfolioApp')
  .service('getProjects', function () {
    this.projects = [
	    {
		    name: 'JP Bouvet',
		    description: 'JPBouvetMusic.com is a website for drummers to learn through instructional videos. This project uses jQuery and a custom built RESTful API. I also designed this website.',
		    link: 'http://www.jpbouvetmusic.com',
		    photoDir: 'jp',
		    tech: ['jQuery','Javascript','JSON','HTML5','CSS3','PHP','mySQL'],
		    photos: ['1','2','3','4','5','6']
	    },
	    {
		    name: 'Re:Test',
		    description: 'Re:Test is a website to buy & sell engineering equiptment online. The old site was very out of date and was in desparate need of a refresh. The new site is written with the latest technologies including AngularJS and Bootstrap. It usalized a custom RESTful API. I also designed this website. This project is currently in development.',
		    link: 'http://thelindens.us',
		    photoDir: 'retest',
		    tech: ['AngularJs', 'jQuery','Javascript','JSON','HTML5','CSS3','SASS','PHP','mySQL'],
		    photos: ['1','2','3','4','5','6','7']
	    },
	    {
		    name: 'Lorie Line',
		    description: 'Lorie Line is a pianist based in Minneapolis, MN. This project included an online store using Authorize.net for credit card processing, a custom seat map creator allowing users to choose their seats when buying tickets, and standard content editable via a custom CMS. I also designed this website.',
		    link: 'http://www.lorieline.com',
		    photoDir: 'lorie',
		    tech: ['jQuery','Javascript','JSON','HTML5','CSS3','PHP','mySQL'],
		    photos: ['1','2','3','4','5','6']
	    },
	    {
		    name: 'Ride 2 Recovery',
		    description: 'Ride 2 Recovery is a non-profit organization that rasies money for wounded veterans by hosting long distance bike rides. This project included a custom CMS build from the ground up and a system to manage event registrations. This site was designed by a 3rd party. I created a pixel-perfect copy.',
		    link: 'http://www.ride2recovery.com',
		    photoDir: 'r2r',
		    tech: ['jQuery','Javascript','HTML5','CSS3','PHP','mySQL'],
		    photos: ['1','2','3','4']
	    }
    ];

  });
