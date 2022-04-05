<template>
  <AppHeader />
  <div class="flex flex-row">
    <SideBar @category-changed="updateBookmarkList"/>
    <appBookmarkList v-if="bookmarkList.length > 0" :items="bookmarkList" />
    <div v-else>There is no bookmark</div>
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
      const url = categoryId ? "/bookmarks?_expand=category&_expand=user&categoryId="+categoryId : "/bookmarks?_expand=category&_expand=user"
      this.$appAxios.get(url).then(bookmark_list_response => {
      this.bookmarkList = bookmark_list_response?.data || []
    })
    }
  },
};
</script>