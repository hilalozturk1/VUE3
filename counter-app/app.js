const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0
        }
    },
    methods: {
    },
    computed : {
        //to prevent the entire vue instance from being rendered again, we define it as computed
        getCounterResult(){
            console.log('counter worked');
            return this.counter > 5 ? 'Greater' : 'Less';
        },
        getCounter2Result(){
            console.log('counter2 worked');
            return this.counter2 > 5 ? 'Greater' : 'Less';
        }
    }
}).mount("#app")