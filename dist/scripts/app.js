(function () {
  function config($stateProvider, $locationProvider) {

    $locationProvider
      .html5Mode({
      enabled: true,
      requireBase: false
    });

    $stateProvider

      .state('rooms', {
        url: '/',
        controller: 'RoomCtrl as RoomCtrl',
        templateUrl: '/templates/rooms.html'
      });
  }

  angular
    .module('blocChat', ['ui.router', 'ngCookies' , 'firebase', 'ui.bootstrap'])
    .config(config);

})();
