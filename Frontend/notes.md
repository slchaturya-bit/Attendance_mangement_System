
#JavaScript
It is a high level, dynamically typed, loosely typed, single threaded asynchr, object oriented , event driven programming language
it is used to make web pages interactive
it  adds functionality and behaviour to websites it runs in browsers using node.js

we can declare variables using 
var 
let 
const

***var*** =>ES6
var a = 10 it indicates declaration
a=10 initialization
redeclartion and reintialization is possible
hoisting is possible with var // not displaying error

SCOPES
var is a functional scope
var is not block scope

***let**
let is a block scope and functional scope but basically it is a **block scope**
redeclaration is not possible but reinitialization is possible


***const***
redeclaration and reintialization is not possible 
so we prefer using const
const a block scope and functional scope but basically 

Es6 stands for ECMAScript 
ES6 features : let,const and arrow function

Datatypes in js
string
number
boolean


operators
arithematic
assignment
equality
comparision

**equailty**
loose equality(==)  ==> it is comparing only value
strict equality(===) ==> it is comparing both value and data



**asignment**

loops
for loop
while loop
do while loop
for of loop(arrays)
for in loop(objects)


types of functions
function declaration
function expression
arrow function(ES6)
anonymous function(unkonwn )

=>array methods
1.add/remove methods
*push
*pop -> to remove outdated one
shift
unshift
*splice
add elementsx
remove eleemnts
replace elements
arr.splice(start,deleteCount,item1,item2,..)


2.searching methods
includes
indexof
find
findIndex


3.iterative methods
forEach
map
filter
diff btw forEach and map method??


4.transformation methods
reduce
sort
reverse



DOM it acts as interface btw html and js
creating element
let p = document.getElementById("container");
p.innerText="like";
// it is used to create html elements in js
EVENT HANDLING
click event (onclick)
double click event (onbclick)
mouse hover event


REACT
JSX
component based architecture etc...
Virtaul DOM is a JS representation of the real DOM that React uses to track UI changes effeciently.

diffing is the process of comapring  old virtual DOM with the new virtaual dom to identify the exact changes the need to be applied to the Real DOM

Reconciliation is the process by which React updates the Real DOM effeciently after diffing by appling only the necessary changes


JSX (JavaScript Extensible MarkUp Language)
It is a syntax extension for JS that allows us to write HTML like code inside JavaScript
JSX is not HTML
It only looks like HTML,behind the scenes React converts JSX into JavaScript  using Babel(javaScript Complier)
JavaScript expressions can be used in jSX by using curly braces{}.

JSX rules
One Parent Element
className instead of class
java Script inside{} // javascript inside HTML

props(properties)
they are used to pass data from one component to another component
props are read-only inputs passed from parent component to a child component

Props are passes just like HTML attributes
//spread operator
const arr2 =[10,20,30,40]
const arr = arr2
console.log(arr)
arr.push(100)
console.log(arr)

const arr=[10,20,30]
const arr3=[...arr]
console.log()
spread operator is used to copy and merge the arrays

function greetings(..par){
    console.log(par)
}
greetings(10,20,30) //Rest operator

Prop drilling :- process of passing data from parent compoent tp deeply nested child component 
parent
|
child
|
g child
**redux -> to avoid prop drilling (how?)


//hooks
-useState : used to create and manage state in a functional component
const [state,setState]=useState(intialValue);array length is 2
state->intial state,setState->function
function is used to update the intial value

-useEffect : is a react hook used to perform side effects in a component
used for API calls,timers,database requests 
useEffect(()=>{
},[])
it allows two parameters function it consists of condition and the other is array

-useContext : 

BACKEND
npm node package manager
to import express in node 
API is build using express


