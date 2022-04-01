<template>
    <ListSection :userList="userList"/>
    <button @click="$emit('new-item', new Date().getTime())">Set Data</button>
</template>
<script>
import ListSection from "@/components/ListSection"
export default {
    props: ["userList"],
    emits: ["new-item"], //only vue3 - optional
    components: { 
        ListSection 
    }
}
</script>