"use strict";
{
    const greet = (name, number) => {
        return `Hello, ${name}! You are number ${number}.`;
    };
    console.log(greet("Asmaa", 12));
}
const greetWithAge = (name, number, age) => {
    return `Hello, ${name}! You are number ${number} and you are ${age} years old.`;
};
// console.log(greetWithAge("Asmaa", 12, 25));
let id = 123;
id = "abc123";
console.log(id);
const position = (x) => {
    if (x > 0) {
        return "positive";
    }
    else if (x < 0) {
        return "negative";
    }
    else {
        return "zero";
    }
};
console.log(position(10)); // positive
console.log(position(-5)); // negative
console.log(position(0)); // zero
const getDetails = (name, age) => {
    return [name, age, `Hello ${name}, you are ${age} years old.`];
};
console.log(getDetails("Asmaa", 25)); // ["Asmaa", 25, "Hello Asmaa, you are 25 years old."]
const createPerson = (name, age) => {
    return {
        name: name,
        age: age
    };
};
console.log(createPerson("Elona", 30)); // { name: "Asmaa", age: 25 }
{ //! Example of type assertion in TypeScript : exercice 7
    //! this part should be in tsx file, but for simplicity, we will keep it here
    // 1. Get the element by ID
    const inputElement = document.getElementById("myInput");
    // 2. Type assertion: tell TypeScript this is an HTMLInputElement
    const myInput = inputElement;
    // 3. Access and set the value property safely
    if (myInput) {
        myInput.value = "Hello, TypeScript!";
    }
    else {
        console.error("Element with id 'myInput' not found.");
    }
}
function getAction(role) {
    switch (role.toLowerCase()) {
        case "superadmin":
            return "Full access granted";
        case "admin":
            return "Manage users and settings";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        case "guest":
            return "Limited access";
        default:
            return "Invalid role";
    }
}
// Test the function with different roles
console.log(getAction("admin")); // Output: Manage users and settings
console.log(getAction("editor")); // Output: Edit content
console.log(getAction("Viewer")); // Output: View content
console.log(getAction("guest")); // Output: Limited access
console.log(getAction("unknown")); // Output: Invalid role
// 2. Function implementation
function greet(name) {
    if (name) {
        return `Hello, ${name}!`;
    }
    else {
        return "Hello, there!";
    }
}
// Usage examples:
console.log(greet()); // Hello, there!
console.log(greet("Asmaa")); // Hello, Asmaa!
