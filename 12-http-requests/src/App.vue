<template>
  <div class="container">
    <h3>Shopping list</h3>
    <hr>
    <div>
      <input type="text" placeholder="What will you have?" @keydown.enter="onSave">
    </div>
    <ul>
      <li v-for="item in itemList" :key="item.id" class="d-flex align-items-center justify-content-between">
        <span> {{item.title}} </span>
        <button class="red" @click="onDelete(item)">Delete</button>
      </li>
    </ul>
    <span>There are {{itemList.length}} products</span>
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
        this.itemList.push(save_response.data);
        event.target.value = "";
        event.target.focus();
      });
    },
    onDelete(item) {
      axios.delete("http://localhost:3000/items/"+item.id).then(delete_response => {
        console.log('delete_response', delete_response);
        this.itemList = this.itemList.filter(i => i.id !== item.id);
      })
    },
  },
}
</script>