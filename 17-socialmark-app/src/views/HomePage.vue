<template>
  <AppHeader />
  <div class="flex flex-row">
    <SideBar @category-changed="updateBookmarkList"/>
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
    this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_list_response => {
      //get categoryId matched id below categories  & get user matched id below users
      console.log('bookmark_list_response', bookmark_list_response)
      this.bookmarkList = bookmark_list_response?.data || []
    })
  },
  methods: {
    updateBookmarkList(categoryId){
      this.$appAxios.get("/bookmarks?_expand=category&_expand=user&categoryId="+categoryId).then(bookmark_list_response => {
      this.bookmarkList = bookmark_list_response?.data || []
    })
    }
  },
};
</script>