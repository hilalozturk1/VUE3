<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Login</h3>
    <input v-model="userData.username" type="text" placeholder="Username" class="input mb-3" />
    <input v-model="userData.password" type="password" placeholder="Password" class="input mb-3" />
    <button class="default-button" @click="onSubmit">Login</button>
    <span class="text-center mt-3 text-sm">
      I am not member,
      <a @click="$router.push({name : 'RegisterPage'})" class="text-red-900 hover:text-black"
        >I want to be a member!</a
      >
    </span>
  </div>
</template>
<script>
import CryptoJS from "crypto-js" 
export default {
  data() {
    return {
      userData : {
        username : null,
        password : null
      }
    }
  },
  methods: {
    onSubmit(){
      // GET /post?title=json-server&author=typicode
      const cryptedPassword = CryptoJS.HmacSHA1(this.userData.password, this.$store.getters._saltKey).toString();
      this.$appAxios.get("/users?username="+this.userData.username+"&password="+cryptedPassword)
      .then(login_response => {
        console.log('login_response', login_response)
      })
      .catch(e => console.log('e', e));
    }
  },
}
</script>