<!-- <template>
  <div>
    <h1>Document Requests</h1>
    <DataTable :value="documentRequests" :paginator="true" :rows="10">
      <Column field="request_id" header="Request ID"></Column>
      <Column field="student_school_id" header="Student School ID" sortable></Column>
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
    const response = await axios.get('http://127.0.0.1:8000/api/history');
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
</style> -->

<template>
  <div>
    <h1>Admin Accounts</h1>
    <DataTable :value="adminAccounts" :paginator="true" :rows="10">
      <Column field="user_id" header="User ID"></Column>
      <Column field="first_name" header="First Name"></Column>
      <Column field="middle_name" header="Middle Name"></Column>
      <Column field="last_name" header="Last Name"></Column>
      <Column field="suffix" header="Suffix"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="registration_date" header="Registration Date"></Column>
      <Column field="role" header="Role"></Column>
      <Column field="account_approval_status" header="Account Approval Status"></Column>
      <Column header="Actions">
        <template #body="slotProps">
          <Button label="View" @click="showDetails(slotProps.data)"></Button>
          <Button label="Approve" @click="approveAccount(slotProps.data.user_id)" class="p-button-success"></Button>
          <Button label="Deny" @click="denyAccount(slotProps.data.user_id)" class="p-button-danger"></Button>
        </template>
      </Column>
    </DataTable>
    <Dialog header="User Details" v-model:visible="displayModal" :modal="true" :closable="true">
      <div v-if="selectedUser">
        <p><strong>User ID:</strong> {{ selectedUser.user_id }}</p>
        <p><strong>First Name:</strong> {{ selectedUser.first_name }}</p>
        <p><strong>Middle Name:</strong> {{ selectedUser.middle_name }}</p>
        <p><strong>Last Name:</strong> {{ selectedUser.last_name }}</p>
        <p><strong>Suffix:</strong> {{ selectedUser.suffix }}</p>
        <p><strong>Email:</strong> {{ selectedUser.email }}</p>
        <p><strong>Registration Date:</strong> {{ selectedUser.registration_date }}</p>
        <p><strong>Role:</strong> {{ selectedUser.role }}</p>
        <p><strong>Account Approval Status:</strong> {{ selectedUser.account_approval_status }}</p>
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

const adminAccounts = ref([]);
const displayModal = ref(false);
const selectedUser = ref(null);

const fetchAdminAccounts = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/admin_accounts');
    adminAccounts.value = response.data;
  } catch (error) {
    console.error('Failed to fetch admin accounts:', error);
  }
};

const showDetails = (user) => {
  selectedUser.value = user;
  displayModal.value = true;
};
const approveAccount = async (userId) => {
  try {
    const approvalDate = new Date();
    const formattedApprovalDate = approvalDate.toISOString().split('T')[0]; // format the date as "YYYY-MM-DD"
    const response = await axios.put(`http://127.0.0.1:8000/api/new_accounts/${userId}/approve?approval_date=${formattedApprovalDate}`, {
      approved: 'TRUE'
    });
    console.log(response.data);
    alert('Account successfully approved!');
    fetchAdminAccounts(); 
  } catch (error) {
    console.error('Error approving account:', error.response.data.detail);
  }
};
const denyAccount = async (userId) => {
  try {
    await axios.put('http://127.0.0.1:8000/api/update_approval_status/', {
      user_id: userId,
      approved: 'DECLINE',
    });
    alert(`Account for user ID ${userId} has been denied.`);
    fetchAdminAccounts(); // Refresh the accounts list after denial
  } catch (error) {
    console.error('Failed to deny account:', error);
    alert('Failed to deny account.');
  }
};
onMounted(() => {
  fetchAdminAccounts();
});
</script>

<style scoped>
/* Add your custom styles here */
</style>
