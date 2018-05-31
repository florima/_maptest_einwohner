var data;
//var targetYear = 42;
var jahr = 666;
var gui;

function preload(){
  data = loadJSON("data2.json");
}

function setup() {
  createCanvas(800, 600, SVG);

//  myGui = createGui("settings");
  // myGui.addGlobals("move");

//  myGui.addGlobals("jahr");
  //sliderRange(0, 2018);

//  myGui.addButton("speichern", function() {
//      save();
//  });
gui = createGui('p5.gui');

sliderRange(0, 3000, 1);
gui.addGlobals('jahr');

// Only call draw when then gui is changed
noLoop();
}

function draw() {
  background(240);

  translate(400, 350);
  scale(1.5);
//  jahr = targetYear;
  var targetYear = jahr;
//  background(240);
  textSize(32);
  fill(0);
  text(jahr, 10, 90);

  for(var index = 0; index < data.houses.length; index++) {
    var obj = data.houses[index];

    if (obj.erbaut == targetYear) {
      fill(200);
      noStroke();
      beginShape();
      for(var vIndex = 0; vIndex < obj.vertices.length; vIndex++ ) {
        var knotenpunkte = obj.vertices[vIndex];
        var x = knotenpunkte[0];
        var y = knotenpunkte[1];
        vertex(x, y);
      }
      endShape(CLOSE);

      // fill(0);
      // var anzahl = obj.Bewohner;
      // textSize(10);
      // text(anzahl, x, y);

//      noLoop();


    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
