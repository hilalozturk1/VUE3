<template>
    <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Sing Up</h3>
      <input v-model="userData.fullname" type="text" placeholder="Fullname" class="input mb-3" />
      <input v-model="userData.username" type="text" placeholder="Username" class="input mb-3" />
      <input v-model="userData.password" type="password" placeholder="Password" class="input mb-3" />
      <button class="default-button" @click="onSave">Sign up</button>
      <span class="text-center mt-3 text-sm">
        I'm already a member,
        <button @click="$router.push({name :'LoginPage'})" class="text-red-900 hover:text-black">Log in!</button>
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
        fullname : null,
        password : null
      }
    }
  },
  methods: {
    onSave(){
      const password = this.userData.password;
      //const key =  "booklikle123?"
      const cryptedPassword = CryptoJS.HmacSHA1(password, this.$store.getters._saltKey).toString();
      //console.log(cryptedPassword);
      //const decryptedPassword = CryptoJS.AES.decrypt(cryptedPassword , key).toString(CryptoJS.enc.Utf8);
      //console.log('decryptedPassword', decryptedPassword)
      this.$appAxios.post("/users",{...this.userData, cryptedPassword}).then(save_response => {
        console.log('save_response', save_response)
        this.$router.push({name: "HomePage"})
      })
    }
  },
}
</script>