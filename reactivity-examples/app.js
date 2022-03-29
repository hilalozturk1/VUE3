const app = Vue.createApp({
    data() {
        return {
            itemList: ["apple", "pear", "cherry", "strawberry"],
            search: "",
            //filteredList: []
        }
    },
    methods: {
        searchList(){
            //this.filteredList = this.itemList.filter(i => i.includes(this.search));
        }
    },
    computed : {
        filteredList() {
            return this.itemList.filter(i => i.includes(this.search))
        }
    }
}).mount("#app");