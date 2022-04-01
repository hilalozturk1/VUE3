<template>
  <div class="container">
    <h3>Shopping list</h3>
    <hr>
    <div>
      <input type="text" placeholder="What will you have?">
    </div>
    <ul>
      <li class="d-flex align-items-center justify-content-between">
        <span>Item 1</span>
        <button class="red">Delete</button>
      </li>
      <li class="d-flex align-items-center justify-content-between">
        <span>Item 1</span>
        <button class="red">Delete</button>
      </li>
      <li class="d-flex align-items-center justify-content-between">
        <span>Item 1</span>
        <button class="red">Delete</button>
      </li>
    </ul>
    <span>There are 5 products</span>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>