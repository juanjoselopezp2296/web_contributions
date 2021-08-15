/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myApp = angular.module('MyApp', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']); //'ngRoute'

myApp.filter('startFrom', function(){
    return function (data, start){
        return data.slice(start);
    };
});
myApp.controller("paginationController", function ($scope, filterFilter) {
    var pc = this;
    pc.updatePagination = function(){ 
        var filteredData = filterFilter($scope.jsonEmpList, $scope.searchtxt);
        // Pagination controls
        $scope.currentPage = 1;
        $scope.totalItems = filteredData.length;
        $scope.entryLimit = 10; // items per page
        $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);   
        $scope.jsonEmpListPagination = [{"val": 0}];   

        for(var i = 0; i < $scope.noOfPages; i++){
            var objectNew = {"val": i + 1};
            $scope.jsonEmpListPagination[i] = objectNew;
        }
    };
    pc.changeIndex = function(newIndex) {
        if(newIndex == 0){
            $scope.currentPage = 1;
        }else if(newIndex == ($scope.noOfPages + 1)){
            $scope.currentPage = $scope.noOfPages;
        }else{
            $scope.currentPage = newIndex;
        }
    };
    pc.loadTable = function(){
        var data = 
                    [
                      {"firstName":"John", "lastName":"Doe"},
                      {"firstName":"Anna", "lastName":"Smith"},
                      {"firstName":"Peter", "lastName":"Jones"},
                      {"firstName":"John", "lastName":"Doe"},
                      {"firstName":"Anna", "lastName":"Smith"},
                      {"firstName":"Peter", "lastName":"Jones"},
                      {"firstName":"John", "lastName":"Doe"},
                      {"firstName":"Anna", "lastName":"Smith"},
                      {"firstName":"Peter", "lastName":"Jones"},
                      {"firstName":"John", "lastName":"Doe"},
                      {"firstName":"Anna", "lastName":"Smith"},
                      {"firstName":"Peter", "lastName":"Jones"}
                    ]
                    ;
        $scope.jsonEmpList = data; 
        // pagination controls
        $scope.currentPage = 1;
        $scope.totalItems = $scope.jsonEmpList.length;
        $scope.entryLimit = 10; // items per page
        $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);   
        $scope.jsonEmpListPagination = [{"val": 0}];

        for(var i = 0; i < $scope.noOfPages; i++){
            var objectNew = {"val": i + 1};
            $scope.jsonEmpListPagination[i] = objectNew;
        } 
    };
    
    pc.loadTable();
});