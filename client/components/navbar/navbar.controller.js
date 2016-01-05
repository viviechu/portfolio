'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'About',
    'state': 'main'
  },{
    'title': 'Resume',
    'state': 'resume'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('profileApp')
  .controller('NavbarController', NavbarController);
