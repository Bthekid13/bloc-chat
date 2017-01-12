(function() {

  function RoomCtrl(Room) {
    this.title = "Bloc Chat"
    this.title2 = "Before chat, there wasn't Bloc."
    this.rooms = Room.all;

  }


  angular
    .module('blocChat')
    .controller('RoomCtrl', ['Room', RoomCtrl]);

})();
