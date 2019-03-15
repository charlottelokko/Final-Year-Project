
// function preload(){
//     //sound = loadSound(file);
//     sound = loadSound('../SoundDownloads/05.The Other Side.mp3');
//     console.log(sound);
// }

// function setup(){
//     cnv=createCanvas(600,200);
//     cnv.parent('FFT');
//     sound.play();
//     background(0);
//     fill(255);
//     amplitude = new p5.Amplitude();
// }
// function draw(){
//     var level = amplitude.getLevel();
//     var size = map(level, 0, 1, 0, 400);
//     ellipse(width/2, height/2, size, size);
// }

var fft, song;

//Load our song
function preload(){
    //song = loadSound('../SoundDownloads/05.The Other Side.mp3');

    document.getElementById("audioFile").onchange = function(event){
    if(event.target.files[0]){
        if(typeof song != "undefined"){
            song.disconnect();
            song.stop();
        }
    }
    song = loadSound(URL.createObjectURL(event.target.files[0]));
    }
}
var button;

function setup(){
    // var canvas=createCanvas(windowWidth,300);
    var canvas=createCanvas(1200,300);
    canvas.parent('FFT');
    background(0);
    fft = new p5.FFT();
    canvas.mousePressed(togglePlaying)

}
function togglePlaying(){
    
    if(!song.isPlaying()){
        song.play();
    }
    else{
        song.pause();
    }
    
}

function draw(){
    // if(typeof song != "undefined" && song.isLoaded() && !song.isPlaying()){
    //     song.play();
    // }
    background(0);
    
    //Spectrum 
    var spectrum = fft.analyze();
    //var w = windowWidth / spectrum.length;
    noStroke();
    fill(66,131,244);
    for (var i = 0; i< spectrum.length; i++){
        // var amp=spectrum[i];
        // var y = map(amp,0,256,height,0);
        // stroke(i,255,255);
        // line(i*w, height, i*w, y);
        var x = map(i, 0, spectrum.length, 0, width);
        var h = -height + map(spectrum[i], 0, 255, height, 0);
        rect(x, height, width / spectrum.length, h )
    }

    //Waveform
    var waveform = fft.waveform();
   // var w2 = windowWidth/waveform.length;
    noFill();
    beginShape();
    stroke(239,127,52);
    strokeWeight(3);
    for (var i = 0; i< waveform.length; i++){
        var x = map(i, 0, waveform.length, 0, width);
        var y = map( waveform[i], -1, 1, 0, height);
        vertex(x,y);
    }
    endShape();
    
}

