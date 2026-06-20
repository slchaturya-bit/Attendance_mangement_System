// console.log("welcome students")
// let a=10
//  let a =20
//  console.log(a==a)

// var name = "chaturya"
//  const name
//  name = "kumar"
// console.log(name)

// function greet() {
//     let a = "welcome"
//      console.log(a)
//  }
//  console.log(a)

// if(true){
//     let c = 100
//     console.log(c)
// }
// console.log(c)
// let a =10
// a+=10
// console.log(a)
// console.log(a++)
// console.log(a)

// const a =10
// console.log(typeof a)
// const b="10"
// console.log(typeof b)
// console.log(a==b)

// // conditinal operator
// const c=50
// const isgreaterthen50 = c>50 ? "yes" : "no"
// const age =12
// if(age>=18)
// {
// console.log("eligible to vote")
// }
// else{
//     console.log("")
// }

// const a =10
// const b=20
// const c =15
// if((a>b)&&(a>c)){
//     console.log(a)
// }
// else if((b>a)&&(b>c)){
//     console.log(b)
// }
// else{
//     console.log(c)
// }


// const age = 19
// const license = true
// if(age>=18){
//     if(license){
//         console.log("can drive")
//     }
// }
// else{
//     console.log("cannot drive")
// }

// const day=3
// switch(day){
//     case 1:
//         console.log("monday")
//         break
//     case 2:
//         console.log("tuesday")
//         break
//     case 3:
//         console.log("wednesday")
//         break
// }


// const arr =["red","green","black"]
// for(let name of arr){
//     console.log(name)
// }

//  const obj={
//     name:"Samsung A50",
//     disc:"stylish phone",
//      price:25000
// }

//  for(let mobile in obj)
//  {
//      console.log(mobile)
//      console.log(obj[mobile])
//  }

// // const arr2=["bottle","book","bag","ballon"]
// // for(let name in arr2){
// //     console.log(name)
// // }

// const arr2=[{
//     name:"Samsung A50",
//    disc:"stylish phone",
//      price:25000
// },{
// name:"Samsung A11",
//      disc:"stylish phone",
//     price:15000
// }
// ,{
//     name:"Samsung S26",
//     disc:"stylish phone",
//     price:250000
// }]

// for(let mobile of arr2)
// {
//     for(let details in mobile){
//         console.log(mobile[details])
//     }
// // }
// // mern()
// // function mern(){
// //     console.log("welcome to mern stack classes")
// // }
// // //mern()

// // //funtion expression
// // frontend()
// // const frontend = function(){
// //     console.log("let's start Frontend")
// // }


// // arrow function
// // const frontend = function() {
// //     console.log("let's start Frontend")
// //     return "Frontend completed"
// // }
// // const a=frontend()
// // console.log(a)

// // //arrow function ==> introduced ES6
// // const backend =() => "backend completed" // no need to indicate return
// // // in arrow function if we enter anything then we must have return type if not we will get the output as undefined
// // const b =backend()
// // console.log(b)


// //callback function  and higher order funtion
// // a funtion is acting like a parameter to the other function

// const higherorderfunction=(a) =>{
//      console.log("you are in HDF")
//      a()
// }

// const callbackfunction = () => {
//     console.log("I'm in callback function")
// }
// higherorderfunction(callbackfunction)

// const arr = [20,15,30,56]
// // const arr2=arr.map(function (num){
// //    return num*2


// // // })
// // const arr2=arr.map((num)=>num*2)
// // console.log(arr2)




// const arr = [10,54,18,23,53,[4,7,9]]
// console.log(arr.push(6))
// console.log(arr)

// //removes the last member 

// console.log(arr.pop())
// console.log(arr)

// console.log(arr.unshift("arun"))
// console.log(arr)

// console.log(arr.shift())
// console.log(arr)

// const arr2=[18,"chatu",58,477]
// arr2.splice(2,1)
// console.log(arr)


// arr2.splice(1,2)
// console.log(arr2)
// arr2.splice(0,2,"karthik")
// console.log(arr2)



// console.log(arr.pop([18,"chatu"]))
// console.log(arr.push("ace"))

// const arr3=["arun","vamshi","anusha"]
// console.log(arr3.indexOf("anush"))
// // if element is not present then it returns -1 as output

//find
// const arr = [{
//     name: "chaturya",
//     clg: "ace",
//     rollno: 59,
//     branch: "CSE"

// }, {
//     name: "chat",
//     clg: "ace",
//     rollno: 59,
//     branch: "CSD"
// }
//     , {
//     name: "chatu",
//     clg: "ace",
//     rollno: 59,
//     branch: "CSM"
// }]

// const StudentReport = arr.find(
//     s => s.name === "chatu"
// )
// console.log(StudentReport)

// // const StudentReport = arr.find(
// //     s => s.name === "chatuey"
// // )
// // console.log(StudentReport)
// //undefined caught an error





// //foreach()
// arr.forEach(students =>{
//     console.log(students)
// })


// //map very imp 
// const modarr=arr.map(student => student.name)
// console.log(modarr)


// const arr5 =[2,5,90,74]
// const modar=arr5.map(element => element+5)
// console.log(modar)


// // filter(it allows parameter as function)
// const filter_arr = arr.filter(student=>student.branch === "CSM")
// console.log(filter_arr)
// console.log(filter_arr.length)

//reduce and break


