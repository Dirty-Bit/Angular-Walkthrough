# Angular Walkthrough

A quick walkthrough tutorial of AngularJS 1.6.x

Requires CORS fix for Chrome, as file:// protocol will be blocked when pulling in components. 

It is suggested to use [http-server](https://github.com/indexzero/http-server) via Node.js.

After installing [Node.js](https://nodejs.org), install http-server globally from npm

`npm install -g http-server`

Change directory to your static HTML/JS/CSS folder

`cd {YOUR_DIRECTORY_HERE}`

Then run the http-server, it will run on port 8080 by default and you can visit http://localhost:8080 to view html files

`http-server`

## Version 0.1

Followed along from [WalkThroughCode](https://www.youtube.com/watch?v=9_RX6Y8YjUg&list=PL7sCSgsRZ-sl6jCxRYMwFBY-_wdVDbioz).

Simple single page, unstyled getting familiar with Angular.

Components

+ [angular.Module](https://docs.angularjs.org/api/ng/function/angular.module)
+ [angular.Module filter](https://docs.angularjs.org/api/ng/type/angular.Module#filter)
+ [angular.Module component](https://docs.angularjs.org/api/ng/type/angular.Module#component)

+ [ngApp](https://docs.angularjs.org/api/ng/directive/ngApp)
+ [ngController](https://docs.angularjs.org/api/ng/directive/ngController)
+ [ngRepeat](https://docs.angularjs.org/api/ng/directive/ngRepeat)
+ [ngClick](https://docs.angularjs.org/api/ng/directive/ngClick)