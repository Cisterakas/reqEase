<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import InputText from 'primevue/inputtext';

const email = ref('');
const password = ref('');
const showPassword = ref(false);
const rememberMe = ref(false);
const router = useRouter();
const errorMessage = ref('');
let errorTimeout = null;

const toggleVisibility = () => {
  showPassword.value = !showPassword.value;
};

const login = () => {
  // Reset error message and clear existing timeout
  errorMessage.value = '';
  clearTimeout(errorTimeout);

  // Check if email and password are not empty
  if (!email.value || !password.value) {
    errorMessage.value = 'Please enter both email and password';
    startErrorTimeout();
    return;
  }

  // Check credentials and redirect accordingly
  if (email.value === 'student@example.com' && password.value === '12345') {
    router.push('/');
    alert('Student successfully logged in!');
  } else if (email.value === 'admin@example.com' && password.value === '12345') {
    router.push('/adminH');
    alert('Admin successfully logged in!');
  } else {
    // Handle invalid credentials
    errorMessage.value = 'Invalid email or password';
    startErrorTimeout();
  }
};

const startErrorTimeout = () => {
  errorTimeout = setTimeout(() => {
    errorMessage.value = '';
  }, 5000); // 5 seconds
};


</script>

<template>
<div v-if="errorMessage" data-testid="error-message">{{ errorMessage }}</div>
  <div class="div">
    <div class="div-2">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e5b049d27ed9636f6aeaf2ce15d5102043b61aab957321b988924912f1065b90?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5b049d27ed9636f6aeaf2ce15d5102043b61aab957321b988924912f1065b90?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5b049d27ed9636f6aeaf2ce15d5102043b61aab957321b988924912f1065b90?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5b049d27ed9636f6aeaf2ce15d5102043b61aab957321b988924912f1065b90?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5b049d27ed9636f6aeaf2ce15d5102043b61aab957321b988924912f1065b90?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5b049d27ed9636f6aeaf2ce15d5102043b61aab957321b988924912f1065b90?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5b049d27ed9636f6aeaf2ce15d5102043b61aab957321b988924912f1065b90?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5b049d27ed9636f6aeaf2ce15d5102043b61aab957321b988924912f1065b90?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
        class="img"
      />
      <div class="div-3">
        <div class="div-4">
          <div class="column">
            <div class="div-5">

              <router-link to="/" type="button" class="div-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d517582c6790986da42d5984c2fd60ec261a41bd07ec8773b981d74f6b6a7363?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d517582c6790986da42d5984c2fd60ec261a41bd07ec8773b981d74f6b6a7363?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d517582c6790986da42d5984c2fd60ec261a41bd07ec8773b981d74f6b6a7363?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d517582c6790986da42d5984c2fd60ec261a41bd07ec8773b981d74f6b6a7363?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d517582c6790986da42d5984c2fd60ec261a41bd07ec8773b981d74f6b6a7363?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d517582c6790986da42d5984c2fd60ec261a41bd07ec8773b981d74f6b6a7363?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d517582c6790986da42d5984c2fd60ec261a41bd07ec8773b981d74f6b6a7363?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d517582c6790986da42d5984c2fd60ec261a41bd07ec8773b981d74f6b6a7363?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                class="img-2"
              />
            </router-link>
              <div class="div-6">Registrar Document Request Suite</div>
              <div class="div-7">
                Empowering Tomorrow, Preserving Today: Where Precision Meets
                Privacy, Your Documents Find a Trusted Home at University of the
                Immaculate Conception's Registrar
              </div>
            </div>
          </div>
          <div class="column-2">
            <div class="div-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb02eca80fb7d32d8f6575df7486ceb051ff87971d90779247dc175a8cbc13a3?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                class="img"
              />
              <div class="div-9">
                <div class="div-10">
                  <span style="color: rgba(47, 48, 48, 1)">WELCOME TO </span
                  ><span style="color: rgba(229, 79, 112, 1)">ReqEase!</span>
                </div>
                <div class="div-11">Please login to your Account</div>

                <div class="material-textfield">
  <input data-testid="email" placeholder=" " v-model="email" type="text">
  <label>Email</label>
</div>

<div class="material-textfield">
  <input
    placeholder=" "
    v-model="password"
    :type="showPassword ? 'text' : 'password'"
    id="password"
  >
  <label for="password">Password</label>
</div>

<div class="div-16">
  <!-- <input data-testid="password" placeholder=" " v-model="password" :type="showPassword ? 'text' : 'password'" id="password"> -->
  <input data-testid="password" @click="toggleVisibility" type="checkbox" class="div-17">{{ showPassword ? 'Hide' : 'Show' }} Password
  <input type="checkbox" class="div-17" v-model="rememberMe">Remember Me
</div>

<button data-testid="login-button" type="button" class="div-19" @click="login">Log In</button>

                
                <a data-testid="account-button" class="div-20" href="#open-modal">Create a New Account</a>

              
<div id="open-modal" class="modal-window">
  <div>
    
    <!-- Your Modal Content Goes Here -->
    <div class="div-">
    <div class="div-2-">
      <span style="color: rgba(47, 48, 48, 1)">WELCOME TO </span
      ><span style="color: rgba(229, 79, 112, 1)">ReqEase!</span>
    </div>
    <div class="div-3-">Please choose role to Create a New Account</div>
    <router-link data-testid="student-button" to="/regStudent" type="button" class="div-4-">As STUDENT</router-link>
    <router-link data-testid="admin-button" to="/regAdmin" type="button" class="div-5-">As ADMIN</router-link>
  
    <a href="#" title="Close" class="div-6-">Go Back  </a>
   
  </div>

    
  </div>
</div>





              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>

.div-4-:hover{
  background-color: #4fb0e5;
}
.div-5-:hover{
  background-color: #4fb0e5;
}
.div-6-:hover{
color: #4fb0e5;
}
.div- {
  display: flex;
  width: 100%;

  flex-direction: column;
}
@media (max-width: 991px) {
  .div- {
    max-width: 100%;
  }
}
.div-2- {
  color: #e54f70;
  letter-spacing: 4.5px;
  font: 700 45px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-2- {
    max-width: 100%;
    font-size: 40px;
  }
}
.div-3- {
  color: var(--black-2-5, #444b59);
  letter-spacing: 2.4px;
  margin-top: 19px;
  font: 400 24px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-3- {
    max-width: 100%;
  }
}
.div-4- {
  color: #fff ;
  text-align: center;
  letter-spacing: 2.4px;
  border-radius: 20px;
  background-color: rgba(
    229.00000154972076,
    79.00000289082527,
    112.000000923872,
    1
  );
  align-self: center;
  margin-top: 19px;
  width: auto;
  max-width: 100%;
  justify-content: center;
  padding: 27px 50px;
  font: 700 24px Montserrat, sans-serif;
}
@media (max-width: 991px) {
  .div-4- {
    padding: 0 20px;
  }
}
.div-5- {
  color:  #fff;
  text-align: center;
  letter-spacing: 2.4px;
  border-radius: 20px;
  background-color: rgba(
    229.00000154972076,
    79.00000289082527,
    112.000000923872,
    1
  );
  align-self: center;
  margin-top: 19px;
  width: auto;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  padding: 27px 60px;
  font: 700 24px Montserrat, sans-serif;
}
@media (max-width: 991px) {
  .div-5- {
    padding: 0 20px;
  }
}
.div-6- {
  color: #e54f70;
  text-align: center;
  align-self: center;
  margin-top: 19px;
  white-space: nowrap;
  font: 400 16px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-6- {
    white-space: initial;
  }
}














.modal-window {
  position: fixed;
  background-color: rgba(59, 59, 59, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
}
.modal-window:target {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
}
.modal-window > div {

  width: 901px;
height: auto;
position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  
  background: #ffffff;
border-radius: 10px;
padding: 40px 130px 40px 130px;
display: flex;
flex-direction: column;
  
}
.modal-window header {
  font-weight: bold;
}
.modal-window h1 {
  font-size: 150%;
  margin: 0 0 15px;
}

.modal-close {
  color: #aaa;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;
}
.modal-close:hover {
  color: black;
}





















.material-textfield {
  position: relative;  
  margin-top: 50px;
}

label {
  position: absolute;
  font-size: 1rem;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;


  transition: .1s ease-out;
  transform-origin: left top;
  pointer-events: none;

  color: #000;
  white-space: nowrap;
  justify-content: center;
  align-self: start;
  z-index: 1;
  margin: 0 27px  0 25px;
  padding: 0 10px;
  font: 275 22px Poppins, sans-serif;
}
input {
  font: 275 22px Poppins, sans-serif;
  outline: none;
  

  color: #000;
  transition: 0.1s ease-out;

  border-radius: 10px;
  border: 2px solid #2f3030;
  align-self: stretch;
  display: flex;
  height: 68px;
  flex-direction: column;
  width: 671px;
}
input:focus {
  border-color: #e54f70;  
}
input:focus + label {
  color: #e54f70;
  top: 0;
  transform: translateY(-50%) scale(.9);
}
input:not(:placeholder-shown) + label {
  top: 0;
  transform: translateY(-50%) scale(.9);
}


.div-14 {
  color: #000;
  white-space: nowrap;
  justify-content: center;
  align-self: start;
  z-index: 1;
  margin: 27px 0 0 25px;
  padding: 0 10px;
  font: 275 22px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-14 {
    white-space: initial;
    margin-left: 10px;
  }
}
.div-15 {
  border-radius: 10px;
  border: 2px solid #2f3030;
  align-self: stretch;
  display: flex;
  height: 68px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-15 {
    max-width: 100%;
  }
}






.div {
  background-color: var(--, #fff);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.div-2 {
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  min-height: 1080px;
  width: 100%;
  justify-content: center;
}
@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
  }
}
.img {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.div-3 {
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(255, 239, 239, 0.47) 0%,
    rgba(217, 217, 217, 0) 203.67%
  );
  width: 100%;
  padding-left: 80px;
}
@media (max-width: 991px) {
  .div-3 {
    max-width: 100%;
    padding-left: 20px;
  }
}
.div-4 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-4 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 38%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
.div-5 {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto 0;
}
@media (max-width: 991px) {
  .div-5 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.img-2 {
  aspect-ratio: 1.33;
  object-fit: contain;
  object-position: center;
  width: 401px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
}
.div-6 {
  color: #fff;
  text-align: center;
  text-shadow: -5px 4px 14.8px rgba(0, 0, 0, 0.5);
  font: 700 33px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-6 {
    max-width: 100%;
  }
}
.div-7 {
  color:  #fff;
  text-align: center;
  text-shadow: -2px 2px 3px rgba(0, 0, 0, 0.5);
  align-self: center;
  margin-top: 4px;
  max-width: 458px;
  font: 500 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-7 {
    max-width: 100%;
  }
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 62%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
.div-8 {
  flex-direction: column;
  fill: var(--, #fff);
  overflow: hidden;
  position: relative;
  display: flex;
  min-height: 1080px;
  flex-grow: 1;
  justify-content: center;
  align-items: end;
  padding: 50px 60px;
}
@media (max-width: 991px) {
  .div-8 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.div-9 {
  position: relative;
  display: flex;
  width: 671px;
  max-width: 100%;
  flex-direction: column;
  margin: 154px 66px 149px 0;
}
@media (max-width: 991px) {
  .div-9 {
    margin: 40px 10px 40px 0;
  }
}
.div-10 {
  color: #e54f70;
  letter-spacing: 4.5px;
  align-self: stretch;
  font: 700 45px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-10 {
    max-width: 100%;
    font-size: 40px;
  }
}
.div-11 {
  color: var(--black-2-5, #444b59);
  letter-spacing: 2.4px;
  align-self: stretch;
  margin-top: 28px;
  margin-bottom: 28px;
  white-space: nowrap;
  font: 400 24px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-11 {
    max-width: 100%;
    white-space: initial;
  }
}
.div-12 {
  border-radius: 10px;
  border: 2px solid #2f3030;
  align-self: stretch;
  display: flex;
  margin-top: 135px;
  flex-direction: column;
  align-items: start;
  padding: 0 60px 50px 25px;
}
@media (max-width: 991px) {
  .div-12 {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
}
.div-13 {
  color: #000;
  white-space: nowrap;
  justify-content: center;
  background-color: var(--, #fff);
  z-index: 1;
  margin: -7px 0 4px;
  padding: 0 10px;
  font: 275 22px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-13 {
    white-space: initial;
  }
}
.div-14 {
  color: #000;
  white-space: nowrap;
  justify-content: center;
  background-color: var(--, #fff);
  align-self: start;
  z-index: 1;
  margin: 27px 0 0 25px;
  padding: 0 10px;
  font: 275 22px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-14 {
    white-space: initial;
    margin-left: 10px;
  }
}
.div-15 {
  border-radius: 10px;
  border: 2px solid #2f3030;
  align-self: stretch;
  display: flex;
  height: 68px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-15 {
    max-width: 100%;
  }
}
.div-16 {
  align-self: start;
  display: flex;
  margin-top: 23px;
  gap: 8px;
}
.div-17 {
  border: 1px solid #000;
  background-color: var(--, #fff);
  display: flex;
  width: 20px;
  height: 20px;
  flex-direction: column;
  font: 400 22px Poppins, sans-serif;
}
.div-18 {
  color: #a1a1a1;
  align-self: start;
  flex-grow: 1;
  white-space: nowrap;


}
@media (max-width: 991px) {
  .div-18 {
    white-space: initial;
  }
}
.div-19 {
  color: #fff;
  text-align: center;
  white-space: nowrap;
  border-radius: 20px;
  background-color: #e54f70;
  align-self: center;
  margin-top: 83px;
  width: 275px;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  padding: 21px 60px;
  font: 700 24px Montserrat, sans-serif;
}
@media (max-width: 991px) {
  .div-19 {
    white-space: initial;
    margin-top: 40px;
    padding: 0 20px;
  }
}
.div-19:hover{
  background-color: #4fb0e5;
}
.div-20 {
  color: #e54f70;
  text-align: center;
  align-self: center;
  margin-top: 24px;
  width: 274px;
  font: 400 16px Poppins, sans-serif;
}
.div-20:hover{
 color: #4fb0e5;
}
</style>