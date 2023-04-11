const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    let hexColor= "#";
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    } 
//This function increments through the array, invokes the getRandomNumber function to generate random values
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);

}
// This returns only integers at random and passes them back to the function above