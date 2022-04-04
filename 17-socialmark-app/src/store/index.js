import { createStore } from "vuex";

const store = createStore({
    state: {
        user: null,
        saltKey : "booklikle123?"
    },
    getters : {
        _isAuthenticated: state => state.user != null,//true-false
        _getCurrentUser(state){
            const user = state.user;
            delete user?.password;//optional chaining
            return user;
        },
        _saltKey: state => state.saltKey
    }
});

export default store;