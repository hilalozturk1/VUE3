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
            examp : "attribute",
            coords : {
                x: 0,
                y: 0
            }
        }
    },
    methods: {
        changeTitle(passTitle) {
            this.title = passTitle;
        },
        updateCoords(message, event) {
            // console.log(message,event.x,event.y);
            this.changeTitle(event.x +","+ event.y)
            this.coords = {
                x : event.x,
                y : event.y
            }
        }
    },
}).mount("#app");



// Vue2 Version
// new Vue({
//     el : "#app",  
//     data : {

//     }
// })