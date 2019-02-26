window.AudioContext = window.AudioContext || window.webkitAudioContext;
// var context = new AudioContext();
//var context = new (window.AudioContext || window.webkitAudioContext)(); // Create audio container with webkit fallback
var source = null; // Create empty audio source 1
var audioBuffer = null;

// function initSound1(arrayBuffer) {
//   context.decodeAudioData(arrayBuffer, function(buffer) {
//     audioBuffer = buffer;
//     var buttons = document.querySelectorAll('button');
//     buttons[0].disabled = false;
//     buttons[1].disabled = false;
//   }, function(e) {
//     console.log('Error decoding file', e);
//   }); 
// }
// // Read user selected file as ArrayBuffer and pass it to the API
// var fileInput1 = document.querySelector('#inputSource1');
// fileInput1.addEventListener('change', function(e) {  
//   var reader = new FileReader();
//   reader.onload = function(e) {
//     initSound1(this.result);
//   };
//   reader.readAsArrayBuffer(this.files[0]);
// }, false);

// // function playSound() {
// // 	source1 = context.createBufferSource(); // Create a sound source 1
// // 	source1.buffer = audioBuffer1; // Add the buffered data to our object
// // 	source1.loop = true; // Make it loop
// // 	source1.connect(gain_1);
// // 	source1.start(0); // Play immediately
// // }
// function playSound(buffer) {
//   var source = context.createBufferSource(); // creates a sound source
//   source.buffer = buffer;                    // tell the source which sound to play
//   source.connect(context.destination);       // connect the source to the context's destination (the speakers)
//   source.start(0);                           // play the source now
//                                              // note: on older systems, may have to use deprecated noteOn(time);
// }
// function stopSound() {
//     delayFeedback.gain.value = 0;
//     delayFilter.frequency.value = 0;
	
//   if (source1) {
//     source1.stop(0); // Stop source 1 immediately
//   }
// }

// // Create Audio Nodes
// var gain_1 = context.createGain(); // Create source gain node for channel 1

// // Audio Buffer Source
// function playSound(){
//   var fileInput = $("#audio-file");
//   audioBuffer.gain.value = 1;
//   audioBuffer.loop = true;
//   audioBuffer.connect(oscillatorGain);

//   fileInput.addEventListener("change", function() {
//     var reader = new FileReader();
//     reader.onload = function(ev) {
//       context.decodeAudioData(ev.target.result, function(buffer) {
//         audioBuffer.buffer = buffer;
//         audioBuffer.noteOn(0);
//       });
//     };
//     reader.readAsArrayBuffer(this.files[0]);
//   }, false);
// }

function playSound(){
  var $audio = $('#myAudio');
  $('input').on('change', function(e) {
  var target = e.currentTarget;
  var file = target.files[0];
  var reader = new FileReader();
  
  console.log($audio[0]);
   if (target.files && file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $audio.attr('src', e.target.result);
            $audio.play();
        }
        reader.readAsDataURL(file);
    }
  }); 
}