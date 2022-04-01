<template>
  <div class="container">
    <UserSection :userList="userList" @new-item="userList.push($event)"/>
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
      userList : ["Name1" , "Name2" , "Name3"]
    }
  }
}
</script>