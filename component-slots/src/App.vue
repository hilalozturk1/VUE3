<template>
  <Modal :onSave="onSave">
    <template #title>
      <h3>The header information that comes with the slot</h3>
    </template>
    <template #content>
      <p class="text-green">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quam consequatur id qui dolores quod quasi enim assumenda
          laborum soluta doloremque molestiae rem, amet dolor natus 
          doloribus maxime voluptates autem dolorem?
      </p>
    </template>
    <template v-slot:default>
      By default
    </template>
  </Modal>
</template>
<script>
import Modal from "@/components/ModalSection"
export default {
  components:{
    Modal
  },
  methods: {
    onSave() {
      alert("Saved!");
    }
  },
}
</script>