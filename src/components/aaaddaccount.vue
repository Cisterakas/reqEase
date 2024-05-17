<template>
  <div>
    <DataTable :value="payments" responsiveLayout="scroll">
      <Column field="request_number" header="Request Number"></Column>
      <Column field="school_student_id" header="Student ID"></Column>
      <Column field="full_name" header="Full Name"></Column>
      <Column field="document_names" header="Documents"></Column>
      <Column field="total_fee" header="Total Fee"></Column>
      <Column field="claiming_date" header="Claiming Date"></Column>
      <Column field="status" header="Status"></Column>
      <Column header="Actions">
        <template #body="slotProps">
          <div>
            <Button icon="pi pi-pencil" class="p-button-rounded p-button-info" @click="editPayment(slotProps.data)" />
            <Button icon="pi pi-check" class="p-button-rounded p-button-success" @click="updateStatus(slotProps.data, 'To Receive')" />
            <Button icon="pi pi-times" class="p-button-rounded p-button-danger" @click="updateStatus(slotProps.data, 'Denied Request')" />
          </div>
        </template>
      </Column>
    </DataTable>

    <Dialog header="Edit Payment" v-model:visible="editDialog" :modal="true" :closable="false">
      <template #footer>
        <Button label="Save" icon="pi pi-check" @click="savePayment"></Button>
        <Button label="Cancel" icon="pi pi-times" @click="cancelEdit"></Button>
      </template>
      <div class="p-fluid">
        <div class="p-field">
          <label for="total_fee">Total Fee</label>
          <InputNumber v-model="selectedPayment.total_fee"></InputNumber>
        </div>
        <div class="p-field">
          <label for="claiming_date">Claiming Date</label>
          <Calendar v-model="selectedPayment.claiming_date" dateFormat="yy-mm-dd"></Calendar>
        </div>
        <div class="p-field" v-for="(doc, index) in selectedPayment.documents" :key="doc.document_type_id">
          <label :for="'document_' + doc.document_type_id">{{ doc.name }}</label>
          <div>
            <Button icon="pi pi-minus" @click="decreaseQuantity(index)"></Button>
            <InputNumber v-model="doc.quantity" :min="0"></InputNumber>
            <Button icon="pi pi-plus" @click="increaseQuantity(index)"></Button>
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';

const payments = ref([]);
const editDialog = ref(false);
const selectedPayment = ref({
  request_number: 0,
  total_fee: 0,
  claiming_date: new Date(), // Initialize with the current date
  documents: []
});

const fetchPayments = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/payments/');
    payments.value = response.data;
  } catch (error) {
    console.error('There was an error fetching payments:', error);
  }
};

const editPayment = (payment) => {
  selectedPayment.value = JSON.parse(JSON.stringify(payment));
  editDialog.value = true;
};

const savePayment = async () => {
  try {
    // Check if claiming_date is a valid Date object
    let claimingDate = selectedPayment.value.claiming_date;
    if (!(claimingDate instanceof Date)) {
      claimingDate = new Date(claimingDate); // Convert to Date object if it's not already
    }

    // Adjust the date forward by one day
    claimingDate.setDate(claimingDate.getDate() + 1);

    // Format the adjusted date
    const formattedClaimingDate = claimingDate.toISOString().split('T')[0];

    const requestData = {
      request_number: selectedPayment.value.request_number,
      total_fee: selectedPayment.value.total_fee,
      claiming_date: formattedClaimingDate,
      documents: selectedPayment.value.documents || [] // Ensure documents field is included, even if empty
    };

    await axios.put('http://127.0.0.1:8000/api/payments/update/', requestData);
    fetchPayments();
    editDialog.value = false;
  } catch (error) {
    console.error('There was an error updating the payment:', error);
  }
};




const cancelEdit = () => {
  editDialog.value = false;
  selectedPayment.value = null;
};

const updateStatus = async (payment, status) => {
  try {
    const updatedPayment = { ...payment, status };
    await axios.put('http://127.0.0.1:8000/api/payments/update-status/', updatedPayment);
    fetchPayments();
  } catch (error) {
    console.error('There was an error updating the status:', error);
  }
};

const decreaseQuantity = (index) => {
  if (selectedPayment.value.documents[index].quantity > 0) {
    selectedPayment.value.documents[index].quantity--;
  }
};

const increaseQuantity = (index) => {
  selectedPayment.value.documents[index].quantity++;
};

fetchPayments();
</script>

<style>
/* Add any styles you need here */
</style>
