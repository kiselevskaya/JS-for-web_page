function upload(){
  var canvas = document.getElementById("cnv");
  var finput = document.getElementById("finput");
  var img = new SimpleImage(finput);
  img.drawTo(canvas);
}
