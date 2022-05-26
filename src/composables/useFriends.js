import axios from 'axios'
import { ref } from 'vue'
const useFriends = ( friendsId = '1' ) => {

    const friends = ref()
    const isLoading = ref(false)
    const errorMessage = ref()


    const searchFriends = async() => {
        isLoading.value = true
        friends.value = null
        
        try {
            //https://jugaz.github.io/series-tv-api/json/friends/1.json

            const  { data } = await axios.get(`https://jugaz.github.io/series-tv-api/json/friends/${friendsId}.json`)
            friends.value = data 
            errorMessage.value = null

            console.log('data',data)

            
        } catch (error) {
            errorMessage.value = 'No se puedo cargar'
            
        }

        isLoading.value = false
    }

    searchFriends()


    return {
        errorMessage,
        friends,
        isLoading,
    }


}

export default useFriends