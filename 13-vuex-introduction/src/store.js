import { createStore } from "vuex";

const store = createStore ({
    state : {//the app is accessible throughout
        person : {
            name : "Hilal",
            lname : "Öztürk",
            age: 24
        },
        theme : "dark",
        permission : [1,2,3,45,6]
    }
})

export default store;
/*
    vuex does business through a global object.
    it presents a structure that is globally accessible at the whole level of application level.
    The name of this structure is store.
    The information in this store is expressed as state. 
*/
