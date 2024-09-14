// Global Scoping
var age = 34;
console.log(age);
{
    console.log(age);
}
if(true) {
    console.log(age);
}
for(let i=0; i<2; i++) {
    console.log("Loop", age);
}


// Function scoping
function sayHello() {
    console.log("Hello");
}
sayHello();

// Block Scoping
{
    var height = 180;
}
console.log(height); // var tou chal jaega but let or const nhi chalengy bcz ye dono block scoped hain but var nhi