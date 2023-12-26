<script setup>

import { ref } from 'vue';
import newNavbar from "./newNavbar.vue";
import Footer from "./Footer.vue";

const categories = ref([
    { id: 4, studentNum: "22000000123", studentName: "Kim Namjoon", degree: "BSIT", contactNum: "09123456789", email: "reqease_22000000123@u..." , dateReq: "11 / 03 / 23", claim: "Pick-Up", release: "11 / 06 / 23", status: "To be approve" },
    { id: 4, studentNum: "22000000123", studentName: "Kim Namjoon", degree: "BSIT", contactNum: "09123456789", email: "reqease_22000000123@u..." , dateReq: "11 / 03 / 23", claim: "Pick-Up", release: "11 / 06 / 23", status: "To be approve" },



  ]);


</script>

<template>
  <newNavbar/>
    <div class="div">
      <div class="div-2">
        <div class="column">
          <div class="div-3">
            <div class="div-4">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3026b8e8ceb59ce1fe93670e9c4f812c8d03c203f4fd499f461af14de72ac7b9?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3026b8e8ceb59ce1fe93670e9c4f812c8d03c203f4fd499f461af14de72ac7b9?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3026b8e8ceb59ce1fe93670e9c4f812c8d03c203f4fd499f461af14de72ac7b9?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3026b8e8ceb59ce1fe93670e9c4f812c8d03c203f4fd499f461af14de72ac7b9?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3026b8e8ceb59ce1fe93670e9c4f812c8d03c203f4fd499f461af14de72ac7b9?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3026b8e8ceb59ce1fe93670e9c4f812c8d03c203f4fd499f461af14de72ac7b9?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3026b8e8ceb59ce1fe93670e9c4f812c8d03c203f4fd499f461af14de72ac7b9?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3026b8e8ceb59ce1fe93670e9c4f812c8d03c203f4fd499f461af14de72ac7b9?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                class="img"
              />
              <router-link to="/adminH" type="button">
              <div class="div-9">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/24e5dfb402223f4375eed80c8f0fe371dc733b9c79c902aee665143809fd4c58?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                  class="img-2"
                />
                <div class="div-6">Dashboard</div>
              </div>
            </router-link>
            
              <div class="div-9">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e267ccf57559751ed4a6edddaec7ad58b0b984bf4825d85e20169dddae3d95bc?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                  class="img-3"
                />
                <div class="div-6">Payments</div>
              </div>
              <div class="div-9">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/51b6ca07e8ddfd8dbd6ac6f38d6c07d15cd15138d86e73afd00dddd03086a9ca?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                  class="img-4"
                />
                <div class="div-6">Confirmation</div>
              </div>
              <div class="div-9">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e9b2b71ed67f6c2426b4a4ea6918da7312701db107142bf970364a4ec6afdab?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                  class="img-5"
                />
                <div class="div-12">New Account</div>
              </div>
              <div class="div-9">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c06005c5153a31b5f0ef510704fe2bbefda98b1637ea1cb070e24a90cb3893c?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                  class="img-6"
                />
                <div class="div-14">History</div>
              </div>
              <div class="div-9">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c000ed9c4fb3bb9342123ca2f876c3b16903a4c2b102b3441b5553ed017fe5c?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                  class="img-7"
                />
                <div class="div-16">Feedbacks</div>
              </div>
            </div>
          </div>
        </div>
        <div class="column-2">
          <div class="div-17">
            <div class="div-18">
              <div class="div-19">
                <div class="div-20">Primary</div>
                <div class="div-21">DASHBOARD</div>
              </div>
              <div class="div-22">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/316dddf451e95c71793dba7fdaffc4bbed6686ed6f912c7c1f83e852850504c5?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                  class="img-8"
                />
                <div class="div-23">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/713c267135e4818dadbff5a4932294f4fcd48cab19c579c22c7465ee1419792e?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                    class="img-9"
                  />
                  <div class="div-24">admin</div>
                </div>
              </div>
            </div>
            <div class="div-25">
              <div class="div-26">
                <div class="column-3">
                  <div class="div-27">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f13e7b110d3e68a9198f94cc62908e92d71903440f9059f245f49ec915f061dc?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-10"
                    />
                    <div class="div-28">Announcement</div>
                    <div class="div-29"> <div class="div-36">
                        1. Please allow maximum of
                        <span style="font-weight: 700">3 working days</span> to
                        verify your request. You will receive an
                        <span style="font-weight: 700"
                          >email or SMS for the costs</span
                        >, and the manner of payment and confirmation. If you
                        haven’t received a confirmation that your request has been
                        attended to after 3 working days, please send us an email
                        at for assistance.<br />2.
                        <span style="font-weight: 700">Only the owner </span>of
                        the records is allowed to request for documents in
                        connection with his/her records.<br />3. This University
                        reserves the right to withhold, deny or cancel any request
                        for document due to pending accountabilities (bank
                        accounts, incomplete credentials on file, etc.)<br />4.
                        Processing time of request commences only upon receipt of
                        payment and confirmation from the Cashier.<br />5.
                        Request
                        <span style="font-weight: 700"
                          >not claimed after 60 days</span
                        >
                        from the date of request will be discarded. Therefore,
                        another request will be charged.
                      </div></div>
                    <div class="div-30">
                        
                      
                      <button type="button" class="btn btn-warning btn-rounded" data-mdb-ripple-init>Edit</button>
                      <button type="button" class="btn btn-danger btn-rounded" data-mdb-ripple-init>Publish</button>
                      
                    </div>
                  </div>
                </div>
                <div class="column-3">
                  <div class="div-33">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/598b10c01e63a5f391e75b78de13697483ce806ac84053477e5df95e7eb796e7?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-11"
                    />
                    <div class="div-34">Reminders</div>
                    <div class="div-35">
                      <div class="div-36">
                        1. Please allow maximum of
                        <span style="font-weight: 700">3 working days</span> to
                        verify your request. You will receive an
                        <span style="font-weight: 700"
                          >email or SMS for the costs</span
                        >, and the manner of payment and confirmation. If you
                        haven’t received a confirmation that your request has been
                        attended to after 3 working days, please send us an email
                        at for assistance.<br />2.
                        <span style="font-weight: 700">Only the owner </span>of
                        the records is allowed to request for documents in
                        connection with his/her records.<br />3. This University
                        reserves the right to withhold, deny or cancel any request
                        for document due to pending accountabilities (bank
                        accounts, incomplete credentials on file, etc.)<br />4.
                        Processing time of request commences only upon receipt of
                        payment and confirmation from the Cashier.<br />5.
                        Request
                        <span style="font-weight: 700"
                          >not claimed after 60 days</span
                        >
                        from the date of request will be discarded. Therefore,
                        another request will be charged.
                      </div>
                      <div class="div-37">
                        <button type="button" class="btn btn-warning btn-rounded" data-mdb-ripple-init>Edit</button>
                      <button type="button" class="btn btn-danger btn-rounded" data-mdb-ripple-init>Publish</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="column-3">
                  <div class="div-40">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2505edc742d3582db1c015d9e1516424e20babe97f7bf37e739007ff8cb746e3?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-12"
                    />
                    <div class="div-41">Privacy Consent</div>
                    <div class="div-42">
                      I hereby agree and consent the University of the Immaculate
                      Conception may collect, use, disclose and process my
                      personal information set out in <br />this form and/or
                      otherwise provided by me for the purpose of requesting
                      school documents as stated in the R.A. 10173, otherwise
                      known as the Data Privacy Act of 2012 and other related data
                      privacy policies. <br /> <br>The information will only be
                      accessed by authorized university staff. I understand that
                      my data will be held securely and will not be disclosed to
                      third parties without my permission. When this information
                      is no longer required, official university procedure will be
                      followed to dispose my data. <br /> <br>By clicking the
                      <span style="font-weight: 700"
                        >“REQUEST FOR OFFICIAL DOCUMENT ” </span
                      >option I represent and warrant that I am the data subject
                      and that I have read and understood all the conditions and
                      reminders in connection with this request and agree to
                      comply with them. By clicking selecting an option, I also
                      certify that the information given are true to the best of
                      my knowledge and belief.
                    </div>
                    <div class="div-43">
                        <button type="button" class="btn btn-warning btn-rounded" data-mdb-ripple-init>Edit</button>
                      <button type="button" class="btn btn-danger btn-rounded" data-mdb-ripple-init>Publish</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="div-46">
              <div class="div-47">Pending Request</div>
              <div class="div-48">
                You can view and update the status and schedule to release the
                document request.
              </div>
            </div>
            <!-- <div class="div-49">
              <div class="div-50">
                <div class="div-51">Transaction No.</div>
                <div class="div-52">Student No.</div>
                <div class="div-53">Student Name</div>
                <div class="div-54">Degree</div>
                <div class="div-55">Contact No.</div>
                <div class="div-57">Email Address</div>
                <div class="div-58">Date Requested</div>
                <div class="div-59">Claiming Method</div>
                <div class="div-60">Schedule to Release</div>
                <div class="div-61">Status</div>
              </div>
            
            
            </div>
            <div class="div-62">
              <div class="div-63">1</div>
              <div class="div-64">22000000123</div>
              <div class="div-65">Kim Namjoon</div>
              <div class="div-66">BSIT</div>
              <div class="div-67">09123456789</div>
              <div class="div-68">reqease_22000000123@u...</div>
              <div class="div-69">11 / 03 / 23</div>
              <div class="div-70">Pick-Up</div>
              <div class="div-71">
                <div class="div-72">dd / mm / yy</div>
               
              </div>
              <div class="div-73">To be approve</div>
            </div> -->


            <table class="table table-striped">
          <thead>
            <tr>
              <th>Transaction No.</th>
              <th>Student No.</th>
              <th>Student Name</th>
              <th>Degree</th>
              <th>Contact No.</th>
              <th>Email Address</th>
              <th>Date Requested</th>
              <th>Claiming Method</th>
              <th>Schedule to Release</th>
              <th>Status</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
           
            <tr v-for="category in categories" :key="category.id">
              <td class="">{{ category.id }}</td>
              <td class="">{{ category.studentNum}}</td>
              <td class="">{{ category.studentName }}</td>
              <td class="">{{ category.degree}}</td>
              <td class="">{{ category.contactNum }}</td>
              <td class="">{{ category.email }}</td>
              <td class="">{{ category.dateReq }}</td>
              <td class="">{{ category.claim }}</td>
              <td class="">
                <input type="date"></td>
              <td class="">{{ category.status }}</td>
              <td class=""><button type="button" class="btn btn-warning" data-mdb-ripple-init>VIEW</button></td>
         
            </tr>
          </tbody>
        </table>
         
        
            <div class="div-98">
                <button type="button" class="btn btn-warning" data-mdb-ripple-init>Sort Date</button>
                <button type="button" class="btn btn-dark" data-mdb-ripple-init>Previous</button>
                <button type="button" class="btn btn-dark" data-mdb-ripple-init>next</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </template>
  
  
  
  <style scoped>
   

  tbody{
    background-color: #fff;
    font: 400 12px Poppins, sans-serif;
    border: 1px solid #2f3030;
  }
  thead{
   
    border-right: 1px solid #464646;
    border-bottom: 1px solid #464646;
    border-left: 1px solid #464646;
    
   

    background-color: #616161;
   color:  #fff;

    font: 400 14px Poppins, sans-serif;
  }
  .div {
    background-color: #eeeaeb;
    padding-right: 42px;
  }
  @media (max-width: 991px) {
    .div {
      padding-right: 20px;
    }
  }
  .div-2 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-2 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .column {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 20%;
    margin: 0;
    padding: 0;
  }
  @media (max-width: 991px) {
    .column {
      width: 100%;
    }
  }
  .div-3 {
    justify-content: center;
    display: flex;
    flex-grow: 1;
    flex-direction: column;

    margin: 0;
  padding: 0;

  
  position:relative;
 
  overflow: auto;
  }
  @media (max-width: 991px) {
    .div-3 {
      margin-top: 40px;
    }
  }
  .div-4 {
    
    box-shadow: 8px 3px 9px 0px rgba(0, 0, 0, 0.25);
    background-color:  #fff;
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 100%;
    padding: 50px 80px 50px 62px;
  }
  @media (max-width: 991px) {
    .div-4 {
      padding: 0 20px;
    }
  }
  .img {
    aspect-ratio: 0.99;
    object-fit: contain;
    object-position: center;
    width: 165px;
    overflow: hidden;
    align-self: center;
    margin-top: 8px;
    max-width: 100%;
  }
  .div-5 {
    align-self: stretch;
    display: flex;
    margin-top: 110px;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-5 {
      margin: 40px 8px 0 0;
    }
  }
  .img-2 {
    aspect-ratio: 0.93;
    object-fit: contain;
    object-position: center;
    width: 25px;
    fill: #000;
    overflow: hidden;
    max-width: 100%;
  }
  .div-6 {
    color: #2f3030;
    font: 500 18px Poppins, sans-serif;
  }
  .div-7 {
    align-self: stretch;
    display: flex;
    margin-top: 66px;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-7 {
      margin: 40px 8px 0 0;
    }
  }
  .img-3 {
    aspect-ratio: 1.25;
    object-fit: contain;
    object-position: center;
    width: 25px;
    fill: #000;
    overflow: hidden;
    max-width: 100%;
    margin: auto 0;
  }
  .div-8 {
    color: #000;
    font: 500 18px Poppins, sans-serif;
  }
  .div-9 {
    align-self: start;
    display: flex;
    margin-top: 66px;
    align-items: center;
    justify-content: center;
    padding: 14px 20px 14px 25px;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-9 {
      margin-top: 40px;
    }
  }
  .div-9:hover{
    
    align-self: start;
    border-radius: 10px;
  background-color: #e54f70;
  display: flex;
  width: 100%;
  flex-direction:row;
  justify-content: center;
  padding: 14px 20px 14px 25px;
    }
  .img-4 {
    aspect-ratio: 1.19;
    object-fit: contain;
    object-position: center;
    width: 25px;
    fill: #000;
    overflow: hidden;
    max-width: 100%;
    margin: auto 0;
  }
  .div-10 {
    color: #000;
    font: 500 18px Poppins, sans-serif;
  }
  .div-11 {
    align-self: start;
    display: flex;
    margin-top: 66px;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-11 {
      margin-top: 40px;
    }
  }
  .img-5 {
    aspect-ratio: 1.32;
    object-fit: contain;
    object-position: center;
    width: 25px;
    fill: #000;
    overflow: hidden;
    max-width: 100%;
    margin: auto 0;
  }
  .div-12 {
    color: #000;
    font: 500 18px Poppins, sans-serif;
  }
  .div-13 {
    align-self: start;
    display: flex;
    margin-top: 66px;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-13 {
      margin-top: 40px;
    }
  }
  .img-6 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 25px;
    fill: #000;
    overflow: hidden;
    max-width: 100%;
  }
  .div-14 {
    color: #000;
    font: 500 18px Poppins, sans-serif;
  }
  .div-15 {
    align-self: start;
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    margin: 66px 0 184px;
  }
  @media (max-width: 991px) {
    .div-15 {
      margin: 40px 0;
    }
  }
  .img-7 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 25px;
    fill: #000;
    overflow: hidden;
    max-width: 100%;
  }
  .div-16 {
    color: #000;
    font: 500 18px Poppins, sans-serif;
  }
  .column-2 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 80%;
  
    margin-left: 20px;
    padding: 20px 20px;
  }
  @media (max-width: 991px) {
    .column-2 {
      width: 100%;
    }
  }
  .div-17 {
    display: flex;
    flex-direction: column;
    margin: auto 0;
  }
  @media (max-width: 991px) {
    .div-17 {
      max-width: 100%;
      margin-top: 40px;
    }
  }
  .div-18 {
    box-shadow: 8px 18px 23.3px 0px rgba(0, 0, 0, 0.25);
    background-color: #2f3030;
    align-self: stretch;
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    padding: 17px 0 9px 46px;
  }
  @media (max-width: 991px) {
    .div-18 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-left: 20px;
    }
  }
  .div-19 {
    display: flex;
    flex-direction: column;
  }
  .div-20 {
    justify-content: center;
    color:  #fff;
    font-feature-settings: "clig" off, "liga" off;
    letter-spacing: -0.15px;
    font: 400 20px Poppins, sans-serif;
  }
  .div-21 {
    color:  #fff;
    letter-spacing: 7.8px;
    margin-top: 4px;
    white-space: nowrap;
    font: 800 20px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-21 {
      white-space: initial;
    }
  }
  .div-22 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .img-8 {
    aspect-ratio: 1.14;
    object-fit: contain;
    object-position: center;
    width: 42px;
    overflow: hidden;
    max-width: 100%;
    margin: auto 0;
  }
  .div-23 {
    align-items: center;
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 15px;
    padding: 10px 61px 10px 0;
  }
  @media (max-width: 991px) {
    .div-23 {
      padding-right: 20px;
    }
  }
  .img-9 {
    aspect-ratio: 0.79;
    object-fit: contain;
    object-position: center;
    width: 19px;
    overflow: hidden;
    max-width: 100%;
    margin: auto 0;
  }
  .div-24 {
    color:  #fff;
    text-transform: uppercase;
    align-self: stretch;
    flex-grow: 1;
    white-space: nowrap;
    font: 600 22px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-24 {
      white-space: initial;
    }
  }
  .div-25 {
    justify-content: center;
    align-self: center;
    margin-top: 27px;
    width: 100%;
    max-width: 1321px;
  }
  @media (max-width: 991px) {
    .div-25 {
      max-width: 100%;
    }
  }
  .div-26 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-26 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .column-3 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 33%;
    margin-left: 0px;
  }
  @media (max-width: 991px) {
    .column-3 {
      width: 100%;
    }
  }
  .div-27 {
    disply: flex;
    flex-direction: column;
    fill: var(--, #fff);
    stroke-width: 1px;
    stroke: #acacac;
    filter: drop-shadow(8px 18px 23.3px rgba(0, 0, 0, 0.25));
    overflow: hidden;
    position: relative;
    display: flex;
    min-height: 412px;
    flex-grow: 1;
    align-items: center;
    padding: 33px 22px 20px 32px;
  }
  @media (max-width: 991px) {
    .div-27 {
      max-width: 100%;
      margin-top: 14px;
      padding: 0 20px;
    }
  }
  .img-10 {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .div-28 {
    position: relative;
    color: #e54f70;
    text-align: center;
    white-space: nowrap;
    font: 800 18px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-28 {
      white-space: initial;
    }
  }
  .div-29 {
    position: relative;
    color: #000;
    align-self: stretch;
    margin-top: 28px;
    font: 400 10px Poppins, sans-serif;
  }
  .div-30 {
    position: relative;
    align-self: end;
    display: flex;
    margin-top: 51px;
    gap: 6px;
  }
  @media (max-width: 991px) {
    .div-30 {
      margin-top: 40px;
    }
  }
  .div-31 {
    color: #000;
    white-space: nowrap;
    border-radius: 31px;
    background-color: var(--Color-Scheme-Gold, #fecb00);
    flex-grow: 1;
    justify-content: center;
    padding: 10px 28px;
    font: 500 14px/257% Montserrat, sans-serif;
  }
  @media (max-width: 991px) {
    .div-31 {
      white-space: initial;
      padding: 0 20px;
    }
  }
  .div-32 {
    color: var(--, #fff);
    white-space: nowrap;
    border-radius: 31px;
    background-color: #e54f70;
    flex-grow: 1;
    justify-content: center;
    padding: 10px 16px;
    font: 500 14px/257% Montserrat, sans-serif;
  }
  @media (max-width: 991px) {
    .div-32 {
      white-space: initial;
    }
  }
  .column-4 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 33%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-4 {
      width: 100%;
    }
  }
  .div-33 {
    disply: flex;
    flex-direction: column;
    fill: var(--, #fff);
    stroke-width: 1px;
    stroke: #acacac;
    filter: drop-shadow(8px 18px 23.3px rgba(0, 0, 0, 0.25));
    overflow: hidden;
    position: relative;
    display: flex;
    min-height: 412px;
    flex-grow: 1;
    align-items: center;
    padding: 31px 0 20px;
  }
  @media (max-width: 991px) {
    .div-33 {
      max-width: 100%;
      margin-top: 14px;
    }
  }
  .img-11 {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .div-34 {
    position: relative;
    color: #e54f70;
    text-align: center;
    white-space: nowrap;
    font: 800 18px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-34 {
      white-space: initial;
    }
  }
  .div-35 {
    position: relative;
    align-self: stretch;
    display: flex;
    margin-top: 28px;
    flex-direction: column;
    padding: 0 22px 0 32px;
  }
  @media (max-width: 991px) {
    .div-35 {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-36 {
    color: #000;
    font: 400 10px Poppins, sans-serif;
  }
  .div-37 {
    align-self: end;
    display: flex;
    margin-top: 49px;
    gap: 6px;
  }
  @media (max-width: 991px) {
    .div-37 {
      margin-top: 40px;
    }
  }
  .div-38 {
    color: #000;
    white-space: nowrap;
    border-radius: 31px;
    background-color: var(--Color-Scheme-Gold, #fecb00);
    flex-grow: 1;
    justify-content: center;
    padding: 10px 28px;
    font: 500 14px/257% Montserrat, sans-serif;
  }
  @media (max-width: 991px) {
    .div-38 {
      white-space: initial;
      padding: 0 20px;
    }
  }
  .div-39 {
    color: var(--, #fff);
    white-space: nowrap;
    border-radius: 31px;
    background-color: #e54f70;
    flex-grow: 1;
    justify-content: center;
    padding: 10px 16px;
    font: 500 14px/257% Montserrat, sans-serif;
  }
  @media (max-width: 991px) {
    .div-39 {
      white-space: initial;
    }
  }
  .column-5 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 33%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-5 {
      width: 100%;
    }
  }
  .div-40 {
    disply: flex;
    flex-direction: column;
    fill: var(--, #fff);
    stroke-width: 1px;
    stroke: #acacac;
    filter: drop-shadow(8px 18px 23.3px rgba(0, 0, 0, 0.25));
    overflow: hidden;
    position: relative;
    display: flex;
    min-height: 412px;
    flex-grow: 1;
    align-items: center;
    padding: 31px 22px 20px 32px;
  }
  @media (max-width: 991px) {
    .div-40 {
      max-width: 100%;
      margin-top: 14px;
      padding: 0 20px;
    }
  }
  .img-12 {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .div-41 {
    position: relative;
    color: #e54f70;
    text-align: center;
    white-space: nowrap;
    font: 800 18px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-41 {
      white-space: initial;
    }
  }
  .div-42 {
    position: relative;
    color: #000;
    align-self: stretch;
    margin-top: 23px;
    font: 400 10px Poppins, sans-serif;
  }
  .div-43 {
    position: relative;
    align-self: end;
    display: flex;
    margin-top: 65px;
    gap: 6px;
  }
  @media (max-width: 991px) {
    .div-43 {
      margin-top: 40px;
    }
  }
  .div-44 {
    color: #000;
    white-space: nowrap;
    border-radius: 31px;
    background-color: var(--Color-Scheme-Gold, #fecb00);
    flex-grow: 1;
    justify-content: center;
    padding: 10px 28px;
    font: 500 14px/257% Montserrat, sans-serif;
  }
  @media (max-width: 991px) {
    .div-44 {
      white-space: initial;
      padding: 0 20px;
    }
  }
  .div-45 {
    color: var(--, #fff);
    white-space: nowrap;
    border-radius: 31px;
    background-color: #e54f70;
    flex-grow: 1;
    justify-content: center;
    padding: 10px 16px;
    font: 500 14px/257% Montserrat, sans-serif;
  }
  @media (max-width: 991px) {
    .div-45 {
      white-space: initial;
    }
  }
  .div-46 {
    box-shadow: 8px 18px 23.3px 0px rgba(0, 0, 0, 0.25);
    background-color: #2f3030;
    align-self: stretch;
    display: flex;
    margin-top: 27px;
    justify-content: space-between;
    gap: 20px;
    padding: 18px 46px;
  }
  @media (max-width: 991px) {
    .div-46 {
      max-width: 100%;
      flex-wrap: wrap;
      padding: 0 20px;
    }
  }
  .div-47 {
    justify-content: center;
    color: #fff;
    font-feature-settings: "clig" off, "liga" off;
    letter-spacing: -0.15px;
    font: 500 20px Poppins, sans-serif;
  }
  .div-48 {
    color:  #fff;
    align-self: center;
    flex-grow: 1;
    font: 300 15px/127% Montserrat, sans-serif;
  }
  @media (max-width: 991px) {
    .div-48 {
      max-width: 100%;
    }
  }
  .div-49 {
    border-right: 1px solid #464646;
    border-bottom: 1px solid #464646;
    border-left: 1px solid #464646;
    background-color: #616161;
    align-self: stretch;
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    padding: 9px 13px;
  }
  @media (max-width: 991px) {
    .div-49 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-50 {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    font: 600 12px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-50 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .div-51 {
    justify-content: center;
    color:  #fff;
    text-align: center;
    flex-grow: 1;
    white-space: nowrap;
   
  }
  @media (max-width: 991px) {
    .div-51 {
      white-space: initial;
    }
  }
  .div-52 {
    justify-content: center;
    color:  #fff;
    text-align: center;
    
  }
  .div-53 {
    justify-content: center;
    color:  #fff;
    text-align: center;
    
  }
  .div-54 {
    justify-content: center;
    color:  #fff;
    text-align: center;
    
  }
  .div-55 {
    justify-content: center;
    color:  #fff;
    text-align: center;
    flex-grow: 1;
    white-space: nowrap;
    
  }
  @media (max-width: 991px) {
    .div-55 {
      white-space: initial;
    }
  }
  .div-56 {
    align-self: stretch;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
    font: 600 12px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-56 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .div-57 {
    justify-content: center;
    color:  #fff;
    text-align: center;
   
  }
  .div-58 {
    justify-content: center;
    color:  #fff;
    text-align: center;
    
  }
  .div-59 {
    color:  #fff;
    text-align: center;
   
  }
  .div-60 {
    color: #fff;
    text-align: center;
    align-self: center;
    width: 262px;
   
  }
  .div-61 {
    color: #fff;
    text-align: center;
    align-self: center;
    
  }
  .div-62 {
    justify-content: center;
    align-items: flex-start;
    border: 1px solid #2f3030;
    background-color:  #fff;
    align-self: stretch;
    display: flex;
    gap: 0px;
    padding: 6px 0;
  }
  @media (max-width: 991px) {
    .div-62 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .div-63 {
    justify-content: center;
  
    

   
  
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;

    color: #000;
  text-align: center;

  width: 115px;
  white-space: nowrap;
  font: 400 12px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-63 {
      white-space: initial;
    }
  }
  .div-64 {
    justify-content: center;
    color: #000;
    text-align: center;
    margin: auto 0;
    width: 150px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-65 {
    justify-content: center;
    color: #000;
    text-align: left;
    margin: auto 0;
    width: 100px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-66 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-67 {
    justify-content: center;
    color: #000;
    text-align: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-68 {
    justify-content: center;
    color: #000;
    text-align: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-69 {
    justify-content: center;
    color: #000;
    text-align: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-70 {
    justify-content: center;
    color: #000;
    text-align: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-71 {
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    display: flex;
    gap: 12px;
    padding: 2px 21px;
  }
  @media (max-width: 991px) {
    .div-71 {
      padding-left: 20px;
    }
  }
  .div-72 {
    color: #000;
    text-align: center;
    flex-grow: 1;
    white-space: nowrap;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-72 {
      white-space: initial;
    }
  }
  .img-13 {
    aspect-ratio: 4.04;
    object-fit: contain;
    object-position: center;
    width: 109px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-73 {
    justify-content: center;
    color: #ffa842;
    text-align: center;
    align-self: center;
    flex-grow: 1;
    white-space: nowrap;
    margin: auto 0;
    font: 600 12px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-73 {
      white-space: initial;
    }
  }
  .div-74 {
    justify-content: center;
    align-items: flex-start;
    border: 1px solid #2f3030;
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    gap: 0px;
    padding: 6px 0;
  }
  @media (max-width: 991px) {
    .div-74 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .div-75 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: center;
    flex-grow: 1;
    white-space: nowrap;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-75 {
      white-space: initial;
    }
  }
  .div-76 {
    justify-content: center;
    color: #000;
    text-align: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-77 {
    justify-content: center;
    color: #000;
    text-align: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-78 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-79 {
    justify-content: center;
    color: #000;
    text-align: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-80 {
    justify-content: center;
    color: #000;
    text-align: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-81 {
    justify-content: center;
    color: #000;
    text-align: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-82 {
    justify-content: center;
    color: #000;
    text-align: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-83 {
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    display: flex;
    gap: 12px;
    padding: 2px 21px;
  }
  @media (max-width: 991px) {
    .div-83 {
      padding-left: 20px;
    }
  }
  .div-84 {
    color: #000;
    text-align: center;
    flex-grow: 1;
    white-space: nowrap;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-84 {
      white-space: initial;
    }
  }
  .img-14 {
    aspect-ratio: 4.04;
    object-fit: contain;
    object-position: center;
    width: 109px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-85 {
    justify-content: center;
    color: #ffa842;
    text-align: center;
    align-self: center;
    flex-grow: 1;
    white-space: nowrap;
    margin: auto 0;
    font: 600 12px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-85 {
      white-space: initial;
    }
  }
  .div-86 {
    justify-content: center;
    align-items: flex-start;
    border: 1px solid #2f3030;
    background-color: var(--, #fff);
    align-self: stretch;
    display: flex;
    gap: 0px;
    padding: 6px 0;
  }
  @media (max-width: 991px) {
    .div-86 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .div-87 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: center;
    flex-grow: 1;
    white-space: nowrap;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-87 {
      white-space: initial;
    }
  }
  .div-88 {
    justify-content: center;
    color: #000;
    text-align: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-89 {
    justify-content: center;
    color: #000;
    text-align: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-90 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-91 {
    justify-content: center;
    color: #000;
    text-align: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-92 {
    justify-content: center;
    color: #000;
    text-align: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-93 {
    justify-content: center;
    color: #000;
    text-align: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-94 {
    justify-content: center;
    color: #000;
    text-align: center;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-95 {
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    display: flex;
    gap: 12px;
    padding: 2px 21px;
  }
  @media (max-width: 991px) {
    .div-95 {
      padding-left: 20px;
    }
  }
  .div-96 {
    color: #000;
    text-align: center;
    flex-grow: 1;
    white-space: nowrap;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-96 {
      white-space: initial;
    }
  }
  .img-15 {
    aspect-ratio: 4.04;
    object-fit: contain;
    object-position: center;
    width: 109px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-97 {
    justify-content: center;
    color: #ffa842;
    text-align: center;
    align-self: center;
    flex-grow: 1;
    white-space: nowrap;
    margin: auto 0;
    font: 600 12px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-97 {
      white-space: initial;
    }
  }
  .div-98 {
    align-self: end;
    display: flex;
    width: 396px;
    max-width: 100%;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    margin: 249px 53px 0 0;
  }
  @media (max-width: 991px) {
    .div-98 {
      margin: 40px 10px 0 0;
    }
  }
  .div-99 {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-basis: 0%;
    flex-direction: column;
    justify-content: center;
  }
  .div-100 {
    color: #2f3030;
    text-align: center;
    border-radius: 2px;
    background-color: #fecb00;
    justify-content: center;
    padding: 8px 21px 8px 28px;
    font: all-small-caps 500 13px/277% Montserrat, -apple-system, Roboto,
      Helvetica, sans-serif;
  }
  @media (max-width: 991px) {
    .div-100 {
      padding: 0 20px;
    }
  }
  .div-101 {
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  .div-102 {
    color: var(--, #fff);
    text-align: center;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #2f3030;
    flex-grow: 1;
    justify-content: center;
    padding: 9px 29px;
    font: all-small-caps 500 12px/300% Montserrat, -apple-system, Roboto,
      Helvetica, sans-serif;
  }
  @media (max-width: 991px) {
    .div-102 {
      white-space: initial;
      padding: 0 20px;
    }
  }
  .div-103 {
    color: var(--, #fff);
    text-align: center;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #2f3030;
    flex-grow: 1;
    justify-content: center;
    padding: 9px 42px;
    font: all-small-caps 500 13px/277% Montserrat, -apple-system, Roboto,
      Helvetica, sans-serif;
  }
  @media (max-width: 991px) {
    .div-103 {
      white-space: initial;
      padding: 0 20px;
    }
  }
  </style>