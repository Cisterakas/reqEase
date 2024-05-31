<template>
  <div>
    <h1>Document Request</h1>
    <div>
      <label>Mode of Claiming:</label>
      <input type="radio" id="pick-up" name="mode" value="Pick-up" v-model="modeOfClaiming">
      <label for="pick-up">Pick-up</label>
      <input type="radio" id="representative" name="mode" value="Representative" v-model="modeOfClaiming">
      <label for="representative">Representative</label>
      <input type="radio" id="courier" name="mode" value="Courier" v-model="modeOfClaiming">
      <label for="courier">Courier</label>
      <input type="radio" id="email" name="mode" value="Email" v-model="modeOfClaiming">
      <label for="email">Email</label>
    </div>
    <div v-if="modeOfClaiming === 'Courier'">
      <label>Courier Data:</label>
      <input type="text" v-model="courierData.province" placeholder="Province">
      <input type="text" v-model="courierData.municipality" placeholder="Municipality">
      <input type="text" v-model="courierData.barangay" placeholder="Barangay">
      <input type="text" v-model="courierData.present_address" placeholder="Present Address">
      <input type="text" v-model="courierData.delivery_contact" placeholder="Delivery Contact">
      <input type="email" v-model="courierData.email" placeholder="Email">
    </div>
    <div>
      <label>ID Link:</label>
      <input type="text" v-model="idLink" placeholder="Enter ID Link">
    </div>
    <table>
      <thead>
        <tr>
          <th>Document Name</th>
          <th>Fee</th>
          <th>Unit</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(documentType, index) in documentTypes" :key="documentType.document_type_id">
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
    <button @click="displayModal = true">Proceed to Next Page</button>

    <!-- Modal for verification -->
    <Dialog v-model="displayModal" :visible="displayModal" header="Confirmation" :modal="true" :closable="false">
      <p>Please review your inputs before submitting:</p>
      <ul>
        <li>Mode of Claiming: {{ modeOfClaiming }}</li>
        <li>ID Link: {{ idLink }}</li>
        <li>Selected Documents: 
          <ul>
            <li v-for="item in selectedDocuments" :key="item.document_type_id">
              {{ item.name }} - Quantity: {{ item.quantity }}
            </li>
          </ul>
        </li>
        <li v-if="modeOfClaiming === 'Courier'">Courier Data: 
          <ul>
            <li>Province: {{ courierData.province }}</li>
            <li>Municipality: {{ courierData.municipality }}</li>
            <li>Barangay: {{ courierData.barangay }}</li>
            <li>Present Address: {{ courierData.present_address }}</li>
            <li>Delivery Contact: {{ courierData.delivery_contact }}</li>
            <li>Email: {{ courierData.email }}</li>
          </ul>
        </li>
        <li>Total Fee: ${{ totalFee }}</li>
        <!-- Include additional fields here if needed -->
      </ul>
      <div class="p-grid">
        <div class="p-col-12">
          <button @click="proceedToNextPage">Confirm</button>
          <button @click="displayModal = false">Cancel</button>
          <!-- Add close button here -->
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import Dialog from 'primevue/dialog';

const documentTypes = ref([]);
const modeOfClaiming = ref('');
const courierData = ref({
  province: '',
  municipality: '',
  barangay: '',
  present_address: '',
  delivery_contact: '',
  email: ''
});
const idLink = ref('');
const displayModal = ref(false);

const fetchDocumentTypes = async () => {
  try {
    const response = await axios.get('https://reqease-fastapi.vercel.app/api/document_types/');
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

const isValidQuantity = (quantity) => {
  const parsedQuantity = parseInt(quantity);
  return !isNaN(parsedQuantity) && parsedQuantity > 0;
};

const selectedDocuments = computed(() => {
  return documentTypes.value.filter(item => isValidQuantity(item.quantity));
});

const totalFee = computed(() => {
  return selectedDocuments.value.reduce((acc, curr) => {
    return acc + (parseFloat(curr.fee) * parseFloat(curr.quantity));
  }, 0);
});

const proceedToNextPage = async () => {
  if (selectedDocuments.value.length === 0) {
    console.error('Please request at least one document.');
    alert('Please request at least one document.');
    return;
  }
  const requestBody = {
    items: {
      id_link: idLink.value,
      items: selectedDocuments.value.map(item => ({
        document_type_id: item.document_type_id,
        quantity: item.quantity,
        mode_of_claiming: modeOfClaiming.value
      }))
    }
  }

  // Include courier information only if mode of claiming is "Courier"
  if (modeOfClaiming.value === 'Courier') {
    requestBody.courier_info = courierData.value;
  }

  try {
    const response = await axios.post('https://reqease-fastapi.vercel.app/api/auth/document_requests/', requestBody, {
      withCredentials: true
    });
    console.log('Document request created successfully:', response.data);
    alert('Document request created successfully!');
    
    // Navigate to the next page if needed
    // router.push('/next-page');
  }
 catch (error) {
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
