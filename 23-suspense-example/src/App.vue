<template>
  <div>
    <span v-if="err" class="error">{{err}}</span>
    <suspense v-else>
      <template #default>
        <div style="display: flex; float: left">        
            <Todos /> <!-- async req -->
            <hr />
            <Users />
        </div>
      </template>
      <template #fallback>
        <div>Loading..</div>
      </template>
    </suspense>
  </div>
</template>

<script setup>
import { onErrorCaptured,defineAsyncComponent, ref} from "@vue/runtime-core";
//import Todos from "./components/Todos.vue";//loading sync
//import Users from "./components/Users.vue";
const err = ref(null);
const Todos = defineAsyncComponent(() => import("./components/Todos.vue"));// loading comp. async
const Users = defineAsyncComponent(() => import("./components/Users.vue"));// loading comp. async
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