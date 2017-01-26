
(function() {
  function Message($firebaseArray, $cookies, Room) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);


    return {
      getByRoomId: function (roomId) {

        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      },
      send: function (newMessage, roomId) {
        messages.$add({
          username: $cookies.blocChatCurrentUser,
          content: newMessage,
          roomId: roomId

        });
      }
    };
  }



  angular
  .module('blocChat')
  .factory("Message", ['$firebaseArray', '$cookies', 'Room', Message]);

})();
