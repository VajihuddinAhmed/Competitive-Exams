let countDownDate = new Date().getTime() + (30 * 60 *1000);

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the timeleft between now and the count down date
  let timeleft = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("time-div").innerHTML = minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (timeleft < 0) {
    clearInterval(x);
    document.getElementById("time-div").innerHTML = "Time out please close the tab";
    document.getElementById("next").disabled = true;
  }
}, 1000);