var app = angular.module('app', []);
// Controllers

app.controller('mainController', ["$scope", "$http", function($scope, $http) {
	$scope.title='RateND';
    $scope.a = '';
    $scope.searchByKeyword = function() {

        $http.get('/asdf', $scope.title).then(function (res) {
        });
    }

    $scope.test = function() {
        $http.get('/test').then(function (res) {
            $scope.advices = res.data;
        });
    }
}]);

app.controller('loginController', ["$scope", "$http", "$window", function($scope, $http, $window) {
    $scope.logIn = function(username,password){ 
    $http.post('/login',{"username":username,"password":password},"application/json").then(function(res){
        $window.location.href = '/'
        })

    }
    
}]);

app.controller('userCreationController', ["$scope", "$http", function($scope, $http) {
    $scope.createUser = function(username,password,email,year,major,resHall){
        data = {"username":username,"password":password,"email":email,"year":year,"major":major,"resHall":resHall}

        $http.post('/user',data,"application/json").then(function(res){
            alert("LOL")

    });

    }

}]);

app.controller('reviewsController', ["$scope", "$http", function($scope, $http) {
        $scope.category = 'food'

    $http.get('/reviews',{params:{"category":$scope.category}}).then(function (res) {
        $scope.advices = res.data;
    });
}]);

app.controller('adviceController', ["$scope", "$http", function($scope, $http) {
    $scope.advices = [];
    $scope.category = 'food'

    $http.get('/advices',{params:{"category":$scope.category}}).then(function (res) {
        $scope.advices = res.data;
    });
}]);

app.controller('classesController', ["$scope", "$http", function($scope, $http) {
    $scope.classReviews = [];
    $scope.section = 'classReview';
    $http.get('/academic_entries', {params:{"section":$scope.section}}).then(function (res) {
       $scope.classReviews = res.data;
    });
}]);

app.controller('studyAdviceController', ["$scope", "$http", function($scope, $http) {
    alert('YO THIS AINT WORKIN');
    $scope.studyAdvices = [];
    $scope.section = 'studyAdvice';
    $http.get('/academic_entries', {params:{"section":$scope.section}}).then(function (res) {
        $scope.studyAdvices = res.data;
    });
}]);
