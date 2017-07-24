angular.module('echo').factory('echoReq', function($resource) {
    return $resource(
      '/echo'
    );
});
