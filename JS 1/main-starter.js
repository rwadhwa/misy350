/*jshint esversion: 6 */

// multi-dimentional array
let top_movies = [
  ["The Shawshank Redemption", 1994, "Drama"],
  ["The Godfather", 1972, "Crime"],
  ["The Godfather: Part II", 1974, "Crime"],
  ["The Dark Knight", 2008, "Action"],
  ["12 Angry Men", 1957, "Drama"]
];

// write a for loop to output movie names
for (let i = 0; i < top_movies.length; i++){
  console.log("" + top_movies[i]);
}


// use Iterator and Arrow function
// to loop over the array to out names with *** prefix
top_movies.forEach(movie => console.log("*** " + movie[0]));


// Use Iterator and Arrow functions, .filter()
// to output the name and genre of movies after 1990
// THE SCREENSHOT SHOWS RESULTS FOR BEFORE 1990, BUT THE INSTRUCTIONS HERE SAY AFTER
let new_movie_list = top_movies.filter(movie => movie.slice(1,2) >= "1990");
new_movie_list.forEach(movie => console.log(">>> " + movie[0]+ ", " + movie[2]));

// change genre category for either "Crime" or "Drame"
// to "Crime, Drama" using .map() and output the result
// see https://www.w3schools.com/jsref/jsref_map.asp



// add code to calculate the number of years to become a millinaire
// with initial deposit of 10000 and 0.06 interest rate
let balance = 10000;
let years = 0;
while (balance <1000000) {
  balance += balance * .06;
  years += 1;
}
console.log("You will be a millinaire in " +years + " years!");


// add player objects and output results according to lecture slides

let player1 = {
  name: "Stephen Curry",
  dob: "March 14, 1988",
  height: 1.91,
  weight:86,
  shoot(){
    return "3-pointer";
    }
};

let player2 = {
  name: "LeBron James",
  dob: "December 30, 1984",
  height: 2.03,
  weight:118,
  shoot(){
    return "dunk";
  },
  info(){
    return `${this.name} is ${this.height}m and ${this.weight}kg `;
  }
};
console.log(player1.name);
console.log(player2["name"]);
console.log(player2.weight - player1.weight);
console.log(player1.shoot());
console.log(player2.shoot());
console.log(player2.info());
player2.draft_year = 2003;
console.log(player2.draft_year);
