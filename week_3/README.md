# 📘 Data Structures in JavaScript & Python

## 📦 JavaScript Data Structures

| Structure | Method       | Method Description                             | Example                         |
|-----------|--------------|------------------------------------------------|---------------------------------|
| Array     | `push(x)`    | Add element to end                             | `arr.push(5)` → `[1,2,3,5]`     |
| Array     | `pop()`      | Remove and return last element                 | `arr.pop()` → returns `3`       |
| Array     | `shift()`    | Remove and return first element                | `arr.shift()` → returns `1`     |
| Array     | `unshift(x)` | Add element to beginning                       | `arr.unshift(0)` → `[0,1,2,3]`   |
| Array     | `map(fn)`    | Create new array by transforming each element  | `arr.map(n => n*2)`             |
| Array     | `filter(fn)` | Create new array with elements passing a test  | `arr.filter(n => n>1)`          |
| Array     | `forEach(fn)`| Execute a function for each element            | `arr.forEach(console.log)`      |
| Array     | `slice(a,b)` | Return a shallow copy from index `a` to `b-1`  | `arr.slice(1,3)`                |
| Object    | `obj.key`    | Access a property                              | `obj.name`                       |
| Object    | `delete`     | Remove a property                              | `delete obj.age`                |
| Object    | `Object.keys(obj)`   | Get an array of own property names           | `Object.keys(obj)`              |
| Object    | `Object.values(obj)` | Get an array of own property values          | `Object.values(obj)`            |
| Set       | `add(x)`     | Add a new unique value                         | `s.add(4)`                      |
| Set       | `has(x)`     | Check if a value exists                        | `s.has(4)` → `true`             |
| Set       | `delete(x)`  | Remove a value                                 | `s.delete(4)`                   |
| Map       | `set(k,v)`   | Add or update a key–value pair                 | `m.set('a',1)`                  |
| Map       | `get(k)`     | Retrieve value by key                          | `m.get('a')` → `1`              |
| Map       | `has(k)`     | Check if a key exists                          | `m.has('a')` → `true`           |
| Map       | `delete(k)`  | Remove a key–value pair                        | `m.delete('a')`                 |
| String    | `slice(a,b)` | Extract substring between `a` and `b-1`        | `"hello".slice(1,3)` → `"el"`   |
| String    | `split(sep)` | Split into array by separator                  | `"a,b,c".split(',')` → `['a','b','c']` |
| String    | `replace(a,b)`| Replace first occurrence of `a` with `b`       | `"foo".replace('f','b')` → `"boo"` |
| String    | `toUpperCase()` | Convert all characters to uppercase           | `"hi".toUpperCase()` → `"HI"`   |
| String    | `includes(s)`| Check if substring `s` exists                  | `"test".includes('es')` → `true`|

---

## 🐍 Python Data Structures

| Structure | Iterable | Mutable | Method        | Method Description                           | Example                          |
|-----------|----------|---------|---------------|-----------------------------------------------|----------------------------------|
| list      | ✅       | ✅      | `append(x)`   | Add element to end                            | `lst.append(4)` → `[1,2,3,4]`    |
| list      | ✅       | ✅      | `pop()`       | Remove & return last element                  | `lst.pop()` → returns `3`        |
| list      | ✅       | ✅      | `extend(it)`  | Add all elements from another iterable        | `lst.extend([5,6])`              |
| list      | ✅       | ✅      | `insert(i,x)` | Insert `x` at index `i`                      | `lst.insert(1,'a')`              |
| list      | ✅       | ✅      | `remove(x)`   | Remove first occurrence of `x`                | `lst.remove(2)`                  |
| list      | ✅       | ✅      | `reverse()`   | Reverse list in place                         | `lst.reverse()`                  |
| list      | ✅       | ✅      | `sort()`      | Sort list in place                            | `lst.sort()`                     |
| tuple     | ✅       | ❌      | `count(x)`    | Count occurrences of `x`                      | `tup.count(2)`                   |
| tuple     | ✅       | ❌      | `index(x)`    | Find first index of `x`                       | `tup.index(3)`                   |
| set       | ✅       | ✅      | `add(x)`      | Add an element                                | `s.add(10)`                      |
| set       | ✅       | ✅      | `remove(x)`   | Remove `x` or raise `KeyError`                | `s.remove(2)`                    |
| set       | ✅       | ✅      | `discard(x)`  | Remove `x` if present (no error otherwise)    | `s.discard(100)`                 |
| set       | ✅       | ✅      | `union(o)`    | Return a new set with elements from both      | `s.union({5,6})`                 |
| set       | ✅       | ✅      | `intersection(o)` | Return common elements                   | `s.intersection({2,3})`          |
| dict      | ✅       | ✅      | `get(k,d)`    | Return value for `k`, or `d` if missing       | `d.get('x',0)`                   |
| dict      | ✅       | ✅      | `pop(k)`      | Remove key `k` and return its value           | `d.pop('a')`                     |
| dict      | ✅       | ✅      | `update(d2)`  | Merge in key–value pairs from `d2`            | `d.update({'b':2})`              |
| dict      | ✅       | ✅      | `keys()`      | Return a view of keys                         | `d.keys()`                       |
| dict      | ✅       | ✅      | `values()`    | Return a view of values                       | `d.values()`                     |
| dict      | ✅       | ✅      | `items()`     | Return a view of key–value pairs              | `d.items()`                      |
| str       | ✅       | ❌      | `lower()`     | Return lowercase copy                         | `"HI".lower()` → `"hi"`          |
| str       | ✅       | ❌      | `upper()`     | Return uppercase copy                         | `"hi".upper()` → `"HI"`          |
| str       | ✅       | ❌      | `replace(a,b)`| Return a copy with `a` replaced by `b`        | `"abc".replace('a','z')` → `"zbc"` |
| str       | ✅       | ❌      | `split(sep)`  | Split into list by `sep`                      | `"a,b".split(',')`               |
| str       | ✅       | ❌      | `find(s)`     | Return lowest index of `s`, or `-1` if missing| `"abc".find('b')` → `1`          |

`
	// exercise 5 : Family
	const family = {
		father: "Baba",
		mother: "Mama",
		sister: "Nouna",
		brother: "Nano",
	};

	for (const member in family) {
		console.log(`The ${member} is : ${family[member]}`);
	}
	// exercise 6 : Rudolf
	const details = {
		my: 'name',
		is: 'Rudolf',
		the: 'reindeer'
	}

	let str = "";
	for (const [key, val] of Object.entries(details)) {
		str += `${key} ${val} `;
	}
	console.log(str)
	// redo it usung for in
	str = "";
	for (const key in details) {
		str += `${key} ${details[key]} `;
	}
`