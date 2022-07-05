<template>
<div>
  <PrimeiroComponente />
  <p>O dado de app é: {{testando}}</p>
  <LifeCycle />
  <Pessoa />
  <Form />
   
  </div>

</template>

<script>

import PrimeiroComponente from './components/PrimeiroComponente.vue'
import LifeCycle from "./components/LifeCycle.vue"
import Pessoa from "./components/Pessoa.vue"
import Form from "./components/Form.vue"



export default {
    name: "App",
    components: {
    PrimeiroComponente,
    LifeCycle,
    Pessoa,
    Form
},

    data(){
      return {
        testando: "Teste"
      }
    }
    
}

</script>