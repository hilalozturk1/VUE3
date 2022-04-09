<template>
  <h3> {{title}} </h3>
  <input type="text" name="" id="" v-model="title">
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
    return {
      title,
    }
  }
}
</script>