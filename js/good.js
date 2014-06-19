// bitwise: don't allow bitwise operators
var a = 1;
var b = a;

// curly: always use curly braces for blocks, even one-liners
if (a) { console.log(a); }

// eqeqeq: always use triple-equals rather than relying on type coercion
if (b === a) {
    console.log('b equals a');
}

var c = {
    d: 0,
    e: 1
};

// forin: always inner-wrap for/in loops with Object.hasOwnProperty
for (var i in c) {
    if (c.hasOwnProperty(i)) {
        console.log('key: %s', i);
    }
}

// freeze: disallow modifying builtin prototypes
var logToConsole = function (obj) {
    console.log('obj', obj);
};

// immed: always wrap self-executing functions
var f = (function doItNow () {
    logToConsole(c);
}());

// latedef: prevent using variables before they are defined
var g = f;
console.log('g', g);

// newcap: always capitalize constructor names
function Person () {

}

Person.prototype.speak = function () {
    // noempty: disallow empty blocks (just remove them)

    // noarg: disallow arguments.callee
    return 'snarf';
};

var p = new Person();
console.log('p', p.speak());

// nonew: always assign a new instance to a variable
var p2 = new Person();
p2.speak();

// plusplus: never use ++ or --
a += 1;
console.log('new value of a: %d', a);

// undef: disallow using undeclared variables
try {
    var waldo;
    console.log("where's %s", waldo);
} catch (e) {}

// unused: complain about unused variables (just remove them)
