<template>
  <h3> {{title}} </h3>
  <input type="text" v-model="title">
</template>
<script setup>
import { ref } from "vue";
const title = ref("TITLE");
</script>