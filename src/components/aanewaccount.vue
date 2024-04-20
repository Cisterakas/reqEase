<template>
  <div>
    <div class="card">
      <Toolbar class="mb-4">
        <template #end>
          <Button label="Export" icon="pi pi-upload" severity="help" @click="exportCSV" />
        </template>
      </Toolbar>

      <DataTable ref="dt" :value="newAccounts" resizableColumns columnResizeMode="fit" showGridlines tableStyle="min-width: 50rem" dataKey="id"
                 :paginator="true" :rows="5" :filters="filters"
                 paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                 currentPageReportTemplate="Showing {first} to {last} of {totalRecords} accounts">
        <template #header>
          <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 class="m-0">Manage New Accounts</h4>
            <IconField iconPosition="left">
              <InputIcon>
                <i class="pi pi-search" />
              </InputIcon>
              <InputText v-model="filters['global'].value" placeholder="Search..." />
            </IconField>
          </div>
        </template>

        <Column class="col1" field="student_school_id" header="Student School ID" sortable></Column>
        <Column field="first_name" header="First Name" sortable></Column>
        <Column field="middle_name" header="Middle Name" sortable></Column>
        <Column field="last_name" header="Last Name" sortable></Column>
        <Column field="suffix" header="Suffix" sortable></Column>
        <Column field="degree" header="Degree" sortable></Column>
        <Column field="email" header="Email" sortable></Column>
        <Column field="registration_date" header="Registration Date" sortable></Column>
        <Column field="role" header="Role" sortable></Column>
        <Column field="account_approval_status" header="Approval Status" sortable></Column>
        <Column>
          <template #body="rowData">
            <Button icon="pi pi-pencil" class="p-button-rounded p-button-outlined" @click="editAccount(rowData)" />
            <Button icon="pi pi-trash" class="p-button-rounded p-button-outlined p-button-danger" @click="confirmDeleteAccount(rowData)" />
          </template>
        </Column>
      </DataTable>
    </div>

    <Dialog v-model:visible="editDialogVisible" header="Edit Account" :modal="true">
      <div class="p-fluid">
        <div class="p-field">
          <label for="edit-student-school-id">Student School ID</label>
          <InputText id="edit-student-school-id" v-model="editedAccount.student_school_id" />
        </div>
        <div class="p-field">
          <label for="edit-first-name">First Name</label>
          <InputText id="edit-first-name" v-model="editedAccount.first_name" />
        </div>
        <div class="p-field">
          <label for="edit-middle-name">Middle Name</label>
          <InputText id="edit-middle-name" v-model="editedAccount.middle_name" />
        </div>
        <div class="p-field">
          <label for="edit-last-name">Last Name</label>
          <InputText id="edit-last-name" v-model="editedAccount.last_name" />
        </div>
        <div class="p-field">
          <label for="edit-suffix">Suffix</label>
          <InputText id="edit-suffix" v-model="editedAccount.suffix" />
        </div>
        <div class="p-field">
          <label for="edit-degree">Degree</label>
          <InputText id="edit-degree" v-model="editedAccount.degree" />
        </div>
        <div class="p-field">
          <label for="edit-email">Email</label>
          <InputText id="edit-email" v-model="editedAccount.email" />
        </div>
        <div class="p-field">
          <label for="edit-role">Role</label>
          <InputText id="edit-role" v-model="editedAccount.role" />
        </div>
        <div class="p-field">
          <label for="edit-approval-status">Approval Status</label>
          <Button id="edit-approval-status" class="p-button-rounded" :label="editedAccount.account_approval_status ? 'Approved' : 'Not Yet Approved'" @click="toggleApprovalStatus" />
        </div>
        <div class="p-field">
          <Button label="Save" icon="pi pi-check" class="p-button-success" @click="saveEditedAccount" />
          <Button label="Cancel" icon="pi pi-times" class="p-button-danger" @click="cancelEditDialog" />
        </div>
      </div>
    </Dialog>
    
    <Dialog v-model:visible="deleteDialogVisible" header="Confirm" :modal="true">
      <p>Are you sure you want to delete this account?</p>
      <div class="p-field">
        <Button label="Yes" icon="pi pi-check" class="p-button-success" @click="deleteAccount" />
        <Button label="No" icon="pi pi-times" class="p-button-danger" @click="cancelDeleteDialog" />
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Toolbar from 'primevue/toolbar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';

import axios from 'axios';
const dt = ref(); // Define a ref for the DataTable component
const newAccounts = ref([]);
const filters = ref({
  'global': { value: null }
});
const editDialogVisible = ref(false);
const deleteDialogVisible = ref(false);
const editedAccount = ref({});
const originalAccount = ref({});

const fetchNewAccounts = async () => {
  try {
    const response = await axios.get('https://reqease-fastapi.vercel.app/api/new_accounts/');
    newAccounts.value = response.data;
  } catch (error) {
    console.error('Error fetching new accounts:', error);
  }
};
fetchNewAccounts();

const exportCSV = () => {
  dt.value.exportCSV(); // Access the exportCSV method using the defined ref for DataTable
};

const editAccount = (account) => {
  editedAccount.value = { ...account };
  originalAccount.value = { ...account };
  editDialogVisible.value = true;
};

const cancelEditDialog = () => {
  editedAccount.value = {};
  originalAccount.value = {};
  editDialogVisible.value = false;
};

const saveEditedAccount = async () => {
  try {
    await axios.put(`http://127.0.0.1:8000/api/new_accounts/${editedAccount.value.user_id}`, editedAccount.value);
    editDialogVisible.value = false;
    // Manually update newAccounts after editing
    const index = newAccounts.value.findIndex(account => account.user_id === editedAccount.value.user_id);
    if (index !== -1) {
      newAccounts.value[index] = { ...editedAccount.value };
    }
  } catch (error) {
    console.error('Error saving edited account:', error);
  }
};


const confirmDeleteAccount = (account) => {
  editedAccount.value = { ...account };
  deleteDialogVisible.value = true;
};

const cancelDeleteDialog = () => {
  editedAccount.value = {};
  deleteDialogVisible.value = false;
};

const deleteAccount = async () => {
  try {
    await axios.delete(`http://127.0.0.1:8000/api/new_accounts/${editedAccount.value.user_id}`);
    deleteDialogVisible.value = false;
    // Manually remove the deleted account from newAccounts
    newAccounts.value = newAccounts.value.filter(account => account.user_id !== editedAccount.value.user_id);
  } catch (error) {
    console.error('Error deleting account:', error);
  }
};

const toggleApprovalStatus = () => {
  editedAccount.value.account_approval_status = !editedAccount.value.account_approval_status;
};

</script>

<style scoped>
.datatable-header {
  background-color: #000000; /* Header background color */
  color: #333; /* Header text color */
  font-weight: bold; /* Header text font weight */
  padding: 10px; /* Header padding */
}
</style>
