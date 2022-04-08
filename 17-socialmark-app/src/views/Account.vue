<template>
  <AppHeader />
  <div class="flex flex-row">
    <sideBar />
    <!-- <div class="socket">
      <input type="text" @keydown.enter="SEND_MESSAGE">
      <button>Test Socket</button>
    </div> -->
    <component :is="$route.meta.componentName" :items="bookmarkList"></component>
    <!-- <appBookmarkList v-if="bookmarkList.length > 0" :items="bookmarkList" />
    <div v-else>There is no bookmark</div> -->
  </div>
</template>
<script>
import sideBar from "@/components/Account/sideBar";
export default {
  components: {
    sideBar,
  },
  data() {
    return {
      bookmarkList: [],
      /*socket : {}//keeps clint side of the socket*/
    };
  },
  created() {
    this.$appAxios
      .get("/bookmarks?_expand=category&_expand=user")
      .then((bookmark_list_response) => {
        this.bookmarkList = bookmark_list_response?.data || []; 
      });
  },
  mounted() {
    //this.$socket.on("WELCOME_MESSAGE", this.WELCOME_MESSAGE);
  },
  methods: {
    // WELCOME_MESSAGE(data){
    //   console.log('data', data)
    // },
    // SEND_MESSAGE(e){
    //   console.log('e', e.target.value)
    //   this.$socket.emit("SEND_MESSAGE",  e.target.value)
    // }
  },
};
</script>