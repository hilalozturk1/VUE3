<template>
  <div class="w-screen h-screen bg-gray-400 pt-10">
    <div class="bg-gray-700 rounded-md shadow-md text-white w-1/3 mx-auto p-3">
      <h3 class="text-center text-2xl">TODO List</h3>
      <AddSection :AddTodo="AddTodo"/>
      <TodoList @delete-event="deleteItem" :todoList="todoList"/>
    </div>
  </div>
</template>
<script>
import AddSection from "./components/addSection.vue"
import TodoList from "./components/todoList.vue"
import { ref } from "vue";
//reactive(return object) = ref
export default {
  components : {AddSection, TodoList},
  setup() {
    const todoList = ref([]);
    const AddTodo = (todoText) => {
      //console.log('todoText', todoText)
      todoList.value.push({
        id : new Date().getTime(),
        title : todoText
      })
    }
    const deleteItem = (e) => {
      todoList.value = todoList.value.filter((i) => i.id != e.id)
    }
    return {
      todoList,
      AddTodo,
      deleteItem
    }
  }
}
</script>