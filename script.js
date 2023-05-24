const name = prompt("Welcome to GC mini golf! What is your name?");
console.log("Name: " + name);
let numberHoles = 0;
let numberPutts = 0;
let totalPutts = 0;
numberHoles = Number(prompt(`Hi ${name}! Would you like to play 3 or 6 holes today?`));
console.log("Number of holes: " + numberHoles);

if (numberHoles === 3 || numberHoles === 6) {
    for (i = 0; i < numberHoles; i++) {
        let numberPutts = Number(prompt("How many putts did it take for hole " + (i+1) + "? (par is 3)"));
        console.log("Hole " + Number(i+1) + ": " + numberPutts)
        totalPutts += numberPutts;
        }
} else {
    alert("Please enter 3 or 6 for the number of holes to play.")
}
console.log("Total strokes: " + totalPutts);

if (totalPutts < (numberHoles * 3)) {
    console.log("Great job, " + name + "! Your total par was: -" + (numberHoles * 3 - totalPutts));
} else if (totalPutts > numberHoles * 3) {
    console.log("Nice try, " + name + "... Your total par was: +" + (Math.abs(numberHoles * 3 - totalPutts)));
} else if (totalPutts === numberHoles * 3) {
    console.log("Good game, " + name +  ". Your total par was: " + (numberHoles * 3 - totalPutts));
}

console.log("Game complete! Refresh to try again.");