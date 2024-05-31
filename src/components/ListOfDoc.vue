<template>
  <div>
    <div class="toolbar">
      <InputText placeholder="Search..." v-model="searchQuery" @input="filterDocuments" />
      <Button label="Add Document" icon="pi pi-plus" @click="showAddDialog = true" />
    </div>

    <DataTable :value="filteredDocumentTypes" responsiveLayout="scroll">
      <Column field="name" header="Name"></Column>
      <Column field="fee" header="Fee"></Column>
      <Column field="unit_name" header="Unit Name"></Column>
      <Column header="Actions" bodyStyle="text-align: center">
        <template #body="slotProps">
          <Button icon="pi pi-pencil" @click="editDocument(slotProps.data)" />
          <Button icon="pi pi-trash" class="p-button-danger" @click="showDeleteConfirmation(slotProps.data)" />
        </template>
      </Column>
    </DataTable>

    <Dialog header="Add Document Type" v-model:visible="showAddDialog">
      <!-- Add Document Dialog Content -->
    </Dialog>

    <Dialog header="Edit Document Type" v-model:visible="showEditDialog">
      <!-- Edit Document Dialog Content -->
    </Dialog>

    <Dialog header="Delete Document Type" :visible="deleteVisible" @update:visible="deleteVisible = $event">
      <template #footer>
        <Button label="No" @click="cancelDelete" />
        <Button label="Yes" class="p-button-danger" @click="confirmDelete" />
      </template>
      <div class="p-fluid">
        <p>Are you sure you want to delete this document type?</p>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';

const documentTypes = ref([]);
const filteredDocumentTypes = ref([]);
const showAddDialog = ref(false);
const showEditDialog = ref(false);
const deleteVisible = ref(false);
const deleteDocumentId = ref(null);
const searchQuery = ref('');

const newDocument = ref({
  name: '',
  fee: 0,
  unit_name: '',
});

const editDocumentData = ref({
  document_type_id: null,
  name: '',
  fee: 0,
  unit_name: '',
});

const fetchDocumentTypes = async () => {
  try {
    const response = await axios.get('https://reqease-fastapi.vercel.app/api/document_types/');
    documentTypes.value = response.data;
    filteredDocumentTypes.value = response.data;
  } catch (error) {
    console.error('Error fetching document types:', error);
  }
};

const addDocumentType = async () => {
  // Add Document Type Logic
};

const editDocument = (document) => {
  // Edit Document Type Logic
};

const updateDocumentType = async () => {
  // Update Document Type Logic
};

const showDeleteConfirmation = (document) => {
  deleteDocumentId.value = document.document_type_id;
  deleteVisible.value = true;
};

const cancelDelete = () => {
  deleteVisible.value = false;
  deleteDocumentId.value = null;
};

const confirmDelete = async () => {
  try {
    await axios.delete(`https://reqease-fastapi.vercel.app/api/document_types/${deleteDocumentId.value}`);
    documentTypes.value = documentTypes.value.filter(doc => doc.document_type_id !== deleteDocumentId.value);
    filteredDocumentTypes.value = [...documentTypes.value]; // Update filtered data
    deleteVisible.value = false;
    deleteDocumentId.value = null;
  } catch (error) {
    console.error('Error deleting document type:', error);
  }
};

const filterDocuments = () => {
  const query = searchQuery.value.toLowerCase();
  filteredDocumentTypes.value = documentTypes.value.filter((doc) => 
    doc.name.toLowerCase().includes(query) ||
    doc.unit_name.toLowerCase().includes(query) ||
    doc.fee.toString().includes(query)
  );
};

onMounted(fetchDocumentTypes);
</script>

<style>
.toolbar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
</style>
