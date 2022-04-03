<template>
  <AppHeader />
  <div class="flex flex-row">
    <SideBar />
    <appBookmarkList />
  </div>
</template>
<script>
import SideBar from "@/components/Home/SideBar";
export default {
  components: {
    SideBar,
  },
};
</script>