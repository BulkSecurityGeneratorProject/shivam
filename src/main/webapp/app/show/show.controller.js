(function () {
    'use strict';

    angular
        .module('shivamApp')
        .controller('ShowController', ShowController);

    ShowController.$inject = ['$scope', 'ShowService'];

    function ShowController($scope, ShowService) {
        var vm = this;

        $scope.controllerMessage = todayToString();

        vm.todayToString = todayToString;

        function todayToString() {
            var today = new Date();
            var dayName = today.toLocaleString('en-us', {weekday: 'long'});
            var monthName = today.toLocaleString('en-us', {month: 'long'});
            var date = today.getDate();

            return 'Today is ' + dayName + ', the ' + dateWithOrdinal(date) + ' of ' + monthName + ', ' + today.getFullYear();
        }

        function dateWithOrdinal(date) {
            return date + ShowService.getOrdinalIndicator(date);
        }

    }
})();
