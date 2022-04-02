<template>
  <div class="container">
    <h3>Vuex</h3>
    <NewUser />
    <UserList />
    <!-- <p> {{$store.state.person}} </p>
    <ul>
      <li v-for="user in $store.state.userList" :key="user">
        {{user}}
      </li>
    </ul>
    {{ $store.state.fullName }} -->
  </div>
</template>
<script>
//import { mapGetters } from "vuex";
import NewUser from "@/components/NewUser";
import UserList from "@/components/UserList"
export default {
  components : {
    NewUser,
    UserList
  },
  created() {
    // console.log(this.$store.state.person)
    // console.log(this.$store.state.theme)
    // //console.log(this.$store.state.itemList.filter(i => i.type == 'furniture'))
    // console.log(this.$store.getters._woodItems) 
    // console.log(this.$store.getters._activeUser) 
  },
  
}
</script>