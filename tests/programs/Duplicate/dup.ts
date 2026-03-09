function removeDuplicates(str: string) {
    let duplicate = "";
    let seen = ""

    
    for (let i = 0; i < str.length; i++) {

        let char = str[i]

        if (seen.includes(char)) {

            if (!duplicate.includes(char)) {
                duplicate += char;
            }
        } else {
            seen += char;
        }
    }
    console.log(`Duplicate Values is :  ${duplicate}`);
    console.log(`Duplicate Removed String is : ${seen}`);
}

const inputs = "programmming";
removeDuplicates(inputs);
