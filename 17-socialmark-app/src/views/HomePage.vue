<template>
  <AppHeader />
  <div class="flex flex-row">
    <SideBar />
    <appBookmarkList :items="bookmarkList" />
  </div>
</template>
<script>
import SideBar from "@/components/Home/SideBar";
export default {
  components: {
    SideBar,
  },
  data() {
    return {
      bookmarkList: []
    }
  },
  created() {
    this.$appAxios.get("/bookmarks").then(bookmark_list_response => {
      console.log('bookmark_list_response', bookmark_list_response)
      this.bookmarkList = bookmark_list_response?.data || []
    })
  },
};
</script>