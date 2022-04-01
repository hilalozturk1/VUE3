import { createStore } from "vuex";

const store = createStore ({
    state : {//the app is accessible throughout
        person : {
            name : "Hilal",
            lname : "Öztürk",
            age: 24
        },
        theme : "dark",
        permission : [1,2,3,45,6],
        userList : ["Name1", "Name2", "Name3", "Name4"],
        fullName : "Hilal Öztürk",
        itemList : [
            {id:1, title: "table", type:"furniture"},
            {id:2, title: "chair", type:"furniture"},
            {id:3, title: "TV", type:"electronic"},
            {id:4, title: "monitor", type:"electronic"},
            {id:5, title: "carpet", type:"furniture"}
        ]
    },
    getters : {
        woodItems : state => state.itemList.filter(i => i.type == 'furniture')
    }
})

export default store;
/*
    vuex does business through a global object.
    it presents a structure that is globally accessible at the whole level of application level.
    The name of this structure is store.
    The information in this store is expressed as state. 
*/
