
<template>
  <div class="home">
      <h1>Reactive vs ref</h1>
      <h3>{{ iroman }}</h3>
      <h3>{{ hulk }}</h3>

      <button @click="changeIroman">Cambiar Iroman</button>
      <button @click="changeHulk">Cambiar Hulk</button>

      <h3>Iroman: {{ iromanIsAlive }}</h3>

      <h3>Hulk: {{ hulkIsAlive }}</h3>

      <button @click="changeStatus">Cambiar status</button>
  </div>
</template>

<script>


import { ref, reactive } from 'vue';
export default {
  name: 'HomeView',
  setup() {

    const iroman = ref({ name:'Tony', age: 50 })
    const hulk = reactive({ name:'Bruce', age: 45 })

    const iromanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value
      // iromanIsAlive = !iromanIsAlive 
    }

    return {
      iroman,
      hulk,

      iromanIsAlive,
      hulkIsAlive,

      changeStatus,
      changeIroman: () => {
        iroman.value.name = 'Tony Stark',
        iroman.value.age = 55
      },
      changeHulk: () => {
        hulk.name = 'Bruce Baner',
        hulk.age = 45
      },
    }

  }
}
</script>
