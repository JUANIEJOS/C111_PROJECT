prediction_1="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function capture_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
    });
}
console.log('ml5 version',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/G_l7QkYGf/model.json',modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}
function speaking(){
    var synth=window.speechSynthesis;
    speak1=prediction_1;
    var utterThis=new SpeechSynthesisUtterance(speak1);
    synth.speak(utterThis);
}
function predict_image(){
    final_image=document.getElementById("captured_image");
    classifier.classify(final_image,gotResult);
}

function gotResult(error,result){

    if (error){
 console.error(error);
    }
    else{
console.log(result);

document.getElementById("prediction_1_name").innerHTML=result[0].label;
prediction_1=result[0].label;
speaking();

if(result[0].label=="You did a great job!"){
document.getElementById("prediction_1_emoji").innerHTML="&#128077";
}

if(result[0].label=="That was a marvelous victory!!"){
    document.getElementById("prediction_1_emoji").innerHTML="&#9996;";
    }

if(result[0].label=="This looks amazing!!"){
    document.getElementById("prediction_1_emoji").innerHTML="&#128076;";
}

if(result[0].label=="Rock on!!"){
    document.getElementById("prediction_1_emoji").innerHTML="&#129304;";
    }

 if(result[0].label=="United we stand, divided we fall"){
    document.getElementById("prediction_1_emoji").innerHTML="&#9994;";
        }

}}