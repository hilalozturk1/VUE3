<template>
  <div class="container">
    <h3 class="text-center">ToDo App</h3>
    <hr class="my-2">
    <label for="todoText"></label>
    <input @keydown.enter="addNewTodo" type="text" name="" id="todoText" placeholder="Write down the things to be done...">
    <ul>
      <li 
        v-for="todo in todoList"
        :key="todo.id"
        class="d-flex justify-content-between align-items-center"
      >
        <span> {{todo.text}} </span>
        <button class="sm red" @click="deleteItem(todo)">Remove</button>
      </li>
    </ul>
    <small class="mt-2 d-flex justify-content-end">There are {{todoList.length}} todo</small>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        todoList : [
          {id : 1, text : "Todo #1"},
          {id : 2, text : "Todo #2"},
          {id : 3, text : "Todo #3"},
          {id : 4, text : "Todo #4"},
          {id : 5, text : "Todo #5"},
          ]
      }
    },
    methods: {
      deleteItem(todo) {
        console.log('todo', todo)
        this.todoList = this.todoList.filter((t) => t != todo)
      },
      addNewTodo(event) {
        this.todoList.push({
          id : new Date().getTime(),
          text : event.target.value
        });
        event.target.value = "";
      }
    },
  }
</script>