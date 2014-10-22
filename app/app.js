var app = angular.module('orgzzle', ['ionic'])

app.controller('orgzzleController', ['$scope', '$http', function ($scope, $http) {

    $http({
        method: 'GET',
        url: '/v2/accounts'
    }).success(function (data) {
        $scope.accounts = data
    }).error(function () {
        console.log('error gettings accounts')
    })
}])


