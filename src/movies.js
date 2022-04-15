const movies = require("./data");

// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesdir) {

let directors = movies.map((eachMovie) => {

  return eachMovie.director
})

  return directors
}
console.log(getAllDirectors (movies))




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesdra) {

 let filterMovies =  moviesdra.filter ((eachMoviDra)  => {
    return eachMoviDra.genre.includes('Drama') && eachMoviDra.director === 'Steven Spielberg';
  })
   return filterMovies;
}
  console.log(howManyMovies(movies))




// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(medScores) {

  let allScores = medScores.reduce ((acc, moviee) => {
   if (moviee.score !== undefined) {
    return acc + moviee.score;
   } else {
     return acc;
    }
    return acc + moviee.score
  let avg = allScores / medScores.length;
  let totaldig = avg.toFixed (2)
  totaldigNumn = parseFloat (totaldig)
  return totaldigNumn
  console.log(scoresAverage(medScores));



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore (medDrama) {

  let filterMovies =  medDrama.filter ((eachMedDrama)  => {

     return eachMedDrama.genre.includes('Drama');

   })
   
    averageScore = scoresAverage (dramaMoviesScore);

    return averageScore

    console.log(scoresAverage (medDrama));
    






// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(ordMovie) {

return ordMovie.sort((a, b) => a.year - b.year);

}

console.log('sorted Movies', orderByYear(movies));






// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(alpMovie) {

  const sizeOfArray = 20;

  return alpMovie.sort((a, b) => a.title - b.title).slice(0, sizeOfArray);
}

console.log('Alphabetic Order Movies', orderAlphabetically(movies));





// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}