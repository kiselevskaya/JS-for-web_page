var img = null;
var canvas = document.getElementById("cnv");
var fileInput = document.getElementById("input");


function loadImage(){
  img = new SimpleImage(fileInput);
  img.drawTo(canvas);
}
function imageIsLoaded(image){
  if (image==null || ! image.complete()){
    alert("Image not loaded");
    return false;
  }
  else{
    return true;
  }
}

function doGray(){
  if (imageIsLoaded(img)){
    grayScale();
  }
}
function grayScale(){
  var width = img.getWidth();
  var height = img.getHeight();
  var grayImg = new SimpleImage(width,height);
  for (var pixel of img.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    var outPixel = grayImg.getPixel(x,y);
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    outPixel.setRed(avg);
    outPixel.setGreen(avg);
    outPixel.setBlue(avg);
  }
  clearCanvas();
  grayImg.drawTo(canvas);
}

function doRed(){
  if (imageIsLoaded(img)){
    redScale();
  }
}
function redScale(){
  var width = img.getWidth();
  var height = img.getHeight();
  var redImg = new SimpleImage(width,height);
  for (var pixel of img.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    var outPixel = redImg.getPixel(x,y);
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if (avg<128){
      outPixel.setRed(avg*2);
      outPixel.setGreen(0);
      outPixel.setBlue(0);
    }
    else{
      outPixel.setRed(255);
      outPixel.setGreen(avg*2-255);
      outPixel.setBlue(avg*2-255);
    }
  }
  clearCanvas();
  redImg.drawTo(canvas);
}

function doWave(){
  if (imageIsLoaded(img)){
    doSin();
  }
}
function doSin(){
  var width = img.getWidth();
  var height = img.getHeight();
  var copyImg = new SimpleImage(width,height);
  var amplitude = 40;
  var frequency = 15;
  for (var pixel of img.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    var outPixel = copyImg.getPixel(x,y);
    var ySin = height/2 + amplitude * Math.sin(x/frequency);
    if (y > ySin){
      outPixel.setRed(pixel.getRed()/2);
      outPixel.setGreen(pixel.getGreen());
      outPixel.setBlue(0);
    }
    else{
      outPixel.setRed(pixel.getRed());
      outPixel.setGreen(pixel.getGreen());
      outPixel.setBlue(pixel.getBlue()/2);
    }
  }
  clearCanvas();
  copyImg.drawTo(canvas);
}

function doRainbow(){
  if (imageIsLoaded(img)){
    rainbow();
  }
}
function rainbow(){
  var width = img.getWidth();
  var height = img.getHeight();
  var rainbowImg = new SimpleImage(width,height);
  for (var pixel of img.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    var outPixel = rainbowImg.getPixel(x,y);
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    //Red line
    if (y < height/7){
      if (avg<128){
        outPixel.setRed(avg*2);
        outPixel.setGreen(0);
        outPixel.setBlue(0);
      }
      else{
        outPixel.setRed(255);
        outPixel.setGreen(avg*2-255);
        outPixel.setBlue(avg*2-255);
      }
    }
    //Orange line
    else if (height/7 <= y && y < 2*height/7){
      if (avg<128){
        outPixel.setRed(avg*2);
        outPixel.setGreen(avg*0.8);
        outPixel.setBlue(0);
      }
      else{
        outPixel.setRed(255);
        outPixel.setGreen(avg*1.2-51);
        outPixel.setBlue(avg*2-255);
      }
    }
    //Yellow line
    else if (2*height/7 <= y && y< 3*height/7){
      if (avg<128){
        outPixel.setRed(avg*2);
        outPixel.setGreen(avg*2);
        outPixel.setBlue(0);
      }
      else{
        outPixel.setRed(255);
        outPixel.setGreen(255);
        outPixel.setBlue(avg*2-255);
      }
    }
    //Green line
    else if (3*height/7 <= y && y< 4*height/7){
      if (avg<128){
        outPixel.setRed(0);
        outPixel.setGreen(avg*2);
        outPixel.setBlue(0);
      }
      else{
        outPixel.setRed(avg*2-255);
        outPixel.setGreen(255);
        outPixel.setBlue(avg*2-255);
      }
    }
    //Blue line
    else if (4*height/7 <= y && y< 5*height/7){
      if (avg<128){
        outPixel.setRed(0);
        outPixel.setGreen(0);
        outPixel.setBlue(avg*2);
      }
      else{
        outPixel.setRed(avg*2-255);
        outPixel.setGreen(avg*2-255);
        outPixel.setBlue(255);
      }
    }
    //Indigo line
    else if (5*height/7 <= y && y< 6*height/7){
      if (avg<128){
        outPixel.setRed(avg*0.8);
        outPixel.setGreen(0);
        outPixel.setBlue(avg*2);
      }
      else{
        outPixel.setRed(1.2*avg -51);
        outPixel.setGreen(avg*2-255);
        outPixel.setBlue(255);
      }
    }
    //Violet line
    else if (6*height/7 <= y && y< height){
      if (avg<128){
        outPixel.setRed(avg*1.6);
        outPixel.setGreen(0);
        outPixel.setBlue(avg*1.6);
      }
      else{
        outPixel.setRed(0.4*avg+153);
        outPixel.setGreen(avg*2-255);
        outPixel.setBlue(0.4*avg+153);
      }
    }
  }
  clearCanvas();
  rainbowImg.drawTo(canvas);
}

function doBlur(){
  if (imageIsLoaded(img)){
    blurFilter();
  }
}
function blurFilter(){
  var width = img.getWidth();
  var height = img.getHeight();
  var blurImg = new SimpleImage(width,height);

  for (var pixel of img.values()){
    var x = pixel.getX();
    var y = pixel.getY();

    var randomFloat = Math.random();
    if (randomFloat < 0.5){
       blurImg.setPixel(x,y,pixel);
    }
    else {
      var xmin = x-10;
      var xmax = x+10;
      if (xmin<0){
        xmin = 0;
      }
      else if (xmax>width){
        xmax = width-1;
      }
      var ymin = y-10;
      var ymax = y+10;
      if (ymin<0){
        ymin = 0;
      }
      else if (ymax>height){
        ymax =height-1;
      }
      var nearbyPixel = img.getPixel(randomPixel(xmax,xmin),randomPixel(ymax,ymin));
      blurImg.setPixel(x,y,nearbyPixel);
    }
  }
  clearCanvas();
  blurImg.drawTo(canvas);
}
function randomPixel(max,min){
  return Math.floor(Math.random()*(max-min))+(min);
}

function doReset(){
  if (imageIsLoaded(img)){
    clearCanvas();
    img.drawTo(canvas);
    grayImg = new SimpleImage(fileInput);
    redImg = new SimpleImage(fileInput);
    copyImg = new SimpleImage(fileInput);
  }
}

function clearCanvas(){
    var context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);
}
