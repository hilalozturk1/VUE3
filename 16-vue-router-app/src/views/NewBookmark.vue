<template>
    <div class="form-area card border p-2">
        <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input type="text" class="form-control" id="title" placeholder="bookmark..">
        </div>
        <div class="mb-3">
            <label for="url" class="form-label">URL</label>
            <input type="text" class="form-control" id="url" placeholder="https://...">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" id="description" rows="3" placeholder="description"></textarea>
        </div>
        <button class="btn btn-sm btn-secondary" @click="$router.push({name:'HomePage'})">Cancel</button>
        <button class="btn btn-sm btn-primary">Save</button>
    </div>
</template>