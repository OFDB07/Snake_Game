var count = 0 
var intId = setInterval(timeScore, 1000)
var time = document.getElementById('timer')

function timeScore(){
  console.log(++count);
}

timeScore();