import { createStore } from "vuex";
import contact from "./modules/contact";
import taskmanager from "./modules/taskmanager";

const store = createStore ({
    state : {
        mainName : "countly"
    },
    modules : {
        "customer" : contact,
        taskmanager
    }
})

export default store;