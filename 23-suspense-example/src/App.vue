<template>
  <div style="display: flex; float: left">
    <suspense>
      <template #default>
        <Todos /> <!-- async req -->
      </template>
      <template #fallback>
        <div>Loading..</div>
      </template>
    </suspense>
    <hr />
    <Users />
  </div>
</template>

<script setup>
import {defineAsyncComponent} from "@vue/runtime-core";
//import Todos from "./components/Todos.vue";//loading sync
import Users from "./components/Users.vue";
const Todos = defineAsyncComponent(() => import("./components/Todos.vue"));// loading comp. async
</script>