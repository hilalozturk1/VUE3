<template>
  <div style="display:flex;float:left">
    <Todos />
    <hr />
    <Users />
  </div>
</template>

<script setup>
import Todos from "./components/Todos.vue";
import Users from "./components/Users.vue";
</script>