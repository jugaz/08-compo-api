<template>
   <h1 v-if="!friends && !errorMessage"> Buscando...</h1>
   <h1 v-else-if = "errorMessage">{{ errorMessage }}</h1>

   <template v-else>
         <h3>{{ friends.name }}</h3>
         <img :src="friends.url" :alt="friends.name" >
         <br>
         <router-link :to="{ name: 'friends-search'}"> regresar </router-link>
   </template>


</template>

<script>

import { watch } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import useFriends from '@/composables/useFriends'


export default {

   setup() {
      const route = useRoute()

      const { 
         errorMessage,
         friends,
         isLoading,
         searchFriends
      } = useFriends(route.params.id)

      onBeforeRouteLeave(() => {
         const answer = window.confirm('¿Está seguro que desea salir?')

         if( !answer ) return false // false, bloquea la salida

      })
      watch(
         () => route.params.id,
         () =>  searchFriends(route.params.id)
      )

      return {
         errorMessage,
         friends,
         isLoading,
      }
   }
}
</script>

<style>

</style>