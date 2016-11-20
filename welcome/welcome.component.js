angular.module('welcome').

  component('welcome', {
    templateUrl: 'welcome/welcome.template.html',
    controller: function WelcomeController($rootScope,$http) {
      var self = this;

      self.societies = [
        {
          name: 'University of Bristol Photographic Society',
          url: 'http://www.ubuphotosoc.com',
          description: 'The society for Bristol\'s photographers',
          socialmedia: [{
            name: 'Facebook Page',
            url:'http://www.facebook.com/ubuphotosoc'
          }, {
            name: 'Facebook Group',
            url:'http://www.facebook.com/groups/ubuphotosoc'
          }, {
            name: 'Flickr Profile',
            url:'https://www.flickr.com/ubuphotosoc'
          }, {
            name: 'Flickr Group',
            url:'https://www.flickr.com/groups/ubuphotosoc'
          }, {
            name: 'Twitter',
            url:'http://www.twitter.com/ubuphotosoc'
          }, {
            name: 'Instagram',
            url:'http://www.instagram.com/uob_photosoc'
          }]
        }, {
          name: 'University of Bath Photographic Society',
          url: 'https://www.bathstudent.com/socs/societies/photosoc/',
          description: 'We are the society obsessed with all things photographic!',
          socialmedia: [{
            name: 'Facebook Page',
            url:'https://www.facebook.com/photosocuob/'
          }, {
            name: 'Facebook Group',
            url:'https://www.facebook.com/groups/BathPhotosoc'
          }, {
            name: 'Twitter',
            url:'https://twitter.com/uob_photosoc'
          }, {
            name: 'Instagram',
            url:'https://www.instagram.com/uobphotosoc'
          }]
        }, {
          name: 'University of Birmingham Photographic Society',
          url: 'https://www.guildofstudents.com/organisation/7187/',
          description: 'PhotoSoc is open to all students of any level of ability or equipment - all you need is an interest in photography!',
          socialmedia: [{
            name: 'Facebook Page',
            url:'https://www.facebook.com/photosocuob/'
          }, {
            name: 'Facebook Group',
            url:'https://www.facebook.com/groups/photosocuob2016'
          }, {
            name: 'Flickr Group',
            url:'https://www.flickr.com/groups/photosoc/'
          }, {
            name: 'Twitter',
            url:'https://twitter.com/photosocuob'
          }, {
            name: 'Instagram',
            url:'https://www.instagram.com/photosocuob/'
          }]
        }
      ];

      $rootScope.random = function () {
        var i = Math.floor(Math.random() * self.societies.length);
        var url = self.societies[i].url;
        // console.log("index " + i + ": " + url);
        window.location = url;
        // return url;
      };
      ;
    }
  });
