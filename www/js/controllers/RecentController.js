/**
 * Created by stharay on 1/31/2015.
 */
angular.module('tag.controllers')

    .controller('RecentCtrl', function($scope,$timeout) {

        $scope.updates=[
            {
                friend:"Sandeep",
                messages:['Hello','How is it']

            },
            {
                friend:"Neethu",
                messages:['How are you','Wazzup']

            }
        ];

        $scope.increment=1;

        $scope.doRefresh = function() {
            $scope.updates.unshift({
                friend:"Sriji"+$scope.increment,
                messages:['Good morning','tagger']

            });
            $scope.increment++;
            $timeout(function () {
                $scope.$broadcast('scroll.refreshComplete');
                $scope.$apply()
            },500)

        };

    });
