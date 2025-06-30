var greet = function (name, number) {
    return "Hello, ".concat(name, "! You are number ").concat(number, ".");
};
console.log(greet("Asmaa", 12));
var greetWithAge = function (name, number, age) {
    return "Hello, ".concat(name, "! You are number ").concat(number, " and you are ").concat(age, " years old.");
};
// console.log(greetWithAge("Asmaa", 12, 25));
var id = 123;
id = "abc123";
console.log(id);
var position = function (x) {
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
var getDetails = function (name, age) {
    return [name, age, "Hello ".concat(name, ", you are ").concat(age, " years old.")];
};
console.log(getDetails("Asmaa", 25)); // ["Asmaa", 25, "Hello Asmaa, you are 25 years old."]
