import Building from './building.js';

var body = document.querySelector('body');
var building = new Building(10);

building.go_to_floor(1);
building.go_to_floor(5);
building.go_to_floor(7);

body.textContent = "Elevator has been running since you opened this page. Look in browser console to see what has been going on";