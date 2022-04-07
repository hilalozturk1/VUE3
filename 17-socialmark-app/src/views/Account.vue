<template>
  <AppHeader />
  <div class="flex flex-row">
    <sideBar />
    <component :is="$route.meta.componentName" :items="bookmarkList"></component>
    <!-- <appBookmarkList v-if="bookmarkList.length > 0" :items="bookmarkList" />
    <div v-else>There is no bookmark</div> -->
  </div>
</template>
<script>
import sideBar from "@/components/Account/sideBar";
import io from "socket.io-client";
export default {
  components: {
    sideBar,
  },
  data() {
    return {
      bookmarkList: [],
      socket : {}//keeps clint side of the socket
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
    this.socket = io("http://localhost:2022")
  },
};
</script>