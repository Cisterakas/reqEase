<template>
  <div>
    <newNavbar />
    <ApplicationNavigationBar />

    <div class="update-claiming-information">
      <h2>Update Claiming Information</h2>
      <form @submit.prevent="updateClaimingInformation">
        <div class="p-field-radiobutton">
          <RadioButton inputId="pickup" name="mode" value="Pickup" v-model="modeOfClaiming" />
          <label for="pickup">Pickup</label>
        </div>
        <div class="p-field-radiobutton">
          <RadioButton inputId="representative" name="mode" value="Representative" v-model="modeOfClaiming" />
          <label for="representative">Representative</label>
        </div>
        <div class="p-field-radiobutton">
          <RadioButton inputId="courier" name="mode" value="Courier" v-model="modeOfClaiming" />
          <label for="courier">Courier</label>
        </div>
        <div class="p-field-radiobutton">
          <RadioButton inputId="email" name="mode" value="Email" v-model="modeOfClaiming" />
          <label for="email">Email</label>
        </div>
        <Button label="Update" icon="pi pi-check" />
      </form>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import newNavbar from './newNavbar.vue';
import ApplicationNavigationBar from './ApplicationNavigationBar.vue';
import Footer from './Footer.vue';
import { ref } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';

const modeOfClaiming = ref(null);
const route = useRoute();
const router = useRouter();

const updateClaimingInformation = async () => {
  try {
    const requestId = route.params.requestId;
    const response = await axios.put(`http://127.0.0.1:8000/api/auth/document_requests/${requestId}/claiming_information/`, {
      mode_of_claiming: modeOfClaiming.value,
    }, {
      withCredentials: true
    });
    console.log(response.data.message);
    alert('Claiming information updated successfully');
    router.push('/'); // Navigate back to home or another page
  } catch (error) {
    console.error('Error updating claiming information:', error);
    alert('An error occurred while updating claiming information');
  }
};
</script>

<style scoped>
.update-claiming-information {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>
