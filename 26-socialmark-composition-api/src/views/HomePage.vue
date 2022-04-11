<template>
  <AppHeader />
  <div class="flex flex-row">
    <SideBar @category-changed="updateBookmarkList"/>
    <appBookmarkList v-if="bookmarkList.length > 0" :items="bookmarkList" />
    <div v-else>There is no bookmark</div>
  </div>
</template>
<script setup>
import SideBar from "@/components/Home/SideBar";
import {ref,onMounted,inject} from "vue";
const appAxios = inject("appAxios");
const socket = inject("socket");
const bookmarkList = ref([]);

onMounted(() => {
  socket.on("NEW_BOOKMARK_ADDED", bookmark =>  {
   bookmarkList.value.push(bookmark);
  })
});

const fetchData = () => {
  appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_list_response => {
    bookmarkList.value = bookmark_list_response?.data || []
  })
};
const updateBookmarkList = (categoryId) => {
  const url = categoryId ? "/bookmarks?_expand=category&_expand=user&categoryId="+categoryId : "/bookmarks?_expand=category&_expand=user"
  appAxios.get(url).then(bookmark_list_response => {
  bookmarkList.value = bookmark_list_response?.data || []
  })
};
fetchData();
</script>