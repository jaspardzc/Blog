'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  //beforeEach(angular.mock.module('mytodoGruntApp'));
  //expect(mytodoGruntApp.HomeCtrl).toBeDefined();
  beforeEach(module('myBlog'));

  var HomeCtrl;
  var scope;

  // Initialize the controller and a mock scope
  // Angular invokes service factories and controllers via injector
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));


  it('something here', function() {

    
  });

});
