<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100vh;
  background: #000;
  -webkit-font-smoothing: antialiased !important;
}

html {
  font-size: 62.5%;

  @media screen and (max-width: 768px) {
    font-size: 50%;
  }
}

body {
  font-size: 1.6rem;
}

ul {
  list-style-type: none;
}
</style>
