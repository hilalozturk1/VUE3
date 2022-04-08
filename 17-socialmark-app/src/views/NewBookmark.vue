<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Add New</h3>
    <input ref="title" v-model="userData.title" type="text" placeholder="Title" class="input mb-3" />
    <input v-model="userData.url" type="text" placeholder="URL" class="input mb-3" />
    <select class="input mb-3" v-model="userData.categoryId">
      <option disabled value="" selected>Categori</option>
      <option v-for="category in categoryList" :value="category.id" :key="category.id"> {{category.name}} </option>
    </select>
    <textarea
      placeholder="Description"
      class="input mb-3"
      cols="30"
      rows="10"
      v-model="userData.description"
    ></textarea>
    <div class="flex items-center justify-end gap-x-1">
      <button @click="$router.push({name: 'HomePage'})" class="secondary-button">Cancel</button>
      <button @click="onSave" class="default-button">Save</button>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
export default {
  data() {
    return {
      categoryList: [],
      userData: {
        title: null,
        url: null,
        categoryId: null,
        description: null
      }
    }
  },
  mounted() {
    this.$appAxios.get('/categories').then(category_response => {
      this.categoryList = category_response?.data || [];
    });
   this.$refs.title.focus();
  },
  methods: {
    onSave(){
      console.log(this.userData)
      console.log(this._getCurrentUser)
      const saveData = {
        ...this.userData,
        userId : this._getCurrentUser?.id,
        created_at : new Date()
      }
      this.$appAxios.post("/bookmarks", saveData).then(save_bookmark_response => {
        console.log('save_bookmark_response', save_bookmark_response)
        Object.keys(this.userData)?.forEach(field => this.userData[field] = null)
        const socketData = {
          ...save_bookmark_response.data,
          user : this._getCurrentUser,
          category : this.categoryList?.find(c => c.id == saveData.categoryId)
        };
        console.log('socketData', socketData)
        this.$socket.emit("NEW_BOOKMARK_EVENT", socketData);
        this.$router.push({name:"HomePage"})
      })
    }
  },
  computed: {
    ...mapGetters(["_getCurrentUser"])
  }
}
</script>