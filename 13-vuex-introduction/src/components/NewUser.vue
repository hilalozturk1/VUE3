<template>
    <button 
        @click="this.$store.state.fullName = new Date().getTime(); 
        this.$store.state.itemList.push({ id: new Date().getTime(), title: 'shelf'+ new Date().getTime(), type: 'furniture'})"
        > Add new item 
    </button>
</template>