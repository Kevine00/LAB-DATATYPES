// for(let a = 100; a>0 ;a-=10){
// console.log(a);
// }


// let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
// console.log("All numbers:", numbers);
// console.log("Even numbers:");
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }

// // print numbers larger than 10 and smaller than 60 using if-else
// console.log("Numbers larger than 10 and smaller than 60:");
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 10 && numbers[i] < 60) {
//     console.log(numbers[i]);
//   }
// }


// let movies = [];

// // Function to add a movie to the array

// function addMovie() {
    
//     let title = prompt("Enter the name of the movie:");
//     if (title === null) {
//         return null;   // Exit the function if Cancel is pressed
//     }
//     let rating = prompt("Enter the IMDb rating of the movie:");
//     if (rating === null) {
//         return null; // Exit the function if Cancel is pressed
//     }
//     rating = parseFloat(rating);

//     // Check if the rating is a valid number
//     if (isNaN(rating)) {
//         alert("Invalid rating. Please enter a valid number.");
//         return addMovie(); 
//     }
//     movies.push({ title, rating });
// }

// while (true) {
//     addMovie();
//     let continueAdding = confirm("Do you want to add another movie?");
//     if (!continueAdding) {
//         break; // Exit the loop if the user chooses not to add another movie
//     }
// }

// let vessel = {
//     LATITUDE: 40.07288,
//     LONGITUDE: 154.48535,
//     COURSE: 285.6,
//     SPEED: 14.0,
//     IMO: 9175717,
//     NAME: 'MARENO'
// };

// for (let key in vessel) {
//     console.log(`${key} -> ${vessel[key]}`);
// }


// Prompt user for input
let startNumber = parseInt(prompt("Enter the starting number:"));
let endNumber = parseInt(prompt("Enter the ending number:"));

// Check if the input values are valid
if (isNaN(startNumber) || isNaN(endNumber) || startNumber <= endNumber) {
    console.log("Invalid input. Please enter valid numbers with the starting number greater than the ending number.");
} else {
    // Display numbers in steps of 10 from startNumber to endNumber
    for (let i = startNumber; i >= endNumber; i -= 10) {
        console.log(i);
    }
}
