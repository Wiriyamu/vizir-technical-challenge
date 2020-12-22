<template>
  <v-header />
  <section class="about">
    <div class="about__container">
      <h1 class="about__title">Tarifas</h1>

      <p class="about__description">
        A Telzir é especializada em chamadas de longa distância nacional. Com a
        Telzir você pode fazer uma chamada de uma cidade para outra pagando uma
        taxa fixa por minuto, com o preço sendo pré-definido em um lista com os
        códigos DDDs de origem e destino.
      </p>

      <div class="about__table">
        <div class="about__column">
          <h3>Origem</h3>
          <h3>011</h3>
          <h3>016</h3>
          <h3>011</h3>
          <h3>017</h3>
          <h3>011</h3>
          <h3>018</h3>
        </div>

        <div class="about__column">
          <h3>Destino</h3>
          <h3>016</h3>
          <h3>011</h3>
          <h3>017</h3>
          <h3>011</h3>
          <h3>018</h3>
          <h3>011</h3>
        </div>

        <div class="about__column">
          <h3>$min</h3>
          <h3>1.90</h3>
          <h3>2.90</h3>
          <h3>1.70</h3>
          <h3>2.70</h3>
          <h3>0.90</h3>
          <h3>1.90</h3>
        </div>
      </div>

      <p class="about__description">
        Quer ter ainda mais liberdade? Confira nosso novo produto: Fale Mais!
      </p>

      <footer class="about__footer">
        <router-link class="about__link" to="/">Home</router-link>
        <router-link class="about__link" to="/fale-mais">Fale Mais</router-link>
      </footer>
    </div>
  </section>
</template>

<script>
import VHeader from '@/components/VHeader.vue'
export default {
  name: 'Sobre',
  components: { VHeader }
}
</script>

<style lang="scss" scoped>
.about {
  width: 100%;

  &__container {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2%;
  }

  &__title {
    font-size: 3.6rem;
    color: #fff;
  }

  &__description {
    max-width: 100rem;
    margin-top: 2rem;
    font-size: 1.8rem;
    font-weight: bold;
    color: #fff;
  }

  &__table {
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
    padding: 0.625rem 2rem;
    border-radius: 0.3125rem;
    background-color: #fff;
  }

  &__column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__footer {
    display: flex;
    margin-top: 13rem;
    justify-content: space-between;
  }

  &__link {
    font-weight: bold;
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #1136ff;
    }
  }
}
</style>
