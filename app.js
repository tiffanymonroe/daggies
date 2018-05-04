console.log('woof!');

const app = angular.module('Daggie', []);

app.controller('MainController', ['$http', function($http){
  const controller = this;
  this.landing = true; //show
  this.menu = true; // show
  this.services = true; //hide


  this.showLanding = function(){
    this.landing = true;
    this.menu = true;
    this.services = true; //hide
  }

  this.showServices = function(){
    this.landing = false;
    this.menu = false;
    this.services = false;
  }



}]); // end of MainController
