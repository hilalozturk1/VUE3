<template>
    <ul>
        <TodoListItem v-for="todoItem in myData" :key="todoItem.id" :item="todoItem"/>
    </ul>
</template>
<script>
import TodoListItem from "@/components/TodoListItem"
export default {
    components: {
        TodoListItem
    },
    props:["myData"],
    // props: {
    //     myData: {
    //         type : Array,
    //         required : false,
    //         default : ""
    //     }
    // }
}
</script>