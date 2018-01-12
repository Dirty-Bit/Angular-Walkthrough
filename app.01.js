/*
    Create, register, retrieve AngularJS modules.
    All modules should be registered using this mechanism.

    @param: name                => the name of the module to create or retrieve
    @param: requires            => (OPTIONAL) if specified, then a new module is being created. If unspecified then the module is being retrieved for further config
    @param: configFn            => (OPTIONAL) configuration function for the module
    @returns: angular.Module    => new module
*/
var app = angular.module('firstAngularApp', []);

/*
    register a new controller for the module
    @param: name                => the name of the controller
    @param: constructor         => a constructor for the controller
                                    
*/
app.controller('mainController', function()
{
    // bind this to 'vm'
    // we could bind to 'this' directly
    // but this will be a nice convention to tie back to the html
    // and this will handle our scoping issues on any callback functions
    var vm = this;

    // create a databinding to show within the double curlies
    vm.hello = 'world';

    // create an array of fruits
    // that we will print out in an unordered list 
    // within the html using ng-repeat
    vm.fruits = ['apple', 'orange', 'grape'];

    /*
        function to create an alert when we have clicked on the alert button
    */
    vm.alertMe = function(something)
    {
        something = something || 'something';

        alert(something);
    };
});

/*
    angular.Module.filter
    @param: name            => the name of the filter, a valid AngularJS expression identifier    
    @param: filterFactory   => factory function for the filter
*/
app.filter('makePlural', function()
{
    /*
        function that will, in this case, add an 's' to the end
        of each input within the array
    */
    return function(input)
    {
        return input + 's';
    };
});

/*
    create a service, this is an extra library of functions
    that we can use to keep our controllers clean

    this will be accessed by the post-list component

    inject the $http service
        $http           => http service, facilitates communication with remote HTTP servers via XHR or JSONP

*/
app.service('mainService', function($http)
{
    /*
        create a service function, will return a promise
    */
    this.getPosts = function()
    {
        /*
            .get() is a shortcut method for our $http service
            this will perform a get request, taking in the URL and optional config
    
            .get() returns a promise
        */
        return $http.get('https://jsonplaceholder.typicode.com/posts');
    };

    /*
        create a factory function, this will return an object
    */
    this.getPostsFactory = function()
    {
        $http.get('https://jsonplaceholder.typicode.com/posts').then(function(response)
        {
            return response.data;
        });
    };
});