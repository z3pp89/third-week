var array = [];
var daveArray = [];


var genArray = function(num) {
  var count = 0;
  for (var i = 0; i < num; i++) {
    count++;
    array.push(count);
  };
};


var genDave = function(array) {
  for (var i = 0; i < array.length; i++) {
    var iStr = (array[i]).toString();
    if (array[i] % 3 === 0) {
      daveArray.push("I'm sorry, Dave. I can't do that.");
    } else if (iStr.includes(1) === true) {
      daveArray.push("Boop!");
    } else if (iStr.includes(0) === true) {
      daveArray.push("Beep!")
    } else {
      daveArray.push(array[i]);
    };
  };
};


$(document).ready(function(){
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    array = [];
    daveArray = [];
    var num = $("#userNum").val();
    genArray(num);
    genDave(array);
    $("#display").children().remove();
    $("#display").append("<h4>" + daveArray + "</h4>");
    this.reset();
  });
}); 
