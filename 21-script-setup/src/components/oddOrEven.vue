<template>
  <h3>{{ props.counter }}</h3>
</template>
<script setup>
  const props = defineProps({ counter: Number });
</script>