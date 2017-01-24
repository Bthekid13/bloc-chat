(function() {

  function ModalCtrl(Room, $cookies, $uibModalInstance) {
    this.rooms = Room.all;
    this.create = function() {
      this.rooms.$add({
        name: this.newRoomName
      });
      $uibModalInstance.close();
    };

    this.cancel = function() {
      $uibModalInstance.dismiss();
    };

    this.createUsername = function() {
      $cookies.blocChatCurrentUser = this.newUsername;
      $uibModalInstance.close();
    };
  }


angular
.module('blocChat')
.controller('ModalCtrl', ['Room', '$cookies', '$uibModalInstance', ModalCtrl])

})();
