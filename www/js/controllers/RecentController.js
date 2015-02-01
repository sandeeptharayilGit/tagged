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
                friend:"Khan",
                messages:['How are you','Wazzup']

            }
        ];

        $scope.increment=0;
        $scope.dummyMessages=["Hello","Good morning","How are you?","Pull Hard","How is this?","Once more","Over","Told you, its over","Bye","Stop"];


        $scope.doRefresh = function() {

            if(!$scope.increment){
                $scope.updates.unshift({
                    friend:"Jyo",
                    messages:[($scope.dummyMessages[$scope.increment])]

                });
            }else if($scope.increment<10) {
                for (var index=0; index < $scope.updates.length; index++) {
                    if ($scope.updates[index].friend == "Jyo") {
                        $scope.updates[index].messages.push($scope.dummyMessages[$scope.increment]);
                    }
                }
            }
            $scope.increment++;
            $timeout(function () {
                $scope.$broadcast('scroll.refreshComplete');
                $scope.$apply()
            },500)

        };

    });
