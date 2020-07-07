//Score Variables
let score_cell=0
let score_blender=0
let score_smart=0
let score_microwave=0
let score_television=0
let score_laptop=0
let score_fridge=0
let score_bulb=0
let score_toaster=0

// The video
let video;
// For displaying the label
let label = "waiting...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/9pzZpECWe/';

//BG
let bg;
//BG


// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup() {
  bg = loadImage('file://offtolearn-01.png');
  img_cell = loadImage('cellphone.png');
  img_blender = loadImage('blender.png');
  img_microwave = loadImage('microwave.png');
  img_television = loadImage('television.png');
  img_laptop = loadImage('laptop.png');
  img_fridge = loadImage('refrigerator.png');
  img_bulb = loadImage('light-bulb.png');
  img_toaster = loadImage('toaster.png');
  img_smart = loadImage('speaker.png');

  createCanvas(1700, 900);
  // Create the video
  video = createCapture(VIDEO);
  video.center();
  video.hide();
  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {


  // Draw the video
//  imageMode(CENTER);
  background(bg); 
  image(video, 70, 270,480, 360);

        updatePixels();
   

  // STEP 4: Draw the label


  // Pick an emoji, the "default" is train
  let emoji = " ";
  let label_text = " ";
  let desc_text = " ";
  let pic = loadImage('blender.png');
  //CELLPHONE
  if (label == "Cellphone") {
    label_text = "Cellphone";
    desc_text = "⚡️⚡️⚡️Saving Tips⚡️⚡️⚡️\nUse Wi-Fi, \nnot 4G.";
    pic=img_cell
    score_cell=1
  //BLENDER
  } else if (label == "Blender") {
    pic=img_blender
    label_text = "Blender";
    desc_text = "⚡️⚡️⚡️Saving Tips⚡️⚡️⚡️\n⚡️Use Wi-Fi, not 4G.\n⚡️";
    pic=img_blender
    score_blender=1
  //SMART
  } else if (label == "Smart") {
    pic=img_smart
    label_text = "Smart Devices";
    desc_text = "⚡️⚡️⚡️Saving Tips⚡️⚡️⚡️\n⚡️Smart Devices";
    score_smart=1
      //SMART
  } else if (label == "Microwave") {
    pic=img_microwave
    label_text = "Microwave";
    desc_text = "⚡️⚡️⚡️Saving Tips⚡️⚡️⚡️\n⚡️Instead of heating one plate at a time, time to group foods";
    score_microwave=1
    //TV
    } else if (label == "Television") {
    pic=img_television
    label_text = "Television";
    desc_text = "⚡️⚡️⚡️Saving Tips⚡️⚡️⚡️\n⚡️Are you watching? Give your eyes a rest, or read a book";
    score_television=1
  //Laptop
  } else if (label == "Laptop") {
    pic=img_laptop
    label_text = "Laptop";
    desc_text = "⚡️⚡️⚡️Saving Tips⚡️⚡️⚡️\n⚡️Not in use? Turn off your laptop as soon as you finish using it";
    score_laptop=1
    //Fridge
  } else if (label == "Fridge") {
    pic=img_fridge
    label_text = "Fridge";
    desc_text = "⚡️⚡️⚡️Saving Tips⚡️⚡️⚡️\n⚡️Is the door well shut? Energy escape quickly!\n⚡️Loewr the knob, keep temperatures levels low";
    score_fridge=1
  } else if (label == "Bulb") {
    pic=img_bulb
    label_text = "Bulb";
    desc_text = "⚡️⚡️⚡️Saving Tips⚡️⚡️⚡️\n⚡️Use LED lightbulbs, these are the most efficient\n⚡️Always rember to turn off lights when not in use, be an energy hero🦸‍♂️";
    score_bulb=1
  } else if (label == "Toaster") {
    pic=img_toaster
    label_text = "Toaster";
    desc_text = "⚡️⚡️⚡️Saving Tips⚡️⚡️⚡️\n⚡️Toaster";
    score_toaster=1
  }

  // Draw the emoji 📺 📻💻🚗❄️🌬 🌤⚡️💧 💦🍽🍞

  //text(emoji, width / 4*3, height / 4);
  textSize(64);
  textAlign(LEFT, TOP);
  fill(255);
  //Title
  text(label_text, 4*width / 11, height /2+50);
  
  textSize(32);
  textAlign(LEFT, TOP);
  fill(255);
  text(desc_text,4*width / 11, height /2+150);
  
  image(pic, width / 9*5, height / 10*3,200,200);
  //let score_total=
  textSize(32);
  textAlign(LEFT, TOP);
  fill(255);
  text((score_cell+score_blender+score_smart+score_microwave+score_television+score_laptop+score_fridge+score_bulb+score_toaster),width -120, height -60);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  classifyVideo();
}
