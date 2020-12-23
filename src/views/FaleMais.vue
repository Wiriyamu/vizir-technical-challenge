<template>
  <v-header />
  <section class="talk">
    <div class="talk__container">
      <div>
        <!-- TALK MORE INFOS -->
        <h1 class="talk__title">Você livre de barreiras com o Fale Mais!</h1>
        <p class="talk__description">
          Com o Fale Mais da Telzir, você adquire um plano e pode falar de graça
          até um determinado tempo (em minutos) e só paga os minutos excedentes.
          Os minutos excedentes tem um acréscimo de 10% sobre a tarifa normal do
          minuto.
        </p>

        <p class="talk__description">
          Você pode escolher o plano que melhor lhe atende: Fale Mais 30 (30
          minutos), Fale Mais 60 (60 minutos) e Fale Mais 120 (120 minutos).
        </p>

        <!-- FORM -->
        <div class="talk__call">
          <div class="talk__wrappers">
            <label class="talk__text" for="call"
              >Escolha o DDD de origem e destino</label
            >
            <select v-model="state.call" class="talk__input" id="call">
              <option disabled>Origem / Destino</option>
              <option value="1.90">011 - 016</option>
              <option value="2.90">016 - 011</option>
              <option value="1.70">011 - 017</option>
              <option value="2.70">017 - 011</option>
              <option value="0.90">011 - 018</option>
              <option value="1.9">018 - 011</option>
            </select>
          </div>

          <div class="talk__wrappers">
            <label class="talk__text" for="minutes"
              >Quantidade de minutos que pretende falar</label
            >
            <input
              v-model.number="state.minutes"
              id="minutes"
              class="talk__input"
              type="number"
            />
          </div>

          <div class="talk__plan">
            <div style="margin-bottom: 10px">
              <label class="talk__text" for="talkMore30"
                >Escolha o plano que melhor te atenda</label
              >
            </div>
            <input
              v-model="state.plan"
              id="talkMore30"
              value="30"
              type="radio"
            />
            <label class="talk__text talk__label" for="talkMore30"
              >Fale Mais 30</label
            >

            <input
              v-model="state.plan"
              id="talkMore60"
              value="60"
              type="radio"
            />
            <label class="talk__text talk__label" for="talkMore60"
              >Fale Mais 60</label
            >

            <input
              v-model="state.plan"
              id="talkMore120"
              value="120"
              type="radio"
            />
            <label class="talk__text talk__label" for="talkMore120"
              >Fale Mais 120</label
            >
          </div>

          <div>
            <button @click="callCost" class="talk__button warning">
              Custo da Ligação
            </button>
            <button @click="clearSelection" class="talk__button danger">
              Limpar
            </button>
          </div>
        </div>
      </div>

      <!-- COST BOX -->
      <div class="talk__right">
        <div class="talk__infos">
          <h4 class="talk__infoTitle">Custo de sua ligação</h4>
          <h1 class="talk__cost">{{ state.withTalkMore }}</h1>

          <p>
            Com Fale Mais:
            <strong class="talk__withMoreTalk">{{ state.withTalkMore }}</strong>
          </p>
          <p>
            Sem Fale Mais:
            <strong class="talk__withoutMoreTalk">{{
              state.withoutTalkMore
            }}</strong>
          </p>

          <div class="talk__table">
            <router-link to="/sobre">
              <button class="talk__prices">Consulte a tabela de preços</button>
            </router-link>
          </div>

          <a @click="clearFormPrice" class="talk__clear">Limpar</a>
          <router-link to="/" class="talk__home">Ir para Home</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VHeader from '@/components/VHeader.vue'
import { reactive } from 'vue'
export default {
  name: 'Fale Mais',
  components: { VHeader },
  setup() {
    const state = reactive({
      call: null,
      minutes: null,
      plan: null,
      withTalkMore: 'R$ 0,00',
      withoutTalkMore: 'R$ 0,00'
    })

    const clearSelection = () => {
      state.call = null
      state.minutes = null
      state.plan = null
    }

    const clearFormPrice = () => {
      state.withTalkMore = 'R$ 0,00'
      state.withoutTalkMore = 'R$ 0,00'
    }

    const validationForm = () => {
      if (state.call === '' || state.minutes === '' || state.plan === null) {
        alert('Deixou algum campo vazio? Por favor, preencha-o corretamente!')
      }
    }

    const costWithTalkMore = () => {
      const call = Number(state.call)
      const plan = Number(state.plan)

      if (state.minutes > plan) {
        const limitExceeded = state.minutes - plan
        const calcExeceeded = call * limitExceeded
        const total = calcExeceeded / 10 + calcExeceeded
        state.withTalkMore = `R$ ${total.toFixed(2).replace('.', ',')}`
      } else {
        state.withTalkMore = 'R$ 0,00'
      }
    }

    const costWithoutTalkMore = () => {
      const call = Number(state.call)
      const total = call * state.minutes
      state.withoutTalkMore = `R$ ${total.toFixed(2).replace('.', ',')}`
    }

    const callCost = () => {
      validationForm()
      costWithTalkMore()
      costWithoutTalkMore()
      clearSelection()
    }

    return { state, clearSelection, callCost, clearFormPrice }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';
.talk {
  width: 100%;

  &__container {
    @include container;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 2%;
  }

  &__title {
    margin-bottom: 2rem;
    max-width: 50rem;
    font-size: 3.6rem;
    color: $colorBase;
  }

  &__description {
    max-width: 60rem;
    font-weight: bold;
    color: $colorBase;
  }

  &__call {
    margin-top: 2rem;
  }

  &__wrappers {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }

  &__plan {
    margin-bottom: 2rem;
  }

  &__text {
    color: $colorBase;
  }

  &__label {
    margin: 0 0.3125rem;
  }

  &__input {
    margin-top: 0.3125rem;
    padding: 0.625rem 0;
  }

  &__button {
    padding: 0.625rem 0.625rem;
    border: 0;
    font-weight: bold;
    color: $colorBase;
    cursor: pointer;
  }

  &__right {
    @media screen and (max-width: 989px) {
      margin-top: 2rem;
    }
  }

  &__infos {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    width: 35rem;
    height: 35rem;
    background-color: $colorBase;

    @media screen and (max-width: 989px) {
      justify-content: center;
    }

    @media screen and (max-width: 400px) {
      width: 30rem;
      justify-content: center;
    }
  }

  &__infoTitle {
    margin-top: 6rem;

    @media screen and (max-width: 989px) {
      margin-top: 2rem;
    }
  }

  &__cost {
    margin: 0.625rem 0 3rem 0;
    font-size: 3.6rem;
    color: $colorPrimary;
  }

  &__withMoreTalk {
    color: $colorPrimary;
  }

  &__withoutMoreTalk {
    color: $colorDanger;
  }

  &__table {
    margin: 2rem 0;
  }

  &__prices {
    padding: 0.625rem 0.6rem;
    border: 1px solid $colorBorder;
    border-radius: 2px;
    background-color: $colorBase;
    cursor: pointer;

    &:hover {
      border: 0;
      background-color: $colorPrimary;
      color: $colorBase;
      transition: 0.3s ease;
    }
  }

  &__clear,
  &__home {
    color: $colorPrimary;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
