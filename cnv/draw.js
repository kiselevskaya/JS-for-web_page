function do_color(){
  var dE1 = document.getElementById("div1");
  var colorinput = document.getElementById("cc2");
  var color = colorinput.value;
  dE1.style.backgroundColor = color;
}

function do_square(){
  var canvas = document.getElementById("div1");
  var sizeinput = document.getElementById("cc1");
  var size = sizeinput.value;
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#000000";
  context.fillRect(10,10,size,size);

  var posX = parseInt(size);
  posX += 30;
  context.fillStyle = "#000000";
  context.fillRect(posX,10,size,size);
}
