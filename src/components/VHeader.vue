<template>
  <header class="header">
    <div class="header__container">
      <nav class="header__nav">
        <router-link to="/">
          <figure class="header__logo">
            <img src="../assets/images/logo.svg" alt="Telzir" />
          </figure>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';

.header {
  &__container {
    @include container;
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
