var original = "programming2";
var reversed = "";
var lengt = original.length;
for (var i = lengt - 1; i >= 0; i--) {
    reversed += original[i];
}
console.log("Original String is : ".concat(original));
console.log("Reversed String is : ".concat(reversed));
