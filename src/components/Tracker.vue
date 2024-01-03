<script setup>
import { ref } from 'vue';
import newNavbar from "./newNavbar.vue";
import ApplicationNavigationBar from "./ApplicationNavigationBar.vue";
import Footer from "./Footer.vue";


const selectedCategories = ref([]);

const handleButtonClick = (category) => {
  // Add the selected category to the second table
  selectedCategories.value.push(category);
 

  
};

const categories = ref([
    { id: 1, docNum: 4, docType: "Certificate of Enrollment", dateReq: "12 / 27 / 23", claim: "Pick-Up", sched: "12 / 21/ 23", status: "To be approve", qty: 1, fee: 60.00, unit: "/ copy" },
    { id: 1, docNum: 4, docType: "Official Transcript of Records", dateReq: "12 / 27 / 23", claim: "Pick-Up", sched: "12 / 21/ 23", status: "To be approve", qty: 1, fee: 60.00, unit: "/ copy" },
    { id: 2, docNum: 6, docType: "Certificate of Government Recognition of the Program", dateReq: "12 / 22 / 23", claim: "Courier", sched: "12 / 31 / 23", status: "To pay", qty: 2, fee: 60.00, unit: "/ copy" },
    { id: 3, docNum: 1, docType: "Authentication", dateReq: "12 / 27 / 23", claim: "Courier", sched: "12 / 28 / 23", status: "To process", qty: 3, fee: 60.00, unit: "/ copy" },
    { id: 4, docNum: 11, docType: "Certificate of Latin Honor", dateReq: "12 / 31 / 23", claim: "Through Representative", sched: "12 / 28 / 23", status: "To receive", qty: 4, fee: 60.00, unit: "/ copy" },
    { id: 5, docNum: 16, docType: "Diploma", dateReq: "12 / 28 / 23", claim: "Email", sched: "12 / 29 / 23", status: "Received", qty: 5, fee: 400.00, unit: "/ copy" },
    { id: 6, docNum: 20, docType: "Official Transcript of Records", dateReq: "12 / 24 / 23", claim: "Pick-up", sched: "12 / 31 / 23", status: "To rate", qty: 1, fee: 250.00, unit: "/ set" },

  ]);
  const closeModalAndReset = () => {
  // Your logic to close the modal
  // ...

  // Reset selectedCategories
  selectedCategories.value = [];


};




</script>
<template>
  <newNavbar/>
  <ApplicationNavigationBar/>
  <div class="div">
    <div class="div-2">
      <div class="div-3">PROCESSING OF DOCUMENTS</div>
      <div class="div-4">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d14ce1bb24f1782c40fc6cf9e8b95e32ae7ed36f6d810a66a600b410d7827721?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
          class="img"
        />
        <div class="div-5">
          <div class="div-6">TRACK DOCUMENTS</div>
          <div class="div-7">
            You can ONLY view the status and schedule to release the document
            request.
          </div>
        </div>
      </div>
      <div class="div-8">
        
        <table class="table table-striped"  >
          <thead>
            <tr>
              <th>Transaction No.</th>
              <th>Requested Document</th>
              <th>Date Requested</th>
              <th>Claiming Method</th>
              <th>Schedule to Release</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categories" :key="category.id">
              <td >{{ category.id }}</td>
              <td >{{ category.docType }}</td>
              <td >{{ category.dateReq }}</td>
              <td >{{ category.claim }}</td>
              <td >{{ category.sched }}</td>
              <td ><span v-if="category.status === 'To be approve'" class="badge rounded-pill badge-primary">{{ category.status }}</span>
                <span v-else-if="category.status === 'To pay'" class="badge rounded-pill badge-danger">{{ category.status }}</span>
                <span v-else-if="category.status === 'To process'" class="badge rounded-pill badge-warning">{{ category.status }}</span>
                <span v-else-if="category.status === 'To receive'" class="badge rounded-pill badge-dark">{{ category.status }}</span>
                <span v-else-if="category.status === 'Received'" class="badge rounded-pill badge-success">{{ category.status }}</span>
                <span v-else-if="category.status === 'To rate'" class="badge rounded-pill badge-secondary">{{ category.status }}</span>
                </td>
              <td >
                
                <a v-if="category.status === 'To be approve'"  @click="handleButtonClick(category)" href="#open-modal" type="button" class="btn btn-outline-dark btn-rounded" data-mdb-ripple-init data-mdb-ripple-color="dark">View</a>
        <a v-else-if="category.status === 'To pay'" @click="handleButtonClick(category)" type="button" href="#open-modal" class="btn btn-outline-dark btn-rounded" data-mdb-ripple-init data-mdb-ripple-color="dark">View</a>
        <a v-else-if="category.status === 'To process'" @click="handleButtonClick(category)" href="#open-modal" type="button" class="btn btn-outline-dark btn-rounded" data-mdb-ripple-init data-mdb-ripple-color="dark">View</a>
        <a v-else-if="category.status === 'To receive'"  @click="handleButtonClick(category)"  href="#open-modal" type="button" class="btn btn-outline-dark btn-rounded" data-mdb-ripple-init data-mdb-ripple-color="dark">View</a>
        <a v-else-if="category.status === 'Received'" @click="handleButtonClick(category)"  href="#open-modal" type="button" class="btn btn-outline-dark btn-rounded" data-mdb-ripple-init data-mdb-ripple-color="dark">View</a>
        <a v-else-if="category.status === 'To rate'" @click="handleButtonClick(category)"  href="#open-modal" type="button" class="btn btn-outline-dark btn-rounded" data-mdb-ripple-init data-mdb-ripple-color="dark">View</a>
        <a v-else @click="handleButtonClick(category)" type="button" class="btn btn-outline-dark btn-rounded" data-mdb-ripple-init data-mdb-ripple-color="dark">View</a>
              
              
              </td>
         
            </tr>
          </tbody>
        </table>  
        
     
      </div>
     
      <div class="div-23">
        <button type="button" class="btn btn-warning" data-mdb-ripple-init>Sort Date</button>
        <button type="button" class="btn btn-dark" data-mdb-ripple-init>Previous</button>
                <button type="button" class="btn btn-dark" data-mdb-ripple-init>next</button>
               
      </div>
    </div>
  </div>
  <div  v-for="selectedCategory in selectedCategories" :key="selectedCategory.id" id="open-modal" class="modal-window">
    
  <!-- Your Modal Content Goes Here -->

  <div class="div-">
    <div class="div-2-">Document Request Summary</div>
    <div class="div-3-">
      <div class="div-4-">
        <div class="div-5-">STUDENT INFORMATION</div>
        <div class="div-6-">
          <div class="div-7-">Status:</div>
          <div class="div-8-">To be Approve</div>
        </div>
      </div>
      

      <table class="table table-striped">
      <thead>
        <tr>
          <th>Document Code</th>
          <th>Document Name</th>
          <th>Document Fee </th>
          <th>No. of Copies</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="selectedCategory in selectedCategories" :key="selectedCategory.id">
          <td>{{ selectedCategory.docNum }}</td>
          <td>{{ selectedCategory.docType }}</td>
          <td>{{ selectedCategory.fee }} {{ selectedCategory.unit }}</td>
          <td>{{ selectedCategory.qty }}</td>
        </tr>
      </tbody>
    </table>




      <div class="div-22-">
        <span
          style="
            font-family: Poppins, sans-serif;
            font-size: 18px;
            color: rgba(0, 0, 0, 1);
          "
          >Claiming Method: </span
        ><span
          style="
            font-family: Poppins, sans-serif;
            font-size: 15px;
          "
          >{{selectedCategory.claim}}</span
        >
      </div>
      <div class="div-23-">
        <span
          style="
            font-family: Poppins, sans-serif;
            font-size: 18px;
            color: rgba(0, 0, 0, 1);
          "
          >Date Requested: </span
        ><span
          style="
            font-family: Poppins, sans-serif;
            font-size: 15px;
          "
          >{{selectedCategory.dateReq}}</span
        >
      </div>
  
    </div>
    <div class="div-24-">
      <a href="#" title="Close" class="div-25-"  @click="closeModalAndReset" >Go Back  </a>

      <div class="div-26-">
        <div class="div-27-">
          <span style="font-weight: 400; color: rgba(255, 0, 0, 1)">*</span
          ><span style="font-weight: 400">
            If you wish to cancel the request, please select </span
          >Cancel<span style="font-weight: 400">.</span><br />
        </div>
           <a href="#" title="Close" class="div-28-"  @click="closeModalAndReset" >Cancel  </a>
       
      </div>
    </div>
  </div>
</div>
  

  <Footer/>




  
</template>



<style scoped>

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
.modal-window > .div- {

  
  max-width: 989px;
  width: 989px;
height: auto;
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  
  background: #ffffff;
border-radius: 10px;

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









.div- {
  border-radius: 10px;
  background-color:  #fff;
  display: flex;
  max-width: 989px;
  flex-direction: column;
}
.div-2- {
  justify-content: center;
  color:  #fff;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: -0.15px;
  white-space: nowrap;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
  background-color: #2f3030;
  width: 100%;
  padding: 21px 60px;
  font: 500 20px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-2- {
    white-space: initial;
    max-width: 100%;
    padding: 0 20px;
  }
}
.div-3- {
  display: flex;
  margin-top: 9px;
  width: 100%;
  flex-direction: column;
  padding: 0 34px;
}
@media (max-width: 991px) {
  .div-3- {
    max-width: 100%;
    padding: 0 20px;
  }
}
.div-4- {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-4- {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-5- {
  color: #000;
  letter-spacing: 7.8px;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  font: 800 20px Poppins, sans-serif;
}
.div-6- {
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.div-7- {
  color: #000;
  text-transform: capitalize;
  margin: auto 0;
  font: 400 18px Montserrat, sans-serif;
}
.div-8- {
  color: #2f3030;
  text-align: center;
  text-transform: capitalize;
  white-space: nowrap;
  border-radius: 5px;
  background-color: #fecb00;
  align-self: stretch;
  flex-grow: 1;
  justify-content: center;
  padding: 10px 9px;
  font: 600 18px Montserrat, sans-serif;
}
@media (max-width: 991px) {
  .div-8- {
    white-space: initial;
  }
}
.div-9- {
  color: var(--, #fff);
  border: 1px solid #464646;
  background-color: #616161;
  margin-top: 26px;
  justify-content: center;
  padding: 16px 60px 16px 31px;
  font: 700 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-9- {
    max-width: 100%;
    padding: 0 20px;
  }
}
.div-10- {
  border: 1px solid #464646;
  backdrop-filter: blur(11.649999618530273px);
  background-color: var(--, #fff);
  display: flex;
  margin-top: 8px;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  padding: 16px 15px;
}
@media (max-width: 991px) {
  .div-10- {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
  }
}
.div-11- {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-11 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-12- {
  color: #000;
  align-self: center;
  margin: auto 0;
  font: 400 12px Poppins, sans-serif;
}
.div-13- {
  color: #000;
  margin: auto 0;
  font: 400 12px Poppins, sans-serif;
}
.div-14- {
  color: #000;
  font: 400 12px Poppins, sans-serif;
}
.div-15- {
  color: #000;
  align-self: start;
  font: 400 15px Poppins, sans-serif;
}
.div-16- {
  border: 1px solid #464646;
  backdrop-filter: blur(11.649999618530273px);
  background-color: var(--, #fff);
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  padding: 16px;
}
@media (max-width: 991px) {
  .div-16- {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
  }
}
.div-17- {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-17- {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-18- {
  color: #000;
  align-self: center;
  margin: auto 0;
  font: 400 12px Poppins, sans-serif;
}
.div-19- {
  color: #000;
  align-self: center;
  width: 324px;
  margin: auto 0;
  font: 400 12px Poppins, sans-serif;
}
.div-20- {
  color: #000;
  font: 400 12px Poppins, sans-serif;
}
.div-21- {
  color: #000;
  text-align: center;
  align-self: start;
  font: 400 15px Poppins, sans-serif;
}
.div-22- {
  color: var(--black, #383838);
  text-transform: capitalize;
  margin-top: 21px;
  font: 400 16px Montserrat, sans-serif;
}
@media (max-width: 991px) {
  .div-22- {
    max-width: 100%;
  }
}
.div-23- {
  color: var(--black, #383838);
  text-transform: capitalize;
  margin-top: 10px;
  font: 400 16px Montserrat, sans-serif;
}
@media (max-width: 991px) {
  .div-23- {
    max-width: 100%;
  }
}
.div-24- {
  border-radius: 0px 0px 10px 10px;
  background-color: #ededed;
  display: flex;
  margin-top: 23px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 22px 42px 22px 34px;
}
@media (max-width: 991px) {
  .div-24- {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
  }
}
.div-25- {
  color: #e54f70;
  margin: auto 0;
  font: 400 16px Poppins, sans-serif;
}
.div-26- {
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-26- {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-27- {
  color: #000;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  font: 700 15px Poppins, sans-serif;
}
.div-28- {
  display: flex;
  flex-direction: column;
  background-color: #e54f70;
  border-radius: 5px;
  color:  #fff;
  text-align: center;
  position: relative;
  white-space: nowrap;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  overflow: hidden;
  align-self: stretch;
  aspect-ratio: 2.7567567567567566;
  justify-content: center;
  padding: 14px 28px;
  font: 700 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-28- {
    white-space: initial;
    padding: 0 20px;
  }
}
.img- {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.div-29- {
  position: relative;
}


















table{
  margin-top: 0px;
 
}
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
  background-color:  #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 43px 60px;
}
@media (max-width: 991px) {
  .div {
    padding: 0 20px;
  }
}
.div-2 {
  display: flex;
  margin-top: 12px;
  width: 100%;
  max-width: 1321px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
  }
}
.div-3 {
  color: #eff3f3;
  text-align: center;
  letter-spacing: 8.58px;
  justify-content: center;
  align-items: center;
  box-shadow: 8px 3px 9px 0px rgba(0, 0, 0, 0.25);
  background-color: #e54f70;
  align-self: stretch;
  padding: 14px 60px;
  font: 700 22px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-3 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.div-4 {
  flex-direction: column;
  fill: #464646;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  overflow: hidden;
  align-self: center;
  position: relative;
  display: flex;
  min-height: 66px;
  margin-top: 21px;
  width: 100%;
  justify-content: center;
  align-items: start;
  padding: 11px 60px;
}
@media (max-width: 991px) {
  .div-4 {
    max-width: 100%;
    padding: 0 20px;
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
.div-5 {
  position: relative;
  display: flex;
  margin-left: 19px;
  gap: 14px;
  align-items: center;
}
@media (max-width: 991px) {
  .div-5 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-6 {
  justify-content: center;
  color:  #fff;
  white-space: nowrap;
  font: 700 20px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-6 {
    white-space: initial;
  }
}
.div-7 {
  justify-content: center;
  color: #fff;
  flex-grow: 1;
  font: 400 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-7 {
    max-width: 100%;
  }
}
.div-8 {

  flex-direction: column;

  stroke-width: 1px;
  stroke: #bdbdbd;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  
  align-self: stretch;
  position: relative;
  z-index: 1;
  display: flex;
  min-height: auto;
  width: 100%;
}
@media (max-width: 991px) {
  .div-8 {
    overflow: scroll;
  overflow-y: hidden;
    max-width: 100%;
  }
}
.div-9 {
  position: relative;
  border: 1px solid #464646;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #616161;
  color:  #fff;
  font: 700 15px Poppins, sans-serif;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 12px 40px;
}
@media (max-width: 991px) {
  .div-9 {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
  }
}
.div-10 {
  color:  #fff;
  text-align: center;
  flex-grow: 1;
  white-space: nowrap;
  font: 700 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-10 {
    white-space: initial;
  }
}
.div-11 {
  color: var(--, #fff);
  font: 700 15px Poppins, sans-serif;
}
.div-12 {
  color: var(--, #fff);
  text-align: center;
  font: 700 15px Poppins, sans-serif;
}
.div-13 {
  color: var(--, #fff);
  text-align: center;
  font: 700 15px Poppins, sans-serif;
}
.div-14 {
  color: var(--, #fff);
  text-align: center;
  font: 700 15px Poppins, sans-serif;
}
.div-15 {
  color: var(--, #fff);
  text-align: center;
  white-space: nowrap;
  font: 700 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-15 {
    white-space: initial;
  }
}
.div-16 {
  align-items: flex-start;
  align-self: stretch;
  position: relative;
  justify-content: space-between;
  border: 1px solid #464646;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--, #fff);
  display: flex;
  margin-top: 14px;
  gap: 32px;
  padding: 11px 10px;
  font: 400 12px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-16 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-17 {
  color: #000;
  text-align: center;

  width: 180px;
  white-space: nowrap;
  font: 400 12px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-17 {
    white-space: initial;
  }
}
.div-18 {
  align-self: center;
    width: 240px;
  color: #000;
  font: 400 12px Poppins, sans-serif;
}
.div-19 {
  align-self: center;
    width: 150px;
  color: #000;
  text-align: center;
  font: 400 12px Poppins, sans-serif;
}
.div-20 {
  align-self: center;
    width: 222px;
  color: #000;
  text-align: center;
  font: 400 12px Poppins, sans-serif;
}
.div-21 {
  align-self: center;
    width: 200px;
  color: #000;
  text-align: center;
  font: 400 12px Poppins, sans-serif;
}
.div-22 {
  
    
  color: #ffa842;
  
  
  font: 600 12px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-22 {
    white-space: initial;
  }
}
.div-23 {
  align-self: end;
  display: flex;
  margin-top: 110px;
  gap: 17px;
}
@media (max-width: 991px) {
  .div-23 {
    margin-top: 40px;
  }
}
.div-24 {
  justify-content: center;
  color: #2f3030;
  text-align: center;
  white-space: nowrap;
  border-radius: 2px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #fecb00;
  flex-grow: 1;
  padding: 6px 28px;
  font: 500 12px Poppins, sans-serif;
  align-self: center;
}
@media (max-width: 991px) {
  .div-24 {
    white-space: initial;
    padding: 0 20px;
  }
}
.div-25 {
  align-self: center;
  justify-content: center;
  color:  #fff;
  text-align: center;
  white-space: nowrap;
  border-radius: 2px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #2f3030;
  flex-grow: 1;
  padding: 6px 28px;
  font: 500 12px Poppins, sans-serif;
  align-self: center;
}
@media (max-width: 991px) {
  .div-25 {
    white-space: initial;
    padding: 0 20px;
  }
}
.div-26 {
  justify-content: center;
  color:  #fff;
  text-align: center;
  white-space: nowrap;
  border-radius: 2px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #2f3030;
  flex-grow: 1;
  padding: 6px 28px;
  font: 500 12px Poppins, sans-serif;
  align-self: center;
}
@media (max-width: 991px) {
  .div-26 {
    white-space: initial;
    padding: 0 20px;
  }
}
</style>