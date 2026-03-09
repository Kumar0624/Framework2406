function removeDuplicateArray(arr: number[]){
    
    let dupli: number[] = []
    let seen: number[] = []

     for(let i =0;i<arr.length;i++){

        let char = arr[i]

        if(seen.includes(char)){
            if(!dupli.includes(char)){
                dupli.push(char)
            }
        }else{
            seen.unshift(char)
        }
     }
     console.log(`Duplicates : ${dupli}`);
     console.log(`Seen : ${seen}`);
}

   const inpu = [1,2,3,4,5,4,5,4]
   removeDuplicateArray(inpu);