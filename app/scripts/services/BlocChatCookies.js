(function()  {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/modal2.html',
        controller: 'ModalCtrl',
        controllerAs: 'modal',
        resolve: {}
      });
    }
  }


 angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);

})();
