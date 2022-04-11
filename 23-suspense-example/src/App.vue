<template>
  <div style="display: flex; float: left">
    <span v-if="err" class="error">{{err}}</span>
    <suspense v-else>
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
import { onErrorCaptured,defineAsyncComponent, ref} from "@vue/runtime-core";
//import Todos from "./components/Todos.vue";//loading sync
import Users from "./components/Users.vue";
const err = ref(null);
const Todos = defineAsyncComponent(() => import("./components/Todos.vue"));// loading comp. async
onErrorCaptured((e) => {
    err.value = e;
    return true;
})
</script>
<style>
.error {
    color: red;
}
</style>