function convertString(input: string): string {
    let result = "";
    let i = 0;

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

    return result;
}

const input = "a$bf#hs$$$d###";
console.log(convertString(input));