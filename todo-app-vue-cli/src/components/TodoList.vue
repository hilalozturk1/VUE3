<template>
    <ul>
        <TodoListItem 
            v-for="todoItem in provideData.todoList" 
            :key="todoItem.id" 
            :item="todoItem"
        />
    </ul>
</template>
<script>
import TodoListItem from "@/components/TodoListItem"
export default {
    components: {
        TodoListItem
    },
    //props:["myData"],
    inject : ["provideData"] //only vue3
    // props: {
    //     myData: {
    //         type : Array,
    //         required : false,
    //         default : ""
    //     }
    // }
}
</script>