<template>
    <div>
        <Reutilizacao />
      <h1>Olá Vue!</h1>  
      <p>Meu nome é {{nome}} e trabalho como {{profissao}}</p>
      <MultiplosEventos />
      <Reutilizacao />
    </div>
</template>

<script>
import MultiplosEventos from "./MultiplosEventos.vue";
import Reutilizacao from "./reutilizacao";

export default {
    name: 'PrimeiroComponente',
    components: {
        MultiplosEventos, 
        Reutilizacao
    },
    data(){
        return {
            nome: "walter",
            profissao: "Programador"
        }
    }
}

</script>