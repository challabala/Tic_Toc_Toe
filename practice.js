/*//This is single line comment
/*The is multi line 
comments lines in javascript 

//Arithmatic
console.log("hello world")
let a=5
let b=2
console.log(" a + b = ",a+b)
console.log(" a - b = ",a-b)
console.log(" a * b = ",a*b)
console.log(" a / b = ",a/b)
console.log(" a % b = ",a%b)
console.log(" a ** b = ",a**b)

//Unary operators
console.log(" a++ = ",a++)
console.log(" a++ = ",a)
console.log(" a-- = ",a--)
console.log(" a++ = ",a)
console.log(" ++a = ",++a)
console.log(" ++a = ",a)
console.log(" --a = ",--a)
console.log(" --a = ",a)

//Asignment operators
var c=10
var d=20
console.log(" c+=5 ",c+=5)
console.log(" d-=5 ",d-=5)
console.log(" c*=5 ",c*=5)
console.log(" d**=2 ",d**=2)
console.log(" c/=5 ",c/=5)

//Comparion operators
console.log(" a==b ",a==b)
console.log(" a!=b ",a!=b)
console.log(" a===b ",a===b)
console.log(" a>=b ",a>=b)
console.log(" a<=b ",a<=b)

//Logical operators
console.log(" a>b && a<b ",a>b&&a<b)
console.log(" a>b || a<b ",a>b||a<b)
console.log("  ! a<b ",!a<b)
*/
/*Conditional Statements
var age=10
if(age>=18){
    console.log("You can vote")
}
if(age<18){
    console.log("You can't vote")
}

var color="white"
if(color==="white"){
    console.log("white")
}
else{
    console.log("Balack")
}


var age=10

if(age>=18){
    console.log("Senior")
}
else if(age<18){
    console.log("Junior")
}
else{
    console.log("Middle")
}


var a=prompt("Enter a value:")

a>10?console.log("balaji"):console.log("pavan")


var a=prompt("Enter the number:")
if(a%5==0){
    console.log(a,"is multiple of 5")
}
else{
    console.log(a,"is not multiple of 5")
}

//lOOPS

for(let i=0;i<100;i++){
    console.log("balaji")
}

var s=0
for(let i=0;i<100;i++){
    s+=i
}
console.log("Total sum",s)


var s="challa balaji"
let l=0
for(var i of s){
    console.log("i=",i)
    l++
}
console.log("size of string:",l)


let student={
    name:"balaji",
    roll:21,
    age:22,
    pass:true
}
for(let key in student){
    console.log("key=",key," value=",student[key])
}


//Strings
let str="challa balaji"
 console.log(str.length)

//Template literals

let obj={
    item :"pen",
    price:10
}
let output="the cost of ${obj.item} is ${obj.price} rupees"
console.log(output)

console.log("the cost of ",obj.item,"is",obj.price,"rupees")


var str="Challa Balaji" //str.trim
let a=str.toUpperCase
let b=str.toLowerCase
console.log(a)
console.log(b)
//str.slice(str1,str2)
//str.concate(str2)
//tr.replace(str1,str2)



//Arrays__________________******

let heros = ["hanuman","superman","spiderman","blackman","ironman"]
for(var index=0 ; index<=heros.length ; index++){
    console.log(heros[index])
}

cites = ["hyd","chennai","kolkata","mumbai","bangluru"]
for(let city of cites){
    console.log(city.toUpperCase())
}


let marks=[56,45,77,87,95,96,22]
let sum=0
for(let val=0;val<=marks.length;val++){
    sum+=val
}
let avg=sum/marks.length
console.log("Average marks are:",avg)


cites = ["hyd","chennai","kolkata","mumbai","bangluru"];
console.log(cites);
cites.push("kerala","delhi");
console.log(cites)
cites.pop()
console.log(cites)
console.log(cites.toString())

let marvel = ["superman","batman","ironman"]
let hero = ["mega","super","stylish"]
let indian = ["hanuman","krish"]
let heroes = marvel.concat(hero,indian)
console.log(heroes) 
heroes.shift();
console.log(heroes);
console.log(marvel.slice(1,2));
console.log(marvel.splice(0,2,"balaji")); 


//_________Functions & Methods__________

function myFuction(){
    console.log("challa");
    console.log("balaji");
}
myFuction();


function Add(x,y){
    var sum=x+y;
    console.log(sum);
}
Add(10,20);


const arrowMul = (a,b) => {
    return a+b;
}


//Arrow functions

const vowelCount=(str)=>{
    let c=0
    for(const char of str){
        if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
            c++;
        }

    }
    return c;
}
 
//for each function
let arr = ["pune","delhi","mumbai"];

arr.forEach((val) =>{
    console.log(val.toLocaleUpperCase())
})


//_________________________foreach 

let a=[1,2,3,4,5]
a.forEach(function printValue(val){
    console.log(val);
})


let a=["pune","mumbai","chennai","kolkatta","hyderbad"]

a.forEach((val,idx,a)=>{
    console.log(val.toUpperCase(),idx,a);
});


//___________________________map
let  arr=[1,2,3,4,5,6];
let newArr = arr.map((val)=>{
    return val*2;
});
console.log(newArr);


//____________________________filter
let  arr=[1,2,3,4,5,6];
let evenArr = arr.filter((val)=>{
    return val%2==0;
});
console.log(evenArr);

//___________________________reduce
let a=[1,2,3,4,5,6,7,8,9]
const initialValue = 0;
const sumWithIn = a.reduce(
    (accumulator,currentvalue)=>accumulator+currentValue,initialValue,
);
console.log(sumWithIn);


//___________________DOM_______________

let heading = document.getElementById("heading");
console.dir(heading);

let headings = document.getElementsByClass("heading-class");
console.dir(headings);

let para = document.getElementByTagName("p");
console.dir(para);
-------------events-------------------
let btn1=document.querySelector("button");
btn1.onclick=()=>{
    console.log("Event handler");
    let a= 26;
    a++;
    console.log(a);
}
    
let btn1=document.querySelector("button");
btn1.onclick=(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientx,evt.clienty);
}


let heading = document.getElementsByClassName("heading")
console.log(heading);

let para = document.getElementsByTagName("p")
console.log(para);

let first_element = document.querySelector(".heading")
console.log(first_element);

let all_elements = document.querySelectorAll("p");
console.log(all_elements);

_____OBJECTS AND CLASSSES______________

 class toyotaCar {
    constructor(brand,millage){
        console.log("creating the new object");
        this.brand = brand;
        this.millage = millage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }

 }

let fortuner = new toyotaCar("fortuner",23  );//
let lexus = new toyotaCar();

 class person{
    constructor() {
        this.species = "homo sapiens";  
    }
    eat(){
        console.log("eat")
    }
    sleep(){
        console.log("sleep");
    }
 }

 class engineer extends person{
    work(){
        console.log("Solve problems.")
    }
 }
 class doctor extends person{
    work(){
        console.log("hospital")
    }
 }

 let balaji = new engineer();
 */ 


console.log("Hello, world!");
console.log("balaji");
setTimeout(() => {
console.log("This message is displayed after a delay");
}, 3000); 
console.log("vishnu");
