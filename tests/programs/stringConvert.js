function convertString(input) {
    var result = "";
    var i = 0;
    while (i < input.length) {
        if (input[i] === '$' && input.slice(i, i + 3) === "$") {
            result += "111";
            i += 3;
        }
        else if (input[i] === '#' && input.slice(i, i + 3) === "###") {
            result += "222";
            i += 3;
        }
        else {
            result += input[i];
            i++;
        }
    }
    console.log(result);
}
var input = "a$bf#hs$$$d###";
convertString(input);
