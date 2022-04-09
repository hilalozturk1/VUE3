<template>
  <section class="mt-4">
    <TodoListItem
      v-for="todoItem in todoList"
      :key="todoItem.id"
      :todo="todoItem"
      @delete-item="$emit('delete-event', $event)"
    />
    <small> {{ todoLength }} </small>
    <Summary :todoList="todoList"/>
  </section>
</template>
<script>
import TodoListItem from "./todoListItem.vue";
import Summary from "./Summary.vue";
import { computed } from "vue";
export default {
  components: {
    TodoListItem,
    Summary,
  },
  props: {
    todoList: Array,
  },
  setup(props) {
    const todoLength = computed(() => props.todoList.length);
    return { todoLength };
  },
};
</script>