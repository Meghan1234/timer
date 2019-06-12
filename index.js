 var submit = $('.submit-button');
var cardContainer = $('.card-container');
var minutesLeft;
 submit.on("click", timeShowUpBelow);
var time;
 function timeShowUpBelow() {
   time = $('.time').val();
   console.log(time);
var timer = $('#timer');
   timer.text(`${time}`);
minutesLeft = time;
    $('.time').val("");

}
function wait(ms)
{
var d = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d < ms);
}

console.log(minutesLeft)
var start = $('#start');
start.on("click",startTimer)

function startTimer(){
  console.log(minutesLeft)
while(minutesLeft>0){
  decreaseMinute();
  wait(1000);
}
  }

function decreaseMinute(){
  minutesLeft--;
  console.log(minutesLeft)
  // var timer = $('#timer');
  //    timer.text(`${minutesLeft}`);
}














// Set the date we're counting down to
// var countDownDate = new Time (37:25").getTime();

// Update the count down every 1 second
// var x = setInterval(function() {

  // Get today's date and time


//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
//
//   // Time calculations for days, hours, minutes and seconds
//   var minutes = Math.floor((distance / (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//
//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
//
//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);





// var submit = $('submit-button');
// var card-container = $('card-container');
//
// submit.on("click", timeShowUpBelow);
//
// function timeShowUpBelow() {
//   var time = $('time').val()
//
// }
//
//
// var submitTime = $('.submit-button');
// var startStop = $('.start/pause');
// var countdown = $('.countdown');
// var timerOn = false;
// var timeLeft;
// var timer;
//
// submitTime.on('click', prepareTimer);
//
// function prepareTimer(event) {
//   event.preventDefault();
//   var timeToSet = $('.study-time').val();
//   var timeString = parseInt(timeToSet);
//
//   startStop.prop('disabled', false);
//   startStop.text(`Set Timer for ${timeString} minutes`);
// }
//
// startStop.on('click', toggleTimer);
//
// function toggleTimer() {
//   if (timerOn) {
//     timerOn = false;
//     pauseTimer();
//   } else {
//     var timeToSet = $('.study-time').val();
//     timeLeft = localStorage.getItem('timeLeft') || $('.study-time').val();
//     timerOn = true;
//     startTimer();
//   }
// }
//
// function pauseTimer() {
//   startStop.text("Start Timer")
//   clearInterval(timer);
// }
//
// function startTimer() {
//   startStop.text("Pause Timer");
//   countdown.text(`${timeLeft} minutes`);
//   localStorage.setItem('timeLeft', timeLeft);
//
//   timer = setInterval(decrementTimer, 1000)
// }
//
// function decrementTimer() {
//   if (timeLeft > 1) {
//     countdown.text(`${timeLeft} minutes`);
//     timeLeft -= 1;
//     var timeString = timeLeft.toString();
//     localStorage.setItem('timeLeft', timeString);
//   } else if (timeLeft == 1) {
//     countdown.text(`${timeLeft} minute`);
//     timeLeft -= 1;
//     var timeString = timeLeft.toString();
//     localStorage.setItem('timeLeft', timeString);
//   } else if (timeLeft == 0) {
//     countdown.text(`Times up!`);
//     var timeString = timeLeft.toString();
//     localStorage.clear();
//     $('.start-stop').text("");
//     $('.study-time').val("");
//     startStop.prop('disabled', true);
//   }
// }

// var days = Math.floor(distance / (1000 * 60 * 60 * 24));
// var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
