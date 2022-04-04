import { createStore } from "vuex";
import createPersistadState from "vuex-persistedstate"

import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: true });

const store = createStore({
    state: {
        user: null,
        saltKey : "booklikle123?"
    },
    mutations:{//for user setting
        setUser(state, user){
           state.user = user; 
        }
    },
    getters : {
        _isAuthenticated: state => state.user != null,//true-false
        _getCurrentUser(state){
            const user = state.user;
            delete user?.password;//optional chaining
            return user;
        },
        _saltKey: state => state.saltKey
    },
    plugins: [createPersistadState({
        storage: {
            getItem: key => ls.get(key),
            setItem: (key, value) => ls.set(key, value),
            removeItem: key => ls.remove(key)
          }
    })]
});

export default store;