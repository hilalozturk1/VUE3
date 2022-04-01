<template>
  <Modal :onSave="onSave">
    <h3>The header information that comes with the slot</h3>
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