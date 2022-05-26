<template>
    <h1>Buscar Friends: {{ friendsId }}</h1>
    <form @submit.prevent="onSubmit">
        <input 
        type="number"
        placeholder="Friends" 
        v-model="friendsId"
        ref="txtSearchId"
        >
    </form>
    <br>
    <span>Presione enter para buscar</span>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup() {
    
        const router = useRouter()
        const friendsId = ref(1) 
        const txtSearchId = ref()


        onActivated(() => {
            txtSearchId.value.select()
        })

        return {
            friendsId,
            txtSearchId,

            onSubmit: () => {

                router.push({
                    name: 'friends-id',
                    params: { id : friendsId.value}
                })
                
            }
        }

    }

}
</script>

<style>

</style>