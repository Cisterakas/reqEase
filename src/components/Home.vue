<script setup>
import Footer from './Footer.vue';
import NavigationBar from './NavigationBar.vue'
</script>
<template>
  <NavigationBar/>
  <div class="div">
    <div class="div-2">
      <div class="div-3">
        Empowering Tomorrow, Preserving Today: Where Precision Meets Privacy,
        Your Documents Find a Trusted Home at University of the Immaculate
        Conception's Registrar
      </div>
      <div class="div-4">
        <div class="div-5">
          <div class="column">
            <div class="div-6">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0175db0d-25d8-4908-b1f8-ceba6ad196b4?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0175db0d-25d8-4908-b1f8-ceba6ad196b4?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0175db0d-25d8-4908-b1f8-ceba6ad196b4?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0175db0d-25d8-4908-b1f8-ceba6ad196b4?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0175db0d-25d8-4908-b1f8-ceba6ad196b4?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0175db0d-25d8-4908-b1f8-ceba6ad196b4?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0175db0d-25d8-4908-b1f8-ceba6ad196b4?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0175db0d-25d8-4908-b1f8-ceba6ad196b4?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                class="img"
              />
              <div class="div-7">
                Submit your official document requests through our streamlined
                service, managed by the University of the Immaculate
                Conception's Registrar. Trust us to maintain the accuracy and
                confidentiality of your records, ensuring a secure and efficient
                process.
              </div>
              
              <router-link to="/consent" type="button" class="div-8">REQUEST FOR OFFICIAL DOCUMENT</router-link>
            </div>
          </div>
          <div class="column-2">
            <div class="div-9">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/563e95e3-7419-4861-940a-3649dd2ff8ea?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/563e95e3-7419-4861-940a-3649dd2ff8ea?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/563e95e3-7419-4861-940a-3649dd2ff8ea?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/563e95e3-7419-4861-940a-3649dd2ff8ea?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/563e95e3-7419-4861-940a-3649dd2ff8ea?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/563e95e3-7419-4861-940a-3649dd2ff8ea?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/563e95e3-7419-4861-940a-3649dd2ff8ea?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/563e95e3-7419-4861-940a-3649dd2ff8ea?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                class="img"
              />
              <div class="div-10">
                Effortlessly track your documents with our 'Track My Document'
                feature. Powered by the University of the Immaculate
                Conception's Registrar, stay informed and assured as we provide
                real-time updates on the status and location of your important
                records.
              </div>
              
              <router-link to="/login" type="button" class="div-8">TRACK MY DOCUMENT</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>



<style scoped>
.div {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
}
.div-2 {
  display: flex;
  width: 100%;
  max-width: 1224px;
  flex-direction: column;
  margin: 70px 0;
}
@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
    margin: 40px 0;
  }
}
.div-3 {
  color: #000;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font: 500 22px/33px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-3 {
    max-width: 100%;
  }
}
.div-4 {
  align-self: center;
  margin-top: 25px;
  width: 1123px;
  max-width: 100%;
}
.div-5 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-5 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
.div-6 {
  box-shadow: 8px 18px 23.3px 0px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  padding-bottom: 22px;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
}
@media (max-width: 991px) {
  .div-6 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.img {
  aspect-ratio: 1.17;
  object-fit: contain;
  object-position: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  box-shadow: 8px 18px 23.3px 0px rgba(0, 0, 0, 0.3) inset;
  overflow: hidden;
}
@media (max-width: 991px) {
  .img {
    max-width: 100%;
  }
}
.div-7 {
  color: #000;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-self: center;
  margin-top: 34px;
  max-width: 478px;
  font: 400 15px/22.5px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-7 {
    max-width: 100%;
  }
}
.div-8 {
  color: #fff;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: #e54f70;
  align-self: center;
  margin-top: 26px;
  width: 480px;
  max-width: 100%;
  padding: 9px 1px;
  font: 800 25px/37.5px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-8 {
    max-width: 100%;
    padding-right: -1px;
  }
}
.div-8:hover{
  background-color: #2f3030;
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
.div-9 {
  box-shadow: 8px 18px 23.3px 0px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  padding-bottom: 22px;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
}
@media (max-width: 991px) {
  .div-9 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-10 {
  color: #000;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-self: center;
  margin-top: 34px;
  max-width: 472px;
  font: 400 15px/22.5px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-10 {
    max-width: 100%;
  }
}
.div-11 {
  color: #fff;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: #e54f70;
  align-self: center;
  margin-top: 26px;
  width: 480px;
  max-width: 100%;
  padding: 9px 1px;
  font: 800 25px/37.5px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-11 {
    max-width: 100%;
    padding-right: -1px;
  }
}
</style>