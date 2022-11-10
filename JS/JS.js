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
