<template>
    <div class="form-area card border p-2">
        <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input type="text" class="form-control" id="title" placeholder="bookmark.." v-model="userData.title">
        </div>
        <div class="mb-3">
            <label for="url" class="form-label">URL</label>
            <input type="text" class="form-control" id="url" placeholder="https://..." v-model="userData.url">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" id="description" rows="3" placeholder="description" v-model="userData.description"></textarea>
        </div>
        <button class="btn btn-sm btn-secondary" @click="$router.push({name:'HomePage'})">Cancel</button>
        <button class="btn btn-sm btn-primary" @click="onSave">Save</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userData:{
                title: null,
                url: null,
                description: null
            }
        }
    },
    methods: {
        onSave(){
            console.log('this.userData', this.userData);
            this.$appAxios.post("/bookmarks",this.userData).then(save_response => {
                // getting user data information into the db
                console.log('save_response', save_response)
                this.resetData(this.userData);
            })
        },
        resetData(data){
            Object.keys(data).forEach(key => (data[key] =null));
        }
    },
}
</script>