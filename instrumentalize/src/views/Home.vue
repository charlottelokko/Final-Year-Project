<!--<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script> -->

<template>
  <div class="home">
    <h1>Home</h1>
    <p>Welcome to Instrumentalize!</p>
    <p>Pia pia pianoooo</p>
    <div class="btn-group" role="group">
      <button type="button" v-on:click="C4" class="btn btn-secondary">C</button>
      <button type="button" class="btn btn-secondary">C#</button>
      <button type="button" class="btn btn-secondary">D</button>
    </div>
  </div>
</template>
<script>
//var audioSynthLib = require("../assets/audiosynth.js");
import audiosynth from "../assets/audiosynth.js";
Vue.use(audiosynth);

var piano = audiosynth.Synth.createInstrument("piano");
var C4 = piano.play("C", 4, 2);


// export default {
//   name: "home",
//   data() {
//     return {
//       msg: "Welcome to Your Vue.js App"
//     };
//   },
//   methods: {
//     appendText: function(event) {
//       var txt1 = "<p>Text.</p>"; // Create text with HTML
//       var txt2 = $("<p></p>").text("Text."); // Create text with jQuery
//       var txt3 = document.createElement("p");
//       txt3.innerHTML = "Text."; // Create text with DOM
//       $("body").append(txt1, txt2, txt3); // Append new elements}
//     }
//   }
// };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
