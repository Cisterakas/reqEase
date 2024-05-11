<template>
  <div>
    <h2>Claiming Information Form</h2>
    <form @submit.prevent="handleSubmit">
      <label for="modeOfClaiming">Mode of Claiming:</label>
      <input type="text" id="modeOfClaiming" v-model="claimingInfo.mode_of_claiming" required />
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const requestId = ref(null); // Store request_id in a ref

// Access request_id from the previous route using beforeRouteEnter
beforeRouteEnter(async (to, from, next) => {
  requestId.value = parseInt(from.params.requestId); // Get request_id from previous route parameters
  next(); // Allow navigation to proceed
}, next => next());

const claimingInfo = reactive({
  request_id: requestId.value,
  mode_of_claiming: '',
});

const handleSubmit = async () => {
  try {
    const response = await axios.post(`http://127.0.0.1:8000/api/claiming_information/${requestId.value}`, claimingInfo);
    console.log('Claiming information created successfully:', response.data);
    // Handle successful creation (e.g., display success message, redirect)
  } catch (error) {
    console.error('Error creating claiming information:', error);
    // Handle error (e.g., display error message)
  }
};
</script>

<style scoped>
/* Add any styling for the form elements as needed */
</style>