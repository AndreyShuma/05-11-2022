"use strict"
let x=10;
function foo(x ,y) {
    x = x || 10;
    y = y || 20
    console.log(x+y)};
// foo(0,1);
const myName = "Andrey";
const userName="userName";
const fineCity = "fineCity";
const myCity = {
    myName,
    city: "New York",
    adress: {
        city: "Balasnoe",
        street: "st.5 aveny"
    },
    cityGreeting () {
        console.log("cityGreeting!!!!!")
    },
};
myCity.adress[userName]="undefind"
myCity[fineCity] = "Yes";
console.log(myCity);
myCity.cityGreeting();
let k;
let l;
function mum(k,l) {
    const n = k+l;
    console.log(n)
};
// mum(10, 30);
// console.dir(mum);
// console.dir(mum.name);
// console.dir(mum.length);
const personOne = {
    name: "Bob",
    age: 21
}
const personOne1111 = {
    name: "Bob"

}

function increasePersonAge (fhjhjhjk) {
    fhjhjhjk.age +=1;
    return fhjhjhjk
}

increasePersonAge(personOne);
increasePersonAge(personOne1111);
console.log(personOne);
console.log(personOne1111);
setTimeout()