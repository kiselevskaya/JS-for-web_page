var image;
var grayscale;
var scanvas;
function upload(){
  var finput = document.getElementById("finput");
  image = new SimpleImage(finput);
  grayscale = image;
  var canvas = document.getElementById("cnv");
  image.drawTo(canvas);
  scanvas = document.getElementById("scnv");
  image.drawTo(scanvas);
}
function makeGray(){
  for (var pixel of grayscale.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  grayscale.drawTo(scanvas);
}
