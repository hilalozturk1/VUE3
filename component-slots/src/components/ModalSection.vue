<template>
    <div class="container">
        <div class="header">
            <slot name="title" />
        </div>
        <hr>
        <div class="content">
            <slot name="content" />
        </div>
        <hr>
        <slot />
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