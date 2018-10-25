function loopyLighthouse(range, multiples, words){
  var firstWord = words[0];
  var secondWord = words[1];
  for (var x = range[0]; x < range[1] + 1; x++){
    if (x % multiples[0] === 0 && x % multiples[1] === 0){
      console.log(firstWord + secondWord);
    }
    else if (x % multiples[0] === 0){
      console.log(firstWord);
    }
    else if (x % multiples[1] === 0){
      console.log(secondWord);
    }
    else {
      console.log(x);
    }
  }
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Patty", "Beacon"]));