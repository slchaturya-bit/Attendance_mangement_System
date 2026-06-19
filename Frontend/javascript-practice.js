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

 const obj={
    name:"Samsung A50",
    disc:"stylish phone",
     price:25000
}

 for(let mobile in obj)
 {
     console.log(mobile)
     console.log(obj[mobile])
 }

// const arr2=["bottle","book","bag","ballon"]
// for(let name in arr2){
//     console.log(name)
// }

const arr2=[{
    name:"Samsung A50",
   disc:"stylish phone",
     price:25000
},{
name:"Samsung A11",
     disc:"stylish phone",
    price:15000
}
,{
    name:"Samsung S26",
    disc:"stylish phone",
    price:250000
}]

for(let mobile of arr2)
{
    for(let details in mobile){
        console.log(mobile[details])
    }
}