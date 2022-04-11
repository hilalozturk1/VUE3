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
<script setup>
import { reactive, inject } from "vue";
import { useStore} from "vuex";
import { useRouter } from "vue-router";
import CryptoJS from "crypto-js" 
const appAxios = inject("appAxios");
const store = useStore();
const router = useRouter();
const userData = reactive({
  username : null,
  password : null
});
const onSubmit = () => {
  // GET /post?title=json-server&author=typicode
  const password = CryptoJS.HmacSHA1(userData.password, store.getters._saltKey).toString();
  appAxios.get("/users?username="+userData.username+"&password="+password)
    .then(login_response => {
      if(login_response?.data?.length > 0){
        store.commit("setUser", login_response?.data[0])//update user the app level
        router.push({name: "HomePage"})
      }
      else{
        alert("The user was not found..")
      }
      console.log('login_response', login_response)
    })
    .catch(e => console.log('e', e));
}
</script>