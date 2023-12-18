<script setup>
import newNavbar from "./newNavbar.vue";
import ApplicationNavigationBar from "./ApplicationNavigationBar.vue";
import Footer from "./Footer.vue";


import { ref } from 'vue';

const counters = ref([1, 2, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);


const increment = (index) => {
  counters.value[index]++;
  
};

const decrement = (index) => {
  if (counters.value[index]) {
    counters.value[index]--;
    ;
  } else {
    counters.value[index] = 0;
    
  }
};
</script>
<template>
  <newNavbar/>
  <ApplicationNavigationBar/> 
    <div class="div">
      <div class="div-2">
        <div class="div-3">
          <router-link to="/shipping" type="button">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d60bd5e6c13b359f29bfa89f05071f1092c5bdc8b6eb63cc4c3dc2eef1800195?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
            class="img"
          />
        </router-link>
          <div class="div-4">
            <div class="div-5">VERIFICATION</div>
            <div class="div-6">
              <span
                style="
                  font-family: Poppins, -apple-system, Roboto, Helvetica,
                    sans-serif;
                  font-weight: 700;
                "
                >SUMMARY<br /></span
              ><span
                style="
                  font-family: Poppins, -apple-system, Roboto, Helvetica,
                    sans-serif;
                  font-weight: 400;
                "
                >All transactions are secure and encrypted
              </span>
            </div>
            <div class="div-7">
              <div class="div-8">

                <div class="div-43a">
                  <div class="div-44a">
                    <div class="div-45a">Document Code</div>
                    <div class="div-46a">Document Name</div>
                  </div>
                  <div class="div-47a">
                    <div class="div-48a">Document Fee</div>
                    <div class="div-49a">No. of Copies</div>
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
                      class="img-4-"
                      @click="decrement(0)"
                    />
                    <div class="div-63">{{ counters[0] }}</div>
                    <img
                    type="button"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbbc9da1b982c2639c9ffbe7f65250502689f3dfbd32c1d7c2f5aa390c081441?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5-"
                      @click="increment(0)"
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
                
            
            
              </div>
            </div>
            <div class="div-32">
              <div class="div-33">VERY IMPORTANT</div>
              <div class="div-34">
                <span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                  "
                  >Please wait for the confirmation from the registrar, before
                  moving on to the payment. While waiting, you can check your
                  status at the official website by going to </span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                  "
                  >TRACK DOCUMENT.<br
                /></span>
              </div>
            </div>
            <div class="div-35">Page 3 of 3</div>
          </div>
        </div>
        <a class="div-36" href="#open-modal">Submit</a>
        
        <div id="open-modal" class="modal-window">
  
    
    <!-- Your Modal Content Goes Here -->
    <div class="div-">
    <div class="div-2-">
      <div class="div-3-">
        <span
          style="
            font-family: Poppins, sans-serif;
            font-weight: 400;
            color: rgba(68, 75, 89, 1);
          "
          >Please wait for the </span
        ><span
          style="
            font-family: Poppins, sans-serif;
            font-weight: 700;
            color: rgba(68, 75, 89, 1);
          "
          >Registrar’s confirmation</span
        ><span
          style="
            font-family: Poppins, sans-serif;
            font-weight: 400;
            color: rgba(68, 75, 89, 1);
          "
          >, before moving on to the payment. While waiting, you can check your
          status at the official website by going to </span
        ><span
          style="
            font-family: Poppins, sans-serif;
            font-weight: 700;
            color: rgba(229, 79, 112, 1);
          "
          >TRACK DOCUMENT</span
        ><span
          style="
            font-family: Poppins, sans-serif;
            font-weight: 400;
            color: rgba(68, 75, 89, 1);
          "
          >.<br
        /></span>
      </div>
      <router-link to="/" type="button" class="div-4-">SUBMIT</router-link>
   
    </div>
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











.div- {
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: var(--, #fff);
  display: flex;
  max-width: 889px;
  flex-direction: column;
  padding: 45px 60px;
}
@media (max-width: 991px) {
  .div- {
    padding: 0 20px;
  }
}
.div-2- {
  display: flex;
  margin-top: 11px;
  width: 100%;
  max-width: 660px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-2- {
    max-width: 100%;
  }
}
.div-3- {
  color: #e54f70;
  text-align: center;
  letter-spacing: 2.4px;
  font: 400 24px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-3- {
    max-width: 100%;
  }
}
.div-4- {
  justify-content: center;
  color:  #fff;
  text-align: center;
  letter-spacing: 2.4px;
  border-radius: 20px;
  background-color: rgba(
    12.000000234693289,
    96.00000187754631,
    10.000000353902578,
    1
  );
  align-self: center;
  margin-top: 40px;
  width: 275px;
  max-width: 100%;
  align-items: center;
  padding: 27px 60px;
  font: 700 24px Montserrat, sans-serif;
}
@media (max-width: 991px) {
  .div-4- {
    padding: 0 20px;
  }
}

.div-4-:hover{
    background-color: #073c07;
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
    width: 100px;
    color: #000;
    align-self: center;
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
  .img-4- {
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
  .img-5- {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }







.div-43a {
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
    .div-43a {
      max-width: 100%;
      flex-wrap: wrap;
      padding: 0 20px;
    }
  }
  .div-44a {
    display: flex;
    justify-content: space-between;
    gap: 120px;
  }
  .div-45a {
    color:  #fff;
    text-align: center;
    font: 700 15px Poppins, sans-serif;
  }
  .div-46a {
    color:  #fff;
    text-align: center;
    font: 700 15px Poppins, sans-serif;
  }
  .div-47a {
    align-self: stretch;
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 120px;
  }
  .div-48a {
    color:  #fff;
    text-align: center;
    font: 700 15px Poppins, sans-serif;
  }
  .div-49a {
    color:  #fff;
    text-align: center;
    align-self: stretch;
    font: 700 15px Poppins, sans-serif;
  }












  .div {
    background-color: var(--, #fff);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 36px 60px;
  }
  @media (max-width: 991px) {
    .div {
      padding: 0 20px;
    }
  }
  .div-2 {
    display: flex;
    width: 100%;
    max-width: 1504px;
    flex-direction: column;
  }
  @media (max-width: 991px) {
    .div-2 {
      max-width: 100%;
    }
  }
  .div-3 {
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
    align-items: flex-start;
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
    white-space: nowrap;
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
      white-space: initial;
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-6 {
    color:  #fff;
    max-width: auto;
    background-color: rgba(
      70.00000342726707,
      70.00000342726707,
      70.00000342726707,
      1
    );
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    align-self: stretch;
    margin-top: 15px;
    align-items: start;
    padding: 29px 60px 18px;
    font: 400 15px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-6 {
      max-width: 100%;
      padding: 0 20px 0 30px;
    }
  }
  .div-7 {
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid
      rgba(189.12500202655792, 189.12500202655792, 189.12500202655792, 1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    align-self: stretch;
    display: flex;
    margin-top: 14px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 29px 60px;
  }
  @media (max-width: 991px) {
    .div-7 {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-8 {
    display: flex;
    width: 1080px;
    max-width: 100%;
    flex-direction: column;
  }
  .div-9 {
    border: 1px solid #464646;
    background-color: #616161;
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    padding: 16px 80px 16px 37px;
  }
  @media (max-width: 991px) {
    .div-9 {
      max-width: 100%;
      flex-wrap: wrap;
      padding: 0 20px;
    }
  }
  .div-10 {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .div-11 {
    color: var(--, #fff);
    text-align: center;
    font: 700 15px Poppins, sans-serif;
  }
  .div-12 {
    color: var(--, #fff);
    text-align: center;
    font: 700 15px Poppins, sans-serif;
  }
  .div-13 {
    align-self: stretch;
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
  }
  .div-14 {
    color: var(--, #fff);
    text-align: center;
    font: 700 15px Poppins, sans-serif;
  }
  .div-15 {
    color: var(--, #fff);
    text-align: center;
    align-self: stretch;
    font: 700 15px Poppins, sans-serif;
  }
  .div-16 {
    align-items: center;
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    display: flex;
    margin-top: 16px;
    width: 100%;
    justify-content: space-between;
    gap: 20px;
    padding: 7px 61px 7px 15px;
  }
  @media (max-width: 991px) {
    .div-16 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-17 {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin: auto 0;
  }
  .div-18 {
    color: #000;
    font: 400 12px Poppins, sans-serif;
  }
  .div-19 {
    color: #000;
    width: 247px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-20 {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .div-21 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-22 {
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
    .div-22 {
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
  .div-23 {
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
  .div-24 {
    border: 1px solid #464646;
    backdrop-filter: blur(11.649999618530273px);
    background-color: var(--, #fff);
    display: flex;
    margin-top: 7px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 7px 61px 7px 16px;
  }
  @media (max-width: 991px) {
    .div-24 {
      max-width: 100%;
      flex-wrap: wrap;
      padding-right: 20px;
    }
  }
  .div-25 {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin: auto 0;
  }
  .div-26 {
    color: #000;
    font: 400 12px Poppins, sans-serif;
  }
  .div-27 {
    color: #000;
    width: 376px;
    font: 400 12px Poppins, sans-serif;
  }
  .div-28 {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .div-29 {
    color: #000;
    margin: auto 0;
    font: 400 12px Poppins, sans-serif;
  }
  .div-30 {
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
    .div-30 {
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
  .div-31 {
    color: #000;
    text-align: center;
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
  .div-32 {
    border: 1px solid #bdbdbd;
    box-shadow: 8px 18px 23.3px 0px rgba(0, 0, 0, 0.25);
    background-color: #fafafa;
    align-self: stretch;
    display: flex;
    margin-top: 21px;
    flex-direction: column;
    align-items: start;
    padding: 46px 78px;
  }
  @media (max-width: 991px) {
    .div-32 {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-33 {
    color: #f00;
    max-width: 1157px;
    font: 800 15px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-33 {
      max-width: 100%;
    }
  }
  .div-34 {
    color: #000;
    max-width: 1076px;
    margin: 18px 0 6px;
    font: 400 12px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-34 {
      max-width: 100%;
    }
  }
  .div-35 {
    color: #000;
    align-self: center;
    margin-top: 28px;
    white-space: nowrap;
    font: 400 10px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-35 {
      white-space: initial;
    }
  }
  .div-36 {
    color: #fff;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #0c600a;
    align-self: end;
    margin-top: 26px;
    width: 217px;
    max-width: 100%;
    padding: 9px 60px;
    font: 800 15px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-36 {
      white-space: initial;
      padding: 0 20px;
    }
  }
  .div-36:hover {
  background-color: #084f06;
}
  </style>