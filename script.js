// Author:

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;
let textP2;

//Global ML Variables
let soundClassifier;

function setup() {
  canvasDiv = createDiv();
  canvas = createCanvas(640, 480);
  textDiv = createDiv();
  textP = createP("Model loading, please...");
  textP.parent(textDiv);
  textP2 = createP();
  textP2.parent(textDiv);
  let options = {
    probalityTreshold: 0.95
  };
  soundClassifier = ml5,soundClassifier("SpeechCommands18w", options,modelReady);
}

function draw() {
  let label = textP.html();
  if(label.includes("up")) {
    background(255, 0, 0);
  } else if(label.includes("down")) {
    background(0, 0, 255);
  } else if(label.includes("left")) {
    background(0, 255, 0);
  } else if(label.includes("right")) {
    background(0, 255, 255);
  }
}

function modelReady() {
  textP.html("Model loaded. Say any of the commands below!");
  textP2.html("<b>Commands</b>: digits zero through nine, up, down, left right, go, stop, yes, no");
  soundClassifier.classify(gotResults);
}

function gotResults(error, results) {
  if(error) {
    console.error(error);
  } else {
    // Complete the code below
    let label = results[0].label;
    let confidence = results[0].confidence, 2) * 100;
    textP.html(label + ":" + confidence + "%");

  }
}
