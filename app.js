console.log("Hello Console!"); //sanity check



// Remember to make comments! Use this as your reference 

// Complete work below



// index always starts at 0 
//length - how many are in the array 

// - What is the length of the array?
// Length = 7

// we want to know if the array length is less than or equal to 4:
// TRUE: Yes, it is equal

//False No it is not 

function checkAlphabet (){
    let myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G']; // we have an array 

    //checking if the length is less than or equal to 4
    //if this is true 
        if(myAlphabet.length <= 4){
            //then do this
            console.log("less than or equal to 4")
        }else{console.log("Not Equal")}

    

    //False => "Not Equal"

}

//call function
checkAlphabet();




// - Write a function called myAlphabetLength which console.logs the length of the array

// - Within the function also use an if-conditional statement that checks if the number of items within the array are less than 4








// 2. 
// - Declare and initialize an array called Planets with 5 string values

// - Also console.log the index in each iteration
function planets() {
    let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"]; 
    // console.log(planets[1]);
    //for loop
    for(index=0; index < planets.length; index++){
        // - console.log each item in the array
        console.log(`The index is ${index} and the name is ${planets[index]}`);
        // - Also console.log the index in each iteration
        // console.log(index);

    }

    
}
planets();

let nameone = "Alston";


console.log(` Hello, ${nameone}`)



//Date and Time methods`

const d = new Date(); //New Date Object 

// console.log(d.getTime()); //Calling this Method from the Date object
console.log(d.getMonth());

//month in Javascript ALWAYS starts at position 0 => January 

// Math.properties => static values set


// Math.round(x)	Returns x rounded to its nearest integer
// 12.3 
// 12
// console.log(Math.round(12.3));

// // Math.ceil(x)	Returns x rounded up to its nearest integer
// console.log(Math.ceil(12.3))

// // Math.floor(x)	Returns x rounded down to its nearest integer
// console.log(Math.floor(12.3))

// returns value x to the power of y 

// Math.pow(x, y)
// x= 3, y = 2


// console.log(Math.floor(Math.pow(12.2, 2)));



// console.log(Math.min(2, -3, 22, 555, 54, 23, 23.55, -1233)); //smaller in this list numbers

// console.log(Math.max(3333, 2222, -22333, 2)); //greatest number in list of numbers

// console.log(Math.random()); 