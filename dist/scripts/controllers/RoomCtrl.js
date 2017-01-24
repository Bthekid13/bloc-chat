(function() {

  function RoomCtrl(Room, $uibModal, Message) {
    this.title = "Bloc Chat";
    this.title2 = "Before chat: there wasn't Bloc.";
    this.rooms = Room.all;
    this.activeRoom = null;
    this.messages = null;

    this.addRoom = function() {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal1.html',
        controller: 'ModalCtrl',
        controllerAs: 'modal',
        resolve: {
        }
      });



      modalInstance.result.then(function (selectedItem) {
        // $ctrl.selected = selectedItem;
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });
    };

    this.setRoom = function(room) {
      this.activeRoom = room;
      this.messages = Message.getByRoomId(this.activeRoom.$id);
      console.log(this.activeRoom.$id, this.messages);
    };


  }




  angular
  .module('blocChat')
  .controller('RoomCtrl', ['Room', "$uibModal", 'Message', RoomCtrl]);

})();
