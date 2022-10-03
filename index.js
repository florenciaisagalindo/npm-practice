// How to know npm version
//$ npm --v

// How to initialize npm
//$ npm init

// How to install node_modules
//$ npm install

// Example to print in the console the numbers of an array
const _ = require('lodash');

const numbers = [33, 46, 50, 9];

_.each(numbers, function(number, i) {
    console.log(number);
});

// Example to install a Dev dependencie
//$ npm install --save-dev gulp gulp-sass   

// How to remove a dependencie
//$ npm uninstall gulp-sass --save-dev

// Remove a dependencie
//$ npm remove gulp --save-dev

// Update Lodash
//$ npm update lodash 

//Install nodemon (For not to restar the server with each change)
//$ npm install -g nodemon
//$ npm root -g
//$ nodemon

//$ npm install live-server-g
//$ live-server

//Remove global dep
//$ npm remove -g nodemon


//Start 
//$ npm start
