<template>
  <div class="container">
    <h3>Vue CLI</h3>
    <p>Single File Component</p>
  </div>
  <!-- <CounterItem></CounterItem> -->
  <!-- <counter-item></counter-item> -->
  <counter-item />
  <counterItem />
</template>
<script>
import CounterItem from "@/components/CounterItem"
export default {
  components: {
    CounterItem,
    //"counter-item" : CounterItem
  }
}
</script>