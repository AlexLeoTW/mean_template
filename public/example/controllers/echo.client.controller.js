angular.module('example').controller('EchoController', ['$scope', 'echoReq',
  function ($scope, echoReq) {
    $scope.response = 'echo content...';
    $scope.getResponse = function () {
      echoReq.get(function (data) {
        $scope.response = JSON.stringify(data);
      });
    };
  }
]);
