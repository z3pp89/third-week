

// var genArray = function(num) {
//
//   for (var i = 0; i < num; i++) {
//     count++;
//     array.push(count);
//     console.log(count);
//   };
// };



// var count = 0;

function daveArray(num) {
  var iStr = [];
  for (var i = 0; i <= num; i++) {
    if (i % 3 === 0 && i !=0) {
      iStr.push("I'm sorry, Dave. I can't do that.");
    } else if (i.toString().match(/1/)) {
      iStr.push("Boop!");
    } else if (i.toString().match(/0/)) {
      iStr.push("Beep!")

    } else {
      iStr.push(i);
// console.log(num);

    };
  };
  return iStr;
};


$(document).ready(function(){
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    // array = [];
    // daveArray = [];
    var num = parseInt($("#userNum").val());
    // genArray(num);
    // genDave(array);
    // $("#display").children().remove();
    // $("#display").append("<h4>" + daveArray + "</h4>");
    // this.reset();
    $("#display").text(daveArray(num));
  });
});
