function Man(name, age) {
    this.name = name;
    this.age = age;
}

Man.prototype.live = function () {
    console.log('Hi, my name is ' + this.name + ', and i live in Rakoshyno!');
};

function Student(name, age) {
    Man.apply(this, arguments);
}
Student.prototype = new Man();

Student.prototype.study = function () {
    console.log('Hi, my name is ' + this.name + ', and i study at bursa');
};

var man = new Man('Ivan', 20);
var student = new Student('Petro', 25);


man.live();

student.live();
student.study();


function duckType(obj) {
    if (obj.live && obj.study) {
        return "student";
    }
    else if (obj.live) {
        return "man";
    }
    else return "Error";
}

function duckTypeModify() {
    if (this.live && this.study) {
        return "student";
    }
    else if (this.live) {
        return "man";
    }
    else return "Error";
}


var teacher = {};

console.log('This object type ' + duckType(man));
console.log('This object type ' + duckType(student));
console.log('This object type ' + duckType(teacher));

console.log('This object type ' + duckTypeModify.call(man));
console.log('This object type ' + duckTypeModify.call(student));
console.log('This object type ' + duckTypeModify.call(teacher));