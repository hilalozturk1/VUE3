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
}).mount("#app");



// Vue2 Version
// new Vue({
//     el : "#app",  
//     data : {

//     }
// })