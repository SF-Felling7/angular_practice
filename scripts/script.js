console.log( 'WORKING' );

var psiApp = angular.module( 'psiApp', []);

psiApp.controller( 'ourFirstController', function() {

  //view model
  var vm = this;

  vm.objectOne = 'Hey psi!' ;
  vm.objectTwo = 'Lets make an app!!' ;
  vm.objectThree = "It's called the psiApp"  ;

});
