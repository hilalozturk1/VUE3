<template>
  <div class="container">
    <h3 class="text-center">ToDo App</h3>
    <hr class="my-2">
    <AddSection :addNewTodo="addNewTodo" />
    <ListSection />
    <!-- <TodoList :myData="todoList" @delete-todo-item="deleteItem"/>
    <ResultBar :itemCount="todoList.length"/> -->
  </div>
</template>
<script>
import AddSection from "@/components/AddSection" 
// import TodoList from "@/components/TodoList" 
// import ResultBar from "@/components/ResultBar" 
import ListSection from "@/components/ListSection"
  export default {
    components: {
      AddSection,
      // TodoList,
      // ResultBar,
      ListSection
    },
    // created() {//db
    //   setTimeout(() => {
    //     this.todoList = [
    //       {id : 1, text : "Todo #1"},
    //       {id : 2, text : "Todo #2"},
    //       {id : 3, text : "Todo #3"},
    //       {id : 4, text : "Todo #4"},
    //       {id : 5, text : "Todo #5"},
    //       ]
    //   },2000)
    // },
    data() {
      return {
        provideData: {
          todoList : [
            {id : 1, text : "Todo #1"},
            {id : 2, text : "Todo #2"},
            {id : 3, text : "Todo #3"},
            {id : 4, text : "Todo #4"},
            {id : 5, text : "Todo #5"},
          ]
        }
      }
    },
    provide() { //only vue3
      return {
        provideData : this.provideData,
        deleteItem : this.deleteItem
      }
    },
    methods: {
      deleteItem(todo) {
        this.provideData.todoList = this.provideData.todoList.filter((t) => t != todo)
      },
      addNewTodo(todo) {
        this.provideData.todoList.push({
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