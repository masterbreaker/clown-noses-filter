noseX=0;
noseY=0;


function preload(){
clown_nose=loadImage("https://i.postimg.cc/L8vTqc04/580b57fbd9996e24bc43bed5.png");
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);

poseNet.on('pose',gotPoses);
}


function draw(){
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,28,28);
}

function take_snapshot(){
    save("filter.png");
}

function modelLoaded(){
    console.log("poseNet is Initialized") 
}


function gotPoses(results){
    if(
        results.length > 0
    ) {
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
        console.log("nose x= "+results[0].pose.nose.x-15);
        console.log("nose y= "+results[0].pose.nose.y-15);
    }
}

