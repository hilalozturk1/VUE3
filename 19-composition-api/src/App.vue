<template>
  <h3> {{title}} </h3>
  <input type="text" name="" id="" v-model="title">
  {{ titleLengthMessage }}
  <p v-if="show">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Excepturi aliquam nesciunt vero facilis deserunt odit debitis magni animi, 
    architecto provident quisquam doloremque, aspernatur explicabo, 
    voluptates laborum labore accusantium vitae dolor?
  </p>
  <button @click="toggleIt">Toggle</button>
  <hr>
  <button @click="counter++">{{ counter }} {{ oddOrEven }}</button>
  <hr>
  <input type="text" name="" id="" v-model="searchText">
  <p v-if="isTyping">Typing right now..</p>
</template>
<script>
import { ref,computed,watch,watchEffect } from "vue";
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
    const toggleIt = () => {show.value = !show.value}
    const titleLengthMessage = computed(() => {
      return title.value.length + "character"
    });
    const counter = ref (0);
    const oddOrEven = computed(() => ( counter.value % 2 == 0 ? "even" : "odd" ));
    watch([counter, oddOrEven], ([newC,new0], [oldC, old0]) => { console.log(new0,old0 )})

    /******************************** */

    const searchText = ref("");
    const isTyping =  ref(false);

    // watch(searchText, () => {
    //   if(searchText.value.length > 0 ) {
    //     isTyping.value = true;

    //     setTimeout(() => {
    //       isTyping.value = false;
    //     },1500)
    //   }
    // })

    watchEffect((onInvalidate) => {//triggered according to value
        if(searchText.value.length > 0 ) {
        isTyping.value = true;

        const typing = setTimeout(() => {
          isTyping.value = false;
        },1500)

        onInvalidate(() => clearTimeout(typing))//async req
      }
    })

    return {
      title,
      show,
      toggleIt,
      titleLengthMessage,
      counter,
      oddOrEven,
      searchText,
      isTyping
    }
  }
}
</script>