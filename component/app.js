const app = Vue.createApp({
    data() {
        return {}
    },
});

app.component("counter-item", { //string component
    data() {
        return {
            counter : 0
        };
    },
    template: `
        <div class="container-sm">
            <h3> {{counter}} </h3>
            <button @click="counter++" class="red">+</button>
            <button @click="counter--" class="green">-</button>
        </div>
    `
});
app.mount("#app");