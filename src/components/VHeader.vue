<template>
  <header class="header">
    <div class="header__container">
      <nav class="header__nav">
        <router-link to="/">
          <figure class="header__logo">
            <img src="../assets/logo.svg" alt="Telzir" />
          </figure>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  &__container {
    max-width: 998px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2%;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__logo {
    display: flex;
    justify-content: center;
  }
}
</style>
