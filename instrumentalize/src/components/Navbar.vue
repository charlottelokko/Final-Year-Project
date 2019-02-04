<template>
    <div class="pure-menu pure-menu-horizontal">
        <div class="container">
        <a href="#" class="pure-menu-heading pure-menu-link">Home</a>
        <ul class="pure-menu-list">
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Home</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Mix</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">Listen</a></li>
            <li class="pure-menu-item"><a href="#" class="pure-menu-link">About</a></li>

        </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.pure-menu {
    background-color: rgb(13, 145, 206);
}
.pure-menu a {
    color: white;
}
</style>