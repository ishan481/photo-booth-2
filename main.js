noseX=0;
 noseY=0;  


function preload(){

}

function setup(){
    canvas= createCanvas (300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw(){

}

function Take_snapshot(){
    save('image.png');
}

function modelLoaded(){
    console.log('poseNet is initialised');
}
function gotPoses(results){
    if( results.length > 0){
       console.log(results);
       noseX=results[0].pose.nose.x;
       noseY=results[0].pose.nose.y;
       console.log("nose x=" + nose.x);
       console.log("nose y=" + nose.y);

    }
}