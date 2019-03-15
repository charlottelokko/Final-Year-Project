
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

function setup(){
    // var canvas=createCanvas(windowWidth,300);
    var canvas=createCanvas(1200,256);
    canvas.parent('FFT');
    background(0);
    fft = new p5.FFT();
    canvas.mousePressed(togglePlaying);

    aRevb = createButton('Add Reverb');
    aRevb.parent('buttonsPls');
    aRevb.mousePressed(toggleReverb);

    filterL = createButton('Low Pass Filter');
    filterL.parent('buttonsPls');
    filterL.mousePressed(tFilterL);

    filterB = createButton('Band Pass Filter');
    filterB.parent('buttonsPls');
    filterB.mousePressed(tFilterB);

    filterH = createButton('High Pass Filter');
    filterH.parent('buttonsPls');
    filterH.mousePressed(tFilterH);

    stopPly = createButton('Stop Playback');
    stopPly.parent('buttonsPls');
    stopPly.mousePressed(toggleRoff);
   

}
function togglePlaying(){
    
    if(!song.isPlaying() && typeof song != "undefined" && song.isLoaded()){
        song.play();
    }
    else{
        song.pause();
    }
    
}
function toggleReverb(){
   
    reverb = new p5.Reverb();
    song.disconnect();
    reverb.process(song,3,2);
}

function toggleRoff(){
    song.disconnect();
}

function tFilterL(){
    filter = new p5.LowPass();
    song.disconnect();
    song.connect(filter);
}

function tFilterH(){
    filter = new p5.HighPass();
    song.disconnect();
    song.connect(filter);
}

function tFilterB(){
    filter = new p5.BandPass();
    song.disconnect();  //Disconnect soundfile from master output...
    filter.process(song); // ...and connect to filter so we'll only hear BandPass.
}

function draw(){
    // if(typeof song != "undefined" && song.isLoaded() && !song.isPlaying()){
    //     song.play();
    // }
    background(0);
    
    //Spectrum 
    var spectrum = fft.analyze();
    // var w = windowWidth / spectrum.length;
    var w = width/256;
    noStroke();
    fill(66,131,244);
    for (var i = 0; i< spectrum.length; i++){
        var amp=spectrum[i];
        var y = map(amp,0,256,height,0);
        stroke(i,255,255);
        line(i*w, height, i*w, y);
        // var x = map(i, 0, spectrum.length, 0, width);
        // var h = -height + map(spectrum[i], 0, 255, height, 0);
        // rect(x, height, width / spectrum.length, h )
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
    
    colour = '#f47442';
    aRevb.style('font-family', 'Ariel');
    aRevb.style('background-color', colour);
}

