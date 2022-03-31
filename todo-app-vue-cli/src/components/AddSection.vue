<template>
    <label for="todoText"></label>
    <input 
        @keydown.enter="addNewTodo" 
        type="text" 
        id="todoText" 
        placeholder="Write down the things to be done..."
    >
</template>
<script>
export default {
    methods: {
        addNewTodo(event) {
            this.$emit("add-event", event.target.value);
            event.target.value = null;
        }
    },
}
</script>