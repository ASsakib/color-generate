const colors = ["rgba(133,122,200)","#dcdde1","#e84118","#8c7ae6","#FD7272","#3B3B98","#f15025"]

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    //get random number between 0-3 
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})


function getRandomNumber(){
    return Math.floor(Math.random() * colors.length); 
    //length of colors is up to 4 and by multiply it with random it will return something between 0.000000 - 3.999999
    //Adding floor to make the point vaule in round figure like 0-3
}

/*
Algo
1.Declare some color in an array to access them letter.

2.Select the button to listen the event of click

3.By listening click, call a function that will change the backgroundColor of body
    1.generate a random number by Math.random function 
    2.Then * it with the length of color array to get a number between 0 to length of array
    3.Then make it round figure to get integer by Math.floor

4.Save random number in a variable
    1.random number will use to access color array content colors[randomNumber]
    2.then select the backgroundColor and giving it a value of the array
    3.Also select the textContent and giving it a value of the array

*/