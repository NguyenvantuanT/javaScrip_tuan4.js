//this 
var student = {
    name : "tuan",
    getName : function () {
        console.log(this.name);
        return this.name;
    }
};

var _deStudent = student.getName();


//global  & local 

check = "tuan";

var check2 = "tuan2";

console.log(check);

console.log(check2);


//call & apply

var person1 = {
    name : "Hieu" , age : 12 
};

var person2 = {
    name : "Cuong" , age : 22
};

var sayHello = function () { alert("Hello," + this.name);}; 
var sayGoodbye = function () {alert("Goodbye,   " + this.name);}


sayHello.call(person1);
sayGoodbye.call(person2);
sayHello.apply(person1);
sayGoodbye.apply(person2);

//chanes

function step1 () {
    console.log(te);
}

step2 () ;
function step2 () {
    te = 2 ;
    step1();
}

var te = "Global variables";

//bind
var checkNumericRange = function (value) {
    if (typeof value !== 'number') {
        return false;
    } else {
        return value >= this.minimum && value <= this.maximum;
    }
}

var range = { minimum: 10, maximum: 20 };

var boundCheckNumericRange = checkNumericRange.bind(range);

var result = boundCheckNumericRange(12);
console.log(result);

//currying

function add (a,b,c) {
    return a + b +c ;
}

console.log (add(1,2,3));
function addCurries(a){
    return (b) => {
        return (c) => {
            return a + b + c; 
        }
    }
}

console.log(addCurries(1)(2)(3));
const ad1 = addCurries(1);
const ad2 = ad1(2);
const ad3 = ad2(4);

console.log(ad3);

//lexical Scope 
function fOuter() {
    var x = "Hello" ; 
    function fInner () {
        x = "world";
    }
    fInner();
    return x ;
}
console.log(fOuter());

//Closures 

function outerf() {
    var x = "World";
    function innerFsetX(val) {
        x = "val";
    }
    return innerFsetX;
}
var a = outerf();
a("hello"); 

//Closures 
var sayBye = function (name) {
    var text    = "Bye,"+ name;
    return () => {
        console.log(text);
    }

}
sayBye('Me');
var calleMe = sayBye('Me');
calleMe();

var  registrations  ={
    class : "Database" ,
    student :[
        { studentID: "001", name:"Mai Ha Thi"},
        { studentID: "002", name:"Phung Trung Hieu"},
        { studentID: "003", name:"Nguyen Van Tuan"},
    ],
    clickEnrollment: function (){
        this.student.forEach((student) => {
            console.log(student.name + " already enrolled  class "+ this.class);
        });
    }
 }
 registrations.clickEnrollment();