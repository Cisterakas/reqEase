<template>
  <div>
    <h1>Document Requests</h1>
    <DataTable :value="documentRequests">
      <!-- Columns definition -->
      <Column field="request_id" header="Request ID"></Column>
      <Column field="student_id" header="Student ID"></Column>
      <Column field="student_school_id" header="Student School ID"></Column>
      <Column field="student_full_name" header="Student Name"></Column>
      <Column field="degree" header="Degree"></Column>
      <Column field="address" header="Address"></Column>
      <Column field="contact" header="Contact"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="document_name" header="Document Name"></Column>
      <Column field="request_date" header="Request Date"></Column>
      <Column field="id_link" header="ID Link"></Column>
      <Column field="total_amount_paid" header="Total Amount Paid"></Column>
      <Column field="claiming_method" header="Claiming Method"></Column>
      <Column field="status" header="Status"></Column>
      <Column header="Actions">
        <template #body="slotProps">
          <Button label="View" @click="showDetails(slotProps.data)"></Button>
          <Button label="Approve" @click="approveRequest(slotProps.data.request_id, 'Approve')"></Button>
          <Button label="Decline" @click="approveRequest(slotProps.data.request_id, 'Decline')"></Button>
        </template>
      </Column>
    </DataTable>
    <Dialog header="Document Request Details" v-model:visible="displayModal" :modal="true" :closable="true">
      <div v-if="selectedRequest">
        <!-- Display detailed information here -->
        <p><strong>Request ID:</strong> {{ selectedRequest.request_id }}</p>
        <p><strong>Student ID:</strong> {{ selectedRequest.student_id }}</p>
        <p><strong>Student School ID:</strong> {{ selectedRequest.student_school_id }}</p>
        <p><strong>Student Name:</strong> {{ selectedRequest.student_full_name }}</p>
        <p><strong>Degree:</strong> {{ selectedRequest.degree }}</p>
        <p><strong>Address:</strong> {{ selectedRequest.address }}</p>
        <p><strong>Contact:</strong> {{ selectedRequest.contact }}</p>
        <p><strong>Email:</strong> {{ selectedRequest.email }}</p>
        <p><strong>Document Name:</strong> {{ selectedRequest.document_name }}</p>
        <p><strong>Request Date:</strong> {{ selectedRequest.request_date }}</p>
        <p><strong>ID Link:</strong> <a :href="selectedRequest.id_link" target="_blank">{{ selectedRequest.id_link }}</a></p>
        <p><strong>Total Amount Paid:</strong> {{ selectedRequest.total_amount_paid }}</p>
        <p><strong>Claiming Method:</strong> {{ selectedRequest.claiming_method }}</p>
        <p><strong>Status:</strong> {{ selectedRequest.status }}</p>
        <div v-if="selectedRequest.courier_info">
          <h4>Courier Information</h4>
          <p><strong>Province:</strong> {{ selectedRequest.courier_info.province }}</p>
          <p><strong>Municipality:</strong> {{ selectedRequest.courier_info.municipality }}</p>
          <p><strong>Barangay:</strong> {{ selectedRequest.courier_info.barangay }}</p>
          <p><strong>Present Address:</strong> {{ selectedRequest.courier_info.present_address }}</p>
          <p><strong>Delivery Contact:</strong> {{ selectedRequest.courier_info.delivery_contact }}</p>
          <p><strong>Email:</strong> {{ selectedRequest.courier_info.email }}</p>
        </div>
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
import router from '@/router';

const documentRequests = ref([]);
const displayModal = ref(false);
const selectedRequest = ref(null);

const fetchDocumentRequests = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/get-document-requests/');
    documentRequests.value = response.data.map(item => ({
      ...item,
      courier_info: item.courier_info || null
    }));
  } catch (error) {
    console.error('Error fetching document requests:', error);
  }
};

const showDetails = (request) => {
  console.log('Showing details for:', request);
  selectedRequest.value = request;
  displayModal.value = true;
};

const approveRequest = async (requestId, approval) => {
  try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/approve-request/', { request_id: requestId, approved: approval });
       
      console.log(response.data.message);
    // Refresh document requests after approval
    fetchDocumentRequests();
    if (approval === 'Approve') {
      alert(`Request ID ${requestId} has been approved.`);
    } else {
      alert(`Request ID ${requestId} has been declined.`);
    }
  } catch (error) {
    console.error('Error approving request:', error);
  }
};

onMounted(() => {
  fetchDocumentRequests();
});
</script>

<style scoped>
/* Add your custom styles here */
</style>
