<template>
    <form @submit.prevent="submitForm">
      <div>
        <label>Mode of claiming documents:</label><br>
        <input type="radio" v-model="mode" value="Pickup"> Pickup
        <input type="radio" v-model="mode" value="Through Representative"> Through Representative
        <input type="radio" v-model="mode" value="Courier"> Courier
        <input type="radio" v-model="mode" value="Email"> Email
      </div>
      
      <div v-if="mode === 'Courier'">
        <label>Province:</label><br>
        <input type="text" v-model="province"><br>
        
        <label>Municipality:</label><br>
        <input type="text" v-model="municipality"><br>
        
        <label>Barangay:</label><br>
        <input type="text" v-model="barangay"><br>
        
        <label>Present Address:</label><br>
        <input type="text" v-model="presentAddress"><br>
        
        <label>Delivery Contact:</label><br>
        <input type="text" v-model="deliveryContact"><br>
        
        <label>Email:</label><br>
        <input type="text" v-model="email"><br>
      </div>
      
      <div>
        <label>ID Link:</label><br>
        <input type="text" v-model="idLink">
      </div>
      
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const mode = ref('');
  const province = ref('');
  const municipality = ref('');
  const barangay = ref('');
  const presentAddress = ref('');
  const deliveryContact = ref('');
  const email = ref('');
  const idLink = ref('');
  let requestId = null;
  
  const submitForm = async () => {
    try {
      let response;
      if (mode.value === 'Courier') {
        response = await axios.post('http://127.0.0.1:8000/api/courier_information', {
          province: province.value,
          municipality: municipality.value,
          barangay: barangay.value,
          present_address: presentAddress.value,
          delivery_contact: deliveryContact.value,
          email: email.value,
          mode_of_claiming: mode.value,
          request_id: requestId,
        });
      } else {
        response = await axios.post('http://127.0.0.1:8000/api/claiming_information', {
          mode_of_claiming: mode.value,
          request_id: requestId,
        });
      }
      
      await axios.patch(`http://127.0.0.1:8000/api/document_request/${requestId}/id_link`, {
        id_link: idLink.value,
      });
  
      console.log(response.data);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again later.');
    }
  };
  
  const setRequestId = (id) => {
    requestId = id;
  };
  </script>
  