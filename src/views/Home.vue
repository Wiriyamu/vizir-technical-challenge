<template>
  <v-header />
  <main class="home">
    <div class="home__container">
      <div class="home__left">
        <h1 class="home__title">Venha fazer parte da revolução Telefonica!</h1>
        <p class="home__description">
          Somos o que você procura em uma empresa de telefonia. A Telzir te
          oferece benefícios e vantagens que tem tudo a ver com o seu mundo e
          ainda trazemos mimos insuperáveis pra você. Clique
          <router-link to="/sobre" class="home__link">Aqui</router-link> para
          conferir nossas tarifas. Use o botão abaixo para conhecer nosso novo
          produto.
        </p>

        <div class="home__btnBox">
          <router-link to="/fale-mais">
            <button class="home__button">Fale Mais</button>
          </router-link>
        </div>
      </div>

      <div class="home__right">
        <img class="home__image" src="../assets/images/phone.svg" alt="Phone" />
      </div>
    </div>
  </main>
</template>

<script>
import VHeader from '../components/VHeader.vue'
export default {
  components: { VHeader }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
.home {
  width: 100%;

  &__container {
    @include container;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2%;

    @media screen and (max-width: 1200px) {
      flex-direction: column-reverse;
    }
  }

  &__title {
    font-size: 3.6rem;
    color: $colorBase;

    @media screen and (max-width: 1200px) {
      text-align: center;
    }
  }

  &__description {
    max-width: 50rem;
    margin: 2rem 0;
    font-weight: bold;
    color: $colorBase;

    @media screen and (max-width: 1200px) {
      max-width: initial;
      text-align: center;
    }
  }

  &__image {
    width: 45rem;

    @media screen and (max-width: 1200px) {
      width: 30rem;
    }
  }

  &__btnBox {
    @media screen and (max-width: 1200px) {
      display: flex;
      justify-content: center;
    }
  }

  &__button {
    padding: 0.625rem 0.6rem;
    border: 0;
    border-radius: 2px;
    background-color: $colorPrimary;
    color: $colorBase;
    cursor: pointer;

    &:hover {
      background-color: $colorBase;
      color: $colorBlack;
      transition: 0.3s ease;
    }
  }

  &__footer {
    display: flex;
    margin-top: 13rem;
    justify-content: space-between;
  }

  &__link {
    font-weight: bold;
    text-decoration: none;
    color: $colorPrimary;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
