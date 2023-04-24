function isLeap(year) {
  var calcu1 = year % 4;
  var calcu2 = year % 400;
  var calcu3 = year % 100
  if ( calcu1 === 0 && calcu2 === 0 ) {
      return "Leap year."
  } else if (calcu1 === 0 && calcu3 !== 0 ) {
      return "Leap year."
  } else {
      return "Not leap year."
  }
}

isLeap(2000);



var empty = [];

function beer() {
    for (let i = 99; i < 2; i--) {
       var lyric =  `Go to the store and buy some more, ${i} ${bottleWord} of beer on the wall...`
         empty.push(lyric);
         console.log(empty);
     
    }
 }

 
function fibonacci(n) {
    var output = [];
    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];
        for (let i = 2; i < n; i++) {
        output.push(output[output.length - 2] + output[output.length - 1])
            
        }
    }

    return output
}
 


