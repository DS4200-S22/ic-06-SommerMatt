/*

In-class activity 07 starter code
Prof. Mosca
Modified: 12/06/21

*/

//Starter code for Button 1 click
    // You will need to call this function when Button 1 is clicked
    // You will need to modiffy the body of this function as described in the assignment Readme
function button1Clicked() {
    let newText = "Random number: "
    let rand = Math.random();
    let concat = newText + rand;

    let button = document.getElementById("random_num") // or "random_num"
    button.innerHTML = concat;

    console.log("Button 1 was clicked");
}

let counter = true;

function button2Clicked() {

    let shape = document.getElementById("my_circ")
    if (counter) {
        shape.style.fill = "green";
    } else {
        shape.style.fill = "blue";
    }

    counter = !counter;
    console.log(counter)
    console.log(shape.style.fill)
}
/*

// Notes from in-class demo

let season = "winter";
console.log("hello world");
console.log(season);



let random = Math.random()
console.log(random)

function printBiggerRandom() {
    let rand1 = Math.random() * 100;
    console.log(rand1)
}
printBiggerRandom()

function nameNumber(name, num) {
    let str = name + "'s favorite number is " + num
    return str
}
console.log(nameNumber("matt", 17))
*/