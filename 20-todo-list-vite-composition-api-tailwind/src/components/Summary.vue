<template>
  <div class="text-green-300 px-2">{{ completed }} Completed</div>
  <div class="text-red-400 px-2">{{ unCompleted }} Uncompleted</div>
</template>
<script>
import { computed } from "vue";
export default {
  props: {
    todoList: Array,
  },
  setup(props) {
    const completed = computed(
      () => props.todoList.filter((i) => i.completed).length
    );
    const unCompleted = computed(
      () => props.todoList.filter((i) => !i.completed).length
    );
    return {
      completed,
      unCompleted,
    };
  },
};
</script>