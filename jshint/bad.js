var a = 1 & 1;
var b = a;

if (a) console.log(a);

if (b == a) {
    console.log('b equals a');
}

var c = {
    d: 0,
    e: 1
};

for (var i in c) {
    console.log('key: %s', i);
}

Object.prototype.logToConsole = function () {
    console.log('obj', this);
};

var f = function doItNow () {
    c.logToConsole();
}();

console.log('g', g);
var g = f;

function person () {

}

person.prototype.speak = function () {
    if (this) {

    }

    return arguments.caller + ' snarf';
};

var p = new person;
console.log('p', p.speak());

new person();

a++;
console.log('new value of a: %d', a);

try {
    console.log("where's %s", waldo);
} catch (e) {}

var h;
