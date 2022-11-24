const readline = require('readline');

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});


function addNumbers(sum,numsLeft,completionCallback){

    let count = sum;

    // base case
    if (numsLeft === 0) {
        completionCallback(count);
        rl.close();
        // return 0;
    } else {

    // recursive step

    // Prompt the user for a number (use reader).
    rl.question("Enter a number: ", answer => {
    // Pass a callback that:
    // Uses parseInt to parse the input.
    // Increment the sum and console.log it.
        count += parseInt(answer);
    
    // Recursively calls addNumbers again, passing in:
        // the increased sum,
        // the decreased numsLeft,
        // and the same completionCallback.
        console.log(`Partial sum: ${count}`)
        addNumbers(count,numsLeft-1,completionCallback)
        // maybe? completionCallback(count)
    });
    // return count;
    }


}

addNumbers(0, 3, sum => console.log(`### Total Sum: ${sum}`));