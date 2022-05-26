import { ref } from 'vue'

const useCounter = ( initValue = 5) => {
    
    const counter = ref( initValue )

    return {
        counter,
  
        //TODO: METODOS
        decrease: () => counter.value--,
        increase: () => counter.value++
      }
}

export default useCounter