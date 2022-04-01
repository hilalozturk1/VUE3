<template>
    <div class="container">
        <div class="header">
            <slot name="title" />
        </div>
        <hr>
        <div class="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quam consequatur id qui dolores quod quasi enim assumenda
            laborum soluta doloremque molestiae rem, amet dolor natus 
            doloribus maxime voluptates autem dolorem?
        </div>
        <hr>
        <div class="footer">
            <button>Close</button>
            <button class="green" @click="onSave">Submit</button>
        </div>
    </div>
</template>
<script>
export default {
   props:["onSave"]
}
</script>