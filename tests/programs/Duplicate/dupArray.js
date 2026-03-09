function removeDuplicateArray(arr) {
    var dupli = [];
    var seen = [];
    for (var i = 0; i < arr.length; i++) {
        var char = arr[i];
        if (seen.includes(char)) {
            if (!dupli.includes(char)) {
                dupli.push(char);
            }
        }
        else {
            seen.unshift(char);
        }
    }
    console.log("Duplicates : ".concat(dupli));
    console.log("Seen : ".concat(seen));
}
var inpu = [1, 2, 3, 4, 5, 4, 5, 4];
removeDuplicateArray(inpu);
