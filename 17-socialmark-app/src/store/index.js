import { createStore } from "vuex";

const store = createStore({
    state: {
        user: null,
    },
    getters : {
        _isAuthenticated: state => state.user != null,//true-false
        _getCurrentUser(state){
            const user = state.user;
            delete user?.password;//optional chaining
            return user;
        }
    }
});

export default store;