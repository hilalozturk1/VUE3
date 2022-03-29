const app = Vue.createApp({
    data() {
        return {
            title : "Title",
            content : "Content",
            google : {
                title : "Google",
                target : "_blank",
                url : "https://www.google.com",
                alt : "google"
            },
            examp : "attribute"
        }
    },
    methods: {
        changeTitle(passTitle) {
            this.title = passTitle;
        }
    },
}).mount("#app");



// Vue2 Version
// new Vue({
//     el : "#app",  
//     data : {

//     }
// })