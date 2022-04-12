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
<script setup>
import sideBar from "@/components/Account/sideBar";
import {ref,inject} from "vue";
const appAxios = inject("appAxios");
const bookmarkList = ref([]);
appAxios
  .get("/bookmarks?_expand=category&_expand=user")
  .then((bookmark_list_response) => {
    bookmarkList.value = bookmark_list_response?.data || []; 
  });
</script>