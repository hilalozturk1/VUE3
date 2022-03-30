const app = Vue.createApp({
    data() {
        return {
            showContainer : false,
            counter : 0
        }
    },
    computed : {
        bgCounter(){
            return this.counter < 0 ? "red" : this.counter > 0 ? "green" : "blue"
        }
    }
}).mount("#app");