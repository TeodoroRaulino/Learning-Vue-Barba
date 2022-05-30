const MyNameApp = {
    data(){
        return{
            name: "Teodoro",
            age: 30
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")