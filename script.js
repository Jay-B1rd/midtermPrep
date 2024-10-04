let numbersArray = [1, 2, 2, 1];

for (let i = 0; i < numbersArray.length; i++) {
    let num1 = numbersArray[i];
    let found = false;
    for (let x = 0; x < i; x++) {
        let num2 = numbersArray[x];
        if (num1 === num2) {
            console.log(`${num1} at position ${i} is the the as ${num2} at position ${x}.`);
            found = true;
        }
    }
    if (found === true) {
        break;
    }
}