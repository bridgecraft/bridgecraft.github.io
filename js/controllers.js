angular.module('app.controllers', [])
  
.controller('bridgecraftUpholsteryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('productsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.gallery = [];
    $scope.gallery = [{
        line1: 'Bedroom',
        line2: 'Fun'
    },{
        line1: 'Bedroom',
        line2: 'Fun'
    },{
        line1: 'Bedroom',
        line2: 'Fun'
    },{
        line1: 'Bedroom',
        line2: 'Fun'
    },{
        line1: 'Bedroom',
        line2: 'Fun'
    },{
        line1: 'Bedroom',
        line2: 'Fun'
    },{
        line1: 'Bedroom',
        line2: 'Fun'
    },]
}])
 