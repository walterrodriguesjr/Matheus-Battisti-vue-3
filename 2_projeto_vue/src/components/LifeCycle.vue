

<template>
    <h1>Meu nome é: {{ nome }}</h1>
</template>

<script>
export default {
    name: 'LifeCycle',
    data(){
        return {
            nome: 'Ainda não sei'
        }
    },

    created(){
        this.nome = 'Walter'
        this.lifeCycle()
    },
    mounted() {
        this.nome = 'Renan'
         this.lifeCycle()
    },
    methods: {
        lifeCycle(){
            console.log("executou");
        }
    }
}
</script>