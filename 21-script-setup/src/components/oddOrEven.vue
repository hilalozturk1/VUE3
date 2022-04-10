<template>
  <h3>{{ result }}</h3>
</template>
<script setup>
import { computed, watch } from "vue";
const props = defineProps({ counter: Number });
const emit = defineEmits(["odd-event"]);
const result = computed(() => (props.counter % 2 == 0 ? "even" : "odd"));
watch(result, (newResult) => {
  if (newResult == "odd") emit("odd-event", true);
});
</script>