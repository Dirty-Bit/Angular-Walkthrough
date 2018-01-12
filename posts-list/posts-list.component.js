/*
    create a controller for the posts-list component
    this will handle pulling down the posts
    and adding them to a list

    inject the mainService from app.01.js

*/
function PostsListController(mainService)
{
    // hold the controller as vm
    var vm = this;

    // call the service, it will return a promise
    // then bind this to the posts value
    mainService.getPosts().then(function(response)
    {
        // bind the data to the posts varaible within 'vm' for the controller
        vm.posts = response.data;
    });
};

/*
    register a component to an angular.Module

    @param: name            => the name of the component in camelCase.
                                this name will match an html element <camel-case>
    @param: options         => an object that defins the component, all properties are optional
*/
app.component('postsList', {

    // template html file, relative to the index.html
    templateUrl: 'posts-list/posts-list.html',

    // a constructor function with a newly created scope
    controller: PostsListController,

    // identifier name for the reference within the components scope
    controllerAs: 'vm'
});