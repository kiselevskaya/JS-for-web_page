var frontimg=null;
var backimg=null;
var fcnv;
var scnv;

function loadForegroundImage(){
  fcnv = document.getElementById("cnv");
  var fimg = document.getElementById("finput");
  frontimg = new SimpleImage(fimg);
  frontimg.drawTo(fcnv);
  alert("foreground image loaded");
}

function loadBackgroundImage(){
  scnv = document.getElementById("2cnv");
  var simg = document.getElementById("2input");
  backimg = new SimpleImage(simg);
  backimg.drawTo(scnv);
  alert("background image loaded");
}

function compose(){
  if (frontimg==null || ! frontimg.complete()){
    alert("foreground not loaded");
    return;
  }
  if (backimg==null || ! backimg.complete()){
    alert("background not loaded");
  }
  var newimg = new SimpleImage(frontimg.getWidth(),frontimg.getHeight());
  for (var pixel of frontimg.values()){
      var x = pixel.getX();
      var y = pixel.getY();
    if (pixel.getGreen()>pixel.getRed()+pixel.getBlue()){
      var bgpixel=backimg.getPixel(x,y);
      newimg.setPixel(x,y,bgpixel);
    }
    else{
      newimg.setPixel(x,y,pixel);
    }
  }
  clearCnvs();
  newimg.drawTo(fcnv);
}

function clearCnvs(){
  var context = fcnv.getContext("2d");
  var ctx = scnv.getContext("2d");
  context.clearRect(0, 0, fcnv.width, fcnv.height);
  ctx.clearRect(0, 0, scnv.width, scnv.height);
}
