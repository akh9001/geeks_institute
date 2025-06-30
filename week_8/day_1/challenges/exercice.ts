function validateUnionType(value: any, allowedTypes: string[]): boolean {
	const valueType = typeof value;

	// Special case for null, because typeof null === "object"
	if (value === null && allowedTypes.includes("null")) {
		return true;
	}

	// Special case for Array, because typeof array === "object"
	if (Array.isArray(value) && allowedTypes.includes("array")) {
		return true;
	}

	return allowedTypes.includes(valueType);
}

// Usage examples:

console.log(validateUnionType(42, ["number", "string"]));       // true (number)
console.log(validateUnionType("hello", ["number", "string"]));  // true (string)
console.log(validateUnionType(true, ["number", "string"]));     // false (boolean not allowed)
console.log(validateUnionType(null, ["object", "null"]));       // true (null allowed)
console.log(validateUnionType([1, 2, 3], ["array"]));           // true (array allowed)
console.log(validateUnionType({}, ["object"]));                 // true (object allowed)
console.log(validateUnionType(() => { }, ["function"]));         // true (function allowed)
console.log(validateUnionType(undefined, ["undefined"]));       // true (undefined allowed)
  