function color_alert(){
    alert('clicked button with JS function')
    var dd2 = document.getElementById("d2");
    var dd3 = document.getElementById("d3");

    dd2.className = "morning";
    dd3.className = "evening";
}
function output(message){
  alert(message)
}

function text_confirm(){
  var msg;
  var choice = confirm("Press the button");
  if (choice == true){
    msg = "You pressed OK!";
    output(msg);
    var dd2 = document.getElementById("d2");
    var dd3 = document.getElementById("d3");

    dd2.innerHTML = "Bonjour";
    dd3.innerHTML = "Sayonara";
  }
  else {
    msg = "Are you sure you want to cancel";
    output(msg);
  }
}
