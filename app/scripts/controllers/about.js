'use strict';

/**
 * @ngdoc function
 * @name conexoesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the conexoesApp
 */
angular.module('conexoesApp')
  .controller('AboutCtrl', function($scope, $http, Restangular) {

    $scope.verifyCategory = function(category) {
      Restangular.all('questions/' + category.category + '/all').getList().then(function(result) {
        $scope.questions = result;
      });
    }

    $scope.finishSignup = function(dataset) {

      dataset.category = $scope.category;

      Restangular.all("signup").post(dataset).then(function(response) {
        alert('Cadastro realizado com sucesso!');
        console.log(response);
      }, function() {
        console.log("There was an error saving");
      });
    }

  });
