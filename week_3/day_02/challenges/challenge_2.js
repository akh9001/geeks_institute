
console.log("Method 1 : using nested loop \n");
// Method 1 : using nested loop
let n = 6;
for (let i = 0; i < n; i++) {
	let j = 0;
	while (j < i + 1) {
		process.stdout.write("* ");
		j++;
	}
	process.stdout.write("\n");
}

console.log("\nMethod 2 : using one loop \n");
// Method 2 : using one loop
let star = '* ';
let triangle = '';
for (let i = 1; i <= n; i++)
	triangle += star.repeat(i) + '\n';
console.log(triangle);

console.log("\nMethod 3 : using C optimization \n");
// Method 3 : using one loop

for (let i = 1; i <= n; i++) console.log(star.repeat(i));