
angular.module('AngularMDUI', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'tpls/home.html'
            });

        $urlRouterProvider.otherwise('/home');

        // $locationProvider.html5Mode(true).hashPrefix('!');
    }
]);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['AngularMDUI']);
});
