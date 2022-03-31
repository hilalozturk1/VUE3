<template>
    <label for="todoText"></label>
    <input 
        @keydown.enter="addNewTodo" 
        type="text" 
        id="todoText" 
        placeholder="Write down the things to be done..."
    >
</template>