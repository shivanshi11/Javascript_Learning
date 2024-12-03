// primitive datatype
// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.
const score = 100;
let userEmil; //undefined hi jaega

// data kis tarah se store krte hai kis tarah se use krte hai
//  us basis pe data divide hota hai us basis pe primitve 

// Primitve 
//  7 types => string, number, boolean, null, undefined, 
// symbol(value ko unqiue bane ke lea) bigint
//  isme value copy hoti hai orignal refrence nhai dea jata 


const id = Symbol('123');
const other = Symbol('123');

console.log(id === other);


// Refernce type(non primitive)
// memory me referce allocate kea ja skta hai 

// Array, objects, functions

const heros = ["shaktiman, doga"]
let obj = 
{
    name:"hello",
    age :22,
}

const myfunction = function(){
    console.log("my name is function");
    
}

// null ka type of object hota hai 