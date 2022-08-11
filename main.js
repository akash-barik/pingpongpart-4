xrightwrist="";
yrightwrist="";
rightwrist="";

function setup(){
canvas=createCanvas(500,350);
canvas.parent('modal-body');
video=createCapture(VIDEO);
video.size(500,350);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("model is loaded");
    game.detect(video,gameapp);
}

    function gotposes(results){
        if(posenet.length>0){
            console.log(results);
          xrightwrist=results[0].pose.nose.x;
          yrightwrist=results[0].pose.nose.y;
          console.log("leftnosex= "+ noseX + ",leftnosey= " +  noseY);
        }
        }
    
        function draw(){
            image(video,0,0,600,500);
            fill("#FFFF00");
            stroke("#FFFF00");
            circle(0,0,0,3);
        }        























