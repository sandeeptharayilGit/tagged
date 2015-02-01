/**
 * Created by stharay on 1/31/2015.
 */
angular.module('tag.controllers')

    .controller('GroupsCtrl', function($scope, $stateParams,$ionicModal) {
        $scope.groups = [{
            name: 'Extra Ordinary Boys',
            info:'Lunch group',
            members: ['Sans','Khan','Chengat','Hari','Jyo']
        }]

        $ionicModal.fromTemplateUrl('group-modal.html', {
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
    });
