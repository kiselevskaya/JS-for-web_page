function orange_color(){
  var dE1 = document.getElementById("div1");
  dE1.style.backgroundColor = "#FF4000";

  var context = dE1.getContext("2d");
  context.fillStyle = "#FF6347";
  //context.fillRect(10,10,60,60);
  //context.fillRect(80,10,60,60);

  context.beginPath();
  context.arc(90,75,60,0,2*Math.PI);
  context.stroke();

  context.beginPath();
  context.arc(200,75,50,0,2*Math.PI);
  context.stroke();

  context.fillStyle = "#0F0000";
  context.font = "30px Arial";
  context.fillText("@",90,90);
  context.fillText("@",200,90);
}
function blue_color(){
  var dE2 = document.getElementById("div2");
  dE2.style.backgroundColor = "#3CD371";
}
