<template>
    <div>
      <Card>
        <template #title>Add Admin Users</template>
        <template #content>
          <form @submit.prevent="addAdminUser">
            <div class="customstyle">
              <FloatLabel>
                <label for="firstName">First Name</label>
                <InputText id="firstName" v-model="newAdminUser.first_name"/>
              </FloatLabel>
            </div>
            <div class="customstyle">
              <FloatLabel>
                <label for="middleName">Middle Name</label>
                <InputText id="middleName" v-model="newAdminUser.middle_name"/>
              </FloatLabel>
            </div>
            <div class="customstyle">
              <FloatLabel>
                <label for="lastName">Last Name</label>
                <InputText id="lastName" v-model="newAdminUser.last_name"/>
              </FloatLabel>
            </div>
            <div class="customstyle">
              <FloatLabel>
                <label for="suffix">Suffix</label>
                <InputText id="suffix" v-model="newAdminUser.suffix"/>
              </FloatLabel>
            </div>
            <div class="customstyle">
              <FloatLabel>
                <label for="email">Email</label>
                <InputText id="email" v-model="newAdminUser.email"/>
              </FloatLabel>
            </div>
            <div class="customstyle">
              <FloatLabel>
                <label for="password">Password</label>
                <InputText type="password" id="password" v-model="newAdminUser.password"/>
              </FloatLabel>
            </div>
            <div class="customstyle">
            <FloatLabel>
              <label for="role">Role</label>
              <InputText id="role" v-model="newAdminUser.role"/>
            </FloatLabel>
          </div>
            <!-- Additional fields can be added here if required -->
            <div class="customstyle">
              <Button type="submit" label="Create New Admin User" icon="pi pi-user-plus" />
            </div>
          </form>
          <!-- Loading, error, and success messages -->
          <div v-if="loading">Adding admin user...</div>
          <div v-if="error" style="color: red;">{{ error }}</div>
          <div v-if="success">Admin user added successfully!</div>
        </template>
      </Card>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';
import Card from 'primevue/card';
  import axios from 'axios';
  
  const newAdminUser = ref({
    first_name: '',
    middle_name: '',
    last_name: '',
    suffix: '',
    email: '',
    password: '',
    role: ''
  });
  
  const loading = ref(false);
  const error = ref(null);
  const success = ref(false);
  
  const addAdminUser = async () => {
    loading.value = true;
    error.value = null;
    success.value = false;
    try {
      await axios.post('http://127.0.0.1:8000/api/addadminusers/', newAdminUser.value, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      });
      success.value = true;
      newAdminUser.value = { 
        first_name: '',
        middle_name: '',
        last_name: '',
        suffix: '',
        email: '',
        password: '',
        role: ''
      }; // Reset form fields after successful submission
    } catch (err) {
      console.error('Error adding admin user:', err);
      error.value = 'Failed to add admin user. Please try again later.';
    } finally {
      loading.value = false;
    }
  };
  </script>
  
  <style scoped>
  .customstyle {
    padding: 15px;
  }
  </style>
  