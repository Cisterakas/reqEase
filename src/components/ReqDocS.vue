<template>
  <div>
    <h1>Document Request</h1>
    <table>
      <thead>
        <tr>
          <th>Document ID</th>
          <th>Document Name</th>
          <th>Fee</th>
          <th>Unit</th>
          <th>Quantity</th>
          <th>Total Fee</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(documentType, index) in documentTypes" :key="documentType.document_type_id">
          <td>{{ documentType.document_type_id }}</td>
          <td>{{ documentType.name }}</td>
          <td>{{ documentType.fee }}</td>
          <td>{{ documentType.unit_name }}</td>
          <td>
            <button @click="decrementQuantity(index)">-</button>
            <span>{{ parseFloat(documentType.quantity) || 0 }}</span>
            <button @click="incrementQuantity(index)">+</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="proceedToNextPage">Proceed to Next Page</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const documentTypes = ref([]);

const fetchDocumentTypes = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/document_types/');
    console.log('API response:', response.data);
    documentTypes.value = response.data.map(item => ({
      ...item,
      quantity: parseFloat(item.quantity) || 0 // Parse quantity to float or default to 0
    }));
  } catch (error) {
    console.error('Error fetching document types:', error);
  }
};

const incrementQuantity = (index) => {
  documentTypes.value[index].quantity++;
};

const decrementQuantity = (index) => {
  if (documentTypes.value[index].quantity > 0) {
    documentTypes.value[index].quantity--;
  }
};

const proceedToNextPage = async () => {
  const selectedItems = documentTypes.value.filter(item => item.quantity > 0);
  const requestBody = {
    items: selectedItems.map(item => ({
      document_type_id: item.document_type_id,
      quantity: item.quantity
    }))
  };

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/document/requests/', requestBody, {
      withCredentials: true
    });
    console.log('Document request created successfully:', response.data);
  } catch (error) {
    console.error('Error creating document request:', error);
  }
};

onMounted(fetchDocumentTypes);
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
th, td {
  padding: 8px;
  border: 1px solid #ddd;
}
</style>
