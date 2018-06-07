(function() {
    'use strict';

    angular
        .module('shivamApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('show', {
            parent: 'app',
            url: '/show',
            data: {
                authorities: [],
                pageTitle: 'global.menu.show'
            },
            views: {
                'content@': {
                    templateUrl: 'app/show/show.html',
                    controller: 'ShowController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('show');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
