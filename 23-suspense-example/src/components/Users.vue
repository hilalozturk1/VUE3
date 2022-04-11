<script setup>
import { ref } from "vue";

const userList = ref([]);
const isLoad = ref(true);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
      isLoad.value = false;
      userList.value = json;
  });
</script>

<template>
  <div>
    <h3>Users</h3>
    <ul v-if="!isLoad">
      <li v-for="user in userList" :key="user.id">{{ user.name }}</li>
    </ul>
    <span v-else>Loading..</span>
  </div>
</template>