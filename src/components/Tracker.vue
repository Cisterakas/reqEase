<script setup>
import { ref } from 'vue';
import newNavbar from "./newNavbar.vue";
import ApplicationNavigationBar from "./ApplicationNavigationBar.vue";
import Footer from "./Footer.vue";

const categories = ref([
    { id: 1, docType: "Authentication", dateReq: "12 / 27 / 23", claim: "Pick-Up", sched: "12 / 31 / 23", status: "To be approve" },
    { id: 8, docType: "Certificate of Grades for Written Comprehensive Examination", dateReq: "12 / 27 / 23", claim: "Courier", sched: "12 / 31 / 23", status: "To be approve" },



  ]);
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
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/09b68c18159010e63a8dd21d94ef4a7e94af1e535da9ee68fb42a85a26989cf6?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
          class="img"
        />
        <table class="div-8">
          <thead>
            <tr class="div-9">
              <th>Transaction No.</th>
              <th>Requested Document</th>
              <th>Date Requested</th>
              <th>Claiming Method</th>
              <th>Schedule to Release</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="div-16" v-for="category in categories" :key="category.id">
              <td class="div-17">{{ category.id }}</td>
              <td class="div-18">{{ category.docType }}</td>
              <td class="div-19">{{ category.dateReq }}</td>
              <td class="div-20">{{ category.claim }}</td>
              <td class="div-21">{{ category.sched }}</td>
              <td class="div-22">{{ category.status }}</td>
         
            </tr>
          </tbody>
        </table>
     
      </div>
      <div class="div-23">
        <div class="div-24">SORT DATE</div>
        <div class="div-25">PREVIOUS</div>
        <div class="div-26">NEXT</div>
      </div>
    </div>
  </div>
  <Footer/>
</template>



<style scoped>
.div {
  background-color: var(--, #fff);
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
  fill:  #fff;
  stroke-width: 1px;
  stroke: #bdbdbd;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  overflow: hidden;
  align-self: stretch;
  position: relative;
  z-index: 1;
  display: flex;
  min-height: 156px;
  width: 100%;
  padding: 28px 16px;
}
@media (max-width: 991px) {
  .div-8 {
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
  align-self: center;
    width: 100px;
  color: #ffa842;
  flex-grow: 1;
  white-space: nowrap;
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