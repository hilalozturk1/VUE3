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
  fullname : null,
  password : null
});

const onSave = () => {
  const password = CryptoJS.HmacSHA1(userData.password, store.getters._saltKey).toString();
  appAxios.post("/users",{...userData, password}).then(save_response => {
    console.log('save_response', save_response)
    router.push({name: "HomePage"})
  })
}
</script>