const app = Vue.createApp({
    data() {
        return {
            title : "Title",
            itemList : []
        }
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
        setTimeout(() => {
            this.itemList = [1,2,3,4,5]
        },2000);

        setTimeout(() => {
            this.title = "Changed Title"
        },3000);
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    beforeUnmount() {
        console.log('beforeUnmount');
    },
    unmounted() {
        console.log('unmounted');
    },
});

app.mount("#app");

setTimeout(() => {
    app.unmount();
},5000);