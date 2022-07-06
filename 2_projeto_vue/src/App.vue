<template>
<div>
  <Header />
  <PrimeiroComponente />
  <p>O dado de app é: {{testando}}</p>
  <LifeCycle />
  <Pessoa />
  <Form />
   
  </div>

</template>

<script>

import Header from './components/Header.vue'
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import LifeCycle from "./components/LifeCycle.vue"
import Pessoa from "./components/Pessoa.vue"
import Form from "./components/Form.vue"



export default {
    name: "App",
    components: {
    Header,
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

<style>
body{
  background-color: #333;
  color: #fff;
}

a{
  color: red;
}

.teste{
  background-color: #000;
}

</style>