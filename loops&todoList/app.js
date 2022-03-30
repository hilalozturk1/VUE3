const app = Vue.createApp({
    data() {
        return {
            todoList : [
                {id : 1, text : "todo1", completed : false},
                {id : 2, text : "todo2", completed : false},
                {id : 3, text : "todo3", completed : false},
                {id : 4, text : "todo4", completed : false},
                {id : 5, text : "todo5", completed : false},
                {id : 6, text : "todo6", completed : false}
            ]
        }
    },
    methods: {
        addTodo(event) {
            this.todoList.push({
                id : new Date().getTime(),
                text : event.target.value,
                completed : false
            });
            event.target.value = "";
        },
        removeItem(todoItem) {
            this.todoList = this.todoList.filter((todo) => todo != todoItem);
        }
    },
    computed: {
        completedItemCount() { return this.todoList.filter((todo) => todo.completed).length },
        unCompletedItemCount() { return this.todoList.filter((todo) => !todo.completed).length }
    }
}).mount("#app");