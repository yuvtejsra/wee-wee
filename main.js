nosex=0; nosey=0; 
function preload(){
lemustache=loadImage('https://i.postimg.cc/3NL9FqD0/376-3767299-cowboy-mustache-clip-art-removebg-preview.png');

}
function setup(){
    canvas=createCanvas(400,400);
    canvas.position(650,150);
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function gotPoses(results){

    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex= "+nosex);
        console.log("nosey= "+nosey);
    }
}
function modelLoaded()
{
    console.log('h');
}
function draw(){
    image(video,0,0,400,400);

image(lemustache,nosex -28,nosey +13,60,26);
}
function takepicta(){
    save('myfilter.png');
}
