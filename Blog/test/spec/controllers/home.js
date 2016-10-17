'use strict';

describe('Controller: HomeCtrl', function () {

  beforeEach(module('Blog'));

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
