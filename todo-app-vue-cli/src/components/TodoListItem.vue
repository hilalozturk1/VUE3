<template>
     <li class="d-flex justify-content-between align-items-center">
        <span> {{item.text}} </span>
        <button class="sm red" @click="deleteItem(item)">Remove</button>
      </li>
</template>
<script>
export default {
  props : ["item"],
  inject : ["deleteItem"]
}
</script>