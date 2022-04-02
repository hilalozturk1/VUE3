<template>
    <button class="btn btn-primary btn-sm" @click="$router.push({name:'NewBookmark'})">
        + New Add
    </button>
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">URL</th>
                <th scope="col">Description</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="i in bookmarkList" :key="i.id">
                <th scope="row"> {{i.id}} </th>
                <td> {{i.title}} </td>
                <td> 
                    <a :href="i.url" target="_blank"> {{i.url}} </a>
                </td>
                <td>
                    {{i.description}}
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" @click="deleteBookmark(i)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    data() {
        return {
            bookmarkList: []
        }
    },
    created() {
        this.$appAxios.get("/bookmarks").then(bookmarks_list_response => {
            this.bookmarkList = bookmarks_list_response.data || []
            //console.log('bookmarks_list_response', bookmarks_list_response)
        })
    },
    methods: {
        deleteBookmark(bookmark){
            this.$appAxios.delete("/bookmarks/"+bookmark.id).then(delete_response => {
                console.log('delete_response', delete_response)
                if(delete_response.status === 200){
                    this.bookmarkList = this.bookmarkList.filter((i) => i.id != bookmark.id);
                }
            })
        }
    },
}
</script>