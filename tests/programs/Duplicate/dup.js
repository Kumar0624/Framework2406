function removeDuplicates(str) {
    var duplicate = "";
    var seen = "";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (seen.includes(char)) {
            if (!duplicate.includes(char)) {
                duplicate += char;
            }
        }
        else {
            seen += char;
        }
    }
    console.log("Duplicate Values is :  ".concat(duplicate));
    console.log("Duplicate Removed String is : ".concat(seen));
}
var inputs = "programmming";
removeDuplicates(inputs);
