<template>
  <div class="container">
    <h3 class="text-center">ToDo App</h3>
    <hr class="my-2">
    <AddSection @add-event="addNewTodo" />
    <TodoList :myData="todoList"/>
    <ResultBar />
  </div>
</template>
<script>
import AddSection from "@/components/AddSection" 
import TodoList from "@/components/TodoList" 
import ResultBar from "@/components/ResultBar" 
  export default {
    components: {
      AddSection,
      TodoList,
      ResultBar
    },
    created() {//db
      setTimeout(() => {
        this.todoList = [
          {id : 1, text : "Todo #1"},
          {id : 2, text : "Todo #2"},
          {id : 3, text : "Todo #3"},
          {id : 4, text : "Todo #4"},
          {id : 5, text : "Todo #5"},
          ]
      },2000)
    },
    data() {
      return {
        todoList : []
      }
    },
    methods: {
      deleteItem(todo) {
        console.log('todo', todo)
        this.todoList = this.todoList.filter((t) => t != todo)
      },
      addNewTodo(todo) {
        this.todoList.push({
          id : new Date().getTime(),
          text : todo
        });
        // this.todoList.push({
        //   id : new Date().getTime(),
        //   text : event.target.value
        // });
        // event.target.value = "";
      }
    },
  }
</script>