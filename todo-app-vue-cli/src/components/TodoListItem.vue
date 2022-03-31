<template>
     <li v-for="todo in 10" :key="todo" class="d-flex justify-content-between align-items-center">
        <span> Todo Item </span>
        <button class="sm red" @click="deleteItem(todo)">Remove</button>
      </li>
</template>