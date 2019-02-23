
<!-- <template>
  <div class="about">
    <h1>This is the mix page</h1>
  </div>
</template> -->

<template>
<!-- eslint-disable --> 

    <div id="page-wrap">
			<div id="controls" class="panel">
				<div class="strip dark">
					<h1>Web Audio Loop Mixer</h1>
				</div>
				<div class="stripTransport">
					<input id="inputSource1" type="file" accept="audio/*">
					<input id="inputSource2" type="file" accept="audio/*">
					<input id="inputSource3" type="file" accept="audio/*">
					<input id="inputSource4" type="file" accept="audio/*">
				</div>				
				<div class="stripTransport">
					<button v-on:click="playSound" disabled>Play</button>
					<button v-on:click="stopSound" disabled>Stop</button>
				</div>				
				<div class="strip">
					<div class="stripSection">
						<p class="label">Ch 1</p>
					</div>				
					<div class="stripSection">			
						<p class="knobContainer label"><span class="green">Gain</span>
						<input id="gain-1" data-step="1" data-min="0" data-max="20" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#8FE356" data-bgColor="#777" value="10" /></p>
					</div>
					<div class="stripSection">
						<p class="label"><span class="checkbox-label">EQ</span><input type="checkbox" id="eq-1" /><label for="eq-1"><span></span></label></p>
			
						<p class="knobContainer label"><span class="yellow">High</span>
						<input id="high-1" data-step="1" data-min="-15" data-max="15" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#E3DC52" data-bgColor="#777" value="0"></p>

						<p class="knobContainer label"><span class="orangeLight">Mid</span>
						<input id="mid-1" data-step="1" data-min="-15" data-max="15" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#E3AA54" data-bgColor="#777" value="0"></p>

						<p class="knobContainer label"><span class="orangeDark">Low</span>
						<input id="low-1" data-step="1" data-min="-15" data-max="15" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#E38356" data-bgColor="#777" value="0"></p>

					</div>
					<div class="stripSection">
						<p class="knobContainer label"><span class="blue">Pan</span>
						<input id="pan-1" data-step="1" data-min="-45" data-max="45" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#56A1E3" data-bgColor="#777" value="0" onchange="pan(this);"></p>
					</div>
					<div class="stripSection">
						<p class="label"><span>Vol</span>
						<span class="sliderContainer"><input id="volume-1" class="slider" type="range" min="0" max="1" step="0.1" value="1"/></span>
						</p>
					</div>
					<div class="stripSection">
						<p class="label"><span class="checkbox-label">Mute</span><input type="checkbox" id="mute-1" /><label for="mute-1"><span></span></label></p>
					</div>
					<div class="stripSection">			
						<p class="knobContainer label"><span class="pink">Delay</span>
						<input id="delay-1" data-step="1" data-min="0" data-max="10" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#E455E4" data-bgColor="#777" value="0" /></p>
						<p class="knobContainer label"><span class="purple">Distortion</span>
						<input id="distortion-1" data-step="1" data-min="0" data-max="10" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#944ddc" data-bgColor="#777" value="0" /></p>							
					</div>
				</div>
				<div class="strip">
					<div class="stripSection">
						<p class="label">Ch 2</p>
					</div>				
					<div class="stripSection">			
						<p class="knobContainer label"><span class="green">Gain</span>
						<input id="gain-2" data-step="1" data-min="0" data-max="20" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#8FE356" data-bgColor="#777" value="10" /></p>
					</div>
					<div class="stripSection">
						<p class="label"><span class="checkbox-label">EQ</span><input type="checkbox" id="eq-2" /><label for="eq-2"><span></span></label></p>
			
						<p class="knobContainer label"><span class="yellow">High</span>
						<input id="high-2" data-step="1" data-min="-15" data-max="15" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#E3DC52" data-bgColor="#777" value="0"></p>

						<p class="knobContainer label"><span class="orangeLight">Mid</span>
						<input id="mid-2" data-step="1" data-min="-15" data-max="15" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#E3AA54" data-bgColor="#777" value="0"></p>

						<p class="knobContainer label"><span class="orangeDark">Low</span>
						<input id="low-2" data-step="1" data-min="-15" data-max="15" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#E38356" data-bgColor="#777" value="0"></p>

					</div>
					<div class="stripSection">
						<p class="knobContainer label"><span class="blue">Pan</span>
						<input id="pan-2" data-step="1" data-min="-45" data-max="45" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#56A1E3" data-bgColor="#777" value="0" onchange="pan(this);"></p>
					</div>
					<div class="stripSection">
						<p class="label"><span>Vol</span>
						<span class="sliderContainer"><input id="volume-2" class="slider" type="range" min="0" max="1" step="0.1" value="1"/></span>
						</p>
					</div>
					<div class="stripSection">
						<p class="label"><span class="checkbox-label">Mute</span><input type="checkbox" id="mute-2" /><label for="mute-2"><span></span></label></p>
					</div>
					<div class="stripSection">			
						<p class="knobContainer label"><span class="pink">Delay</span>
						<input id="delay-2" data-step="1" data-min="0" data-max="10" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#E455E4" data-bgColor="#777" value="0" /></p>
						<p class="knobContainer label"><span class="purple">Distortion</span>
						<input id="distortion-2" data-step="1" data-min="0" data-max="10" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#944ddc" data-bgColor="#777" value="0" /></p>						
					</div>					
				</div>
				<div class="strip">
					<div class="stripSection">
						<p class="label">Ch 3</p>
					</div>				
					<div class="stripSection">			
						<p class="knobContainer label"><span class="green">Gain</span>
						<input id="gain-3" data-step="1" data-min="0" data-max="20" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#8FE356" data-bgColor="#777" value="10" /></p>
					</div>
					<div class="stripSection">
						<p class="label"><span class="checkbox-label">EQ</span><input type="checkbox" id="eq-3" /><label for="eq-3"><span></span></label></p>
			
						<p class="knobContainer label"><span class="yellow">High</span>
						<input id="high-3" data-step="1" data-min="-15" data-max="15" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#E3DC52" data-bgColor="#777" value="0"></p>

						<p class="knobContainer label"><span class="orangeLight">Mid</span>
						<input id="mid-3" data-step="1" data-min="-15" data-max="15" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#E3AA54" data-bgColor="#777" value="0"></p>

						<p class="knobContainer label"><span class="orangeDark">Low</span>
						<input id="low-3" data-step="1" data-min="-15" data-max="15" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#E38356" data-bgColor="#777" value="0"></p>

					</div>
					<div class="stripSection">
						<p class="knobContainer label"><span class="blue">Pan</span>
						<input id="pan-3" data-step="1" data-min="-45" data-max="45" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#56A1E3" data-bgColor="#777" value="0" onchange="pan(this);"></p>
					</div>
					<div class="stripSection">
						<p class="label"><span>Vol</span>
						<span class="sliderContainer"><input id="volume-3" class="slider" type="range" min="0" max="1" step="0.1" value="1"/></span>
						</p>
					</div>
					<div class="stripSection">
						<p class="label"><span class="checkbox-label">Mute</span><input type="checkbox" id="mute-3" /><label for="mute-3"><span></span></label></p>
					</div>
					<div class="stripSection">			
						<p class="knobContainer label"><span class="pink">Delay</span>
						<input id="delay-3" data-step="1" data-min="0" data-max="10" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#E455E4" data-bgColor="#777" value="0" /></p>
						<p class="knobContainer label"><span class="purple">Distortion</span>
						<input id="distortion-3" data-step="1" data-min="0" data-max="10" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#944ddc" data-bgColor="#777" value="0" /></p>						
					</div>
				</div>
				<div class="strip">
					<div class="stripSection">
						<p class="label">Ch 4</p>
					</div>				
					<div class="stripSection">			
						<p class="knobContainer label"><span class="green">Gain</span>
						<input id="gain-4" data-step="1" data-min="0" data-max="20" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#8FE356" data-bgColor="#777" value="10" /></p>
					</div>
					<div class="stripSection">
						<p class="label"><span class="checkbox-label">EQ</span><input type="checkbox" id="eq-4" /><label for="eq-4"><span></span></label></p>
			
						<p class="knobContainer label"><span class="yellow">High</span>
						<input id="high-4" data-step="1" data-min="-15" data-max="15" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#E3DC52" data-bgColor="#777" value="0"></p>

						<p class="knobContainer label"><span class="orangeLight">Mid</span>
						<input id="mid-4" data-step="1" data-min="-15" data-max="15" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#E3AA54" data-bgColor="#777" value="0"></p>

						<p class="knobContainer label"><span class="orangeDark">Low</span>
						<input id="low-4" data-step="1" data-min="-15" data-max="15" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#E38356" data-bgColor="#777" value="0"></p>

					</div>
					<div class="stripSection">
						<p class="knobContainer label"><span class="blue">Pan</span>
						<input id="pan-4" data-step="1" data-min="-45" data-max="45" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#56A1E3" data-bgColor="#777" value="0" onchange="pan(this);"></p>
					</div>
					<div class="stripSection">
						<p class="label"><span>Vol</span>
						<span class="sliderContainer"><input id="volume-4" class="slider" type="range" min="0" max="1" step="0.1" value="1"/></span>
						</p>
					</div>
					<div class="stripSection">
						<p class="label"><span class="checkbox-label">Mute</span><input type="checkbox" id="mute-4" /><label for="mute-4"><span></span></label></p>
					</div>
					<div class="stripSection">			
						<p class="knobContainer label"><span class="pink">Delay</span>
						<input id="delay-4" data-step="1" data-min="0" data-max="10" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#E455E4" data-bgColor="#777" value="0" /></p>
						<p class="knobContainer label"><span class="purple">Distortion</span>
						<input id="distortion-4" data-step="1" data-min="0" data-max="10" data-width="60" data-cursor=true data-thickness=.5 data-angleOffset=-125 data-angleArc=250 data-fgColor="#944ddc" data-bgColor="#777" value="0" /></p>						
					</div>
				</div>
				<div class="strip" id="delay">
					<div class="stripSection">
						<p class="label"><h3 class="pink">Delay</h3></p>
					</div>
					<div class="stripSection">			
						<p class="label"><span class="pink">Level</span>
						<span class="sliderContainer"><input id="delayLevel" class="slider" type="range" min="0" max="1" step="0.1" value="1"/></span>
						</p>						
					</div>					
					<div class="stripSection">
						<p class="label"><span class="pink">Delay Time</span>
						<span class="sliderContainer"><input id="delayTime" class="slider" type="range" min="0.05" max="1" step="0.05" value="0.5"/></span>
						</p>
					</div>
					<div class="stripSection">
						<p class="label"><span class="pink">Feedback</span>
						<span class="sliderContainer"><input id="delayFeedback" class="slider" type="range" min="0" max="0.95" step="0.05" value="0.8"/></span>
						</p>
					</div>
					<div class="stripSection">
						<p class="label"><span class="pink">Cutoff Freq</span>
						<span class="sliderContainer"><input id="delayFilter" class="slider" type="range" min="0" max="4000" step="100" value="1000"/></span>
						</p>
					</div>
				</div>
			</div>
    </div>
        
</template>

<script>
/* eslint-disable */ 

/*
 * Name: Web Audio Loop Mixer
 * Description: Four Channel Loop Mixer with Effects. Audio Source via User Media.
 * Author: Obadiah Metivier
 * Author URI: http://middleearmedia.com/webaudioloopmixer/
 * Version: 2.2.1
 */

// mounted(){
//   this.$nextTick(function () {
//     // Code that will run only after the
//     // entire view has been rendered
//   })
// }
var context = new (window.AudioContext || window.webkitAudioContext)(); // Create audio container with webkit fallback
var source1 = null; // Create empty audio source 1
var source2 = null; // Create empty audio source 2
var source3 = null; // Create empty audio source 3
var source4 = null; // Create empty audio source 4

var audioBuffer1 = null; // Create empty audio buffer 2
var audioBuffer2 = null; // Create empty audio buffer 2
var audioBuffer3 = null; // Create empty audio buffer 3
var audioBuffer4 = null; // Create empty audio buffer 4

var gain_1 = null;
var gain_2 = null;
var gain_3 = null;
var gain_4 = null;

var pan_1 = null; // Create panner node for channel 1
var pan_2 = null; // Create panner node for channel 2
var pan_3 = null; // Create panner node for channel 3
var pan_4 = null; // Create panner node for channel 4

var vol_1 = null; // Create volume gain node for channel 1
var vol_2 = null; // Create volume gain node for channel 2
var vol_3 = null; // Create volume gain node for channel 3
var vol_4 = null; // Create volume gain node for channel 4

var mute_1 = null; // Create mute routing gain node channel 1
var mute_2 = null; // Create mute routing gain node channel 2
var mute_3 = null; // Create mute routing gain node channel 3
var mute_4 = null; // Create mute routing gain node channel 4

var send1_1 = null; // Create routing gain node for send 1 for channel 1
var send2_1 = null; // Create routing gain node for send 2 for channel 1
var send3_1 = null; // Create routing gain node for send 3 for channel 1
var sendmain_1 = null; // Create routing gain node for main bus for channel 1

var send1_2 = null; // Create routing gain node for send 1 for channel 2
var send2_2 = null; // Create routing gain node for send 2 for channel 2
var send3_2 = null; // Create routing gain node for send 3 for channel 2
var sendmain_2 = null; // Create routing gain node for main bus for channel 2

var send1_3 = null; // Create routing gain node for send 1 for channel 3
var send2_3 = null; // Create routing gain node for send 2 for channel 3
var send3_3 = null; // Create routing gain node for send 3 for channel 3
var sendmain_3 = null; // Create routing gain node for main bus for channel 3

var send1_4 = null; // Create routing gain node for send 1 for channel 4
var send2_4 = null; // Create routing gain node for send 2 for channel 4
var send3_4 = null; // Create routing gain node for send 3 for channel 4
var sendmain_4 = null; // Create routing gain node for main bus for channel 4

var distortion = null;
var reverb = null;
var delay = null;

var impulse = null;


export default {
  methods: {
    playSound() {
      source1 = context.createBufferSource(); // Create a sound source 1
      source1.buffer = audioBuffer1; // Add the buffered data to our object
      source1.loop = true; // Make it loop
      source1.connect(gain_1);
      source1.start(0); // Play immediately

      source2 = context.createBufferSource(); // Create a sound source 2 if it exists
      source2.buffer = audioBuffer2; // Add the buffered data to our object
      source2.loop = true; // Make it loop
      source2.connect(gain_2);
      source2.start(0); // Play immediately

      source3 = context.createBufferSource(); // Create a sound source 3 if it exists
      source3.buffer = audioBuffer3; // Add the buffered data to our object
      source3.loop = true; // Make it loop
      source3.connect(gain_3);
      source3.start(0); // Play immediately
    
      source4 = context.createBufferSource(); // Create a sound source 4 if it exists
      source4.buffer = audioBuffer4; // Add the buffered data to our object
      source4.loop = true; // Make it loop
      source4.connect(gain_4);
      source4.start(0); // Play immediately
      
      reverb = context.createBufferSource(); // Create an reverb sound source
      reverb.buffer = impulse; // Attatch our Audio impulse Data as it's Buffer
      reverb.normalize = true; // Perform a scaled RMS-power analysis of the audio data in buffer to calculate a normalizationScale
      // reverb.loop = true; // Make it loop. is this needed ???
      reverb.start(0); // Play the Impulse Sound Immediately

      // Duplicate these functions so settings are remembered if stop button is pressed	
      $(function () {
        document.getElementById('delayTime').addEventListener('change', function() {
          delay.delayTime.value = this.value;
        });
      })
      $(function () {
        document.getElementById('delayFeedback').addEventListener('change', function() {
          delayFeedback.gain.value = this.value;
        });
      })
      $(function () {
        document.getElementById('delayFilter').addEventListener('change', function() {
          delayFilter.frequency.value = this.value;
        });
      })
      $(function () {
        document.getElementById('delayLevel').addEventListener('change', function() {
          send2.gain.value = this.value;
        });
      })
    },
    stopSound(){
      function stopSound() {
      delayFeedback.gain.value = 0;
      delayFilter.frequency.value = 0;
	
        if (source1) {
          source1.stop(0); // Stop source 1 immediately
        }
        if (source2) {
          source2.stop(0); // Stop source 2 immediately
        }
        if (source3) {
          source3.stop(0); // Stop source 3 immediately
        } 
        if (source4) {
          source4.stop(0); // Stop source 4 immediately
        }   
      }

    },
    
  },
   mounted() {
    setTimeout(() => {
      this.$nextTick(() => {
        plsKnobs() 
        plsWebLoopMixer()
      });
    }, 5000);
  },
}

function plsKnobs(){
/*jQuery Knob*/
/**
 * Downward compatible, touchable dial
 *
 * Version: 1.2.0 (15/07/2012)
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2012 Anthony Terrien
 * Under MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to vor, eskimoblood, spiffistan, FabrizioC
 */
(function($) {
  /**
   * Kontrol library
   */

  /**
   * Definition of globals and core
   */
  var k = {}, // kontrol
    max = Math.max,
    min = Math.min;

  k.c = {};
  k.c.d = $(document);
  k.c.t = function(e) {
    return e.originalEvent.touches.length - 1;
  };
  /**
   * Kontrol Object
   *
   * Definition of an abstract UI control
   *
   * Each concrete component must call this one.
   * <code>
   * k.o.call(this);
   * </code>
   */
  k.o = function() {
    var s = this;

    this.o = null; // array of options
    this.$ = null; // jQuery wrapped element
    this.i = null; // mixed HTMLInputElement or array of HTMLInputElement
    this.g = null; // 2D graphics context for 'pre-rendering'
    this.v = null; // value ; mixed array or integer
    this.cv = null; // change value ; not commited value
    this.x = 0; // canvas x position
    this.y = 0; // canvas y position
    this.$c = null; // jQuery canvas element
    this.c = null; // rendered canvas context
    this.t = 0; // touches index
    this.isInit = false;
    this.fgColor = null; // main color
    this.pColor = null; // previous color
    this.dH = null; // draw hook
    this.cH = null; // change hook
    this.eH = null; // cancel hook
    this.rH = null; // release hook

    this.run = function() {
      var cf = function(e, conf) {
        var k;
        for (k in conf) {
          s.o[k] = conf[k];
        }
        s.init();
        s._configure()._draw();
      };

      if (this.$.data("kontroled")) return;
      this.$.data("kontroled", true);

      this.extend();
      this.o = $.extend(
        {
          // Config
          min: this.$.data("min") || 0,
          max: this.$.data("max") || 100,
          stopper: true,
          readOnly: this.$.data("readonly"),

          // UI
          cursor:
            (this.$.data("cursor") === true && 30) ||
            this.$.data("cursor") ||
            0,
          thickness: this.$.data("thickness") || 0.35,
          lineCap: this.$.data("linecap") || "butt",
          width: this.$.data("width") || 80,
          height: this.$.data("height") || 65,
          displayInput:
            this.$.data("displayinput") == null || this.$.data("displayinput"),
          displayPrevious: this.$.data("displayprevious"),
          fgColor: this.$.data("fgcolor") || "#87CEEB",
          inputColor:
            this.$.data("inputcolor") || this.$.data("fgcolor") || "#87CEEB",
          inline: false,
          step: this.$.data("step") || 1,

          // Hooks
          draw: null, // function () {}
          change: null, // function (value) {}
          cancel: null, // function () {}
          release: null // function (value) {}
        },
        this.o
      );

      // routing value
      if (this.$.is("fieldset")) {
        // fieldset = array of integer
        this.v = {};
        this.i = this.$.find("input");
        this.i.each(function(k) {
          var $this = $(this);
          s.i[k] = $this;
          s.v[k] = $this.val();

          $this.bind("change", function() {
            var val = {};
            val[k] = $this.val();
            s.val(val);
          });
        });
        this.$.find("legend").remove();
      } else {
        // input = integer
        this.i = this.$;
        this.v = this.$.val();
        this.v == "" && (this.v = this.o.min);

        this.$.bind("change", function() {
          s.val(s._validate(s.$.val()));
        });
      }

      !this.o.displayInput && this.$.hide();

      this.$c = $(
        '<canvas width="' +
          this.o.width +
          'px" height="' +
          this.o.height +
          'px"></canvas>'
      );
      this.c = this.$c[0].getContext("2d");

      this.$.wrap(
        $(
          '<div style="' +
            (this.o.inline ? "display:inline;" : "") +
            "width:" +
            this.o.width +
            "px;height:" +
            this.o.height +
            'px;"></div>'
        )
      ).before(this.$c);

      if (this.v instanceof Object) {
        this.cv = {};
        this.copy(this.v, this.cv);
      } else {
        this.cv = this.v;
      }

      this.$.bind("configure", cf)
        .parent()
        .bind("configure", cf);

      this._listen()
        ._configure()
        ._xy()
        .init();

      this.isInit = true;

      this._draw();

      return this;
    };

    this._draw = function() {
      // canvas pre-rendering
      var d = true,
        c = document.createElement("canvas");

      c.width = s.o.width;
      c.height = s.o.height;
      s.g = c.getContext("2d");

      s.clear();

      s.dH && (d = s.dH());

      d !== false && s.draw();

      s.c.drawImage(c, 0, 0);
      c = null;
    };

    this._touch = function(e) {
      var touchMove = function(e) {
        var v = s.xy2val(
          e.originalEvent.touches[s.t].pageX,
          e.originalEvent.touches[s.t].pageY
        );

        if (v == s.cv) return;

        if (s.cH && s.cH(v) === false) return;

        s.change(s._validate(v));
        s._draw();
      };

      // get touches index
      this.t = k.c.t(e);

      // First touch
      touchMove(e);

      // Touch events listeners
      k.c.d.bind("touchmove.k", touchMove).bind("touchend.k", function() {
        k.c.d.unbind("touchmove.k touchend.k");

        if (s.rH && s.rH(s.cv) === false) return;

        s.val(s.cv);
      });

      return this;
    };

    this._mouse = function(e) {
      var mouseMove = function(e) {
        var v = s.xy2val(e.pageX, e.pageY);
        if (v == s.cv) return;

        if (s.cH && s.cH(v) === false) return;

        s.change(s._validate(v));
        s._draw();
      };

      // First click
      mouseMove(e);

      // Mouse events listeners
      k.c.d
        .bind("mousemove.k", mouseMove)
        .bind(
          // Escape key cancel current change
          "keyup.k",
          function(e) {
            if (e.keyCode === 27) {
              k.c.d.unbind("mouseup.k mousemove.k keyup.k");

              if (s.eH && s.eH() === false) return;

              s.cancel();
            }
          }
        )
        .bind("mouseup.k", function(e) {
          k.c.d.unbind("mousemove.k mouseup.k keyup.k");

          if (s.rH && s.rH(s.cv) === false) return;

          s.val(s.cv);
        });

      return this;
    };

    this._xy = function() {
      var o = this.$c.offset();
      this.x = o.left;
      this.y = o.top;
      return this;
    };

    this._listen = function() {
      if (!this.o.readOnly) {
        this.$c
          .bind("mousedown", function(e) {
            e.preventDefault();
            s._xy()._mouse(e);
          })
          .bind("touchstart", function(e) {
            e.preventDefault();
            s._xy()._touch(e);
          });
        this.listen();
      } else {
        this.$.attr("readonly", "readonly");
      }

      return this;
    };

    this._configure = function() {
      // Hooks
      if (this.o.draw) this.dH = this.o.draw;
      if (this.o.change) this.cH = this.o.change;
      if (this.o.cancel) this.eH = this.o.cancel;
      if (this.o.release) this.rH = this.o.release;

      if (this.o.displayPrevious) {
        this.pColor = this.h2rgba(this.o.fgColor, "0.4");
        this.fgColor = this.h2rgba(this.o.fgColor, "0.6");
      } else {
        this.fgColor = this.o.fgColor;
      }

      return this;
    };

    this._clear = function() {
      this.$c[0].width = this.$c[0].width;
    };

    this._validate = function(v) {
      return ~~((v < 0 ? -0.5 : 0.5) + v / this.o.step) * this.o.step;
    };

    // Abstract methods
    this.listen = function() {}; // on start, one time
    this.extend = function() {}; // each time configure triggered
    this.init = function() {}; // each time configure triggered
    this.change = function(v) {}; // on change
    this.val = function(v) {}; // on release
    this.xy2val = function(x, y) {}; //
    this.draw = function() {}; // on change / on release
    this.clear = function() {
      this._clear();
    };

    // Utils
    this.h2rgba = function(h, a) {
      var rgb;
      h = h.substring(1, 7);
      rgb = [
        parseInt(h.substring(0, 2), 16),
        parseInt(h.substring(2, 4), 16),
        parseInt(h.substring(4, 6), 16)
      ];
      return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + a + ")";
    };

    this.copy = function(f, t) {
      for (var i in f) {
        t[i] = f[i];
      }
    };
  };

  /**
   * k.Dial
   */
  k.Dial = function() {
    k.o.call(this);

    this.startAngle = null;
    this.xy = null;
    this.radius = null;
    this.lineWidth = null;
    this.cursorExt = null;
    this.w2 = null;
    this.PI2 = 2 * Math.PI;

    this.extend = function() {
      this.o = $.extend(
        {
          bgColor: this.$.data("bgcolor") || "#EEEEEE",
          angleOffset: this.$.data("angleoffset") || 0,
          angleArc: this.$.data("anglearc") || 360,
          inline: true
        },
        this.o
      );
    };

    this.val = function(v) {
      if (null != v) {
        this.cv = this.o.stopper ? max(min(v, this.o.max), this.o.min) : v;
        this.v = this.cv;
        this.$.val(this.v);
        this._draw();
      } else {
        return this.v;
      }
    };

    this.xy2val = function(x, y) {
      var a, ret;

      a =
        Math.atan2(x - (this.x + this.w2), -(y - this.y - this.w2)) -
        this.angleOffset;

      if (this.angleArc != this.PI2 && a < 0 && a > -0.5) {
        // if isset angleArc option, set to min if .5 under min
        a = 0;
      } else if (a < 0) {
        a += this.PI2;
      }

      ret =
        ~~(0.5 + (a * (this.o.max - this.o.min)) / this.angleArc) + this.o.min;

      this.o.stopper && (ret = max(min(ret, this.o.max), this.o.min));

      return ret;
    };

    this.listen = function() {
      // bind MouseWheel
      var s = this,
        mw = function(e) {
          e.preventDefault();
          var ori = e.originalEvent,
            deltaX = ori.detail || ori.wheelDeltaX,
            deltaY = ori.detail || ori.wheelDeltaY,
            v =
              parseInt(s.$.val()) +
              (deltaX > 0 || deltaY > 0
                ? s.o.step
                : deltaX < 0 || deltaY < 0
                ? -s.o.step
                : 0);

          if (s.cH && s.cH(v) === false) return;

          s.val(v);
        },
        kval,
        to,
        m = 1,
        kv = { 37: -s.o.step, 38: s.o.step, 39: s.o.step, 40: -s.o.step };

      this.$.bind("keydown", function(e) {
        var kc = e.keyCode;

        // numpad support
        if (kc >= 96 && kc <= 105) {
          kc = e.keyCode = kc - 48;
        }

        kval = parseInt(String.fromCharCode(kc));

        if (isNaN(kval)) {
          kc !== 13 && // enter
          kc !== 8 && // bs
          kc !== 9 && // tab
          kc !== 189 && // -
            e.preventDefault();

          // arrows
          if ($.inArray(kc, [37, 38, 39, 40]) > -1) {
            e.preventDefault();

            var v = parseInt(s.$.val()) + kv[kc] * m;

            s.o.stopper && (v = max(min(v, s.o.max), s.o.min));

            s.change(v);
            s._draw();

            // long time keydown speed-up
            to = window.setTimeout(function() {
              m *= 2;
            }, 30);
          }
        }
      }).bind("keyup", function(e) {
        if (isNaN(kval)) {
          if (to) {
            window.clearTimeout(to);
            to = null;
            m = 1;
            s.val(s.$.val());
          }
        } else {
          // kval postcond
          (s.$.val() > s.o.max && s.$.val(s.o.max)) ||
            (s.$.val() < s.o.min && s.$.val(s.o.min));
        }
      });

      this.$c.bind("mousewheel DOMMouseScroll", mw);
      this.$.bind("mousewheel DOMMouseScroll", mw);
    };

    this.init = function() {
      if (this.v < this.o.min || this.v > this.o.max) this.v = this.o.min;

      this.$.val(this.v);
      this.w2 = this.o.width / 2;
      this.cursorExt = this.o.cursor / 100;
      this.xy = this.w2;
      this.lineWidth = this.xy * this.o.thickness;
      this.lineCap = this.o.lineCap;
      this.radius = this.xy - this.lineWidth / 2;

      this.o.angleOffset &&
        (this.o.angleOffset = isNaN(this.o.angleOffset)
          ? 0
          : this.o.angleOffset);

      this.o.angleArc &&
        (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);

      // deg to rad
      this.angleOffset = (this.o.angleOffset * Math.PI) / 180;
      this.angleArc = (this.o.angleArc * Math.PI) / 180;

      // compute start and end angles
      this.startAngle = 1.5 * Math.PI + this.angleOffset;
      this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;

      var s =
        max(
          String(Math.abs(this.o.max)).length,
          String(Math.abs(this.o.min)).length,
          2
        ) + 2;

      (this.o.displayInput &&
        this.i.css({
          width: ((this.o.width / 2 + 4) >> 0) + "px",
          height: ((this.o.width / 3) >> 0) + "px",
          position: "absolute",
          "vertical-align": "middle",
          "margin-top": ((this.o.width / 3) >> 0) + "px",
          "margin-left": "-" + (((this.o.width * 3) / 4 + 2) >> 0) + "px",
          border: 0,
          background: "none",
          font: "bold " + ((this.o.width / s) >> 0) + "px Arial",
          "text-align": "center",
          color: this.o.inputColor || this.o.fgColor,
          padding: "0px",
          "-webkit-appearance": "none"
        })) ||
        this.i.css({
          width: "0px",
          visibility: "hidden"
        });
    };

    this.change = function(v) {
      this.cv = v;
      this.$.val(v);
    };

    this.angle = function(v) {
      return ((v - this.o.min) * this.angleArc) / (this.o.max - this.o.min);
    };

    this.draw = function() {
      var c = this.g, // context
        a = this.angle(this.cv), // Angle
        sat = this.startAngle, // Start angle
        eat = sat + a, // End angle
        sa,
        ea, // Previous angles
        r = 1;

      c.lineWidth = this.lineWidth;

      c.lineCap = this.lineCap;

      this.o.cursor &&
        (sat = eat - this.cursorExt) &&
        (eat = eat + this.cursorExt);

      c.beginPath();
      c.strokeStyle = this.o.bgColor;
      c.arc(
        this.xy,
        this.xy,
        this.radius,
        this.endAngle,
        this.startAngle,
        true
      );
      c.stroke();

      if (this.o.displayPrevious) {
        ea = this.startAngle + this.angle(this.v);
        sa = this.startAngle;
        this.o.cursor &&
          (sa = ea - this.cursorExt) &&
          (ea = ea + this.cursorExt);

        c.beginPath();
        c.strokeStyle = this.pColor;
        c.arc(this.xy, this.xy, this.radius, sa, ea, false);
        c.stroke();
        r = this.cv == this.v;
      }

      c.beginPath();
      c.strokeStyle = r ? this.o.fgColor : this.fgColor;
      c.arc(this.xy, this.xy, this.radius, sat, eat, false);
      c.stroke();
    };

    this.cancel = function() {
      this.val(this.v);
    };
  };

  $.fn.dial = $.fn.knob = function(o) {
    return this.each(function() {
      var d = new k.Dial();
      d.o = o;
      d.$ = $(this);
      d.run();
    }).parent();
  };
});


}

function plsWebLoopMixer() {
(function( $ ) {
	var methods = {
		init: function() {
		}, 
  };
  // This makes the knobs work (along with jquery.knob.js)	
	$.fn.knob = function( method ) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist' );
		}    			
	};	
})(jQuery);
			
// Convolver - Reverb - load the impulse response asynchronously
var impulse; // Create the Impulse Sound 
var getImpulse = new XMLHttpRequest(); // Load the Impulse Sound with XMLHttpRequest
getImpulse.open("GET", "", true); // Path to Audio File
getImpulse.responseType = "arraybuffer"; // Read as Binary Data
getImpulse.onload = function() {
	context.decodeAudioData(getImpulse.response, function(buffer){
		impulse = buffer; // Decode the Audio Data and Store it in a Variable
	});
}
getImpulse.send(); // Send the Request and Load the impulse File

// Allow user to select source file for channel 1
function initSound1(arrayBuffer) {
  context.decodeAudioData(arrayBuffer, function(buffer) {
    audioBuffer1 = buffer;
    var buttons = document.querySelectorAll('button');
    buttons[0].disabled = false;
    buttons[1].disabled = false;
  }, function(e) {
    console.log('Error decoding file', e);
  }); 
}
// Read user selected file as ArrayBuffer and pass it to the API
var fileInput1 = document.querySelector('#inputSource1');n
fileInput1.addEventListener('change', function(e) {  
  var reader = new FileReader();
  reader.onload = function(e) {
    initSound1(this.result);
  };
  reader.readAsArrayBuffer(this.files[0]);
}, false);

// Allow user to select source file for channel 2
function initSound2(arrayBuffer) {
  context.decodeAudioData(arrayBuffer, function(buffer) {
    audioBuffer2 = buffer;
    var buttons = document.querySelectorAll('button');
    buttons[0].disabled = false;
    buttons[1].disabled = false;	
  }, function(e) {
    console.log('Error decoding file', e);
  }); 
}
// Read user selected file as ArrayBuffer and pass it to the API
var fileInput2 = document.querySelector('#inputSource2');
fileInput2.addEventListener('change', function(e) {  
  var reader = new FileReader();
  reader.onload = function(e) {
    initSound2(this.result);
  };
  reader.readAsArrayBuffer(this.files[0]);
}, false);

// Allow user to select source file for channel 3
function initSound3(arrayBuffer) {
  context.decodeAudioData(arrayBuffer, function(buffer) {
    audioBuffer3 = buffer;
    var buttons = document.querySelectorAll('button');
    buttons[0].disabled = false;
    buttons[1].disabled = false;	
  }, function(e) {
    console.log('Error decoding file', e);
  }); 
}
// Read user selected file as ArrayBuffer and pass it to the API
var fileInput3 = document.querySelector('#inputSource3');
fileInput3.addEventListener('change', function(e) {  
  var reader = new FileReader();
  reader.onload = function(e) {
    initSound3(this.result);
  };
  reader.readAsArrayBuffer(this.files[0]);
}, false);

// Allow user to select source file for channel 4
function initSound4(arrayBuffer) {
  context.decodeAudioData(arrayBuffer, function(buffer) {
    audioBuffer4 = buffer;
    var buttons = document.querySelectorAll('button');
    buttons[0].disabled = false;
    buttons[1].disabled = false;	
  }, function(e) {
    console.log('Error decoding file', e);
  }); 
}
// Read user selected file as ArrayBuffer and pass it to the API
var fileInput4 = document.querySelector('#inputSource4');
fileInput4.addEventListener('change', function(e) {  
  var reader = new FileReader();
  reader.onload = function(e) {
    initSound4(this.result);
  };
  reader.readAsArrayBuffer(this.files[0]);
}, false);

// Create Audio Nodes
gain_1 = context.createGain(); // Create source gain node for channel 1
gain_2 = context.createGain(); // Create source gain node for channel 2
gain_3 = context.createGain(); // Create source gain node for channel 3
gain_4 = context.createGain(); // Create source gain node for channel 4

pan_1 = context.createPanner(); // Create panner node for channel 1
pan_2 = context.createPanner(); // Create panner node for channel 2
pan_3 = context.createPanner(); // Create panner node for channel 3
pan_4 = context.createPanner(); // Create panner node for channel 4

vol_1 = context.createGain(); // Create volume gain node for channel 1
vol_2 = context.createGain(); // Create volume gain node for channel 2
vol_3 = context.createGain(); // Create volume gain node for channel 3
vol_4 = context.createGain(); // Create volume gain node for channel 4

mute_1 = context.createGain(); // Create mute routing gain node channel 1
mute_2 = context.createGain(); // Create mute routing gain node channel 2
mute_3 = context.createGain(); // Create mute routing gain node channel 3
mute_4 = context.createGain(); // Create mute routing gain node channel 4

send1_1 = context.createGain(); // Create routing gain node for send 1 for channel 1
send2_1 = context.createGain(); // Create routing gain node for send 2 for channel 1
send3_1 = context.createGain(); // Create routing gain node for send 3 for channel 1
sendmain_1 = context.createGain(); // Create routing gain node for main bus for channel 1

send1_2 = context.createGain(); // Create routing gain node for send 1 for channel 2
send2_2 = context.createGain(); // Create routing gain node for send 2 for channel 2
send3_2 = context.createGain(); // Create routing gain node for send 3 for channel 2
sendmain_2 = context.createGain(); // Create routing gain node for main bus for channel 2

send1_3 = context.createGain(); // Create routing gain node for send 1 for channel 3
send2_3 = context.createGain(); // Create routing gain node for send 2 for channel 3
send3_3 = context.createGain(); // Create routing gain node for send 3 for channel 3
sendmain_3 = context.createGain(); // Create routing gain node for main bus for channel 3

send1_4 = context.createGain(); // Create routing gain node for send 1 for channel 4
send2_4 = context.createGain(); // Create routing gain node for send 2 for channel 4
send3_4 = context.createGain(); // Create routing gain node for send 3 for channel 4
sendmain_4 = context.createGain(); // Create routing gain node for main bus for channel 4

// Distortion
var distortion = context.createWaveShaper(); // Create waveshaper node for distortion fx
function makeDistortionCurve( amount ) {
  var k = typeof amount === 'number' ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180,
    i = 0,
    x;
  for ( ; i < n_samples; ++i ) {
    x = i * 2 / n_samples - 1;
    curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
  }
  return curve;
};

distortion.curve = makeDistortionCurve(400);
distortion.oversample = '4x';
	
// Reverb
reverb = context.createConvolver(); // Create convolver node for reverb fx

// Delay
delay = context.createDelay(); // Create delay node for delay fx

	delay.delayTime.value = 0.5;

    var delayFeedback = context.createGain();
    delayFeedback.gain.value = 0.8;
 
    var delayFilter = context.createBiquadFilter();
    delayFilter.frequency.value = 1000;

    delay.connect(delayFeedback);
    delayFeedback.connect(delayFilter);
    delayFilter.connect(delay);
	
 $(function () {
	document.getElementById('delayTime').addEventListener('change', function() {
		delay.delayTime.value = this.value;
	});
})
$(function () {
	document.getElementById('delayFeedback').addEventListener('change', function() {
		delayFeedback.gain.value = this.value;
	});
})
$(function () {
	document.getElementById('delayFilter').addEventListener('change', function() {
		delayFilter.frequency.value = this.value;
	});
})	
	
var send1 = context.createGain(); // Create routing gain node for send 1 (reverb)

var send2 = context.createGain(); // Create routing gain node for send 2 (delay)
send2.gain.value = 1;
$(function () {
	document.getElementById('delayLevel').addEventListener('change', function() {
		send2.gain.value = this.value;
	});
})

var send3 = context.createGain(); // Create routing gain node for send 3 (distortion)
send3.gain.value = 0.3;
// $(function () {
// 	document.getElementById('distortionLevel').addEventListener('change', function() {
// 		send3.gain.value = this.value;
// 	});
// })

var comp_global = context.createDynamicsCompressor(); // Create global compressor node
var gain_master = context.createGain(); // Create master gain node

// EQ settings
var makeHigh_1 = function () {
	var high1 = context.createBiquadFilter();
 	high1.type = "highshelf"; // Highshelf filter
	high1.frequency.value = 6000;
	high1.gain.value = $('#high-1').val();
	return high1;
}
var makeMid_1 = function () {
	var mid1 = context.createBiquadFilter();
	mid1.type = "peaking"; // Peaking filter
	mid1.frequency.value = 1000;
	mid1.Q.value = 1;
	mid1.gain.value = $('#mid-1').val();
	return mid1;
}
var makeLow_1 = function () {
	var low1 = context.createBiquadFilter();
	low1.type = "lowshelf"; // Lowshelf filter
	low1.frequency.value = 440;
	low1.gain.value = $('#low-1').val();
	return low1;
}
var makeHigh_2 = function () {
	var high2 = context.createBiquadFilter();
 	high2.type = "highshelf"; // Highshelf filter
	high2.frequency.value = 6000;
	high2.gain.value = $('#high-2').val();
	return high2;
}
var makeMid_2 = function () {
	var mid2 = context.createBiquadFilter();
	mid2.type = "peaking"; // Peaking filter
	mid2.frequency.value = 1000;
	mid2.Q.value = 1;
	mid2.gain.value = $('#mid-2').val();
	return mid2;
}
var makeLow_2 = function () {
	var low2 = context.createBiquadFilter();
	low2.type = "lowshelf"; // Lowshelf filter
	low2.frequency.value = 440;
	low2.gain.value = $('#low-2').val();
	return low2;
}
var makeHigh_3 = function () {
	var high3 = context.createBiquadFilter();
 	high3.type = "highshelf"; // Highshelf filter
	high3.frequency.value = 6000;
	high3.gain.value = $('#high-3').val();
	return high3;
}
var makeMid_3 = function () {
	var mid3 = context.createBiquadFilter();
	mid3.type = "peaking"; // Peaking filter
	mid3.frequency.value = 1000;
	mid3.Q.value = 1;
	mid3.gain.value = $('#mid-3').val();
	return mid3;
}
var makeLow_3 = function () {
	var low3 = context.createBiquadFilter();
	low3.type = "lowshelf"; // Lowshelf filter
	low3.frequency.value = 440;
	low3.gain.value = $('#low-3').val();
	return low3;
}

var makeHigh_4 = function () {
	var high4 = context.createBiquadFilter();
 	high4.type = "highshelf"; // Highshelf filter
	high4.frequency.value = 6000;
	high4.gain.value = $('#high-4').val();
	return high4;
}
var makeMid_4 = function () {
	var mid4 = context.createBiquadFilter();
	mid4.type = "peaking"; // Peaking filter
	mid4.frequency.value = 1000;
	mid4.Q.value = 1;
	mid4.gain.value = $('#mid-4').val();
	return mid4;
}
var makeLow_4 = function () {
	var low4 = context.createBiquadFilter();
	low4.type = "lowshelf"; // Lowshelf filter
	low4.frequency.value = 440;
	low4.gain.value = $('#low-4').val();
	return low4;
}

// High EQ
var high_1 = makeHigh_1();
var high_2 = makeHigh_2();
var high_3 = makeHigh_3();
var high_4 = makeHigh_4();
// Mid EQ
var mid_1 = makeMid_1();
var mid_2 = makeMid_2();
var mid_3 = makeMid_3();
var mid_4 = makeMid_4();
// Low EQ
var low_1 = makeLow_1();
var low_2 = makeLow_2();
var low_3 = makeLow_3();
var low_4 = makeLow_4();

// Volume
vol_1.gain.value = 1; // Initial volume is 100% for channel 1
vol_2.gain.value = 1; // Initial volume is 100% for channel 2
vol_3.gain.value = 1; // Initial volume is 100% for channel 3
vol_4.gain.value = 1; // Initial volume is 100% for channel 4

$(function () {
	document.getElementById('volume-1').addEventListener('change', function() {
		vol_1.gain.value = this.value;
	});
})
$(function () {
	document.getElementById('volume-2').addEventListener('change', function() {
		vol_2.gain.value = this.value;
	});
})
$(function () {
	document.getElementById('volume-3').addEventListener('change', function() {
		vol_3.gain.value = this.value;
	});
})
$(function () {
	document.getElementById('volume-4').addEventListener('change', function() {
		vol_4.gain.value = this.value;
	});
})

// Mute
mute_1.gain.value = 0; // Muted Volume is 0% for channel 1
mute_2.gain.value = 0; // Muted Volume is 0% for channel 2
mute_3.gain.value = 0; // Muted Volume is 0% for channel 3
mute_4.gain.value = 0; // Muted Volume is 0% for channel 4

// Listen for Knob changes
$(function () {
	$('#gain-1').dial({'change': function (v) {
		gain_1.gain.value = v / 10;
	}});
	$('#gain-2').dial({'change': function (v) {
		gain_2.gain.value = v / 10;
	}});
	$('#gain-3').dial({'change': function (v) {
		gain_3.gain.value = v / 10;
	}});
	$('#gain-4').dial({'change': function (v) {
		gain_4.gain.value = v / 10;
	}});	

	$('#high-1').dial({'change': function (v) {
		high_1.gain.value = v;
	}});
	$('#high-2').dial({'change': function (v) {
		high_2.gain.value = v;
	}});
	$('#high-3').dial({'change': function (v) {
		high_3.gain.value = v;
	}});
	$('#high-4').dial({'change': function (v) {
		high_4.gain.value = v;
	}});
	
	$('#mid-1').dial({'change': function (v) {
		mid_1.gain.value = v;
	}});
	$('#mid-2').dial({'change': function (v) {
		mid_2.gain.value = v;
	}});
	$('#mid-3').dial({'change': function (v) {
		mid_3.gain.value = v;
	}});
	$('#mid-4').dial({'change': function (v) {
		mid_4.gain.value = v;
	}});
	
    $('#low-1').dial({'change': function (v) {
		low_1.gain.value = v;
    }});
    $('#low-2').dial({'change': function (v) {
		low_2.gain.value = v;
    }});
    $('#low-3').dial({'change': function (v) {
		low_3.gain.value = v;
    }});
    $('#low-4').dial({'change': function (v) {
		low_4.gain.value = v;
    }});
	
    $('#pan-1').dial({'change': function (x) {
		var xDeg = x;
		var zDeg = xDeg + 90;
		if (zDeg > 90) {
			zDeg = 180 - zDeg;
		}
		var x = Math.sin(xDeg * (Math.PI / 180));
		var z = Math.sin(zDeg * (Math.PI / 180));
		pan_1.setPosition(x, 0, z);
    }});
    $('#pan-2').dial({'change': function (x) {
		var xDeg = x;
		var zDeg = xDeg + 90;
		if (zDeg > 90) {
			zDeg = 180 - zDeg;
		}
		var x = Math.sin(xDeg * (Math.PI / 180));
		var z = Math.sin(zDeg * (Math.PI / 180));
		pan_2.setPosition(x, 0, z);
    }});
    $('#pan-3').dial({'change': function (x) {
		var xDeg = x;
		var zDeg = xDeg + 90;
		if (zDeg > 90) {
			zDeg = 180 - zDeg;
		}
		var x = Math.sin(xDeg * (Math.PI / 180));
		var z = Math.sin(zDeg * (Math.PI / 180));
		pan_3.setPosition(x, 0, z);
    }});
    $('#pan-4').dial({'change': function (x) {
		var xDeg = x;
		var zDeg = xDeg + 90;
		if (zDeg > 90) {
			zDeg = 180 - zDeg;
		}
		var x = Math.sin(xDeg * (Math.PI / 180));
		var z = Math.sin(zDeg * (Math.PI / 180));
		pan_4.setPosition(x, 0, z);
    }});	

	$('#reverb-1').dial({'change': function (v) {
		send1_1.gain.value = v / 10;
	}});
	$('#reverb-2').dial({'change': function (v) {
		send1_2.gain.value = v / 10;
	}});
	$('#reverb-3').dial({'change': function (v) {
		send1_3.gain.value = v / 10;
	}});
	$('#reverb-4').dial({'change': function (v) {
		send1_4.gain.value = v / 10;
	}});

	// Send2 (Delay) Initial Channel gains
	send2_1.gain.value = 0; // 0% for channel 1
	send2_2.gain.value = 0; // 0% for channel 2
	send2_3.gain.value = 0; // 0% for channel 3
	send2_4.gain.value = 0; // 0% for channel 4

	$('#delay-1').dial({'change': function (v) {
		send2_1.gain.value = v / 10;
	}});
	$('#delay-2').dial({'change': function (v) {
		send2_2.gain.value = v / 10;
	}});
	$('#delay-3').dial({'change': function (v) {
		send2_3.gain.value = v / 10;
	}});
	$('#delay-4').dial({'change': function (v) {
		send2_4.gain.value = v / 10;
	}});

	// Send3 (Distortion) Initial Channel gains
	send3_1.gain.value = 0; // 0% for channel 1
	send3_2.gain.value = 0; // 0% for channel 2
	send3_3.gain.value = 0; // 0% for channel 3
	send3_4.gain.value = 0; // 0% for channel 4

	$('#distortion-1').dial({'change': function (v) {
		send3_1.gain.value = v / 10;
	}});
	$('#distortion-2').dial({'change': function (v) {
		send3_2.gain.value = v / 10;
	}});
	$('#distortion-3').dial({'change': function (v) {
		send3_3.gain.value = v / 10;
	}});
	$('#distortion-4').dial({'change': function (v) {
		send3_4.gain.value = v / 10;
	}});	
})
 
// Wiring

// Channel One Main Bus
gain_1.connect(pan_1);
pan_1.connect(vol_1);
vol_1.connect(sendmain_1);
sendmain_1.connect(comp_global);
// Channel One Reverb Send
vol_1.connect(send1_1);
send1_1.connect(reverb);
// Channel One Delay Send
vol_1.connect(send2_1);
send2_1.connect(delay);
// Channel One Distortion Send
vol_1.connect(send3_1);
send3_1.connect(distortion);

// Channel Two Main Bus
gain_2.connect(pan_2);
pan_2.connect(vol_2);
vol_2.connect(sendmain_2);
sendmain_2.connect(comp_global);
// Channel Two Reverb Send
vol_2.connect(send1_2);
send1_2.connect(reverb);
// Channel Two Delay Send
vol_2.connect(send2_2);
send2_2.connect(delay);
// Channel Two Distortion Send
vol_2.connect(send3_2);
send3_2.connect(distortion);

// Channel Three Main Bus
gain_3.connect(pan_3);
pan_3.connect(vol_3);
vol_3.connect(sendmain_3);
sendmain_3.connect(comp_global);
// Channel Three Reverb Send
vol_3.connect(send1_3);
send1_3.connect(reverb);
// Channel Three Delay Send
vol_3.connect(send2_3);
send2_3.connect(delay);
// Channel Three Distortion Send
vol_3.connect(send3_3);
send3_3.connect(distortion);

// Channel Four Main Bus
gain_4.connect(pan_4);
pan_4.connect(vol_4);
vol_4.connect(sendmain_4);
sendmain_4.connect(comp_global);
// Channel Four Reverb Send
vol_4.connect(send1_4);
send1_4.connect(reverb);
// Channel Four Delay Send
vol_4.connect(send2_4);
send2_4.connect(delay);
// Channel One Distortion Send
vol_4.connect(send3_4);
send3_4.connect(distortion);

// Effects Sends
reverb.connect(send1);
send1.connect(comp_global);	
delay.connect(send2);
send2.connect(comp_global);
distortion.connect(send3);
send3.connect(comp_global);

// Final Mastering
comp_global.connect(gain_master);
gain_master.connect(context.destination);

// EQ wiring
$('#eq-1').change(function () {
	if ($(this).attr('checked') === 'checked') {
		gain_1.disconnect(0);
		gain_1.connect(high_1);
		high_1.connect(mid_1);
		mid_1.connect(low_1);
		low_1.connect(pan_1);		
	} else {
		gain_1.disconnect(0);
		high_1.disconnect(0);
		mid_1.disconnect(0);
		low_1.disconnect(0);		
		gain_1.connect(pan_1);
	}
})
$('#eq-2').change(function () {
	if ($(this).attr('checked') === 'checked') {
		gain_2.disconnect(0);
		gain_2.connect(high_2);
		high_2.connect(mid_2);
		mid_2.connect(low_2);
		low_2.connect(pan_2);		
	} else {
		gain_2.disconnect(0);
		high_2.disconnect(0);
		mid_2.disconnect(0);
		low_2.disconnect(0);		
		gain_2.connect(pan_2);
	}
})
$('#eq-3').change(function () {
	if ($(this).attr('checked') === 'checked') {
		gain_3.disconnect(0);
		gain_3.connect(high_3);
		high_3.connect(mid_3);
		mid_3.connect(low_3);
		low_3.connect(pan_3);		
	} else {
		gain_3.disconnect(0);
		high_3.disconnect(0);
		mid_3.disconnect(0);
		low_3.disconnect(0);		
		gain_3.connect(pan_3);
	}
})
$('#eq-4').change(function () {
	if ($(this).attr('checked') === 'checked') {
		gain_4.disconnect(0);
		gain_4.connect(high_4);
		high_4.connect(mid_4);
		mid_4.connect(low_4);
		low_4.connect(pan_4);		
	} else {
		gain_4.disconnect(0);
		high_4.disconnect(0);
		mid_4.disconnect(0);
		low_4.disconnect(0);		
		gain_4.connect(pan_4);
	}
})

// Mute wiring
$('#mute-1').change(function () {
	if ($(this).attr('checked') === 'checked') {
		vol_1.disconnect(0);
		vol_1.connect(mute_1);
		mute_1.connect(sendmain_1);
	} else {
		vol_1.disconnect(0);
		mute_1.disconnect(0);
		vol_1.connect(sendmain_1);
		vol_1.connect(send1_1);		
		vol_1.connect(send2_1);
		vol_1.connect(send3_1);		
	}
})
$('#mute-2').change(function () {
	if ($(this).attr('checked') === 'checked') {
		vol_2.disconnect(0);
		vol_2.connect(mute_2);
		mute_2.connect(sendmain_2);
	} else {
		vol_2.disconnect(0);
		mute_2.disconnect(0);
		vol_2.connect(sendmain_2);
		vol_2.connect(send1_2);
		vol_2.connect(send2_2);
		vol_2.connect(send3_2);		
	}
})
$('#mute-3').change(function () {
	if ($(this).attr('checked') === 'checked') {
		vol_3.disconnect(0);
		vol_3.connect(mute_3);
		mute_3.connect(sendmain_3);
	} else {
		vol_3.disconnect(0);
		mute_3.disconnect(0);
		vol_3.connect(sendmain_3);
		vol_3.connect(send1_3);
		vol_3.connect(send2_3);	
		vol_3.connect(send3_3);			
	}
})
$('#mute-4').change(function () {
	if ($(this).attr('checked') === 'checked') {
		vol_4.disconnect(0);
		vol_4.connect(mute_4);
		mute_4.connect(sendmain_4);
	} else {
		vol_4.disconnect(0);
		mute_4.disconnect(0);
		vol_4.connect(sendmain_4);
		vol_4.connect(send1_4);
		vol_4.connect(send2_4);
		vol_4.connect(send3_4);		
	}
})
}
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
