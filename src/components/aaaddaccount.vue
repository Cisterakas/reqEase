<template>
    <div>
      <Card>
        <template #title>Add Users</template>
        <template #content>
          <form @submit.prevent="addUser">
            <div class="customstyle">
            <FloatLabel>
              <label for="student_school_id">Student School ID</label>
              <InputText id="student_school_id" v-model="newUser.student_school_id"/>
            </FloatLabel>
          </div>
            <div class="customstyle">
              <FloatLabel>
                <label for="first_name">First Name</label>
                <InputText id="first_name" v-model="newUser.first_name"/>
              </FloatLabel>
            </div>
            <div class="customstyle">
              <FloatLabel>
                <label for="middle_name">Middle Name</label>
                <InputText id="middle_name" v-model="newUser.middle_name"/>
              </FloatLabel>          
            </div>
            <div class="customstyle">
              <FloatLabel>
                <label for="last_name">Last Name</label>
                <InputText id="last_name" v-model="newUser.last_name"/>
              </FloatLabel>            
            </div>
            <div class="customstyle">
              <FloatLabel>
                <label for="suffix">Suffix</label>
                <InputText id="suffix" v-model="newUser.suffix"/>
              </FloatLabel>            
            </div>
            <div class="customstyle">
              <FloatLabel>
                <label for="address">Address</label>
                <InputText id="address" v-model="newUser.address"/>
              </FloatLabel>            
            </div>
            <div class="customstyle">
              <FloatLabel>
                <label for="contact">Contact</label>
                <InputText id="contact" v-model="newUser.contact"/>
              </FloatLabel>            
            </div>
            <div class="customstyle">
              <FloatLabel>
                <label for="last_school_year">Last School Year</label>
                <InputText id="last_school_year" v-model="newUser.last_school_year"/>
              </FloatLabel>            
            </div>
            <div class="customstyle">
              <FloatLabel>
                <label for="degree">Degree</label>
                <InputText id="degree" v-model="newUser.degree"/>
              </FloatLabel>            
            </div>
            <div class="customstyle">
              <FloatLabel>
                <label for="email">Email</label>
                <InputText id="email" v-model="newUser.email"/>
              </FloatLabel>            
            </div>
            <div class="customstyle">
              <FloatLabel>
                <label for="password">Password</label>
                <InputText type="password" id="password" v-model="newUser.password" required/>
              </FloatLabel>            
            </div>
            <div class="customstyle">
              <Button type="submit" label="Create New User" icon="pi pi-user-plus" />
            </div>
          </form>
          <div v-if="loading">Adding user...</div>
          <div v-if="error" style="color: red;">{{ error }}</div>
          <div v-if="success">User added successfully!</div>
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
  
  const newUser = ref({
  student_school_id: '',
  first_name: '',
  middle_name: '',
  last_name: '',
  suffix: '',
  address: '',
  contact: '',
  last_school_year: '',
  degree: '',
  email: '',
  password: ''
});

const loading = ref(false);
const error = ref(null);
const success = ref(false);

const addUser = async () => {
  loading.value = true;
  error.value = null;
  success.value = false;
  try {
    await axios.post('http://127.0.0.1:8000/api/addusers/', newUser.value, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    });
    success.value = true;
    newUser.value = { 
      student_school_id: '',
      first_name: '',
      middle_name: '',
      last_name: '',
      suffix: '',
      address: '',
      contact: '',
      last_school_year: '',
      degree: '',
      email: '',
      password: ''
    }; // Reset form fields after successful submission
  } catch (err) {
    console.error('Error adding user:', err);
    error.value = 'Failed to add user. Please try again later.';
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
  