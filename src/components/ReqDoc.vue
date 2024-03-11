<script setup>
import newNavbar from './newNavbar.vue';
import ApplicationNavigationBar from './ApplicationNavigationBar.vue';
import Footer from './Footer.vue';

import { ref } from 'vue';

const counters = ref([0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);

const limit = 2; // Define your limit here

const increment = (index) => {
  if (counters.value[index] < limit) {
    counters.value[index]++;
  }
};

const decrement = (index) => {
  if (counters.value[index] > 0) {
    counters.value[index]--;
  }
};
</script>


<template>
  <newNavbar/>
     <ApplicationNavigationBar/>
    <div class="div">
      <div class="div-2">   
        <div class="div-3">
            <router-link to="/" type="button">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d60bd5e6c13b359f29bfa89f05071f1092c5bdc8b6eb63cc4c3dc2eef1800195?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
            class="img"
          />
        </router-link>
          <div class="div-4">
            <div class="div-5">PROCESSING OF DOCUMENTS</div>
            <div class="div-6">
              <div class="div-7">
                <div class="div-8">
                  <span
                    style="
                      font-family: Poppins, -apple-system, Roboto, Helvetica,
                        sans-serif;
                      font-weight: 400;
                    "
                    >Note: </span
                  ><span
                    style="
                      font-family: Poppins, -apple-system, Roboto, Helvetica,
                        sans-serif;
                      font-weight: 600;
                    "
                    >PROCESSING OF DOCUMENTS WILL START UPON RECEIVING OF THE
                    OFFICIAL RECEIPT FROM THE CASHIER
                  </span>
                </div>
                <div class="div-9">
                  PROCESSING OF DOCUMENTS WILL START UPON RECEIVING OF THE
                  OFFICIAL RECEIPT FROM THE CASHIER
                </div>
                <div class="div-10">
                  <div class="div-11">Documents</div>
                  <div class="div-12">
                    <div class="div-13">No. of Days Processing (online)</div>
                    <div class="div-14">No. of Days Processing (offline)</div>
                  </div>
                </div>
                
                <div class="div-19">
                  <div class="div-20">
                    Certification, Authentication, Verification (CAV)
                  </div>
                  <div class="div-21">1 month and 15 working days</div>
                  <div class="div-22">30 working days</div>
                </div>
                <div class="div-19">
                  <div class="div-20">
                    Transcription of Records and Honorable Dismissal
                  </div>
                  <div class="div-21">14 working days</div>
                  <div class="div-22">7 working days</div>
                </div>
                <div class="div-19">
                  <div class="div-20">
                    Related Learning Experience (RLE)
                  </div>
                  <div class="div-21">30 working days</div>
                  <div class="div-22">20 working days</div>
                </div>
                <div class="div-19">
                  <div class="div-20">
                    Certificates
                  </div>
                  <div class="div-21">6 working days</div>
                  <div class="div-22">3 working days</div>
                </div>
                <div class="div-19">
                  <div class="div-20">
                    Verification (CGNS, WES, NNAS, etc.)
                  </div>
                  <div class="div-21">30 working days</div>
                  <div class="div-22">20 working days</div>
                </div>
                <div class="div-19">
                  <div class="div-20">
                    Authentication (Certified True Copy)
                  </div>
                  <div class="div-21">4 working days</div>
                  <div class="div-22">2 working days</div>
                </div>


               
              </div>
            </div>
            <div class="div-40">REQUEST DOCUMENT</div>
            <div class="div-41">
              <div class="div-42">
                <div class="div-43">
                  <div class="div-44">
                    <div class="div-45">Document Code</div>
                    <div class="div-46">Document Name</div>
                  </div>
                  <div class="div-47">
                    <div class="div-48">Document Fee</div>
                    <div class="div-49">No. of Copies</div>
                  </div>
                </div>
            

                <div class="div-58">
                  <div class="div-59">1</div>
                  <div class="div-60">
                    Authentication
                  </div>
                  <div class="div-61">30.00 / page</div>
                  <div class="div-62">
                    
                    <img
                      type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10d8e42c80f938ff54ce1bdd994e95da3006eb959e2388fb76ad9c9a3e9d679?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-4"
                      @click="decrement(0)"
                    />
                    <div class="div-63">{{ counters[0] }}</div>
                    <img
                      type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                      @click="increment(0)"
                    />
                  </div>
                </div>




                <div class="div-58">
                  <div class="div-59">2</div>
                  <div class="div-60">
                    CAV or Certificate, Authentication,<br />Verification (Local /
                    DFA)
                  </div>
                  <div class="div-61">370.00 / set</div>
                  <div class="div-62">
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10d8e42c80f938ff54ce1bdd994e95da3006eb959e2388fb76ad9c9a3e9d679?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-4"
                      @click="decrement(1)"
                    />
                    <div class="div-63">{{ counters[1] }}</div>
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                      @click="increment(1)"
                    />
                  </div>
                </div>

                <div class="div-58">
                  <div class="div-59">3</div>
                  <div class="div-60">
                    Certificate of English as Mediumof Instruction
                  </div>
                  <div class="div-61">60.00 / copy</div>
                  <div class="div-62">
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10d8e42c80f938ff54ce1bdd994e95da3006eb959e2388fb76ad9c9a3e9d679?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-4"
                      @click="decrement(2)"
                    />
                    <div class="div-63">{{ counters[2] }}</div>
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                      @click="increment(2)"
                    />
                  </div>
                </div>

                <div class="div-58">
                  <div class="div-59">4</div>
                  <div class="div-60">
                    Certificate of Enrollment
                  </div>
                  <div class="div-61">60.00 / copy</div>
                  <div class="div-62">
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10d8e42c80f938ff54ce1bdd994e95da3006eb959e2388fb76ad9c9a3e9d679?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-4"
                      @click="decrement(3)"
                    />
                    <div class="div-63">{{ counters[3] }}</div>
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                      @click="increment(3)"
                    />
                  </div>
                </div>

                <div class="div-58">
                  <div class="div-59">5</div>
                  <div class="div-60">
                    Certificate of General WeightedAverage (GWA)
                  </div>
                  <div class="div-61">60.00 / copy</div>
                  <div class="div-62">
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10d8e42c80f938ff54ce1bdd994e95da3006eb959e2388fb76ad9c9a3e9d679?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-4"
                      @click="decrement(4)"
                    />
                    <div class="div-63">{{ counters[4] }}</div>
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                      @click="increment(4)"
                    />
                  </div>
                </div>
      
                <div class="div-58">
                  <div class="div-59">6</div>
                  <div class="div-60">
                    Certificate of Government Recognition of the Program
                  </div>
                  <div class="div-61">60.00 / copy</div>
                  <div class="div-62">
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10d8e42c80f938ff54ce1bdd994e95da3006eb959e2388fb76ad9c9a3e9d679?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-4"
                      @click="decrement(5)"
                    />
                    <div class="div-63">{{ counters[5] }}</div>
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                      @click="increment(5)"
                    />
                  </div>
                </div>

                <div class="div-58">
                  <div class="div-59">7</div>
                  <div class="div-60">
                    Certificate of Grades
                  </div>
                  <div class="div-61">60.00 / copy</div>
                  <div class="div-62">
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10d8e42c80f938ff54ce1bdd994e95da3006eb959e2388fb76ad9c9a3e9d679?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-4"
                      @click="decrement(6)"
                    />
                    <div class="div-63">{{ counters[6] }}</div>
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                      @click="increment(6)"
                    />
                  </div>
                </div>

                <div class="div-58">
                  <div class="div-59">8</div>
                  <div class="div-60">
                    Certificate of Grades for Written Comprehensive Examination
                  </div>
                  <div class="div-61">60.00 / copy</div>
                  <div class="div-62">
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10d8e42c80f938ff54ce1bdd994e95da3006eb959e2388fb76ad9c9a3e9d679?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-4"
                      @click="decrement(7)"
                    />
                    <div class="div-63">{{ counters[7] }}</div>
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                      @click="increment(7)"
                    />
                  </div>
                </div>

                <div class="div-58">
                  <div class="div-59">9</div>
                  <div class="div-60">
                    Certificate of Grading System
                  </div>
                  <div class="div-61">60.00 / copy</div>
                  <div class="div-62">
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10d8e42c80f938ff54ce1bdd994e95da3006eb959e2388fb76ad9c9a3e9d679?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-4"
                      @click="decrement(8)"
                    />
                    <div class="div-63">{{ counters[8] }}</div>
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                      @click="increment(8)"
                    />
                  </div>
                </div>
               
                <div class="div-58">
                  <div class="div-59">10</div>
                  <div class="div-60">
                    Certificate of Graduation / Degree Completion
                  </div>
                  <div class="div-61">60.00 / copy</div>
                  <div class="div-62">
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10d8e42c80f938ff54ce1bdd994e95da3006eb959e2388fb76ad9c9a3e9d679?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-4"
                      @click="decrement(9)"
                    />
                    <div class="div-63">{{ counters[9] }}</div>
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                      @click="increment(9)"
                    />
                  </div>
                </div>
                <div class="div-58">
                  <div class="div-59">11</div>
                  <div class="div-60">
                    Certificate of Latin Honor
                  </div>
                  <div class="div-61">60.00 / copy</div>
                  <div class="div-62">
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10d8e42c80f938ff54ce1bdd994e95da3006eb959e2388fb76ad9c9a3e9d679?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-4"
                      @click="decrement(10)"
                    />
                    <div class="div-63">{{ counters[10] }}</div>
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                      @click="increment(10)"
                    />
                  </div>
                </div>
               
               
                <div class="div-58">
                  <div class="div-59">12</div>
                  <div class="div-60">
                    Certificate of Units Earned
                  </div>
                  <div class="div-61">60.00 / copy</div>
                  <div class="div-62">
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10d8e42c80f938ff54ce1bdd994e95da3006eb959e2388fb76ad9c9a3e9d679?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-4"
                      @click="decrement(11)"
                    />
                    <div class="div-63">{{ counters[11] }}</div>
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                      @click="increment(11)"
                    />
                  </div>
                </div>


                <div class="div-58">
                  <div class="div-59">13</div>
                  <div class="div-60">
                    Certificate True Copy of Special Order (5.0)
                  </div>
                  <div class="div-61">50.00 / copy</div>
                  <div class="div-62">
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10d8e42c80f938ff54ce1bdd994e95da3006eb959e2388fb76ad9c9a3e9d679?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-4"
                      @click="decrement(12)"
                    />
                    <div class="div-63">{{ counters[12] }}</div>
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                      @click="increment(12)"
                    />
                  </div>
                </div>


                
                <div class="div-58">
                  <div class="div-59">14</div>
                  <div class="div-60">
                    Certificate of Academic Requirements (CAR)
                  </div>
                  <div class="div-61">60.00 / copy</div>
                  <div class="div-62">
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10d8e42c80f938ff54ce1bdd994e95da3006eb959e2388fb76ad9c9a3e9d679?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-4"
                      @click="decrement(13)"
                    />
                    <div class="div-63">{{ counters[13] }}</div>
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                      @click="increment(13)"
                    />
                  </div>
                </div>
        
 
  
                <div class="div-58">
                  <div class="div-59">15</div>
                  <div class="div-60">
                    Course Description
                  </div>
                  <div class="div-61">60.00 / copy</div>
                  <div class="div-62">
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10d8e42c80f938ff54ce1bdd994e95da3006eb959e2388fb76ad9c9a3e9d679?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-4"
                      @click="decrement(14)"
                    />
                    <div class="div-63">{{ counters[14] }}</div>
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                      @click="increment(14)"
                    />
                  </div>
                </div>

                
                <div class="div-58">
                  <div class="div-59">16</div>
                  <div class="div-60">
                    <span
                      style="
                        font-family: Poppins, -apple-system, Roboto, Helvetica,
                          sans-serif;
                        font-weight: 400;
                      "
                      >Diploma </span
                    ><span
                      style="
                        font-family: Poppins, -apple-system, Roboto, Helvetica,
                          sans-serif;
                        font-weight: 700;
                      "
                      >(ISSUED ONLY ONCE AND SUBJECT TO VERIFICATION)</span
                    >
                  </div>
                  <div class="div-61">400.00 / copy</div>
                  <div class="div-62">
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10d8e42c80f938ff54ce1bdd994e95da3006eb959e2388fb76ad9c9a3e9d679?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-4"
                      @click="decrement(15)"
                    />
                    <div class="div-63">{{ counters[15] }}</div>
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                      @click="increment(15)"
                    />
                  </div>
                </div>


                <div class="div-58">
                  <div class="div-59">17</div>
                  <div class="div-60">
                    Diploma (Second Copy) - In case the Diploma is lost or whatever reason, you
are required to submit a notarized <b>Affidavit 
of Loss of Explanation</b> justifying the request.In case of damaged diploma, the samemust be surrendered to UIC for 
appropriate disposition.
                  </div>
                  <div class="div-61">400.00 / copy</div>
                  <div class="div-62">
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10d8e42c80f938ff54ce1bdd994e95da3006eb959e2388fb76ad9c9a3e9d679?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-4"
                      @click="decrement(16)"
                    />
                    <div class="div-63">{{ counters[16] }}</div>
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                      @click="increment(16)"
                    />
                  </div>
                </div>



                <div class="div-58">
                  <div class="div-59">18</div>
                  <div class="div-60">
                    Honorable Dismissal <b>(ISSUED ONLY ONCE AND SUBJECT TO VERIFICATION)</b>
                  </div>
                  <div class="div-61">300.00 / set</div>
                  <div class="div-62">
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10d8e42c80f938ff54ce1bdd994e95da3006eb959e2388fb76ad9c9a3e9d679?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-4"
                      @click="decrement(17)"
                    />
                    <div class="div-63">{{ counters[17] }}</div>
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                      @click="increment(17)"
                    />
                  </div>
                </div>

                <div class="div-58">
                  <div class="div-59">19</div>
                  <div class="div-60">
                    Letter of No Objection
                  </div>
                  <div class="div-61">60.00 / copy</div>
                  <div class="div-62">
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10d8e42c80f938ff54ce1bdd994e95da3006eb959e2388fb76ad9c9a3e9d679?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-4"
                      @click="decrement(18)"
                    />
                    <div class="div-63">{{ counters[18] }}</div>
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                      @click="increment(18)"
                    />
                  </div>
                </div>

                <div class="div-58">
                  <div class="div-59">20</div>
                  <div class="div-60">
                    Official Transcript of Records
                  </div>
                  <div class="div-61">250.00 / set</div>
                  <div class="div-62">
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10d8e42c80f938ff54ce1bdd994e95da3006eb959e2388fb76ad9c9a3e9d679?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-4"
                      @click="decrement(19)"
                    />
                    <div class="div-63">{{ counters[19] }}</div>
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                      @click="increment(19)"
                    />
                  </div>
                </div>
           
                <div class="div-58">
                  <div class="div-59">21</div>
                  <div class="div-60">
                    Related Learning Experience (RLE)
                  </div>
                  <div class="div-61">150.00 / copy</div>
                  <div class="div-62">
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e10d8e42c80f938ff54ce1bdd994e95da3006eb959e2388fb76ad9c9a3e9d679?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-4"
                      @click="decrement(20)"
                    />
                    <div class="div-63">{{ counters[20] }}</div>
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                      @click="increment(20)"
                    />
                  </div>
                </div>

     
             
                <div class="div-196">Purposes</div>
                
                <textarea class="div-197">

</textarea>
              </div>
            </div>
            <div class="div-198">
              <div class="div-199">
                <span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                  "
                  >In case you have been granted an Honorable Dismissal and
                  COMPLIED, meaning you have been issued an Official Transcript of
                  Records with Remarks &quot;Granted Transfer Credentials&quot;
                  (Copy Good for that particular school you transferred in after
                  leaving UIC), secure a</span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                  "
                >
                  Letter of No Objection </span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                  "
                  >from that school in order to process your request for
                  Transcript of Records.<br
                /></span>
              </div>
            </div>
            <div class="div-200">Page 1 of 3</div>
          </div>
        </div>
        <router-link to="/shipping" type="button" class="div-391">Next</router-link>
      </div>


      
      <!-- <router-link to="/shipping" type="button" class="div-201">Next</router-link> -->
      
      
    </div>
    
    <Footer/>
  </template>
  
  
  
  <style scoped>
    .div-197 {
    
    font: 275 15px Poppins, sans-serif;
    border-radius: 10px;
    border: 1px solid #464646;
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    height: 106px;
    flex-direction: column;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 991px) {
    .div-197 {
      max-width: 100%;
    }
  }


.material-textfield1 {
  position: relative;  
  margin-top: 50px;
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
  font: 275 15px Poppins, sans-serif;
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

  .div-391:hover{
  background-color: #084f06;
}
.div-391 {
  color:  #fff;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #0c600a;
  align-self: end;
  margin-top: 33px;
  width: 217px;
  max-width: 100%;
  padding: 9px 60px;
  font: 800 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-391 {
    white-space: initial;
    padding: 0 20px;
  }
}

  .div {
    background-color: var(--, #fff);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px 60px;
  }
  @media (max-width: 991px) {
    .div {
      padding: 0 20px;
    }
  }
  .div-2 {
    display: flex;
    width: 100%;
    max-width: 1508px;
    flex-direction: column;
  }
  @media (max-width: 991px) {
    .div-2 {
      max-width: 100%;
    }
  }
  .div-3 {
    z-index: 1;
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-3 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .img {
    aspect-ratio: 1.17;
    object-fit: contain;
    object-position: center;
    width: 69px;
    overflow: hidden;
    max-width: 100%;
  }
  .div-4 {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
  }
  @media (max-width: 991px) {
    .div-4 {
      max-width: 100%;
    }
  }
  .div-5 {
    color: #eff3f3;
    text-align: center;
    letter-spacing: 8.58px;
    max-width: auto;
    justify-content: center;
    align-items: center;
    box-shadow: 8px 3px 9px 0px rgba(0, 0, 0, 0.25);
    background-color: #e54f70;
    align-self: stretch;
    padding: 14px 60px;
    font: 700 22px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-5 {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-6 {
    background-color: rgba(
      241.18749797344208,
      241.18749797344208,
      241.18749797344208,
      0.28999999165534973
    );
    border: 1px solid
      rgba(189.12500202655792, 189.12500202655792, 189.12500202655792, 1);
    box-shadow: 8px 18px 23.299999237060547px rgba(0, 0, 0, 0.25);
    align-self: stretch;
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 34px 60px;
  }
  @media (max-width: 991px) {
    .div-6 {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-7 {
    display: flex;
    width: 1080px;
    max-width: 100%;
    flex-direction: column;
  }
  .div-8 {
    color: #000;
    font: 400 10px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-8 {
      max-width: 100%;
    }
  }
  .div-9 {
    color:  #fff;
    text-align: center;
    max-width: auto;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: #464646;
    margin-top: 22px;
    padding: 14px 60px;
    font: 700 15px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-9 {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-10 {
    border: 1px solid #464646;
    background-color: rgba(97, 97, 97, 0.67);
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
    gap: 58px;
    padding: 16px 42px 16px 52px;
  }
  @media (max-width: 991px) {
    .div-10 {
      max-width: 100%;
      flex-wrap: wrap;
      padding: 0 20px;  
    }
  }
  .div-11 {
    color:  #fff;
    font: 600 14px Poppins, sans-serif;
  }
  .div-12 {
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 70px;
  }
  @media (max-width: 991px) {
    .div-12 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .div-13 {
    color:  #fff;
    text-align: center;
    font: 600 14px Poppins, sans-serif;
  }
  .div-14 {
    color:  #fff;
    text-align: center;
    width: 240px;
    font: 600 14px Poppins, sans-serif;
  }
  .div-15 {
    border: 1px solid #464646;
    background-color: var(--, #fff);
    display: flex;
    margin-top: 13px;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    padding: 14px 80px 14px 62px;
  }
  @media (max-width: 991px) {
    .div-15 {
      max-width: 100%;
      flex-wrap: wrap;
      padding: 0 20px;
    }
  }
  .div-16 {
    color: #312828;
    flex-grow: 1;
    flex-basis: auto;
    font: 400 12px Poppins, sans-serif;
  }
  .div-17 {
    color: #312828;
    font: 400 12px Poppins, sans-serif;
  }
  .div-18 {
    color: #312828;
    margin-top: 5px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-19 {
    border: 1px solid #464646;
    background-color: var(--, #fff);
    display: flex;
    margin-top: 9px;
    justify-content: space-between;
    gap: 20px;
    padding: 9px 114px 9px 51px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 991px) {
    .div-19 {
      max-width: 100%;
      flex-wrap: wrap;
      padding: 0 20px;
    }
  }
  .div-20 {
    color: #312828;
    width: 300px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-21 {
    width: 200px;
    color: #312828;
    align-self: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-22 {
    width: 100px;
    color: #312828;
    align-self: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-23 {
    border: 1px solid #464646;
    background-color: var(--, #fff);
    display: flex;
    margin-top: 9px;
    justify-content: space-between;
    gap: 20px;
    padding: 16px 80px 16px 62px;
  }
  @media (max-width: 991px) {
    .div-23 {
      max-width: 100%;
      flex-wrap: wrap;
      padding: 0 20px;
    }
  }
  .div-24 {
    color: #312828;
    width: 302px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-25 {
    color: #312828;
    align-self: start;
    font: 400 12px Poppins, sans-serif;
  }
  .div-26 {
    color: #312828;
    align-self: start;
    font: 400 12px Poppins, sans-serif;
  }
  .div-27 {
    border: 1px solid #464646;
    background-color: var(--, #fff);
    display: flex;
    margin-top: 9px;
    width: 100%;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    padding: 17px 80px 17px 62px;
  }
  @media (max-width: 991px) {
    .div-27 {
      max-width: 100%;
      flex-wrap: wrap;
      padding: 0 20px;
    }
  }
  .div-28 {
    color: #312828;
    font: 400 12px Poppins, sans-serif;
  }
  .div-29 {
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-29 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .div-30 {
    color: #312828;
    font: 400 12px Poppins, sans-serif;
  }
  .div-31 {
    color: #312828;
    font: 400 12px Poppins, sans-serif;
  }
  .div-32 {
    border: 1px solid #464646;
    background-color: var(--, #fff);
    display: flex;
    margin-top: 9px;
    justify-content: space-between;
    gap: 20px;
    padding: 16px 80px 16px 62px;
  }
  @media (max-width: 991px) {
    .div-32 {
      max-width: 100%;
      flex-wrap: wrap;
      padding: 0 20px;
    }
  }
  .div-33 {
    color: #312828;
    width: 302px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-34 {
    color: #312828;
    align-self: start;
    font: 400 12px Poppins, sans-serif;
  }
  .div-35 {
    color: #312828;
    align-self: start;
    font: 400 12px Poppins, sans-serif;
  }
  .div-36 {
    border: 1px solid #464646;
    background-color: var(--, #fff);
    display: flex;
    margin-top: 9px;
    justify-content: space-between;
    gap: 20px;
    padding: 16px 80px 16px 62px;
  }
  @media (max-width: 991px) {
    .div-36 {
      max-width: 100%;
      flex-wrap: wrap;
      padding: 0 20px;
    }
  }
  .div-37 {
    color: #312828;
    width: 302px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-38 {
    color: #312828;
    align-self: start;
    font: 400 12px Poppins, sans-serif;
  }
  .div-39 {
    color: #312828;
    align-self: start;
    font: 400 12px Poppins, sans-serif;
  }
  .div-40 {
    color: #eff3f3;
    text-align: center;
    letter-spacing: 8.58px;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    box-shadow: 8px 3px 9px 0px rgba(0, 0, 0, 0.25);
    background-color: #e54f70;
    align-self: stretch;
    margin-top: 35px;
    padding: 14px 60px;
    font: 700 22px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-40 {
      white-space: initial;
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-41 {
    background-color: rgba(
      241.18749797344208,
      241.18749797344208,
      241.18749797344208,
      0.28999999165534973
    );
    border: 1px solid
      rgba(189.12500202655792, 189.12500202655792, 189.12500202655792, 1);
    box-shadow: 8px 18px 23.299999237060547px rgba(0, 0, 0, 0.25);
    align-self: stretch;
    display: flex;
    margin-top: 11px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 31px 60px;
  }
  @media (max-width: 991px) {
    .div-41 {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-42 {
    display: flex;
    width: 1080px;
    max-width: 100%;
    flex-direction: column;
  }
  .div-43 {
    border: 1px solid #464646;
    background-color: #616161;
    align-self: stretch;
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    padding: 16px 91px 16px 37px;
  }
  @media (max-width: 991px) {
    .div-43 {
      max-width: 100%;
      flex-wrap: wrap;
      padding: 0 20px;
    }
  }
  .div-44 {
    display: flex;
    justify-content: space-between;
    gap: 120px;
  }
  .div-45 {
    color:  #fff;
    text-align: center;
    font: 700 15px Poppins, sans-serif;
  }
  .div-46 {
    color:  #fff;
    text-align: center;
    font: 700 15px Poppins, sans-serif;
  }
  .div-47 {
    align-self: stretch;
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 120px;
  }
  .div-48 {
    color:  #fff;
    text-align: center;
    font: 700 15px Poppins, sans-serif;
  }
  .div-49 {
    color:  #fff;
    text-align: center;
    align-self: stretch;
    font: 700 15px Poppins, sans-serif;
  }
  .div-50 {
    align-items: center;
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    margin-top: 14px;
    width: 100%;
    justify-content: space-between;
    gap: 20px;
    padding: 7px 61px 7px 15px;
  }
  @media (max-width: 991px) {
    .div-50 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-51 {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin: auto 0;
  }
  .div-52 {
    color: #000;
    font: 400 12px Poppins, sans-serif;
  }
  .div-53 {
    color: #000;
    font: 400 12px Poppins, sans-serif;
  }
  .div-54 {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .div-55 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-56 {
    align-items: center;
    border-radius: 5px;
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 1px 25px 1px 0;
  }
  @media (max-width: 991px) {
    .div-56 {
      justify-content: center;
      padding-right: 20px;
    }
  }
  .img-2 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-57 {
    color: #000;
    margin: auto 0;
    font: 400 15px Poppins, sans-serif;
  }
  .img-3 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-58 {
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    margin-top: 7px;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    padding: 7px 61px 7px 90px;
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 991px) {
    .div-58 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-59 {
    width: 15px;
    color: #000;
    align-self: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-60 {
    color: #000;
    align-self: center;
    width: 350px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-61 {
    align-self: center;
    width: 100px;
    color: #000;
    
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-62 {
    align-items: center;
    border-radius: 5px;
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 1px 25px 1px 0;
    width: 140px;
  }
  @media (max-width: 991px) {
    .div-62 {
      justify-content: center;
      padding-right: 20px;
    }
  }
  .img-4 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-63 {
    color: #000;
    margin: auto 0;
    font: 400 15px Poppins, sans-serif;
  }
  .img-5 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-64 {
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    margin-top: 7px;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    padding: 7px 61px 7px 16px;
  }
  @media (max-width: 991px) {
    .div-64 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-65 {
    color: #000;
    align-self: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-66 {
    color: #000;
    align-self: center;
    width: 350px;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-67 {
    color: #000;
    align-self: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-68 {
    align-items: center;
    border-radius: 5px;
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 1px 25px 1px 0;
  }
  @media (max-width: 991px) {
    .div-68 {
      justify-content: center;
      padding-right: 20px;
    }
  }
  .img-6 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-69 {
    color: #000;
    margin: auto 0;
    font: 400 15px Poppins, sans-serif;
  }
  .img-7 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-70 {
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    margin-top: 7px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 7px 61px 7px 16px;
  }
  @media (max-width: 991px) {
    .div-70 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-71 {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    margin: auto 0;
  }
  .div-72 {
    color: #000;
    font: 400 12px Poppins, sans-serif;
  }
  .div-73 {
    color: #000;
    margin-top: 4px;
    width: 376px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-74 {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .div-75 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-76 {
    align-items: center;
    border-radius: 5px;
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 1px 25px 1px 0;
  }
  @media (max-width: 991px) {
    .div-76 {
      justify-content: center;
      padding-right: 20px;
    }
  }
  .img-8 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-77 {
    color: #000;
    margin: auto 0;
    font: 400 15px Poppins, sans-serif;
  }
  .img-9 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-78 {
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    margin-top: 7px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 6px 61px 6px 16px;
  }
  @media (max-width: 991px) {
    .div-78 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-79 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-80 {
    color: #000;
    align-self: start;
    width: 350px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-81 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-82 {
    align-items: center;
    border-radius: 5px;
    background-color: var(--, #fff);
    align-self: start;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 1px 25px 1px 0;
  }
  @media (max-width: 991px) {
    .div-82 {
      justify-content: center;
      padding-right: 20px;
    }
  }
  .img-10 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-83 {
    color: #000;
    margin: auto 0;
    font: 400 15px Poppins, sans-serif;
  }
  .img-11 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-84 {
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    margin-top: 7px;
    width: 100%;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    padding: 6px 61px 6px 16px;
  }
  @media (max-width: 991px) {
    .div-84 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-85 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .div-86 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-87 {
    color: #000;
    align-self: stretch;
    width: 350px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-88 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .div-89 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-90 {
    align-items: center;
    border-radius: 5px;
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 1px 25px 1px 0;
  }
  @media (max-width: 991px) {
    .div-90 {
      justify-content: center;
      padding-right: 20px;
    }
  }
  .img-12 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-91 {
    color: #000;
    margin: auto 0;
    font: 400 15px Poppins, sans-serif;
  }
  .img-13 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-92 {
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    margin-top: 7px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 7px 61px 7px 16px;
  }
  @media (max-width: 991px) {
    .div-92 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-93 {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    margin: auto 0;
  }
  .div-94 {
    color: #000;
    font: 400 12px Poppins, sans-serif;
  }
  .div-95 {
    color: #000;
    margin-top: 4px;
    width: 376px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-96 {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .div-97 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-98 {
    align-items: center;
    border-radius: 5px;
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 1px 25px 1px 0;
  }
  @media (max-width: 991px) {
    .div-98 {
      justify-content: center;
      padding-right: 20px;
    }
  }
  .img-14 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-99 {
    color: #000;
    margin: auto 0;
    font: 400 15px Poppins, sans-serif;
  }
  .img-15 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-100 {
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    margin-top: 7px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 6px 61px 6px 16px;
  }
  @media (max-width: 991px) {
    .div-100 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-101 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-102 {
    color: #000;
    align-self: start;
    width: 350px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-103 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-104 {
    align-items: center;
    border-radius: 5px;
    background-color: var(--, #fff);
    align-self: start;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 1px 25px 1px 0;
  }
  @media (max-width: 991px) {
    .div-104 {
      justify-content: center;
      padding-right: 20px;
    }
  }
  .img-16 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-105 {
    color: #000;
    margin: auto 0;
    font: 400 15px Poppins, sans-serif;
  }
  .img-17 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-106 {
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    margin-top: 7px;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    padding: 7px 61px 7px 16px;
  }
  @media (max-width: 991px) {
    .div-106 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-107 {
    color: #000;
    align-self: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-108 {
    color: #000;
    align-self: center;
    width: 376px;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-109 {
    color: #000;
    align-self: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-110 {
    align-items: center;
    border-radius: 5px;
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 1px 25px 1px 0;
  }
  @media (max-width: 991px) {
    .div-110 {
      justify-content: center;
      padding-right: 20px;
    }
  }
  .img-18 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-111 {
    color: #000;
    margin: auto 0;
    font: 400 15px Poppins, sans-serif;
  }
  .img-19 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-112 {
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    margin-top: 7px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 6px 61px 6px 16px;
  }
  @media (max-width: 991px) {
    .div-112 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-113 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-114 {
    color: #000;
    align-self: start;
    width: 350px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-115 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-116 {
    align-items: center;
    border-radius: 5px;
    background-color: var(--, #fff);
    align-self: start;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 1px 25px 1px 0;
  }
  @media (max-width: 991px) {
    .div-116 {
      justify-content: center;
      padding-right: 20px;
    }
  }
  .img-20 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-117 {
    color: #000;
    margin: auto 0;
    font: 400 15px Poppins, sans-serif;
  }
  .img-21 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-118 {
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    margin-top: 7px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 7px 61px 7px 16px;
  }
  @media (max-width: 991px) {
    .div-118 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-119 {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    margin: auto 0;
  }
  .div-120 {
    color: #000;
    font: 400 12px Poppins, sans-serif;
  }
  .div-121 {
    color: #000;
    margin-top: 4px;
    width: 376px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-122 {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .div-123 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-124 {
    align-items: center;
    border-radius: 5px;
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 1px 25px 1px 0;
  }
  @media (max-width: 991px) {
    .div-124 {
      justify-content: center;
      padding-right: 20px;
    }
  }
  .img-22 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-125 {
    color: #000;
    margin: auto 0;
    font: 400 15px Poppins, sans-serif;
  }
  .img-23 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-126 {
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    margin-top: 7px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 7px 61px 7px 16px;
  }
  @media (max-width: 991px) {
    .div-126 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-127 {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    margin: auto 0;
  }
  .div-128 {
    color: #000;
    font: 400 12px Poppins, sans-serif;
  }
  .div-129 {
    color: #000;
    margin-top: 4px;
    width: 376px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-130 {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .div-131 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-132 {
    align-items: center;
    border-radius: 5px;
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 1px 25px 1px 0;
  }
  @media (max-width: 991px) {
    .div-132 {
      justify-content: center;
      padding-right: 20px;
    }
  }
  .img-24 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-133 {
    color: #000;
    margin: auto 0;
    font: 400 15px Poppins, sans-serif;
  }
  .img-25 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-134 {
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    margin-top: 7px;
    width: 100%;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    padding: 6px 61px 6px 16px;
  }
  @media (max-width: 991px) {
    .div-134 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-135 {
    display: flex;
    margin-top: 4px;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .div-136 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-137 {
    color: #000;
    align-self: stretch;
    width: 350px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-138 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .div-139 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-140 {
    align-items: center;
    border-radius: 5px;
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 1px 25px 1px 0;
  }
  @media (max-width: 991px) {
    .div-140 {
      justify-content: center;
      padding-right: 20px;
    }
  }
  .img-26 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-141 {
    color: #000;
    margin: auto 0;
    font: 400 15px Poppins, sans-serif;
  }
  .img-27 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-142 {
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    margin-top: 7px;
    width: 100%;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    padding: 6px 61px 6px 16px;
  }
  @media (max-width: 991px) {
    .div-142 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-143 {
    display: flex;
    margin-top: 4px;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .div-144 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-145 {
    color: #000;
    align-self: stretch;
    width: 350px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-146 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .div-147 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-148 {
    align-items: center;
    border-radius: 5px;
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 1px 25px 1px 0;
  }
  @media (max-width: 991px) {
    .div-148 {
      justify-content: center;
      padding-right: 20px;
    }
  }
  .img-28 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-149 {
    color: #000;
    margin: auto 0;
    font: 400 15px Poppins, sans-serif;
  }
  .img-29 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-150 {
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    margin-top: 7px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 7px 61px 7px 16px;
  }
  @media (max-width: 991px) {
    .div-150 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-151 {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    margin: auto 0;
  }
  .div-152 {
    color: #000;
    font: 400 12px Poppins, sans-serif;
  }
  .div-153 {
    color: #000;
    margin-top: 4px;
    width: 376px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-154 {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .div-155 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-156 {
    align-items: center;
    border-radius: 5px;
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 1px 25px 1px 0;
  }
  @media (max-width: 991px) {
    .div-156 {
      justify-content: center;
      padding-right: 20px;
    }
  }
  .img-30 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-157 {
    color: #000;
    margin: auto 0;
    font: 400 15px Poppins, sans-serif;
  }
  .img-31 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-158 {
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    margin-top: 7px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 6px 61px 6px 16px;
  }
  @media (max-width: 991px) {
    .div-158 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-159 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-160 {
    color: #000;
    align-self: start;
    width: 350px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-161 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-162 {
    align-items: center;
    border-radius: 5px;
    background-color: var(--, #fff);
    align-self: start;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 1px 25px 1px 0;
  }
  @media (max-width: 991px) {
    .div-162 {
      justify-content: center;
      padding-right: 20px;
    }
  }
  .img-32 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-163 {
    color: #000;
    margin: auto 0;
    font: 400 15px Poppins, sans-serif;
  }
  .img-33 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-164 {
    border: 1px solid #464646;
    background-color: var(--, #fff);
    align-self: stretch;
    margin-top: 7px;
    padding: 4px 61px 39px 80px;
  }
  @media (max-width: 991px) {
    .div-164 {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-165 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-165 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .column {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 52%;
    margin-left: 0px;
  }
  @media (max-width: 991px) {
    .column {
      width: 100%;
    }
  }
  .div-166 {
    color: #000;
    margin-top: 11px;
    font: 400 12px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-166 {
      margin-top: 40px;
    }
  }
  .column-2 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 21%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-2 {
      width: 100%;
    }
  }
  .div-167 {
    color: #000;
    margin-top: 11px;
    font: 400 12px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-167 {
      margin-top: 40px;
    }
  }
  .column-3 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 27%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-3 {
      width: 100%;
    }
  }
  .div-168 {
    align-items: center;
    border-radius: 5px;
    background-color: var(--, #fff);
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    padding: 1px 25px 1px 0;
  }
  @media (max-width: 991px) {
    .div-168 {
      margin-top: 40px;
      justify-content: center;
      padding-right: 20px;
    }
  }
  .img-34 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-169 {
    color: #000;
    margin: auto 0;
    font: 400 15px Poppins, sans-serif;
  }
  .img-35 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-170 {
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    margin-top: 7px;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    padding: 6px 59px;
  }
  @media (max-width: 991px) {
    .div-170 {
      max-width: 100%;
      flex-wrap: wrap;
      padding: 0 20px;
    }
  }
  .div-171 {
    color: #000;
    align-self: start;
    margin-top: 6px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-172 {
    color: #000;
    align-self: start;
    flex-grow: 1;
    flex-basis: auto;
    font: 400 12px Poppins, sans-serif;
  }
  .div-173 {
    color: #000;
    align-self: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-174 {
    align-items: center;
    border-radius: 5px;
    background-color: var(--, #fff);
    align-self: start;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 1px 25px 1px 0;
  }
  @media (max-width: 991px) {
    .div-174 {
      justify-content: center;
      padding-right: 20px;
    }
  }
  .img-36 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-175 {
    color: #000;
    margin: auto 0;
    font: 400 15px Poppins, sans-serif;
  }
  .img-37 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-176 {
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    margin-top: 7px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 7px 61px 7px 16px;
  }
  @media (max-width: 991px) {
    .div-176 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-177 {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    margin: auto 0;
  }
  .div-178 {
    color: #000;
    font: 400 12px Poppins, sans-serif;
  }
  .div-179 {
    color: #000;
    margin-top: 4px;
    width: 376px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-180 {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .div-181 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-182 {
    align-items: center;
    border-radius: 5px;
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 1px 25px 1px 0;
  }
  @media (max-width: 991px) {
    .div-182 {
      justify-content: center;
      padding-right: 20px;
    }
  }
  .img-38 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-183 {
    color: #000;
    margin: auto 0;
    font: 400 15px Poppins, sans-serif;
  }
  .img-39 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-184 {
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    margin-top: 7px;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    padding: 7px 61px 7px 16px;
  }
  @media (max-width: 991px) {
    .div-184 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-185 {
    color: #000;
    align-self: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-186 {
    color: #000;
    align-self: center;
    width: 376px;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-187 {
    color: #000;
    align-self: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-188 {
    align-items: center;
    border-radius: 5px;
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 1px 25px 1px 0;
  }
  @media (max-width: 991px) {
    .div-188 {
      justify-content: center;
      padding-right: 20px;
    }
  }
  .img-40 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-189 {
    color: #000;
    margin: auto 0;
    font: 400 15px Poppins, sans-serif;
  }
  .img-41 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-190 {
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    margin-top: 7px;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    padding: 7px 61px 7px 16px;
  }
  @media (max-width: 991px) {
    .div-190 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-191 {
    color: #000;
    align-self: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-192 {
    color: #000;
    align-self: center;
    width: 376px;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-193 {
    color: #000;
    align-self: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-194 {
    align-items: center;
    border-radius: 5px;
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 1px 25px 1px 0;
  }
  @media (max-width: 991px) {
    .div-194 {
      justify-content: center;
      padding-right: 20px;
    }
  }
  .img-42 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-195 {
    color: #000;
    margin: auto 0;
    font: 400 15px Poppins, sans-serif;
  }
  .img-43 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-196 {
    color: #000;
    white-space: nowrap;
    justify-content: center;
    background-color: var(--, #fff);
    align-self: start;
    aspect-ratio: 2.6666666666666665;
    margin: 13px 0 0 21px;
    padding: 2px 3px;
    font: 275 15px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-196 {
      white-space: initial;
      margin-left: 10px;
    }
  }

  .div-198 {
    border-left: 1px solid #000;
    align-self: stretch;
    display: flex;
    margin-top: 35px;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 991px) {
    .div-198 {
      max-width: 100%;
    }
  }
  .div-199 {
    color: #000;
    max-width: auto;
    border-right: 1px solid #bdbdbd;
    border-bottom: 1px solid #bdbdbd;
    border-left: 1px solid #bdbdbd;
    box-shadow: 8px 18px 23.3px 0px rgba(0, 0, 0, 0.25);
    background-color: var(--, #fff);
    justify-content: center;
    align-items: start;
    padding: 49px 60px 49px 76px;
    font: 400 12px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-199 {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-200 {
    color: #000;
    align-self: center;
    margin-top: 35px;
    white-space: nowrap;
    font: 400 10px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-200 {
      white-space: initial;
    }
  }
  .div-201 {
    color:  #fff;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #0c600a;
    align-self: end;
    margin-top: -29px;
    width: 217px;
    max-width: 100%;
    padding: 9px 60px;
    font: 800 15px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-201 {
      white-space: initial;
      padding: 0 20px;
    }
  }

  .div-201:hover{
    background-color: #083b07;
  }
  </style>