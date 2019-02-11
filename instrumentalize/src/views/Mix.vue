<!-- <template>
  <div class="about">
    <h1>This is the mix page</h1>
  </div>
</template> -->

<template>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="Web Audio Loop Mixer is a Web Audio experiment by Middle Ear Media."
    />
    <meta
      name="keywords"
      content="web, audio, loop, mixer, html5, css3, javascript, jquery, web audio api, obadiah metivier, obadiah, metivier, middle ear media, middle ear, interactive"
    />
    <meta name="author" content="Obadiah Metivier" />
    <title>Web Audio Loop Mixer by Middle Ear Media</title>
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js"></script>
    <script src="assets/js/jquery.knob.js"></script>
    <script src="jquery-3.3.1.min.js"></script>
</template>

<template>
  <body>
    <div id="page-wrap">
      <div id="controls" class="panel">
        <div class="strip dark">
          <h1>Web Audio Loop Mixer</h1>
        </div>
        <div class="stripTransport">
          <input id="inputSource1" type="file" accept="audio/*" />
          <input id="inputSource2" type="file" accept="audio/*" />
          <input id="inputSource3" type="file" accept="audio/*" />
          <input id="inputSource4" type="file" accept="audio/*" />
        </div>
        <div class="stripTransport">
          <button onclick="playSound()" disabled>Play</button>
          <button onclick="stopSound()" disabled>Stop</button>
        </div>
        <div class="strip">
          <div class="stripSection">
            <h3 class="label">Ch 1</h3>
          </div>
          <div class="stripSection">
            <p class="knobContainer label">
              <span class="green">Gain</span>
              <input
                id="gain-1"
                data-step="1"
                data-min="0"
                data-max="20"
                data-width="60"
                data-cursor="true"
                data-thickness=".5"
                data-angleOffset="-125"
                data-angleArc="250"
                data-fgColor="#8FE356"
                data-bgColor="#777"
                value="10"
              />
            </p>
          </div>
          <div class="stripSection">
            <p class="label">
              <span class="checkbox-label">EQ</span
              ><input type="checkbox" id="eq-1" /><label for="eq-1"
                ><span></span
              ></label>
            </p>

            <p class="knobContainer label">
              <span class="yellow">High</span>
              <input
                id="high-1"
                data-step="1"
                data-min="-15"
                data-max="15"
                data-width="60"
                data-cursor="true"
                data-thickness=".5"
                data-angleOffset="-125"
                data-angleArc="250"
                data-fgColor="#E3DC52"
                data-bgColor="#777"
                value="0"
              />
            </p>

            <p class="knobContainer label">
              <span class="orangeLight">Mid</span>
              <input
                id="mid-1"
                data-step="1"
                data-min="-15"
                data-max="15"
                data-width="60"
                data-cursor="true"
                data-thickness=".5"
                data-angleOffset="-125"
                data-angleArc="250"
                data-fgColor="#E3AA54"
                data-bgColor="#777"
                value="0"
              />
            </p>

            <p class="knobContainer label">
              <span class="orangeDark">Low</span>
              <input
                id="low-1"
                data-step="1"
                data-min="-15"
                data-max="15"
                data-width="60"
                data-cursor="true"
                data-thickness=".5"
                data-angleOffset="-125"
                data-angleArc="250"
                data-fgColor="#E38356"
                data-bgColor="#777"
                value="0"
              />
            </p>
          </div>
          <div class="stripSection">
            <p class="knobContainer label">
              <span class="blue">Pan</span>
              <input
                id="pan-1"
                data-step="1"
                data-min="-45"
                data-max="45"
                data-width="60"
                data-cursor="true"
                data-thickness=".5"
                data-angleOffset="-125"
                data-angleArc="250"
                data-fgColor="#56A1E3"
                data-bgColor="#777"
                value="0"
                onchange="pan(this);"
              />
            </p>
          </div>
          <div class="stripSection">
            <p class="label">
              <span>Vol</span>
              <span class="sliderContainer"
                ><input
                  id="volume-1"
                  class="slider"
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value="1"
              /></span>
            </p>
          </div>
          <div class="stripSection">
            <p class="label">
              <span class="checkbox-label">Mute</span
              ><input type="checkbox" id="mute-1" /><label for="mute-1"
                ><span></span
              ></label>
            </p>
          </div>
          <div class="stripSection">
            <p class="knobContainer label">
              <span class="pink">Delay</span>
              <input
                id="delay-1"
                data-step="1"
                data-min="0"
                data-max="10"
                data-width="60"
                data-cursor="true"
                data-thickness=".5"
                data-angleOffset="-125"
                data-angleArc="250"
                data-fgColor="#E455E4"
                data-bgColor="#777"
                value="0"
              />
            </p>
            <p class="knobContainer label">
              <span class="purple">Distortion</span>
              <input
                id="distortion-1"
                data-step="1"
                data-min="0"
                data-max="10"
                data-width="60"
                data-cursor="true"
                data-thickness=".5"
                data-angleOffset="-125"
                data-angleArc="250"
                data-fgColor="#944ddc"
                data-bgColor="#777"
                value="0"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
// // This makes the knobs work (along with jquery.knob.js)
// (function($) {
//   var methods = {
//     init: function() {}
//   };
//   $.fn.knob = function(method) {
//     if (methods[method]) {
//       return methods[method].apply(
//         this,
//         Array.prototype.slice.call(arguments, 1)
//       );
//     } else if (typeof method === "object" || !method) {
//       return methods.init.apply(this, arguments);
//     } else {
//       $.error("Method " + method + " does not exist");
//     }
//   };
// });

// var context = new (window.AudioContext || window.webkitAudioContext)(); // Create audio container with webkit fallback
// var source1 = null; // Create empty audio source 1
// var source2 = null; // Create empty audio source 2
// var audioBuffer2 = null; // Create empty audio buffer 2
// var audioBuffer3 = null; // Create empty audio buffer 3
// var audioBuffer4 = null; // Create empty audio buffer 4

// // Convolver - Reverb - load the impulse response asynchronously
// var impulse; // Create the Impulse Sound
// var getImpulse = new XMLHttpRequest(); // Load the Impulse Sound with XMLHttpRequest
// getImpulse.open("GET", "", true); // Path to Audio File
// getImpulse.responseType = "arraybuffer"; // Read as Binary Data
// getImpulse.onload = function() {
//   context.decodeAudioData(getImpulse.response, function(buffer) {
//     impulse = buffer; // Decode the Audio Data and Store it in a Variable
//   });
// };
// getImpulse.send(); // Send the Request and Load the impulse File

// // Allow user to select source file for channel 1
// function initSound1(arrayBuffer) {
//   context.decodeAudioData(
//     arrayBuffer,
//     function(buffer) {
//       var audioBuffer1 = buffer;
//       var buttons = document.querySelectorAll("button");
//       buttons[0].disabled = false;
//       buttons[1].disabled = false;
//     },
//     function(e) {
//       console.log("Error decoding file", e);
//     }
//   );
// }
// // Read user selected file as ArrayBuffer and pass it to the API
// var fileInput1 = document.querySelector("#inputSource1");
// fileInput1.addEventListener(
//   "change",
//   function(e) {
//     var reader = new FileReader();
//     reader.onload = function(e) {
//       initSound1(this.result);
//     };
//     reader.readAsArrayBuffer(this.files[0]);
//   },
//   false
// );

// // Allow user to select source file for channel 2
// function initSound2(arrayBuffer) {
//   context.decodeAudioData(
//     arrayBuffer,
//     function(buffer) {
//       audioBuffer2 = buffer;
//       var buttons = document.querySelectorAll("button");
//       buttons[0].disabled = false;
//       buttons[1].disabled = false;
//     },
//     function(e) {
//       console.log("Error decoding file", e);
//     }
//   );
// }
// // Read user selected file as ArrayBuffer and pass it to the API
// var fileInput2 = document.querySelector("#inputSource2");
// fileInput2.addEventListener(
//   "change",
//   function(e) {
//     var reader = new FileReader();
//     reader.onload = function(e) {
//       initSound2(this.result);
//     };
//     reader.readAsArrayBuffer(this.files[0]);
//   },
//   false
// );

// // Allow user to select source file for channel 3
// function initSound3(arrayBuffer) {
//   context.decodeAudioData(
//     arrayBuffer,
//     function(buffer) {
//       audioBuffer3 = buffer;
//       var buttons = document.querySelectorAll("button");
//       buttons[0].disabled = false;
//       buttons[1].disabled = false;
//     },
//     function(e) {
//       console.log("Error decoding file", e);
//     }
//   );
// }
// // Read user selected file as ArrayBuffer and pass it to the API
// var fileInput3 = document.querySelector("#inputSource3");
// fileInput3.addEventListener(
//   "change",
//   function(e) {
//     var reader = new FileReader();
//     reader.onload = function(e) {
//       initSound3(this.result);
//     };
//     reader.readAsArrayBuffer(this.files[0]);
//   },
//   false
// );

// // Allow user to select source file for channel 4
// function initSound4(arrayBuffer) {
//   context.decodeAudioData(
//     arrayBuffer,
//     function(buffer) {
//       audioBuffer4 = buffer;
//       var buttons = document.querySelectorAll("button");
//       buttons[0].disabled = false;
//       buttons[1].disabled = false;
//     },
//     function(e) {
//       console.log("Error decoding file", e);
//     }
//   );
// }
// // Read user selected file as ArrayBuffer and pass it to the API
// var fileInput4 = document.querySelector("#inputSource4");
// fileInput4.addEventListener(
//   "change",
//   function(e) {
//     var reader = new FileReader();
//     reader.onload = function(e) {
//       initSound4(this.result);
//     };
//     reader.readAsArrayBuffer(this.files[0]);
//   },
//   false
// );

// function playSound(source1, source2, audioBuffer1) {
//   source1 = context.createBufferSource(); // Create a sound source 1
//   source1.buffer = audioBuffer1; // Add the buffered data to our object
//   source1.loop = true; // Make it loop
//   source1.connect(gain_1);
//   source1.start(0); // Play immediately

//   source2 = context.createBufferSource(); // Create a sound source 2 if it exists
//   source2.buffer = audioBuffer2; // Add the buffered data to our object
//   source2.loop = true; // Make it loop
//   source2.connect(gain_2);
//   source2.start(0); // Play immediately

//   var source3 = context.createBufferSource(); // Create a sound source 3 if it exists
//   source3.buffer = audioBuffer3; // Add the buffered data to our object
//   source3.loop = true; // Make it loop
//   source3.connect(gain_3);
//   source3.start(0); // Play immediately

//   var source4 = context.createBufferSource(); // Create a sound source 4 if it exists
//   source4.buffer = audioBuffer4; // Add the buffered data to our object
//   source4.loop = true; // Make it loop
//   source4.connect(gain_4);
//   source4.start(0); // Play immediately

//   var reverb = context.createBufferSource(); // Create an reverb sound source
//   reverb.buffer = impulse; // Attatch our Audio impulse Data as it's Buffer
//   reverb.normalize = true; // Perform a scaled RMS-power analysis of the audio data in buffer to calculate a normalizationScale
//   // reverb.loop = true; // Make it loop. is this needed ???
//   reverb.start(0); // Play the Impulse Sound Immediately

//   // Duplicate these functions so settings are remembered if stop button is pressed
//   (function() {
//     document.getElementById("delayTime").addEventListener("change", function() {
//       delay.delayTime.value = this.value;
//     });
//   });
//   (function(delayFeedback) {
//     document
//       .getElementById("delayFeedback")
//       .addEventListener("change", function() {
//         delayFeedback.gain.value = this.value;
//       });
//   });
//   (function(delayFilter) {
//     document
//       .getElementById("delayFilter")
//       .addEventListener("change", function() {
//         delayFilter.frequency.value = this.value;
//       });
//   });
//   (function() {
//     document
//       .getElementById("delayLevel")
//       .addEventListener("change", function() {
//         send2.gain.value = this.value;
//       });
//   });
// }
// function stopSound(
//   delayFeedback,
//   delayFilter,
//   source1,
//   source2,
//   source3,
//   source4
// ) {
//   delayFeedback.gain.value = 0;
//   delayFilter.frequency.value = 0;

//   if (source1) {
//     source1.stop(0); // Stop source 1 immediately
//   }
//   if (source2) {
//     source2.stop(0); // Stop source 2 immediately
//   }
//   if (source3) {
//     source3.stop(0); // Stop source 3 immediately
//   }
//   if (source4) {
//     source4.stop(0); // Stop source 4 immediately
//   }
// }

// // Create Audio Nodes
// var gain_1 = context.createGain(); // Create source gain node for channel 1
// var gain_2 = context.createGain(); // Create source gain node for channel 2
// var gain_3 = context.createGain(); // Create source gain node for channel 3
// var gain_4 = context.createGain(); // Create source gain node for channel 4

// var pan_1 = context.createPanner(); // Create panner node for channel 1
// var pan_2 = context.createPanner(); // Create panner node for channel 2
// var pan_3 = context.createPanner(); // Create panner node for channel 3
// var pan_4 = context.createPanner(); // Create panner node for channel 4

// var vol_1 = context.createGain(); // Create volume gain node for channel 1
// var vol_2 = context.createGain(); // Create volume gain node for channel 2
// var vol_3 = context.createGain(); // Create volume gain node for channel 3
// var vol_4 = context.createGain(); // Create volume gain node for channel 4

// var mute_1 = context.createGain(); // Create mute routing gain node channel 1
// var mute_2 = context.createGain(); // Create mute routing gain node channel 2
// var mute_3 = context.createGain(); // Create mute routing gain node channel 3
// var mute_4 = context.createGain(); // Create mute routing gain node channel 4

// var send1_1 = context.createGain(); // Create routing gain node for send 1 for channel 1
// var send2_1 = context.createGain(); // Create routing gain node for send 2 for channel 1
// var send3_1 = context.createGain(); // Create routing gain node for send 3 for channel 1
// var sendmain_1 = context.createGain(); // Create routing gain node for main bus for channel 1

// var send1_2 = context.createGain(); // Create routing gain node for send 1 for channel 2
// var send2_2 = context.createGain(); // Create routing gain node for send 2 for channel 2
// var send3_2 = context.createGain(); // Create routing gain node for send 3 for channel 2
// var sendmain_2 = context.createGain(); // Create routing gain node for main bus for channel 2

// var send1_3 = context.createGain(); // Create routing gain node for send 1 for channel 3
// var send2_3 = context.createGain(); // Create routing gain node for send 2 for channel 3
// var send3_3 = context.createGain(); // Create routing gain node for send 3 for channel 3
// var sendmain_3 = context.createGain(); // Create routing gain node for main bus for channel 3

// var send1_4 = context.createGain(); // Create routing gain node for send 1 for channel 4
// var send2_4 = context.createGain(); // Create routing gain node for send 2 for channel 4
// var send3_4 = context.createGain(); // Create routing gain node for send 3 for channel 4
// var sendmain_4 = context.createGain(); // Create routing gain node for main bus for channel 4

// // Distortion
// var distortion = context.createWaveShaper(); // Create waveshaper node for distortion fx
// function makeDistortionCurve(amount) {
//   var k = typeof amount === "number" ? amount : 50,
//     n_samples = 44100,
//     curve = new Float32Array(n_samples),
//     deg = Math.PI / 180,
//     i = 0,
//     x;
//   for (; i < n_samples; ++i) {
//     x = (i * 2) / n_samples - 1;
//     curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
//   }
//   return curve;
// }

// distortion.curve = makeDistortionCurve(400);
// distortion.oversample = "4x";

// // Reverb
// var reverb = context.createConvolver(); // Create convolver node for reverb fx

// // Delay
// var delay = context.createDelay(); // Create delay node for delay fx

// delay.delayTime.value = 0.5;

// var delayFeedback = context.createGain();
// delayFeedback.gain.value = 0.8;

// var delayFilter = context.createBiquadFilter();
// delayFilter.frequency.value = 1000;

// delay.connect(delayFeedback);
// delayFeedback.connect(delayFilter);
// delayFilter.connect(delay);

// (function() {
//   document.getElementById("delayTime").addEventListener("change", function() {
//     delay.delayTime.value = this.value;
//   });
// });
// (function() {
//   document
//     .getElementById("delayFeedback")
//     .addEventListener("change", function() {
//       delayFeedback.gain.value = this.value;
//     });
// });
// (function() {
//   document.getElementById("delayFilter").addEventListener("change", function() {
//     delayFilter.frequency.value = this.value;
//   });
// });

// var send1 = context.createGain(); // Create routing gain node for send 1 (reverb)

// var send2 = context.createGain(); // Create routing gain node for send 2 (delay)
// send2.gain.value = 1;
// (function() {
//   document.getElementById("delayLevel").addEventListener("change", function() {
//     send2.gain.value = this.value;
//   });
// });

// var send3 = context.createGain(); // Create routing gain node for send 3 (distortion)
// send3.gain.value = 0.3;
// //  (function () {
// // 	document.getElementById('distortionLevel').addEventListener('change', function() {
// // 		send3.gain.value = this.value;
// // 	});
// // })

// var comp_global = context.createDynamicsCompressor(); // Create global compressor node
// var gain_master = context.createGain(); // Create master gain node

// // EQ settings
// var makeHigh_1 = function() {
//   var high1 = context.createBiquadFilter();
//   high1.type = "highshelf"; // Highshelf filter
//   high1.frequency.value = 6000;
//   high1.gain.value = "#high-1".val();
//   return high1;
// };
// var makeMid_1 = function() {
//   var mid1 = context.createBiquadFilter();
//   mid1.type = "peaking"; // Peaking filter
//   mid1.frequency.value = 1000;
//   mid1.Q.value = 1;
//   mid1.gain.value = "#mid-1".val();
//   return mid1;
// };
// var makeLow_1 = function() {
//   var low1 = context.createBiquadFilter();
//   low1.type = "lowshelf"; // Lowshelf filter
//   low1.frequency.value = 440;
//   low1.gain.value = "#low-1".val();
//   return low1;
// };
// var makeHigh_2 = function() {
//   var high2 = context.createBiquadFilter();
//   high2.type = "highshelf"; // Highshelf filter
//   high2.frequency.value = 6000;
//   high2.gain.value = "#high-2".val();
//   return high2;
// };
// var makeMid_2 = function() {
//   var mid2 = context.createBiquadFilter();
//   mid2.type = "peaking"; // Peaking filter
//   mid2.frequency.value = 1000;
//   mid2.Q.value = 1;
//   mid2.gain.value = "#mid-2".val();
//   return mid2;
// };
// var makeLow_2 = function() {
//   var low2 = context.createBiquadFilter();
//   low2.type = "lowshelf"; // Lowshelf filter
//   low2.frequency.value = 440;
//   low2.gain.value = "#low-2".val();
//   return low2;
// };
// var makeHigh_3 = function() {
//   var high3 = context.createBiquadFilter();
//   high3.type = "highshelf"; // Highshelf filter
//   high3.frequency.value = 6000;
//   high3.gain.value = "#high-3".val();
//   return high3;
// };
// var makeMid_3 = function() {
//   var mid3 = context.createBiquadFilter();
//   mid3.type = "peaking"; // Peaking filter
//   mid3.frequency.value = 1000;
//   mid3.Q.value = 1;
//   mid3.gain.value = "#mid-3".val();
//   return mid3;
// };
// var makeLow_3 = function() {
//   var low3 = context.createBiquadFilter();
//   low3.type = "lowshelf"; // Lowshelf filter
//   low3.frequency.value = 440;
//   low3.gain.value = "#low-3".val();
//   return low3;
// };

// var makeHigh_4 = function() {
//   var high4 = context.createBiquadFilter();
//   high4.type = "highshelf"; // Highshelf filter
//   high4.frequency.value = 6000;
//   high4.gain.value = "#high-4".val();
//   return high4;
// };
// var makeMid_4 = function() {
//   var mid4 = context.createBiquadFilter();
//   mid4.type = "peaking"; // Peaking filter
//   mid4.frequency.value = 1000;
//   mid4.Q.value = 1;
//   mid4.gain.value = "#mid-4".val();
//   return mid4;
// };
// var makeLow_4 = function() {
//   var low4 = context.createBiquadFilter();
//   low4.type = "lowshelf"; // Lowshelf filter
//   low4.frequency.value = 440;
//   low4.gain.value = "#low-4".val();
//   return low4;
// };

// // High EQ
// (high_1 = makeHigh_1()),
//   (high_2 = makeHigh_2()),
//   (high_3 = makeHigh_3()),
//   (high_4 = makeHigh_4()),
//   // Mid EQ
//   (mid_1 = makeMid_1()),
//   (mid_2 = makeMid_2()),
//   (mid_3 = makeMid_3()),
//   (mid_4 = makeMid_4()),
//   // Low EQ
//   (low_1 = makeLow_1()),
//   (low_2 = makeLow_2()),
//   (low_3 = makeLow_3()),
//   (low_4 = makeLow_4()),
//   // Volume
//   (vol_1.gain.value = 1); // Initial volume is 100% for channel 1
// vol_2.gain.value = 1; // Initial volume is 100% for channel 2
// vol_3.gain.value = 1; // Initial volume is 100% for channel 3
// vol_4.gain.value = 1; // Initial volume is 100% for channel 4

// (function() {
//   document.getElementById("volume-1").addEventListener("change", function() {
//     vol_1.gain.value = this.value;
//   });
// });
// (function() {
//   document.getElementById("volume-2").addEventListener("change", function() {
//     vol_2.gain.value = this.value;
//   });
// });
// (function() {
//   document.getElementById("volume-3").addEventListener("change", function() {
//     vol_3.gain.value = this.value;
//   });
// });
// (function() {
//   document.getElementById("volume-4").addEventListener("change", function() {
//     vol_4.gain.value = this.value;
//   });
// });

// // Mute
// mute_1.gain.value = 0; // Muted Volume is 0% for channel 1
// mute_2.gain.value = 0; // Muted Volume is 0% for channel 2
// mute_3.gain.value = 0; // Muted Volume is 0% for channel 3
// mute_4.gain.value = 0; // Muted Volume is 0% for channel 4

// // Listen for Knob changes
// $(function() {
//   $("#gain-1").dial({
//     change: function(v) {
//       gain_1.gain.value = v / 10;
//     }
//   });
//   $("#gain-2").dial({
//     change: function(v) {
//       gain_2.gain.value = v / 10;
//     }
//   });
//   $("#gain-3").dial({
//     change: function(v) {
//       gain_3.gain.value = v / 10;
//     }
//   });
//   $("#gain-4").dial({
//     change: function(v) {
//       gain_4.gain.value = v / 10;
//     }
//   });

//   $("#high-1").dial({
//     change: function(v) {
//       high_1.gain.value = v;
//     }
//   });
//   $("#high-2").dial({
//     change: function(v) {
//       high_2.gain.value = v;
//     }
//   });
//   $("#high-3").dial({
//     change: function(v) {
//       high_3.gain.value = v;
//     }
//   });
//   $("#high-4").dial({
//     change: function(v) {
//       high_4.gain.value = v;
//     }
//   });

//   $("#mid-1").dial({
//     change: function(v) {
//       mid_1.gain.value = v;
//     }
//   });
//   $("#mid-2").dial({
//     change: function(v) {
//       mid_2.gain.value = v;
//     }
//   });
//   $("#mid-3").dial({
//     change: function(v) {
//       mid_3.gain.value = v;
//     }
//   });
//   $("#mid-4").dial({
//     change: function(v) {
//       mid_4.gain.value = v;
//     }
//   });

//   $("#low-1").dial({
//     change: function(v) {
//       low_1.gain.value = v;
//     }
//   });
//   $("#low-2").dial({
//     change: function(v) {
//       low_2.gain.value = v;
//     }
//   });
//   $("#low-3").dial({
//     change: function(v) {
//       low_3.gain.value = v;
//     }
//   });
//   $("#low-4").dial({
//     change: function(v) {
//       low_4.gain.value = v;
//     }
//   });

//   $("#pan-1").dial({
//     change: function(x) {
//       var xDeg = x;
//       var zDeg = xDeg + 90;
//       if (zDeg > 90) {
//         zDeg = 180 - zDeg;
//       }
//       var x = Math.sin(xDeg * (Math.PI / 180));
//       var z = Math.sin(zDeg * (Math.PI / 180));
//       pan_1.setPosition(x, 0, z);
//     }
//   });
//   $("#pan-2").dial({
//     change: function(x) {
//       var xDeg = x;
//       var zDeg = xDeg + 90;
//       if (zDeg > 90) {
//         zDeg = 180 - zDeg;
//       }
//       var x = Math.sin(xDeg * (Math.PI / 180));
//       var z = Math.sin(zDeg * (Math.PI / 180));
//       pan_2.setPosition(x, 0, z);
//     }
//   });
//   $("#pan-3").dial({
//     change: function(x) {
//       var xDeg = x;
//       var zDeg = xDeg + 90;
//       if (zDeg > 90) {
//         zDeg = 180 - zDeg;
//       }
//       var x = Math.sin(xDeg * (Math.PI / 180));
//       var z = Math.sin(zDeg * (Math.PI / 180));
//       pan_3.setPosition(x, 0, z);
//     }
//   });
//   $("#pan-4").dial({
//     change: function(x) {
//       var xDeg = x;
//       var zDeg = xDeg + 90;
//       if (zDeg > 90) {
//         zDeg = 180 - zDeg;
//       }
//       var x = Math.sin(xDeg * (Math.PI / 180));
//       var z = Math.sin(zDeg * (Math.PI / 180));
//       pan_4.setPosition(x, 0, z);
//     }
//   });

//   $("#reverb-1").dial({
//     change: function(v) {
//       send1_1.gain.value = v / 10;
//     }
//   });
//   $("#reverb-2").dial({
//     change: function(v) {
//       send1_2.gain.value = v / 10;
//     }
//   });
//   $("#reverb-3").dial({
//     change: function(v) {
//       send1_3.gain.value = v / 10;
//     }
//   });
//   $("#reverb-4").dial({
//     change: function(v) {
//       send1_4.gain.value = v / 10;
//     }
//   });

//   // Send2 (Delay) Initial Channel gains
//   send2_1.gain.value = 0; // 0% for channel 1
//   send2_2.gain.value = 0; // 0% for channel 2
//   send2_3.gain.value = 0; // 0% for channel 3
//   send2_4.gain.value = 0; // 0% for channel 4

//   $("#delay-1").dial({
//     change: function(v) {
//       send2_1.gain.value = v / 10;
//     }
//   });
//   $("#delay-2").dial({
//     change: function(v) {
//       send2_2.gain.value = v / 10;
//     }
//   });
//   $("#delay-3").dial({
//     change: function(v) {
//       send2_3.gain.value = v / 10;
//     }
//   });
//   $("#delay-4").dial({
//     change: function(v) {
//       send2_4.gain.value = v / 10;
//     }
//   });

//   // Send3 (Distortion) Initial Channel gains
//   send3_1.gain.value = 0; // 0% for channel 1
//   send3_2.gain.value = 0; // 0% for channel 2
//   send3_3.gain.value = 0; // 0% for channel 3
//   send3_4.gain.value = 0; // 0% for channel 4

//   $("#distortion-1").dial({
//     change: function(v) {
//       send3_1.gain.value = v / 10;
//     }
//   });
//   $("#distortion-2").dial({
//     change: function(v) {
//       send3_2.gain.value = v / 10;
//     }
//   });
//   $("#distortion-3").dial({
//     change: function(v) {
//       send3_3.gain.value = v / 10;
//     }
//   });
//   $("#distortion-4").dial({
//     change: function(v) {
//       send3_4.gain.value = v / 10;
//     }
//   });
// });

// // Wiring

// // Channel One Main Bus
// gain_1.connect(pan_1);
// pan_1.connect(vol_1);
// vol_1.connect(sendmain_1);
// sendmain_1.connect(comp_global);
// // Channel One Reverb Send
// vol_1.connect(send1_1);
// send1_1.connect(reverb);
// // Channel One Delay Send
// vol_1.connect(send2_1);
// send2_1.connect(delay);
// // Channel One Distortion Send
// vol_1.connect(send3_1);
// send3_1.connect(distortion);

// // Channel Two Main Bus
// gain_2.connect(pan_2);
// pan_2.connect(vol_2);
// vol_2.connect(sendmain_2);
// sendmain_2.connect(comp_global);
// // Channel Two Reverb Send
// vol_2.connect(send1_2);
// send1_2.connect(reverb);
// // Channel Two Delay Send
// vol_2.connect(send2_2);
// send2_2.connect(delay);
// // Channel Two Distortion Send
// vol_2.connect(send3_2);
// send3_2.connect(distortion);

// // Channel Three Main Bus
// gain_3.connect(pan_3);
// pan_3.connect(vol_3);
// vol_3.connect(sendmain_3);
// sendmain_3.connect(comp_global);
// // Channel Three Reverb Send
// vol_3.connect(send1_3);
// send1_3.connect(reverb);
// // Channel Three Delay Send
// vol_3.connect(send2_3);
// send2_3.connect(delay);
// // Channel Three Distortion Send
// vol_3.connect(send3_3);
// send3_3.connect(distortion);

// // Channel Four Main Bus
// gain_4.connect(pan_4);
// pan_4.connect(vol_4);
// vol_4.connect(sendmain_4);
// sendmain_4.connect(comp_global);
// // Channel Four Reverb Send
// vol_4.connect(send1_4);
// send1_4.connect(reverb);
// // Channel Four Delay Send
// vol_4.connect(send2_4);
// send2_4.connect(delay);
// // Channel One Distortion Send
// vol_4.connect(send3_4);
// send3_4.connect(distortion);

// // Effects Sends
// reverb.connect(send1);
// send1.connect(comp_global);
// delay.connect(send2);
// send2.connect(comp_global);
// distortion.connect(send3);
// send3.connect(comp_global);

// // Final Mastering
// comp_global.connect(gain_master);
// gain_master.connect(context.destination);

// // EQ wiring
// "#eq-1".change(function() {
//   if (this.attr("checked") === "checked") {
//     gain_1.disconnect(0);
//     gain_1.connect(high_1);
//     high_1.connect(mid_1);
//     mid_1.connect(low_1);
//     low_1.connect(pan_1);
//   } else {
//     gain_1.disconnect(0);
//     high_1.disconnect(0);
//     mid_1.disconnect(0);
//     low_1.disconnect(0);
//     gain_1.connect(pan_1);
//   }
// });
// "#eq-2".change(function() {
//   if (this.attr("checked") === "checked") {
//     gain_2.disconnect(0);
//     gain_2.connect(high_2);
//     high_2.connect(mid_2);
//     mid_2.connect(low_2);
//     low_2.connect(pan_2);
//   } else {
//     gain_2.disconnect(0);
//     high_2.disconnect(0);
//     mid_2.disconnect(0);
//     low_2.disconnect(0);
//     gain_2.connect(pan_2);
//   }
// });
// "#eq-3".change(function() {
//   if (this.attr("checked") === "checked") {
//     gain_3.disconnect(0);
//     gain_3.connect(high_3);
//     high_3.connect(mid_3);
//     mid_3.connect(low_3);
//     low_3.connect(pan_3);
//   } else {
//     gain_3.disconnect(0);
//     high_3.disconnect(0);
//     mid_3.disconnect(0);
//     low_3.disconnect(0);
//     gain_3.connect(pan_3);
//   }
// });
// "#eq-4".change(function() {
//   if (this.attr("checked") === "checked") {
//     gain_4.disconnect(0);
//     gain_4.connect(high_4);
//     high_4.connect(mid_4);
//     mid_4.connect(low_4);
//     low_4.connect(pan_4);
//   } else {
//     gain_4.disconnect(0);
//     high_4.disconnect(0);
//     mid_4.disconnect(0);
//     low_4.disconnect(0);
//     gain_4.connect(pan_4);
//   }
// });

// // Mute wiring
// "#mute-1".change(function() {
//   if (this.attr("checked") === "checked") {
//     vol_1.disconnect(0);
//     vol_1.connect(mute_1);
//     mute_1.connect(sendmain_1);
//   } else {
//     vol_1.disconnect(0);
//     mute_1.disconnect(0);
//     vol_1.connect(sendmain_1);
//     vol_1.connect(send1_1);
//     vol_1.connect(send2_1);
//     vol_1.connect(send3_1);
//   }
// });
// "#mute-2".change(function() {
//   if (this.attr("checked") === "checked") {
//     vol_2.disconnect(0);
//     vol_2.connect(mute_2);
//     mute_2.connect(sendmain_2);
//   } else {
//     vol_2.disconnect(0);
//     mute_2.disconnect(0);
//     vol_2.connect(sendmain_2);
//     vol_2.connect(send1_2);
//     vol_2.connect(send2_2);
//     vol_2.connect(send3_2);
//   }
// });
// "#mute-3".change(function() {
//   if (this.attr("checked") === "checked") {
//     vol_3.disconnect(0);
//     vol_3.connect(mute_3);
//     mute_3.connect(sendmain_3);
//   } else {
//     vol_3.disconnect(0);
//     mute_3.disconnect(0);
//     vol_3.connect(sendmain_3);
//     vol_3.connect(send1_3);
//     vol_3.connect(send2_3);
//     vol_3.connect(send3_3);
//   }
// });
// "#mute-4".change(function() {
//   if (this.attr("checked") === "checked") {
//     vol_4.disconnect(0);
//     vol_4.connect(mute_4);
//     mute_4.connect(sendmain_4);
//   } else {
//     vol_4.disconnect(0);
//     mute_4.disconnect(0);
//     vol_4.connect(sendmain_4);
//     vol_4.connect(send1_4);
//     vol_4.connect(send2_4);
//     vol_4.connect(send3_4);
//   }
// });
</script>

<style>
/* /* 
 * Name: Web Audio Loop Mixer
 * Description: Web Audio API Mixer with Reverb. Audio Source via User Media.
 * Author: Obadiah Metivier
 * Author URI: http://middleearmedia.com/ 
 * Version: 2.2.1
*/

/* --------------- Fluidity --------------- */
/* Wrap tables or pre elements in a div with this class */
.overflow-container {
  overflow-y: scroll;
}
/* Aspect ratios for media objects i.e canvas, iframe, video, svg etc. Defaults to 16x9 */
.aspect-ratio {
  height: 0;
  padding-top: 56.25%;
  position: relative;
}
.aspect-ratio--object {
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 100;
}
/* Responsive Utilities */
img,
canvas,
iframe,
video,
audio,
svg {
  max-width: 100%;
}

@-ms-viewport {
  width: device-width;
}

/* Typography */
h1 {
  color: #ddb;
  font-family: Arial, sans-serif;
  font-size: 2.5rem;
  margin: 0.2em auto;
  text-align: center;
  text-transform: uppercase;
}
h1 span {
  color: #56a1e3;
}
h2 {
  color: #ddb;
  margin-bottom: -0.5em;
  text-align: center;
}
#controls h2 {
  text-align: center;
}
h3 {
  margin: 0.5em 1em;
  text-transform: uppercase;
}
a {
  color: #56a1e3;
  text-decoration: none;
}
a:hover {
  color: #f66;
  text-decoration: none;
}
#credits {
  clear: both;
  text-align: center;
  width: 100%;
}

/* Utility */
#controls ::selection {
  background: transparent;
  color: #fff; /* Safari */
}

/* Layout */
* {
  box-sizing: border-box; /* Everything else */
}
html {
  overflow-y: scroll; /* force scrollbar to eliminate horizontal jump */
}
body {
  background-color: #111;
  /* background-image: url("assets/images/background.jpg"); */
  color: #bbb;
  /* Helvetica/Arial-based sans serif stack */
  font-family: Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
}
#page-wrap {
  margin: 2em auto 0;
  max-width: 980px;
}
.info {
  text-align: center;
}

/* Mixing Board */
.panel {
  background-color: #ddb;
  border-radius: 0.5em;
  color: #888;
  margin: 2em 0;
  padding: 1em;
}

.panel strong {
  color: #ddd;
}
.strip {
  /* background-image: url("assets/images/gray.jpg"); */
  border: 1px solid #333;
  border-radius: 0.5em;
  box-shadow: 0 0 0.5em #666;
  color: #cc9;
  display: inline-block;
  margin: 0 auto 0.5em;
  padding: 0;
  width: 100%;
}
.dark {
  background-color: #222;
  background-image: none;
}
.stripSection {
  float: left;
  height: 100%;
  padding: 0.5em 0 0;
}
.last {
  border-right: none;
}

.stripTransport {
  color: #cc9;
  margin: 0 auto 0.5em;
  padding: 0.5em;
}

/* Labels */
.label {
  float: left;
  margin-bottom: 0.25em;
  margin-top: 0;
}
.label span {
  display: block;
  margin-bottom: 0.125em;
  text-align: center;
}
.label span.checkbox-label {
  min-width: 3.875em;
}

/* -------------- Slider --------------- */
.sliderContainer {
  margin-top: 0.5em;
  margin-right: 0.25em;
  margin-bottom: 0em;
  margin-left: 0.25em;
}

/* Slider Thumb */
input[type="range"].slider {
  -webkit-appearance: none;
  height: 100%;
  width: 100%;
  margin: 5.75px 0;
}
input[type="range"].slider:focus {
  outline: none;
}
input[type="range"].slider::-webkit-slider-runnable-track {
  width: 100%;
  height: 28.5px;
  cursor: pointer;
  box-shadow: 0.2px 0.2px 1px #000000, 0px 0px 0.2px #0d0d0d;
  background: #222222;
  border-radius: 0px;
  border: 0px solid #010101;
}
input[type="range"].slider::-webkit-slider-thumb {
  box-shadow: 0.7px 0.7px 2.1px #111111, 0px 0px 0.7px #1e1e1e;
  border: 0px solid #444444;
  height: 40px;
  width: 18px;
  border-radius: 0px;
  background: #ddddbb;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -5.75px;
}
input[type="range"].slider:focus::-webkit-slider-runnable-track {
  background: #2c2c2c;
}
input[type="range"].slider::-moz-range-track {
  width: 100%;
  height: 28.5px;
  cursor: pointer;
  box-shadow: 0.2px 0.2px 1px #000000, 0px 0px 0.2px #0d0d0d;
  background: #222222;
  border-radius: 0px;
  border: 0px solid #010101;
}
input[type="range"].slider::-moz-range-thumb {
  box-shadow: 0.7px 0.7px 2.1px #111111, 0px 0px 0.7px #1e1e1e;
  border: 0px solid #444444;
  height: 40px;
  width: 18px;
  border-radius: 0px;
  background: #ddddbb;
  cursor: pointer;
}
input[type="range"].slider::-ms-track {
  width: 100%;
  height: 28.5px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"].slider::-ms-fill-lower {
  background: #181818;
  border: 0px solid #010101;
  border-radius: 0px;
  box-shadow: 0.2px 0.2px 1px #000000, 0px 0px 0.2px #0d0d0d;
}
input[type="range"].slider::-ms-fill-upper {
  background: #222222;
  border: 0px solid #010101;
  border-radius: 0px;
  box-shadow: 0.2px 0.2px 1px #000000, 0px 0px 0.2px #0d0d0d;
}
input[type="range"].slider::-ms-thumb {
  box-shadow: 0.7px 0.7px 2.1px #111111, 0px 0px 0.7px #1e1e1e;
  border: 0px solid #444444;
  height: 40px;
  width: 18px;
  border-radius: 0px;
  background: #ddddbb;
  cursor: pointer;
  height: 28.5px;
}
input[type="range"].slider:focus::-ms-fill-lower {
  background: #222222;
}
input[type="range"].slider:focus::-ms-fill-upper {
  background: #2c2c2c;
}

/* Slider Track */
input[type="range"].slider {
  -webkit-appearance: none;
  width: 100%;
  margin: 5.75px 0;
}
input[type="range"].slider:focus {
  outline: none;
}
input[type="range"].slider::-webkit-slider-runnable-track {
  width: 100%;
  height: 28.5px;
  cursor: pointer;
  box-shadow: 0.2px 0.2px 1px #000000, 0px 0px 0.2px #0d0d0d;
  background: #222222;
  border-radius: 0px;
  border: 0px solid #010101;
}
input[type="range"].slider::-webkit-slider-thumb {
  box-shadow: 0.7px 0.7px 2.1px #111111, 0px 0px 0.7px #1e1e1e;
  border: 0px solid #444444;
  height: 40px;
  width: 18px;
  border-radius: 0px;
  background: #ddddbb;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -5.75px;
}
input[type="range"].slider:focus::-webkit-slider-runnable-track {
  background: #2c2c2c;
}
input[type="range"].slider::-moz-range-track {
  width: 100%;
  height: 28.5px;
  cursor: pointer;
  box-shadow: 0.2px 0.2px 1px #000000, 0px 0px 0.2px #0d0d0d;
  background: #222222;
  border-radius: 0px;
  border: 0px solid #010101;
}
input[type="range"].slider::-moz-range-thumb {
  box-shadow: 0.7px 0.7px 2.1px #111111, 0px 0px 0.7px #1e1e1e;
  border: 0px solid #444444;
  height: 40px;
  width: 18px;
  border-radius: 0px;
  background: #ddddbb;
  cursor: pointer;
}
input[type="range"].slider::-ms-track {
  width: 100%;
  height: 28.5px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"].slider::-ms-fill-lower {
  background: #181818;
  border: 0px solid #010101;
  border-radius: 0px;
  box-shadow: 0.2px 0.2px 1px #000000, 0px 0px 0.2px #0d0d0d;
}
input[type="range"].slider::-ms-fill-upper {
  background: #222222;
  border: 0px solid #010101;
  border-radius: 0px;
  box-shadow: 0.2px 0.2px 1px #000000, 0px 0px 0.2px #0d0d0d;
}
input[type="range"].slider::-ms-thumb {
  box-shadow: 0.7px 0.7px 2.1px #111111, 0px 0px 0.7px #1e1e1e;
  border: 0px solid #444444;
  height: 40px;
  width: 18px;
  border-radius: 0px;
  background: #ddddbb;
  cursor: pointer;
  height: 28.5px;
}
input[type="range"].slider:focus::-ms-fill-lower {
  background: #222222;
}
input[type="range"].slider:focus::-ms-fill-upper {
  background: #2c2c2c;
}

/* Slider General */
input[type="range"].slider {
  -webkit-appearance: none;
  width: 100%;
  margin: 5.75px 0;
}
input[type="range"].slider:focus {
  outline: none;
}
input[type="range"].slider::-webkit-slider-runnable-track {
  width: 100%;
  height: 28.5px;
  cursor: pointer;
  box-shadow: 0.2px 0.2px 1px #000000, 0px 0px 0.2px #0d0d0d;
  background: #222222;
  border-radius: 0px;
  border: 0px solid #010101;
}
input[type="range"].slider::-webkit-slider-thumb {
  box-shadow: 0.7px 0.7px 2.1px #111111, 0px 0px 0.7px #1e1e1e;
  border: 0px solid #444444;
  height: 40px;
  width: 18px;
  border-radius: 0px;
  background: #ddddbb;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -5.75px;
}
input[type="range"].slider:focus::-webkit-slider-runnable-track {
  background: #2c2c2c;
}
input[type="range"].slider::-moz-range-track {
  width: 100%;
  height: 28.5px;
  cursor: pointer;
  box-shadow: 0.2px 0.2px 1px #000000, 0px 0px 0.2px #0d0d0d;
  background: #222222;
  border-radius: 0px;
  border: 0px solid #010101;
}
input[type="range"].slider::-moz-range-thumb {
  box-shadow: 0.7px 0.7px 2.1px #111111, 0px 0px 0.7px #1e1e1e;
  border: 0px solid #444444;
  height: 40px;
  width: 18px;
  border-radius: 0px;
  background: #ddddbb;
  cursor: pointer;
}
input[type="range"].slider::-ms-track {
  width: 100%;
  height: 28.5px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"].slider::-ms-fill-lower {
  background: #181818;
  border: 0px solid #010101;
  border-radius: 0px;
  box-shadow: 0.2px 0.2px 1px #000000, 0px 0px 0.2px #0d0d0d;
}
input[type="range"].slider::-ms-fill-upper {
  background: #222222;
  border: 0px solid #010101;
  border-radius: 0px;
  box-shadow: 0.2px 0.2px 1px #000000, 0px 0px 0.2px #0d0d0d;
}
input[type="range"].slider::-ms-thumb {
  box-shadow: 0.7px 0.7px 2.1px #111111, 0px 0px 0.7px #1e1e1e;
  border: 0px solid #444444;
  height: 40px;
  width: 18px;
  border-radius: 0px;
  background: #ddddbb;
  cursor: pointer;
  height: 28.5px;
}
input[type="range"].slider:focus::-ms-fill-lower {
  background: #222222;
}
input[type="range"].slider:focus::-ms-fill-upper {
  background: #2c2c2c;
}

/* Checkbox */
input[type="checkbox"] {
  display: none;
  margin: 0.25em;
}
input[type="checkbox"] + label span {
  /* background: url("assets/images/check_radio_sheet.jpg") -39px top no-repeat; */
  cursor: pointer;
  height: 1.1875em;
  margin: 1em auto 1.375em;
  vertical-align: middle;
  width: 1.1875em;
}
input[type="checkbox"]:checked + label span {
  /* background: url("assets/images/check_radio_sheet.jpg") -58px top no-repeat; */
}

/* Source and Trasport Section */
input[type="file"] {
  -webkit-box-align: baseline;
  background-color: #000;
  border: 1px solid #222;
  border-radius: 0.3em;
  color: inherit;
  text-align: start;
  max-width: 100%;
}

input[type="button"],
input[type="submit"],
input[type="reset"],
input[type="file"]::-webkit-file-upload-button,
button {
  -webkit-box-align: center;
  text-align: center;
  cursor: default;
  padding: 0.5625em 1em 0.625em;
  font-size: 1em;
}

/* Knobs */
.knobContainer {
  height: 5em;
  text-align: center;
  width: 5em;
  float: left;
}

/* Miscellaneous */
.small-text {
  font-size: 0.8em;
}
.active {
  color: #56a1e3;
}
.biege {
  color: #cc9;
}
.green {
  color: #8fe356;
}
.yellow {
  color: #e3dc52;
}
.orangeLight {
  color: #e3aa54;
}
.orangeDark {
  color: #e38356;
}
.red {
  color: #f66;
}
.blue {
  color: #56a1e3;
}
.pink {
  color: #e455e4;
}
.purple {
  color: #944ddc;
}

/* --------------- mobile css --------------- 
============================================================================*/
@media (min-width: 24em) {
  /* tablet css */
}
@media (min-width: 48em) {
  /* tablet css */
  input[type="file"] {
    -webkit-box-align: baseline;
    background-color: #000;
    border: 1px solid #222;
    border-radius: 0.3em;
    color: inherit;
    text-align: start;
    max-width: 24%;
  }
}
@media (min-width: 80em) {
  /* desktop css */
}
@media (min-width: 100em) {
  /* widescreen desktop css */
} 
</style>
