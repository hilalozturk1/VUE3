import { createStore } from "vuex";

const store = createStore ({
    state : {//these states are accessible throughout the app
        person : {
            name : "Hilal",
            lname : "Öztürk",
            age: 24,
            address : {},
            password : 123123123,
            id : 11111
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
    mutations : {//the state updates instantly - works synchronously
        newItem(state, item) {
            state.itemList.push(item);
        }
    },
    actions : {//works asynchronously & like vuex instance
        newItem({commit}, item){
            console.log('item', item);
            setTimeout(() => {
                //context.commit("newItem",item)
                commit("newItem",item);
            }, 2000);
        }
    },
    getters : {
        _woodItems : state => state.itemList.filter(i => i.type == 'furniture'),
        _activeUser(state) {
            const user = {
                ...state.person
            };
            delete user.password; //deleting the password without deleting the person's state
            return user;
        }
    }
})

export default store;
/*
    vuex does business through a global object.
    it presents a structure that is globally accessible at the whole level of application level.
    The name of this structure is store.
    The information in this store is expressed as state. 
*/
