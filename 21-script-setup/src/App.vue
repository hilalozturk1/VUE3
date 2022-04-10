<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title" />
  <button @click="inc">{{ counter }}</button>
  <hr />
  <oddOrEven :counter="counter" @odd-event="alertMe" />
  <hr />
  <h1>User App</h1>
  <input type="text" name="" id="" v-model="state.personal.name" />
  <input type="text" name="" id="" v-model="state.personal.lname" />
  {{ state.personal }}
</template>
<script setup>
// beforeCreate() created() and data()
import { ref, reactive } from "vue";
import oddOrEven from "./components/oddOrEven.vue";
import Utils from "./composables/Utils.js";
const { title, counter, inc, alertMe } = Utils();
//User App
// const name = ref("");
// const lname = ref("");
const state = reactive({
  personal: {
    name: null,
    lname: null,
  },
});
</script>