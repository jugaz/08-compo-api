import axios from 'axios'
import { ref } from 'vue'
const useFriends = ( friendsId = '1' ) => {

    const friends = ref()
    const isLoading = ref(false)
    const errorMessage = ref()


    const searchFriends = async( id ) => {
        if ( !id ) return

        isLoading.value = true
        friends.value = null
        
        try {
            //https://jugaz.github.io/series-tv-api/json/friends/1.json

            const  { data } = await axios.get(`https://jugaz.github.io/series-tv-api/json/friends/${id}.json`)
            friends.value = data 
            errorMessage.value = null

            
        } catch (error) {
            errorMessage.value = 'No se puedo cargar'
            
        }

        isLoading.value = false
    }

    searchFriends( friendsId )


    return {
        errorMessage,
        friends,
        isLoading,

        searchFriends
    }


}

export default useFriends