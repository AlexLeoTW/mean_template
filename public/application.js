const mainApplicationModuleName = 'mean';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute', 'users', 'example']);

mainApplicationModule.config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.hashPrefix('!');
  }
]);

// Facebook redirect hack
// if (window.location.hash === '#_=_') {
//   window.location.hash = '#!';
// }

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainApplicationModuleName]);
});
