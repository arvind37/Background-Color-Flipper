const colors = ['Blue', 'Red', 'Orange', 'White', 'Purple', 'Silver', 'Gray', 'Green', 'Olive', 'Yellow', 'Navy'
, 'Aqua', 'Brown', 'Indigo', 'Ivory', 'Pink', 'Maroon', 'Tomato'];

function changeColor() {   
    
const random = colors[~~(Math.random() * colors.length)]; // We can use ~~ instead of Math.floor

document.getElementById('color').innerHTML = random

document.body.style.backgroundColor = random;

}

