Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}
console.log('ml5 version:', ml5.version);

function modelLoaded() {
    console.log("Model is loaded");
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/h_jvq4Gc3/model.json', modelLoaded);

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + predicition_1;
    speak_data_2 = "The second prediction is " + predicition_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
function check()
{
img = document.getElementById('captured_image');
classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error)
    }
    else
    {
        console.log(results)
        document.getElementById("result_gesture_name").innerText = results[0].label;
        document.getElementById("result_gesture_name2").innerText = results[1].label;
        predicition_1 = results[0].label
        predicition_2 = results[1].label
        speak();
        if(predicition_1 == "peace")
        {
            document.getElementById("update_emoji").innerHTML = "&#9996"
        } 
        if(predicition_1 == "nice")
        {
            document.getElementById("update_emoji").innerHTML = "&#128076"
        }
        if(predicition_1 == "goodluck")
        {
            document.getElementById("update_emoji").innerHTML = "&#128077"
        }


        if(predicition_2 == "peace")
        {
            document.getElementById("update_emoji2").innerHTML = "&#9996;"
        } 
        if(predicition_2 == "nice")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128076"
        }
        if(predicition_2 == "goodluck")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128077"
        }
    }
    
}