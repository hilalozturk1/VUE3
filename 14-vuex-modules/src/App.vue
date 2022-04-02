<template>
  <p>
    {{$store.state.mainName}}
  </p>  

  <p>
    {{$store.state.customer.contactName}}
  </p>

  <pre>
    {{customerName}}
  </pre>
  
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: 'App',
  components: {
  },
  created() {
    console.log(this.$store.getters["customer/_contactName"])
  },
  computed: {
    ...mapGetters({
      customerName : "customer/_contactName"
    })
  }
}
</script>
