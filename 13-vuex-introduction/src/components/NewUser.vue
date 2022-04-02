<template>
    <button @click="updateUserData"> Add new item </button>
</template>
<script>
export default {
    methods: {
        updateUserData() {
            const userData = {
                id: new Date().getTime(), 
                title: 'shelf'+ new Date().getTime(), 
                type: 'furniture'
            };
            this.$store.dispatch("newItem", userData)//trigger action
            //this.$store.commit("newItem", userData); // trigger mutations
            //this.$store.state.itemList.push(userData);
            //this.$store.state.fullName = new Date().getTime(); 
        }
    },
}
</script>