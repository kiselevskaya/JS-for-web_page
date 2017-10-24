function do_color(){
  var dE1 = document.getElementById("div1");
  var colorinput = document.getElementById("cc2");
  var color = colorinput.value;
  dE1.style.backgroundColor = color;
}

function do_lime(){
  var canvas = document.getElementById("div1");
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.backgroundColor = "#D4D41F";
}
