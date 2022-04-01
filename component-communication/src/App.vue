<template>
  <div class="container">
    <UserSection />
  </div>
</template>
<script>
import UserSection from "@/components/UserSection"
export default {
  components: {
    UserSection
  },
  data() {
    return {
      provideData : {
        userList : ["Name1" , "Name2" , "Name3"]
      }
    }
  },
  methods: {
    newItem(item) {
      this.provideData.userList.push(item)
    }
  },
  provide() {
    return {
      userList : this.provideData.userList,
      newItem : this.newItem
    }
  }
}
</script>