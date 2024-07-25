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

function defaultfun(name:string,id=3){
    console.log(`your name is ${name} and id is ${id}`)
}
defaultfun("aaashu",55)

//////////optional paramiter////////
function optionalfun(name: string, id?: number) {
    console.log(`your name is ${name} and id is ${id}`)
}
optionalfun("aaashu")