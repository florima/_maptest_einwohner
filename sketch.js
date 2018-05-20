var data;
var targetYear = 1950;

function preload(){
  data = loadJSON("data.json");
}

function setup() {
  noLoop();
  createCanvas(640, 360);

  if (window.location.hash != "") {
    targetYear = window.location.hash.substring(1);
  }
  console.log(targetYear);
}

function draw() {
  for(var index = 0; index < data.houses.length; index++) {
    var obj = data.houses[index];

    if (obj.year == targetYear) {
      if (obj.area == "Sonnwiese") {
      fill(0)
      }

      beginShape();
      for(var vIndex = 0; vIndex < obj.vertices.length; vIndex++ ) {
        var vertex = obj.vertices[vIndex];

        var x = vertex[0];
        var y = vertex[1];

        curveVertex(x, y);
      }
      endShape(CLOSE);
    }
  }
}
