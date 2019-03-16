var audioCtx = new AudioContext(); 
var dest = audioCtx.createMediaStreamDestination();
var recorder = new MediaRecorder(dest.stream);
let audio = document.getElementById('playBack');

var rec = document.getElementById("rec");
var stop = document.getElementById("stop");
container.connect(dest);
rec.onclick = function(){record()};
stop.onclick = function(){stopRec()};

const data = [];

function record(){
    //Start recording
    recorder.start();
}

function stopRec(){
    //stop recording
    recorder.stop();
}

recorder.ondataavailable = evt => data.push(evt.data);
recorder.onstop = evt => {
    let blob = new Blob(data, {type: 'audio/ogg; codecs=opus'});
    audio.src = URL.createObjectURL(blob);
};

