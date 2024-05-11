<template>
  <div>
    <div>
      <button @click="showDialog = true">New Document Type</button>
    </div>

    <DataTable :value="documentTypes" :paginator="true" :rows="5">
      <Column field="document_type_id" header="ID"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="fee" header="Fee"></Column>
      <Column field="unit_name" header="Unit Name"></Column>
      <Column header="Actions">
        <template #body="rowData">
          <button @click="editDocumentType(rowData)">Edit</button>
          <button @click="deleteDocumentType(rowData.document_type_id)">Delete</button>
        </template>
      </Column>
    </DataTable>

    <Dialog v-model="showDialog" :visible="showDialog" @hide="clearForm">
      <form @submit.prevent="submitForm">
        <div>
          <label>ID:</label>
          <input type="text" v-model="form.document_type_id" readonly>
        </div>
        <div>
          <label>Name:</label>
          <input type="text" v-model="form.name" required>
        </div>
        <div>
          <label>Fee:</label>
          <input type="number" v-model="form.fee" required>
        </div>
        <div>
          <label>Unit Name:</label>
          <input type="text" v-model="form.unit_name" required>
        </div>
        <button type="submit">Save</button>
      </form>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';


const documentTypes = ref([]);
const form = reactive({
  document_type_id: null,
  name: '',
  fee: null,
  unit_name: ''
});
const showDialog = ref(false);

const fetchData = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/document_types/'); // Update the URL
    documentTypes.value = response.data;
  } catch (error) {
    console.error('Error fetching document types:', error);
  }
};

onMounted(fetchData);

const clearForm = () => {
  form.document_type_id = null;
  form.name = '';
  form.fee = null;
  form.unit_name = '';
  showDialog.value = false;
};

const submitForm = async () => {
  try {
    if (form.document_type_id) {
      // Update document type
      await axios.put(`http://127.0.0.1:8000/api/document_types/${form.document_type_id}`, form); // Update the URL
    } else {
      // Create new document type
      await axios.post('http://127.0.0.1:8000/api/document_types/', form); // Update the URL
    }
    clearForm();
    fetchData();
  } catch (error) {
    console.error('Error saving document type:', error);
  }
};

const editDocumentType = (documentType) => {
  form.document_type_id = documentType.document_type_id;
  form.name = documentType.name;
  form.fee = documentType.fee;
  form.unit_name = documentType.unit_name;
  showDialog.value = true;
};

const deleteDocumentType = async (documentTypeId) => {
  if (confirm('Are you sure you want to delete this document type?')) {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/document_types/${documentTypeId}`); // Update the URL
      fetchData();
    } catch (error) {
      console.error('Error deleting document type:', error);
    }
  }
};
</script>
