const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here

    getBackgroundImg();

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var time = await fetch("http://worldclockapi.com/api/json/est/now")
    //change the data in JSON format
    var timeJSON = await time.json()
    console.log(timeJSON);
    // write code slice the datetime
    var daytime = timeJSON.currentDateTime;
    console.log(daytime);
    var clockTime = daytime.slice(11,13)
    console.log(clockTime);
    

    // add conditions to change the background images from sunrise to sunset
    if(clockTime>=06&&clockTime<=19) {
        bg="sunrise1.png"
    }
    //load the image in backgroundImg variable here
    else{
        bg="sunset11.png"
    }
    backgroundImg=loadImage(bg);
    
    
    
}
