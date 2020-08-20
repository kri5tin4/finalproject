function quiz() {
  var score = 0;
  var questionOne = document.querySelector("#questionOne");
  if (questionOne[0].checked == true) {
    score++;
  console.log("questionOne")
  }
  var questionTwo = document.querySelector("#questionTwo");
  if (questionTwo[1].checked == true) {
    score++;
  }
  var questionThree = document.querySelector("#questionThree");
  if (questionThree[2].checked == true) {
    score++;
  }
  if (score==3) {
    document.getElementById("gif").innerHTML='<img src="https://media.giphy.com/media/3oz8xAFtqoOUUrsh7W/source.gif">';
  } else {
    document.getElementById("gif").innerHTML='<img src="https://media.giphy.com/media/33bpFN25l6qNW/source.gif">';
  }
}

