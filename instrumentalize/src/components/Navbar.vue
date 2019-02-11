<template>
  <div class="pure-menu pure-menu-horizontal">
    <div class="container">
      <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <router-link to="/Home">Play</router-link>
        </li>
        <li class="pure-menu-item">
          <router-link to="/Mix">Mix</router-link>
        </li>
        <li class="pure-menu-item">
          <router-link to="/Listen">Listen</router-link>
        </li>
        <li class="pure-menu-item">
          <router-link to="/About">About</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.pure-menu {
  background-color: rgb(13, 145, 206);
}
.pure-menu a {
  color: white;
}
</style>
