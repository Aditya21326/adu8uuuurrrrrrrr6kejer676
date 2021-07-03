var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML="",
    recognition.start();
    
}

function speak()
{
    var synth=window.speechSynthesis;
    speak_data="TAKING YOUR SELFIE IN FIVE SECONDS"
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);

}
camera=document.getElementById("camera");
Webcam.set({
    width:360, 
    height:250,
    image_format:'jpeg',
    jpeg_quality:90 

});