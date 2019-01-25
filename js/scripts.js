// ### Business / Back-End Logic
function translatePigLatin(words) {
    var firstVowel = words.match(/[aeiou]/);
    var firstPosition = words.indexOf(firstVowel);
      if (firstPosition > 0) {
        return words.slice(firstPosition) + words.slice(0, firstPosition) + "ay";
      }
        return words + "way"
}


// ### User / Front-End Logic
$(document).ready(function() { //ok
  $("form#formOne").submit(function(event) { //ok
    event.preventDefault(); //ok
    var words = $("input#input").val(); //ok
    console.log(words);
    $("p#outlet").text(translatePigLatin(words));
  });
});
