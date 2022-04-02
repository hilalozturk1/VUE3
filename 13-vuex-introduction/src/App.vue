<template>
  <div class="container">
      <h3>Vuex</h3>
    <p> {{$store.state.person}} </p>
    <ul>
      <li v-for="user in $store.state.userList" :key="user">
        {{user}}
      </li>
    </ul>
    {{ $store.state.fullName }}
    <ul>
      <li v-for="item in $store.getters.woodItems" :key="item">
        {{ item.title }}
      </li>
    </ul>
    <button @click="this.$store.state.fullName = new Date().getTime(); this.$store.state.itemList.push({ id:6, title: 'shelf', type: 'furniture'})"> Changed State info </button>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$store.state.person)
    console.log(this.$store.state.theme)
    //console.log(this.$store.state.itemList.filter(i => i.type == 'furniture'))
    console.log(this.$store.getters.woodItems) 
    console.log(this.$store.getters.activeUser) 
  }
}
</script>