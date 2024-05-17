<template>
    <div>
      <h1>Document Requests</h1>
      <DataTable :value="documentRequests">
        <Column field="request_id" header="Request ID"></Column>
        <Column field="student_full_name" header="Student Name"></Column>
        <Column field="degree" header="Degree"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="address" header="Address"></Column>
        <Column field="contact" header="Contact"></Column>
        <Column field="last_school_year" header="Last School Year"></Column>
        <Column field="document_names" header="Document Name"></Column>
        <Column field="request_date" header="Request Date"></Column>
        <Column field="payment_date" header="Payment Date"></Column>
        <Column field="claiming_date" header="Claiming Date"></Column>
        <Column field="id_link" header="ID Link"></Column>
        <Column field="total_amount_paid" header="Total Amount Paid"></Column>
        <Column field="receipt_link" header="Receipt Link"></Column>
        <Column field="mode_of_claiming" header="Mode of Claiming"></Column>
        <Column field="status" header="Status"></Column>
        <Column header="Actions">
        <template #body="slotProps">
          <Button label="View" @click="showDetails(slotProps.data)"></Button>
        </template>
      </Column>
      </DataTable>
      <Dialog header="Document Request Details" v-model:visible="displayModal" :modal="true" :closable="true">
        <div v-if="selectedRequest">
          <p><strong>Request ID:</strong> {{ selectedRequest.request_id }}</p>
          <p><strong>Student Name:</strong> {{ selectedRequest.student_full_name }}</p>
          <p><strong>Degree:</strong> {{ selectedRequest.degree }}</p>
          <p><strong>Email:</strong> {{ selectedRequest.email }}</p>
          <p><strong>Address:</strong> {{ selectedRequest.address }}</p>
          <p><strong>Contact:</strong> {{ selectedRequest.contact }}</p>
          <p><strong>Last School Year:</strong> {{ selectedRequest.last_school_year }}</p>
          <p><strong>Document Name:</strong> {{ selectedRequest.document_names }}</p>
          <p><strong>Request Date:</strong> {{ selectedRequest.request_date }}</p>
          <p><strong>Payment Date:</strong> {{ selectedRequest.payment_date }}</p>
          <p><strong>Claiming Date:</strong> {{ selectedRequest.claiming_date }}</p>
          <p><strong>ID Link:</strong> <a :href="selectedRequest.id_link" target="_blank">{{ selectedRequest.id_link }}</a></p>
          <p><strong>Total Amount Paid:</strong> {{ selectedRequest.total_amount_paid }}</p>
          <p><strong>Receipt Link:</strong> {{ selectedRequest.receipt_link }}</p>
          <p><strong>Mode of Claiming:</strong> {{ selectedRequest.mode_of_claiming }}</p>
          <p><strong>Status:</strong> {{ selectedRequest.status }}</p>
          <div v-if="selectedRequest.mode_of_claiming === 'Courier'">
            <p><strong>Courier Info:</strong></p>
            <p>Province: {{ selectedRequest.courier_info.province }}</p>
            <p>Municipality: {{ selectedRequest.courier_info.municipality }}</p>
            <p>Barangay: {{ selectedRequest.courier_info.barangay }}</p>
            <p>Address: {{ selectedRequest.courier_info.present_address }}</p>
            <p>Contact: {{ selectedRequest.courier_info.delivery_contact }}</p>
            <p>Email: {{ selectedRequest.courier_info.email }}</p>
          </div>
          <p><strong>Feedback Text:</strong> {{ selectedRequest.feedback_text }}</p>
          <p><strong>Feedback Rating:</strong> {{ selectedRequest.feedback_rating }}</p>
          <p><strong>Feedback Date:</strong> {{ selectedRequest.feedback_date }}</p>
        </div>
      </Dialog>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  import Button from 'primevue/button';
  import Dialog from 'primevue/dialog';
  
  const documentRequests = ref([]);
  const displayModal = ref(false);
  const selectedRequest = ref(null);
  
  const fetchDocumentRequests = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/auth/track_document_requests', { withCredentials: true });
      documentRequests.value = response.data.map(item => {
  if (item.document_names) {
    item.document_names = item.document_names.split(', ').join(', ');
  }
  return item;
});
      console.log(documentRequests.value); // Log the documentRequests to check the fetched data
    } catch (error) {
      console.error('Failed to fetch document requests:', error);
    }
  };
  
  const showDetails = (request) => {
    selectedRequest.value = request;
    displayModal.value = true;
  };
  
  onMounted(() => {
    fetchDocumentRequests();
  });
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  