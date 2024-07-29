// var a=10;
// var b=10;
// console.log(a+b)
var person = {
    name: "Rahul",
    age: 25,
    address: {
        city: "delhi",
        state: "delhi",
        country: "india"
    }
};
console.log(person.name);
console.log(person.address.city);
person.address.city = "bhopal";
//  person.address.city=1233 //error
console.log(person.address.city);
var person1 = {
    name: "Rahul1",
    age: 25,
    address: {
        city: "delhi",
        state: "delhi",
        country: "india"
    }
};
console.log(person1.name);
console.log(person1.address.city);
person1.address.city = "bhopal";
//  person.address.city=1233 //error
console.log(person1.address.city);
var person2 = {
    name: "Rahul2",
    age: 25,
    address: {
        city: "delhi",
        state: "delhi",
        country: "india"
    }
};
console.log(person2.name);
console.log(person2.address.city);
person2.address.city = "bhopal";
//  person.address.city=1233 //error
console.log(person2.address.city);
//type alias in type script
