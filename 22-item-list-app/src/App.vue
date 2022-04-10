<template>
  <div class="w-screen h-screen bg-gray-800 flex flex-row text-white items-start justify-center">
    <app-sidebar :invoiceList="invoiceList" :editInvoice="editInvoice" :deleteInvoice="deleteInvoice"/>
    <invoice-content :saveInvoice="saveInvoice" :activeInvoice="state.activeInvoice"/>
  </div>
</template>
<script setup>
import {ref,reactive} from "vue";
import appSidebar from "./components/appSidebar.vue"
import invoiceContent from "./components/invoiceContent.vue"
const invoiceList = ref([]);
const state = reactive({activeInvoice : null})
const saveInvoice = (invoice) => {
  invoiceList.value.push(invoice);
  console.log('invoice', invoice)
}
const editInvoice = (invoice) => {
   state.activeInvoice = invoice
}
const deleteInvoice = (invoice) => {
  invoiceList.value = invoiceList.value.filter ((i) => i.id != invoice.id)
}
</script>