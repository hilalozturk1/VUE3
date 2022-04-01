<template>
    <ListSection />
    <AddSection @new-item="$emit('new-item', $event)"/>
</template>
<script>
import ListSection from "@/components/ListSection"
import AddSection from "@/components/AddSection"
export default {
    //props: ["userList"],
    emits: ["new-item"], //only vue3 - optional
    components: { 
        ListSection,
        AddSection
    }
}
</script>