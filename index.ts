// var a=10;
// var b=10;
// console.log(a+b)

///////reverse string/////

// let a:string="aaj ki party aapki tarf se"

// let b:number=a.length
// let c:string=""
// console.log(b)
// for(let i:number=b-1;i>=0;i--){
//      c += a[i]
// }
// console.log(c)


// let a: string = "aaj ki party aapki tarf se";

// let b: number = a.length;
// let c: string = "";
// console.log(b);

// for (let i: number = b - 1; i >= 0; i--) {
//     c += a[i];
// }
// console.log(c);


///////////////////////////////////
// const names: string[] = [];

// names.push("Dylan"); // no error

// // names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// console.log(names);




// Type Assignment
// When creating a variable, there are two main ways TypeScript assigns a type:
// Explicit
// Implicit
// In both examples below firstName is of type string

// Explicit Type
// Explicit - writing out the type:
// let firstName: string = "Dylan";


// Implicit Type
// Implicit - TypeScript will "guess" the type, based on the assigned value:

// let firstName = "Dylan";


/////////
// let ourTuple: [number, boolean, string];

// // initialize correctly
// ourTuple = [5, false, 'Coding God was here'];

// // We have no type safety in our tuple for indexes 3+
// ourTuple.push('Something new and wrong');

// console.log(ourTuple);

//////////maximum value in array

// let a:number[]=[1,2,3,4,5,12]
// let max:number=0;

// function maximum(arr:number[]){
//    for(let i:number=0;i<a.length;i++){
//          if(max<arr[i]){
//           max=arr[i];
//          }
//    }
// }
// maximum(a)
// console.log(max)

//////////////////even odd filter in array
// let arr:number[]=[1,2,3,4,5,6,7]
// let even:number[]=[]
// let odd:number[]=[]

// for(let i:number=0;i<arr.length;i++){
//      if(arr[i]%2==0){
//           even.push(arr[i])
//      }
//      else{
//           odd.push(arr[i])
//      }
// }
// console.log("even",even)
// console.log("odd",odd)


///////////factorial
//  let num:number=5
//  let fact:number=1
//  for(let i:number=1;i<=num;i++){
//      fact=fact*i
//  }
//  console.log(fact)


//////////Write a program to find a number is prime or not 

// let value: boolean = false
// let num: number = 6

// function isprime(a: number): boolean {
//      if (num <= 1) {
//           return false
//      }

//      for (let i: number = 2; i < a; i++) {
//           if (num % i == 0) {
//                return false
//           }
//      }
//      return true
// }
// if (isprime(num)) {
//      console.log("it is prime")
// }
// else{
//      console.log("not prime")
// }

// let a:number=10
// let b:number=20


// let c:number=a+b
// console.log(a+b)
// console.log(c)



/////////////
// let a:string="my name is gautam"

// let b:string=""

// for(let i:number=0;i<a.length;i++){
//      b=a[i]+b
// }
// console.log(b)


//////////////////////
// function add(a:number,b:number):number{
//      return a+b
// }

// let c:number=add(5,4)
// console.log(c)

// function iseven(a:number):boolean{
//      if(a%2==0){
//           return true
//      }
//      else{
//           return false
//      }

// }
// console.log(iseven(4))

// function devfoureight(a:number):boolean{
//      if(a%4==0&&a%8==8){
//           return true
//      }else{
//           return false
//      }
// }
// console.log(devfoureight(16))

// ///

// let myNum=5
// myNum=55
// console.log(myNum)


// jab dynamic data kka use karte hai tab any ka use karte hai 

// function add(a:string,b:String){
//     console.log(a+" "+b)
// }
// add("gautam","gavande")


// function add(a:number,b:number){
//     console.log(a+b)
// }
// add(5,6)

/////////////////////////////////////
// let a:boolean=true
// let b:boolean=false
// let c:boolean=a&&b
// console.log(c)

////////////////////////////////////////////////
// let a:boolean=true
// let b:boolean=true
// let e:boolean=false
// let c:boolean=a&&b ||e
// console.log(c)


/////////////
// function isEven(a:number){
//        return a%2===0 
// }
// console.log(isEven(6))

///////////Big int//////////
// let binumber:any=3002222222242
// console.log(binumber)



/////////////Any same javascript jaise hi hai jaise variable banate hai vaise hi hai koi anter nahi hai
// let a:any=5
// a="hiii"
// a=true
// console.log(a)


//////////unknow type me ham type check kar sakte hai ye safty provide karta hai ,same hai any ke sman but safe hai anky ke mukable
// let a:unknown;
// a=5;
// a="hiii"
// a=true
// console.log(a)

// if(typeof a==="number"){
//     console.log(a+5)
// }else if(typeof a=== "boolean"){
//     console.log(a)
// }


// async function fetchData(): Promise<unknown> {
//     const response = await fetch( 'https://api.example.com/data');
//     const data = await response.json();
//     return data;
//     }
//     async function processData() {
//     const response = await fetchData();
//     if (typeof response === 'object') {
//     //• Perform• operations• on• the • response object
//     }
// } 


///////function 
//  function profile(name:string,id:number){
//     console.log(`your name is ${name} and id is ${id}`)
//  }

//  profile("gautam",11)


// const isPalin=(str:string):boolean=>{
//        let mypali=str.split("").reverse().join("")
//        return mypali===str
// }

// console.log(isPalin("12321"))

// const isAvg =(a:number[])=>{
//    const sum= a.reduce((sum,e)=>{
//              return sum+=e
//        })
//        return sum/a.length
// }

// console.log(isAvg([5,2,3,5,7,8]))

//////////this is for default parameter

// function defaultfun(name:string,id=3){
//     console.log(`your name is ${name} and id is ${id}`)
// }
// defaultfun("aaashu",55)

// //////////optional paramiter////////
// function optionalfun(name: string, id?: number) {
//     console.log(`your name is ${name} and id is ${id}`)
// }
// optionalfun("aaashu")



//a.using squire brackets

// const number:number[]=[1,2,3,4,5,6]

// //b.using the Array constractor
// const number1:number[]=new Array(1,2,3,4,5,6)

// //c. using the array.of method:
// const names:string[]=Array.of("vinod","thapa","youtube")   

// let arr:string[]=["banana","kivi","mango","orange"]

// let newarr=arr.push("orange2") //new arr length return karta hai
// console.log(arr) //[ 'banana', 'kivi', 'mango', 'orange', 'orange2' ]

// let arr:string[]=["name","age","time","date"]

// ////////////for loop
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
// ///////////for of loop in typescript 

// for(const value of arr){
//     console.log(value)
// }


// for(const value in arr){
//     console.log(value)   //index provide karta hai
// }


// let arr:number[]=[1,2,3,4,5,6]
// let newarr=arr.map((e:number)=>{
//     return e*5
// })
// console.log(newarr)



// let arr:number[]=[1,2,3,4,5,6]
// let newarr:string[]=arr.map((e:number)=>{
//     return e.toString()
// })
// console.log(newarr)


// let arr:number[]=[1,2,3,4,5,6]
// let newarr:number[]=arr.filter((e:number)=>{
//     return e%2===0
// })
// console.log(newarr)


//object in typescript

// const person={
//     name:"Rahul",
//     age:25,
//     address:{
//         city:"delhi",
//         state:"delhi",
//         country:"india"
//         }
//         }
    
//  console.log(person.name)
//  console.log(person.address.city)
//  person.address.city="bhopal"
// //  person.address.city=1233 //error
//    console.log(person.address.city)  


// const person:{
//     name:string,
//     age:number,
//     address:{
//         city:string,
//         state:string,
//         country:string
//         }
// }={
//     name:"Rahul",
//     age:25,
//     address:{
//         city:"delhi",
//         state:"delhi",
//         country:"india"
//         }
//         }
    
//  console.log(person.name)
//  console.log(person.address.city)
//  person.address.city="bhopal"
// //  person.address.city=1233 //error
//    console.log(person.address.city)  

//    const person1:{
//     name:string,
//     age:number,
//     address:{
//         city:string,
//         state:string,
//         country:string
//         }
// }={
//     name:"Rahul1",
//     age:25,
//     address:{
//         city:"delhi",
//         state:"delhi",
//         country:"india"
//         }
//         }
    
//  console.log(person1.name)
//  console.log(person1.address.city)
//  person1.address.city="bhopal"
// //  person.address.city=1233 //error
//    console.log(person1.address.city) 


//    const person2:{
//     name:string,
//     age:number,
//     address:{
//         city:string,
//         state:string,
//         country:string
//         }
// }={
//     name:"Rahul2",
//     age:25,
//     address:{
//         city:"delhi",
//         state:"delhi",
//         country:"india"
//         }
//         }
    
//  console.log(person2.name)
//  console.log(person2.address.city)
//  person2.address.city="bhopal"
// //  person.address.city=1233 //error
//    console.log(person2.address.city) 




//////////////////type alias in type script

// repited property ke lia alias create karte hai

// type Person={   // person repeteation bar bar  same aa raha hai isi lia ak alise(same type) defined kar dete hai
//     name:string,  //type or capital word me type ka name dikhana padta hai
//     age:number,
//     class?:string,  // ? se optional key ban jati hai agar kisi object me value agar nahi bhi di to bhi chal jayenga
//     address:{
//         city:string,
//         state:string,
//         country:string
//     }
// }

// const person:Person={
//     name:"Rahul",
//     age:25,
//     address:{
//         city:"delhi",
//         state:"delhi",
//         country:"india"
//         }
//         }
    
//  console.log(person.name)
//  console.log(person.address.city)
//  person.address.city="bhopal"
// //  person.address.city=1233 //error
//    console.log(person.address.city)  

// const person1:Person={
//     name:"Rahul1",
//     age:25,
//     address:{
//         city:"delhi",
//         state:"delhi",
//         country:"india"
//         }
//         }
    
//  console.log(person1.name)
//  console.log(person1.address.city)
//  person1.address.city="bhopal"
// //  person.address.city=1233 //error
//    console.log(person1.address.city) 


// const person2:Person={
//     name:"Rahul2",
//     age:25,
//     address:{
//         city:"delhi",
//         state:"delhi",
//         country:"india"
//         }
//         }
    
//  console.log(person2.name)
//  console.log(person2.address.city)
//  person2.address.city="bhopal"
// //  person.address.city=1233 //error
//    console.log(person2.address.city) 



// this for functin we are also use type alse 

// type Person={
//     name:string,
//     age:number,
// }
// const person={name:"rahul",age:25}

// const show=(person:Person)=>{
//       console.log(`my name is ${person.name} and my age is ${person.age}`)
// }
// show(person)


//enum in typescrript
// enum role{
//     user,
//     admin
// }



enum role{
    user="user",
    admin="admin"
}

type logiuser={
    name?:String,
    email:String,
    password:String,
    role:role
}

let user1:logiuser={
    email:"gautam@gamil.com",
    password:"12344",
    role:role.admin
}
let user2:logiuser={
    email:"gaumtam@gamil.com",
    password:"12344",
    role:role.user
}

// const isAdmin:(user:logiuser)=>String=(user:logiuser):String=>{
//     const {email,role}=user;
//     return role ==="admin"?`${email} is allow to edit the website`:`${email} is not allow to edit the website`
// }
// console.log(isAdmin(user1))
// console.log(isAdmin(user2))


const isAdmin:(user:logiuser)=>String=(user:logiuser):String=>{
    const {email,role}=user;
    return role ==="admin"?`${email} is allow to edit the website`:`${email} is not allow to edit the website`
}
console.log(isAdmin(user1))
console.log(isAdmin(user2))

