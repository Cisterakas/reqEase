<script setup>


import { ref, computed } from "vue";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import Button from "primevue/button";
import Card from "primevue/card";
import axios from "axios";

const newUser = ref({
  student_school_id: "",
  first_name: "",
  middle_name: "",
  last_name: "",
  suffix: "",
  address: "",
  contact: "",
  last_school_year: "",
  degree: "",
  email: "",
  password: "",
});

const password = ref("");
const showPassword = ref(false);
const toggleVisibility = () => {
 showPassword.value = !showPassword.value;
 };
const loading = ref(false);
const error = ref(null);
const success = ref(false);

const errorMessage = ref("");
const submitButtonActive = ref(false);

const lastSchoolYears = computed(() => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = 2000; year <= currentYear; year++) {
    years.push(`${year}-${year + 1}`);
  }
  return years;
});

const checkEmailExists = async (email) => {
  try {
    const response = await axios.get(`https://reqease-fastapi.vercel.app/api/addusers/email-exists/?email=${email}`);
    return response.data.email_exists;
  } catch (error) {
    console.error('Error checking email existence:', error);
    return false;
  }
};

const checkStudentSchoolIdExists = async (studentSchoolId) => {
  try {
    const response = await axios.get(`https://reqease-fastapi.vercel.app/api/addusers/student-school-id-exists/?student_school_id=${studentSchoolId}`);
    return response.data.student_school_id_exists;
  } catch (error) {
    console.error('Error checking student school ID existence:', error);
    return false;
  }
};

const handleSubmit = async () => {
  const { student_school_id, first_name, middle_name, last_name, suffix, address, contact, last_school_year, degree, email, password } = newUser.value;

  if (!email || !password || !student_school_id || !first_name || !last_name || !address || !contact || !last_school_year || !degree) {
    errorMessage.value = "Please fill in all fields.";
    return;
  }

  const emailExists = await checkEmailExists(email);
  if (emailExists) {
    errorMessage.value = "Account with this email already exists.";
    submitButtonActive.value = false;
    return;
  }

  const studentSchoolIdExists = await checkStudentSchoolIdExists(student_school_id);
  if (studentSchoolIdExists) {
    errorMessage.value = "Student with this school ID already exists.";
    submitButtonActive.value = false;
    return;
  }
  errorMessage.value = "Click Submit button.";
  submitButtonActive.value = true; 
  submitForm();
};

const submitForm = async () => {
  try {
    const response = await axios.post('https://reqease-fastapi.vercel.app/api/addusers/', newUser.value, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    });
    errorMessage.value = "";
    success.value = true;
    submitButtonActive.value = true;
  } catch (error) {
    console.error('Error adding user:', error);
    errorMessage.value = 'Failed to add user. Please try again later.';
    submitButtonActive.value = false;
  }
};
</script>

<template>
  <div class="div">
    <div class="div-2">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d7275fb90f8a6cd60a17ca53efbc3e600eed5865e5a2dbfe275c032f46ee0f4e?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7275fb90f8a6cd60a17ca53efbc3e600eed5865e5a2dbfe275c032f46ee0f4e?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7275fb90f8a6cd60a17ca53efbc3e600eed5865e5a2dbfe275c032f46ee0f4e?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7275fb90f8a6cd60a17ca53efbc3e600eed5865e5a2dbfe275c032f46ee0f4e?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7275fb90f8a6cd60a17ca53efbc3e600eed5865e5a2dbfe275c032f46ee0f4e?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7275fb90f8a6cd60a17ca53efbc3e600eed5865e5a2dbfe275c032f46ee0f4e?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7275fb90f8a6cd60a17ca53efbc3e600eed5865e5a2dbfe275c032f46ee0f4e?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7275fb90f8a6cd60a17ca53efbc3e600eed5865e5a2dbfe275c032f46ee0f4e?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8515ad3f45c9e1f103078d22658c0c186f2a28769775bf293104644724f1e066?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                class="img"
              />
              <div class="div-9">
                <div class="div-10">Create New Account</div>
                <div class="div-11">
                  <div class="div-12">
                    <span
                      style="
                        font-family: Poppins, -apple-system, Roboto, Helvetica,
                          sans-serif;
                        font-weight: 600;
                      "
                      >Complete all required fields below before submitting your
                      newly created account<br
                    /></span>
                    <ul>
                      <li>
                        <span
                          style="
                            font-family: Poppins, -apple-system, Roboto,
                              Helvetica, sans-serif;
                            font-weight: 400;
                          "
                          >ALL fields must be filled out, unless they are marked
                          as <b>optional.</b>
                        </span>
                      </li>

                      <li>
                        <span
                          data-testid="message"
                          style="
                            font-family: Poppins, -apple-system, Roboto,
                              Helvetica, sans-serif;
                            font-weight: 400;
                          "
                          >Enter your name as a <b>STUDENT</b> during your stay
                          at the university.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <form @submit.prevent="addUser">
                  <form>
                    <div class="material-textfield1">
                    
                      <input placeholder=" " id="student_school_id" v-model="newUser.student_school_id"/>
                      <label for="schoolId">Student ID</label>
                    </div>
                    <div class="material-textfield">
                      <input placeholder=" " id="first_name" v-model="newUser.first_name"/>
                      <label for="firstName">First Name</label>
                    </div>
                    <div class="material-textfield">
                      <input placeholder=" " id="last_name" v-model="newUser.last_name"/>
                      <label for="lastName">Last Name</label>
                    </div>
                    <div class="material-textfield">
                      <input placeholder=" " id="middle_name" v-model="newUser.middle_name"/>
                      <label for="middleName">Middle Name</label>
                    </div>
                    <div class="material-textfield">
                      <input placeholder=" " id="suffix" v-model="newUser.suffix"/>
                      <label for="suffix">Suffix <b>(optional)</b></label>
                    </div>
                    <div class="material-textfield">
                      <input placeholder=" " id="address" v-model="newUser.address"/>
                      <label for="address">Address</label>
                    </div>
                    <div class="material-textfield">
                      <input placeholder=" " id="contact" v-model="newUser.contact"/>
                      <label for="contactNumber">Contact Number</label>
                    </div>
               
                    <div class="material-textfield">
  <select id="last_school_year" v-model="newUser.last_school_year">
    <option value="">Select Last School Year Attended</option>
    <!-- Generate options for last school year attended from 2000 to 2024 -->
    <!-- You can adjust the range as needed -->
    <option v-for="year in lastSchoolYears" :value="year">{{ year }}</option>
  </select>
  <label for="last_school_year">Last School Year Attended</label>
</div>
                    <div class="material-textfield">
  <select id="degree" v-model="newUser.degree">
    <option value="">Select Degree</option>
    <!-- Doctoral Degrees -->
    <optgroup label="Doctoral">
      <option value="Doctor of Philosophy in Education Major in Applied Linguistics">Doctor of Philosophy in Education Major in Applied Linguistics</option>
      <option value="Doctor of Philosophy in Education Major in Educational Leadership">Doctor of Philosophy in Education Major in Educational Leadership</option>
      <option value="Doctor of Philosophy in Education Major in Physical Education">Doctor of Philosophy in Education Major in Physical Education</option>
      <option value="Doctor of Philosophy in Pharmacy">Doctor of Philosophy in Pharmacy</option>
      <option value="Doctor in Business Management">Doctor in Business Management</option>
      <option value="Doctor in Business Management Specialized in Information Systems">Doctor in Business Management Specialized in Information Systems</option>
    </optgroup>
    <!-- Masteral Degrees -->
    <optgroup label="Masteral">
      <option value="Master in Business Administration (with Thesis)">Master in Business Administration (with Thesis)</option>
      <option value="Master in Business Administration (Non-Thesis)">Master in Business Administration (Non-Thesis)</option>
      <option value="Master in Business Administration for Health Professionals (Non-Thesis)">Master in Business Administration for Health Professionals (Non-Thesis)</option>
      <option value="Master in Information Systems">Master in Information Systems</option>
      <option value="Master in Information Technology">Master in Information Technology</option>
      <option value="Master in Counseling">Master in Counseling</option>
      <option value="Master in Pastoral Ministry Specialized in Pastoral Management (Non-Thesis)">Master in Pastoral Ministry Specialized in Pastoral Management (Non-Thesis)</option>
      <option value="Master of Arts in Education Major in English">Master of Arts in Education Major in English</option>
      <option value="Master of Arts in Education Major in Mathematics">Master of Arts in Education Major in Mathematics</option>
      <option value="Master of Arts in Education Major in Physical Education">Master of Arts in Education Major in Physical Education</option>
      <option value="Master of Arts in Education Major in Sociology">Master of Arts in Education Major in Sociology</option>
      <option value="Master of Arts in Education Major in Guidance & Counseling">Master of Arts in Education Major in Guidance & Counseling</option>
      <option value="Master of Arts in Education Major in Information Technology Integration">Master of Arts in Education Major in Information Technology Integration</option>
      <option value="Master of Arts in Educational Management">Master of Arts in Educational Management</option>
      <option value="Master of Arts in Elementary Education">Master of Arts in Elementary Education</option>
      <option value="Master of Arts in Religious Education">Master of Arts in Religious Education</option>
      <option value="Master of Arts in Values Education">Master of Arts in Values Education</option>
      <option value="Master of Arts in Teaching College Chemistry">Master of Arts in Teaching College Chemistry</option>
      <option value="Master of Arts in Teaching College Physics">Master of Arts in Teaching College Physics</option>
      <option value="Master of Science in Pharmacy">Master of Science in Pharmacy</option>
      <option value="Master of Science in Medical Technology / Medical Laboratory Science">Master of Science in Medical Technology / Medical Laboratory Science</option>
      <option value="Master of Arts in Engineering Education Major in Civil Engineering">Master of Arts in Engineering Education Major in Civil Engineering</option>
      <option value="Master of Arts in Engineering Education Major in Electronics & Communication Engineering">Master of Arts in Engineering Education Major in Electronics & Communication Engineering</option>
      <!-- Add more Masteral options here -->
    </optgroup>
    <!-- Undergraduate Studies Courses -->
    <optgroup label="Undergraduate Studies Courses">
      <option value="BS in Accountancy">BS in Accountancy</option>
      <option value="BS in Accounting Technology">BS in Accounting Technology</option>
      <option value="BS in Business Administration (Majors in: Financial Mgt., Marketing Mgt.)">BS in Business Administration (Majors in: Financial Mgt., Marketing Mgt.)</option>
      <option value="Bachelor in Elementary Education (Specialized in: Generalist, Pre-School Education, Special Education)">Bachelor in Elementary Education (Specialized in: Generalist, Pre-School Education, Special Education)</option>
      <option value="Bachelor in Secondary Education (Majors in: English, Filipino, Mathematics, Biological Science and MAPEH)">Bachelor in Secondary Education (Majors in: English, Filipino, Mathematics, Biological Science and MAPEH)</option>
      <option value="BS in Computer Science">BS in Computer Science</option>
      <option value="BS in Information Technology (Specialized in Computer Networks, Multimedia, Software Engineering)">BS in Information Technology (Specialized in Computer Networks, Multimedia, Software Engineering)</option>
      <option value="BS in Information Systems">BS in Information Systems</option>
      <option value="BS in Pharmacy">BS in Pharmacy</option>
      <option value="BS in Chemistry">BS in Chemistry</option>
      <option value="BS in Clinical Pharmacy">BS in Clinical Pharmacy</option>
      <option value="Bachelor in Music (Majors in: Piano and Music Education)">Bachelor in Music (Majors in: Piano and Music Education)</option>
      <option value="Bachelor in Medical Laboratory Science">Bachelor in Medical Laboratory Science</option>
      <option value="BS in Civil Engineering">BS in Civil Engineering</option>
      <option value="BS in Electronics and Communications Engineering">BS in Electronics and Communications Engineering</option>
      <option value="BS in Computer Engineering">BS in Computer Engineering</option>
      <option value="BS in Nursing">BS in Nursing</option>
      <option value="Bachelor of Arts (Majors in: Comm. Arts, Psychology, English)">Bachelor of Arts (Majors in: Comm. Arts, Psychology, English)</option>
      <option value="AB in Philosophy">AB in Philosophy</option>
      <option value="BS in Nutrition and Dietetics">BS in Nutrition and Dietetics</option>
      <option value="BS in HRM">BS in HRM</option>
      <!-- Add more Undergraduate options here -->
    </optgroup>
  </select>
  <label for="degree">Degree</label>
</div>
                    <div class="material-textfield1">
                      <input placeholder=" " id="email" v-model="newUser.email"/>           
                      <label for="email">Email Address</label>
                    </div>
                    <div class="material-textfield">
                      <input
                        id="password"
                        placeholder=" "
                        v-model="newUser.password"
                        :type="showPassword ? 'text' : 'password'"
                      />
                      <label for="password">Password</label>
                    </div>
                  </form>
                  <div class="div-16-">
                    <input
                      @click="toggleVisibility"
                      type="checkbox"
                      class="div-17-"
                    />{{ showPassword ? "Hide" : "Show" }} Password
                  </div>
                  <div style="color: red" class="error-message">
                    {{ errorMessage }}
                  </div>
                  <div v-if="loading">Adding user...</div>
                  <div v-if="error" style="color: red">{{ error }}</div>
                  <div v-if="success">User added successfully!</div>

                  <div class="div-33">
                    <router-link to="/login" type="button" class="div-34"
                      >Back</router-link
                    >
                    <button
                      id="create-button"
                      class="div-34"
                      @click="handleSubmit"
                      :disabled="submitButtonActive"
                    >
                      Create
                    </button>
                    <a
                      id="submit-button"
                      class="div-35"
                      href="#open-modal"
                      v-show="submitButtonActive"
                      type="submit"
                      >Submit</a
                    >
                  </div>
                </form>
                <div id="open-modal" class="modal-window">
                  <div>
                    <!-- Your Modal Content Goes Here -->
                    <div class="div-">
                      <div id="wait-message" class="div-2-">
                        <span
                          style="
                            font-family: Poppins, sans-serif;
                            font-weight: 400;
                            color: rgba(68, 75, 89, 1);
                          "
                          >Please wait for the <b>Registrar’s Approval</b> and
                          you will receive an
                        </span>
                        <span
                          style="
                            font-family: Poppins, sans-serif;
                            font-weight: 700;
                            color: rgba(229, 79, 112, 1);
                          "
                          >email</span
                        ><span
                          style="
                            font-family: Poppins, sans-serif;
                            font-weight: 400;
                            color: rgba(68, 75, 89, 1);
                          "
                        >
                          in order for you to LOG IN</span
                        >
                      </div>
                      <router-link
                        id="done-button"
                        to="/login"
                        type="button"
                        class="div-3-"
                        >DONE</router-link
                      >
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
.div-16- {
  align-self: start;
  display: flex;
  margin-top: 23px;
  gap: 8px;
}
.div-17- {
  border: 1px solid #000;
  background-color: var(--, #fff);
  display: flex;
  width: 20px;
  height: 20px;
  flex-direction: column;
  font: 400 22px Poppins, sans-serif;
}

.div- {
  display: flex;
  width: 100%;
  max-width: 684px;
  flex-direction: column;
  margin: 12px 0 4px;
}
@media (max-width: 991px) {
  .div {
    max-width: 100%;
  }
}
.div-2- {
  color: #e54f70;
  text-align: center;
  letter-spacing: 2.4px;
  font: 400 24px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-2- {
    max-width: 100%;
  }
}
.div-3- {
  color: #fff;
  text-align: center;
  letter-spacing: 2.4px;
  border-radius: 20px;
  background-color: #0c600a;
  align-self: center;
  margin-top: 39px;
  width: 275px;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  padding: 27px 60px;
  font: 700 24px Montserrat, sans-serif;
}
@media (max-width: 991px) {
  .div-3- {
    padding: 0 20px;
  }
}
.div-3-:hover {
  background-color: #073c07;
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

.material-textfield1 {
  position: relative;
  margin-top: 54px;
}

.material-textfield {
  position: relative;
  margin-top: 18px;
}

label {
  position: absolute;
  font-size: 1rem;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;

  transition: 0.1s ease-out;
  transform-origin: left top;
  pointer-events: none;

  color: #000;
  white-space: nowrap;
  justify-content: center;
  align-self: start;
  z-index: 1;
  margin: 0 27px 0 25px;
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
  transform: translateY(-50%) scale(0.9);
}
input:not(:placeholder-shown) + label {
  top: 0;
  transform: translateY(-50%) scale(0.9);
}


select{
  font: 275 22px Poppins, sans-serif;
  outline: none;

  color: #000;
  transition: 0.1s ease-out;

  border-radius: 10px;
  border: 2px solid #2f3030;
  align-self: stretch;
  display: flex;
  height: 68px;
  width: 671px;
}
select:focus {
  border-color: #e54f70;
}
select:focus + label {
  color: #e54f70;
  top: 0;
  transform: translateY(-50%) scale(0.9);
}
select:not(:placeholder-shown) + label {
  top: 0;
  transform: translateY(-50%) scale(0.9);
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
  min-height: auto;
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
  color: #fff;
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
  margin-bottom: -20px;
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
  min-height: 1543px;
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
  width: 670px;
  max-width: 100%;
  flex-direction: column;
  margin: 39px 76px 48px 0;
}
@media (max-width: 991px) {
  .div-9 {
    margin: 0 10px 40px 0;
  }
}
.div-10 {
  color: #000;
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
  align-self: stretch;
  z-index: 1;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  padding: 0 80px 0 20px;
}
@media (max-width: 991px) {
  .div-11 {
    max-width: 100%;
    padding-right: 20px;
  }
}
.div-12 {
  color: #636b78;
  font: 400 20px/20px Inter, sans-serif;
}
@media (max-width: 991px) {
  .div-12 {
    max-width: 100%;
  }
}
.div-13 {
  color: #000;
  white-space: nowrap;
  justify-content: center;
  background-color: var(--, #fff);
  align-self: start;
  margin-top: 47px;
  padding: 0 10px;
  font: 275 22px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-13 {
    white-space: initial;
    margin-top: 40px;
  }
}
.div-14 {
  border-radius: 10px;
  border: 2px solid #000;
  align-self: stretch;
  display: flex;
  margin-top: -13px;
  height: 67px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-14 {
    max-width: 100%;
  }
}
.div-15 {
  color: #000;
  white-space: nowrap;
  justify-content: center;
  background-color: var(--, #fff);
  align-self: start;
  z-index: 1;
  margin: 22px 0 0 20px;
  padding: 0 10px;
  font: 275 22px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-15 {
    white-space: initial;
    margin-left: 10px;
  }
}
.div-16 {
  border-radius: 10px;
  border: 2px solid #000;
  align-self: stretch;
  display: flex;
  height: 67px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-16 {
    max-width: 100%;
  }
}
.div-17 {
  color: #000;
  white-space: nowrap;
  justify-content: center;
  background-color: var(--, #fff);
  align-self: start;
  z-index: 1;
  margin: 22px 0 0 20px;
  padding: 0 10px;
  font: 275 22px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-17 {
    white-space: initial;
    margin-left: 10px;
  }
}
.div-18 {
  border-radius: 10px;
  border: 2px solid #000;
  align-self: stretch;
  display: flex;
  height: 67px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-18 {
    max-width: 100%;
  }
}
.div-19 {
  color: #000;
  white-space: nowrap;
  justify-content: center;
  background-color: var(--, #fff);
  align-self: start;
  z-index: 1;
  margin: 22px 0 0 19px;
  padding: 0 10px;
  font: 275 22px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-19 {
    white-space: initial;
    margin-left: 10px;
  }
}
.div-20 {
  border-radius: 10px;
  border: 2px solid #000;
  align-self: stretch;
  display: flex;
  height: 67px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-20 {
    max-width: 100%;
  }
}
.div-21 {
  border-radius: 10px;
  border: 2px solid #000;
  align-self: stretch;
  display: flex;
  margin-top: 36px;
  flex-direction: column;
  align-items: start;
  padding: 0 60px 50px 19px;
}
@media (max-width: 991px) {
  .div-21 {
    max-width: 100%;
    padding-right: 20px;
  }
}
.div-22 {
  color: #000;
  white-space: nowrap;
  justify-content: center;
  background-color: var(--, #fff);
  z-index: 1;
  margin-top: -11px;
  padding: 0 10px;
  font: 275 22px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-22 {
    white-space: initial;
  }
}
.div-23 {
  color: #000;
  white-space: nowrap;
  justify-content: center;
  background-color: var(--, #fff);
  align-self: start;
  z-index: 1;
  margin: 22px 0 0 19px;
  padding: 0 10px;
  font: 275 22px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-23 {
    white-space: initial;
    margin-left: 10px;
  }
}
.div-24 {
  border-radius: 10px;
  border: 2px solid #000;
  align-self: stretch;
  display: flex;
  height: 67px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-24 {
    max-width: 100%;
  }
}
.div-25 {
  color: #000;
  white-space: nowrap;
  justify-content: center;
  background-color: var(--, #fff);
  align-self: start;
  z-index: 1;
  margin: 22px 0 0 19px;
  padding: 0 10px;
  font: 275 22px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-25 {
    white-space: initial;
    margin-left: 10px;
  }
}
.div-26 {
  border-radius: 10px;
  border: 2px solid #000;
  align-self: stretch;
  display: flex;
  height: 67px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-26 {
    max-width: 100%;
  }
}
.div-27 {
  color: #000;
  white-space: nowrap;
  justify-content: center;
  background-color: var(--, #fff);
  align-self: start;
  z-index: 1;
  margin: 22px 0 0 19px;
  padding: 0 10px;
  font: 275 22px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-27 {
    white-space: initial;
    margin-left: 10px;
  }
}
.div-28 {
  border-radius: 10px;
  border: 2px solid #000;
  align-self: stretch;
  display: flex;
  height: 67px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-28 {
    max-width: 100%;
  }
}
.div-29 {
  color: #000;
  white-space: nowrap;
  justify-content: center;
  background-color: var(--, #fff);
  align-self: start;
  z-index: 1;
  margin: 22px 0 0 19px;
  padding: 0 10px;
  font: 275 22px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-29 {
    white-space: initial;
    margin-left: 10px;
  }
}
.div-30 {
  border-radius: 10px;
  border: 2px solid #000;
  align-self: stretch;
  display: flex;
  height: 67px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-30 {
    max-width: 100%;
  }
}
.div-31 {
  color: #000;
  white-space: nowrap;
  justify-content: center;
  background-color: var(--, #fff);
  align-self: start;
  z-index: 1;
  margin: 22px 0 0 19px;
  padding: 0 10px;
  font: 275 22px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-31 {
    white-space: initial;
    margin-left: 10px;
  }
}
.div-32 {
  border-radius: 10px;
  border: 2px solid #000;
  align-self: stretch;
  display: flex;
  height: 67px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-32 {
    max-width: 100%;
  }
}
.div-33 {
  align-self: stretch;
  display: flex;
  margin-top: 51px;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-33 {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
}
.div-34 {
  color: #e54f70;
  text-align: center;
  white-space: nowrap;
  border-radius: 20px;
  border: 1px solid
    rgba(229.00000154972076, 79.00000289082527, 112.000000923872, 1);
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 25px 60px;
  font: 700 24px Montserrat, sans-serif;
}
@media (max-width: 991px) {
  .div-34 {
    white-space: initial;
    padding: 0 20px;
  }
}
.div-34:hover {
  color: #fff;
  background-color: #e54f70;
}
.div-35 {
  color: #fff;
  text-align: center;
  white-space: nowrap;
  border-radius: 20px;
  background-color: rgba(
    229.00000154972076,
    79.00000289082527,
    112.000000923872,
    1
  );
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 25px 60px;
  font: 700 24px Montserrat, sans-serif;
}
@media (max-width: 991px) {
  .div-35 {
    white-space: initial;
    padding: 0 20px;
  }
}
.div-35:hover {
  color: #fff;
  background-color: #4fb0e5;
}
</style>
