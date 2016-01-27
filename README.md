Elevator TDD using ES6, WebPack, Mocha, Chai, Material-CSS
===========

By: Jean-François Topige

01/27/2016

A code example modeling a simple elevator.  Using TDD with TDD using ES6, WebPack, Mocha, Chai
the code demonstrates the different evelator funtionalities.

## Elevator Behavior

* building is created with floors
* elevator can traverse throught those floors in up and down direction
* elevator cannot go to a non existant floor
* elevator door open and closes when destination floor is reached
* elevator give direction in which it's going
* messages are logged in the console to see where the elevator is going

## Setup
1. `npm install`
2. `npm test` to run unit tests
3. `npm run dev` then go to http://localhost:8080/webpack-dev-server/

If 3. does not work 

4. `webpack` or `npm run watch` locate the build folder and open `index.html`

## Improvements
* some class contains methods and properties that are public, but should not be. There seems to be couple of ways to avoid this, but they all seems kinda or walkaroundish.
* the modules can be even more spread to allow elevator to accept multiple floor request
* there should be a call elevator button on each floor
* react could be use for the front side, due to time contraints and knowledge i didn't put it in

References :
https://onsen.io/blog/mocha-chaijs-unit-test-coverage-es6/