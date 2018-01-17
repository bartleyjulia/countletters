// function countLetters(sentence) {

  // var noSpaces = sentence.split(' ').join('');
  // Create an object to hold the values
  var letters = {};
  // create a loop to iterate through the string
  // for each [i], create a key in letters = {}

  function keyCreator(noSpaces){

  for (var i = 0; i < noSpaces.length; i++){
    var char = noSpaces[i];
    if (letters[char] == undefined ) {
      letters[char] = 0}
      // if the key does exist: else
      //  then  letters[char] = letters[char] + 1;
  }
  return letters;
}
// function addValue(noSpaces) {
// for (var i = 0; i < noSpaces.length; i++ ) {
// for each instance of the key in the string, +1 value to the key in letters ={}

console.log(keyCreator('househouse'));





// console.log(keyCreator('light house'));





// return the whole object with all keys and values




// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }
// DONE TODOS