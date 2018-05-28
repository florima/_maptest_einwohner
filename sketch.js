var data;
var targetYear = 42;

function preload(){
  data = loadJSON("data2.json");
}

function setup() {
  noLoop();
  createCanvas(900, 600);
  background(200);

  // if (window.location.hash != "") {
  //   targetYear = window.location.hash.substring(1);
  // }
  // console.log(targetYear);
}

function draw() {
  	translate(300, 300);
  for(var index = 0; index < data.houses.length; index++) {
    var obj = data.houses[index];

    if (obj.erbaut >= targetYear) {
      // if (obj.area == "Sonnwiese") {
      // fill(0)
      // }
      fill(0);

      beginShape();
      for(var vIndex = 0; vIndex < obj.vertices.length; vIndex++ ) {
        var knotenpunkte = obj.vertices[vIndex];

        var x = knotenpunkte[0];
        var y = knotenpunkte[1];

        console.log(obj.vertices);
        console.log(obj.Adresse);
        vertex(x, y);
      }
      endShape(CLOSE);
    }
  }
}
