const MyNameApp = {
    data(){
        return{
            /* name: "",
            idade: "",
            cidade: "", */
            input_name: "",
            input_idade: "",
            input_cidade: ""
        }
    },
    methods: {
        submitForm(e){
            e.preventDefault();
            console.log(this.input_name);
            this.name = this.input_name;
            this.idade = this.input_idade;
            this.cidade = this.input_cidade;
        }
    },
}

Vue.createApp(MyNameApp).mount("#app");