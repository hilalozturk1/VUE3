<template>
  <div class="container">
    <button class="red" @click="activeComponents = 'red'">Red</button>
    <button class="green" @click="activeComponents = 'green'">Green</button>
    <button class="blue" @click="activeComponents = 'blue'">Blue</button><hr>
    <!-- <Red v-if="activeComponents === 'Red'" class="mb-2"/>
    <Green v-if="activeComponents === 'Green'" class="mb-2"/>
    <Blue v-if="activeComponents === 'Blue'"/> -->
    {{activeComponents}}
    <component :is="activeComponents" msg="Red Component">
          <h3 class="bg-green">Green Component</h3>
    </component>
  </div>
</template>
<script>
import Red from "@/components/RedComponent"
import Green from "@/components/GreenComponent"
import Blue from "@/components/BlueComponent"
export default {
  components:{
    Red,
    Green,
    Blue
  },
  data() {
    return {
      activeComponents : "Red"
    }
  },
}
</script>