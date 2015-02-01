angular.module('tag.controllers', [])
    .controller('ChatsCtrl', function($scope, Chats) {
      $scope.chats = Chats.all();
      $scope.remove = function(chat) {
        Chats.remove(chat);
      }
    })

    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
      $scope.chat = Chats.get($stateParams.chatId);
    })
    .controller('GroupsCtrl', function($scope, $stateParams,$ionicModal) {
      $scope.groups = [{
        name: 'Extra Ordinary Boys',
        info:'Lunch group',
        members: ['Sans','Khan','Chengat','Hari','Jyo']
      }]

      $ionicModal.fromTemplateUrl('/templates/modals/group-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal
      })

      $scope.openModal = function(group) {
        $scope.groupSelected=group;
        $scope.modal.show()
      }

      $scope.closeModal = function() {
        $scope.modal.hide();
      };

      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });
    })

    .controller('GroupDetailCtrl', function($scope, $stateParams, Chats) {
      $scope.chat = Chats.get($stateParams.chatId);
    })
    .controller('FriendsCtrl', function($scope, Friends) {
      $scope.friends = Friends.all();
    })

    .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
      $scope.friend = Friends.get($stateParams.friendId);
    })

    .controller('AccountCtrl', function($scope) {
      $scope.settings = {
        enableFriends: true
      };
    });
