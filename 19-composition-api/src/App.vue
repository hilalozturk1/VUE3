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
import Counter from "./composables/Counter.js";
import Header from "./composables/Header.js";
import Serach from "./composables/Search.js";
import Toggle from "./composables/Toggle.js";
export default {
  setup() {
    const { counter, oddOrEven } = Counter();//destructive
    const { searchText, isTyping } = Serach();
    const { title, titleLengthMessage } = Header();
    const { show, toggleIt } =  Toggle();
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