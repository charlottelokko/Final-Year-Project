var fft, song;

//Load the song
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
    reverb.process(song,3,2); //reverbTime 3 decs, decay rate 2%
    reverb.amp(3);
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
    

    //Styling the buttons
    colour = '#f47442';
    aRevb.style('background-color', colour);
    aRevb.style('border-color', colour);
    aRevb.style('border-radius','8px');
    aRevb.style('box-shadow', '0px 10px 14px -7px #276873');
    aRevb.style('background-color', colour);
    aRevb.style('margin', '0.5%');
    aRevb.style('font-size','18px');
    aRevb.style('font-family','cursive');
    aRevb.style('display','inline-block');

    filterL.style('background-color', colour);
    filterL.style('border-color', colour);
    filterL.style('border-radius','8px');
    filterL.style('box-shadow', '0px 10px 14px -7px #276873');
    filterL.style('background-color', colour);
    filterL.style('margin', '0.5%');
    filterL.style('font-size','18px');
    filterL.style('font-family','cursive');
    filterL.style('display','inline-block');

    filterB.style('background-color', colour);
    filterB.style('border-color', colour);
    filterB.style('border-radius','8px');
    filterB.style('box-shadow', '0px 10px 14px -7px #276873');
    filterB.style('background-color', colour);
    filterB.style('margin', '0.5%');
    filterB.style('font-size','18px');
    filterB.style('font-family','cursive');
    filterB.style('display','inline-block');

    filterH.style('background-color', colour);
    filterH.style('border-color', colour);
    filterH.style('border-radius','8px');
    filterH.style('box-shadow', '0px 10px 14px -7px #276873');
    filterH.style('background-color', colour);
    filterH.style('margin', '0.5%');
    filterH.style('font-size','18px');
    filterH.style('font-family','cursive');
    filterH.style('display','inline-block');

    stopPly.style('background-color', colour);
    stopPly.style('border-color', colour);
    stopPly.style('border-radius','8px');
    stopPly.style('box-shadow', '0px 10px 14px -7px #276873');
    stopPly.style('background-color', colour);
    stopPly.style('margin', '0.5%');
    stopPly.style('font-size','18px');
    stopPly.style('font-family','cursive');
    stopPly.style('display','inline-block');

}



