<template>
  <h3> {{title}} </h3>
  <input type="text" name="" id="" v-model="title">
  <p v-if="show">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Excepturi aliquam nesciunt vero facilis deserunt odit debitis magni animi, 
    architecto provident quisquam doloremque, aspernatur explicabo, 
    voluptates laborum labore accusantium vitae dolor?
  </p>
  <button @click="show = !show">Toggle</button>
</template>
<script>
import { ref } from "vue";
export default {
  // data() {
  //   return {
  //     title : "Title"
  //   }
  // },
  setup() {//to use composition api together with option api 
    //setup funk. being used instead of data-beforeCreate-created
    //purpose of setup is to work before without creation data reactivity and to create data
    const title = ref("Setup Title") // needs to return an object
    const show = ref(false);
    return {
      title,
      show
    }
  }
}
</script>