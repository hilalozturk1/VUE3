<template>
    <TodoList/>
    <ResultBar :itemCount="provideData.todoList.length"/>
</template>
<script>
import TodoList from "@/components/TodoList" 
import ResultBar from "@/components/ResultBar" 
export default {
    props : {
        todoList:{
            type: Array,
            required: true
        }
    },
    inject : ["provideData"],
    components: {
      TodoList,
      ResultBar
    }
}
</script>