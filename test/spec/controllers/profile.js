'use strict';

describe('Controller: ProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('Blog'));

  var ProfileCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfileCtrl = $controller('ProfileCtrl', {
      $scope: scope
    });
  }));

  it('something here', function () {

  });
});
