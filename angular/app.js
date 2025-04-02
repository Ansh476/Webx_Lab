var app = angular.module("BookApp", []);

app.controller("MainController", function ($scope, AuthService) {

    $scope.message = "Hello, AngularJS!";

    $scope.user = {};
    $scope.authMessage = "";

    $scope.login = function () {
        if (AuthService.authenticate($scope.user.username, $scope.user.password)) {
            $scope.authMessage = "✅ Login successful!";
        } else {
            $scope.authMessage = "❌ Invalid credentials. Try again.";
        }
    };

    $scope.books = [
        { title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction" },
        { title: "Sapiens", author: "Yuval Noah Harari", genre: "History" },
        { title: "The Pragmatic Programmer", author: "Andrew Hunt", genre:"Technology" },
        { title: "1984", author: "George Orwell", genre: "Dystopian" }
    ];
});
