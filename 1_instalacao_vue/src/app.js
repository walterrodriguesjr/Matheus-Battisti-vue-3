const MyNameApp = {
    data(){
        return{
            name: "Walter",
            idade: 36,
            cidade: "Curitiba",
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");