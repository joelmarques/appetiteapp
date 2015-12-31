
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('intro', {
                url: "/intro",
                templateUrl: "templates/intro.html",
                controller: 'IntroCtrl'
            })

            .state('cardapio_ufpa', {
                url: "/cardapio_ufpa",
                templateUrl: "templates/app/cardapio_ufpa.html",
                controller: 'CardapioUfpaCtrl'
            })

            .state('cardapio_unicamp', {
                url: "/cardapio_unicamp",
                templateUrl: "templates/app/cardapio_unicamp.html",
                controller: 'CardapioUnicampCtrl'
            })

            .state('product_menu', {
                url: "/product/menu/:cateId",
                templateUrl: "templates/app/product_menu.html",
                controller: 'ProductMenuCtrl'
            })

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/app/menu.html",
                controller: 'AppCtrl'
            })
            .state('app.belem', {
                url: "/belem",
                views: {
                    'menuAppContent': {
                        templateUrl: "templates/app/belem.html"
                    }
                }
            })
            .state('app.sao_paulo', {
                url: "/sao_paulo",
                views: {
                    'menuAppContent': {
                        templateUrl: "templates/app/sao_paulo.html"
                    }
                }
            })
            .state('app.shopping_cart', {
                url: "/shopping_cart",
                views: {
                    'menuAppContent': {
                        templateUrl: "templates/app/shopping_cart.html"
                    }
                }
            })
            .state('app.settings', {
                url: "/settings",
                views: {
                    'menuAppContent': {
                        templateUrl: "templates/app/settings.html"
                    }
                }
            })
            .state('app.profile', {
                url: "/profile",
                views: {
                    'menuAppContent': {
                        templateUrl: "templates/app/profile.html"
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/intro');
    });
