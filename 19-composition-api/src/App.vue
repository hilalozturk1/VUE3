<template>
  <h3> {{title}} </h3>
</template>
<script>
export default {
  // data() {
  //   return {
  //     title : "Title"
  //   }
  // },
  setup() {//to use composition api together with option api 
    //setup funk. being used instead of data-beforeCreate-created
    //purpose of setup is to work before without creation data reactivity and to create data
    const title = "Setup Title" // needs to return an object
    return {
      title,
    }
  }
}
</script>