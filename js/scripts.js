// ### Business / Back-End Logic
var vowels = ["a", "e", "i", "o", "u"]; //ok
var phrase = function(word) {
  if ( (word.length === 1) || (word[0] === "y") || (word[0] === "Y") ) {
    return word + "ay";
  } else if ( (word[0] === vowels[0]) || (word[0] === vowels[1]) || (word[0] === vowels[2]) || (word[0] === vowels[3]) || (word[0] === vowels[4]) ) {
    return word + "way";
  // } else if ( (word[0] !== vowels[0]) || (word[0] !== vowels[1]) || (word[0] !== vowels[2]) || (word[0] !== vowels[3]) || (word[0] !== vowels[4]) ) {
  //   return "Maaaaaybe this will work"
  }
    else {
    return word = "error";
  };
};
// ### User / Front-End Logic
$(document).ready(function() { //ok
  $("form#formOne").submit(function(event) { //ok
    event.preventDefault(); //ok
    var words = $("input#input").val(); //ok
    var word = words.split("");
    var firstletter = word.indexOf(0);
    var result = phrase(word.join(''));
    $("p#outlet").text(result);
  });
});
