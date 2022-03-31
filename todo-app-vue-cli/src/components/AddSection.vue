<template>
    <label for="todoText"></label>
    <input 
        @keydown.enter="addNewTodo($event.target.value)" 
        type="text" 
        id="todoText" 
        placeholder="Write down the things to be done..."
    >
</template>
<script>
export default {
    props : {
        addNewTodo : {
            type : Function,
            required : true
        }
    },
    methods: {
        // addNewTodo(event) {
        //     this.$emit("add-event", event.target.value);
        //     event.target.value = null;
        // }
    },
}
</script>