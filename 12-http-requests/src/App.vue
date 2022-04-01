<template>
  <div class="container">
    <h3>Shopping list</h3>
    <hr>
    <div>
      <input type="text" placeholder="What will you have?" @keydown.enter="onSave">
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
import axios from "axios";
export default {
  data() {
    return {
      itemList : []
    }
  },
  mounted() {
    axios.get("http://localhost:3000/items").then(items_response => {
      //fetching from db.json
      console.log('items_response', items_response);
      this.itemList = items_response.data || [];
    })
  },
  methods: {
    onSave(event) {
      const saveObject = {//create an object
        title : event.target.value,
        created_at : new Date(),
        completed : false
      };
      
      axios.post("http://localhost:3000/items", saveObject).then(save_response => {
        //saving to db.json file
        console.log('save_response', save_response);
        event.target.value = "";
        event.target.focus();
      });
    }
  },
}
</script>