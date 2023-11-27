<script setup>
import Footer from './Footer.vue';
import NavigationBar from './NavigationBar.vue';
</script>
<template>
  <NavigationBar/>
  <div class="div">
    <div class="div-2">
      <router-link to="/" type="button">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7a6676f-6df7-40cf-adc3-6be69dcb8e47?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
        class="img"
      />
    </router-link>
      <div class="div-3">OFFICE OF THE REGISTRAR</div>
    </div>
    <div class="div-4">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cab1e48-ca19-43c8-8e27-0bd6703d59c1?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
        class="img-2"
      />
      <div class="div-5">
        This is the University of the Immaculate Conception’s online request for
        documents exclusively for the use of UIC students and alumni only.
      </div>
      <div class="div-6">
        <span
          style="
            font-family: Poppins, sans-serif;
            font-weight: 700;
          "
          >PRIVACY CONSENT <br /></span
        ><span
          style="
            font-family: Poppins, sans-serif;
            font-weight: 400;
          "
        >
          <br />I hereby agree and consent the University of the Immaculate
          Conception may collect, use, disclose and process my personal
          information set out in this form and/or otherwise provided by me for
          the purpose of requesting school documents as stated in the R.A.
          10173, otherwise known as the Data Privacy Act of 2012 and other
          related data privacy policies. <br /><br />The information will only
          be accessed by authorized university staff. I understand that my data
          will be held securely and will not be disclosed to third parties
          without my permission. When this information is no longer required,
          official university procedure will be followed to dispose my data.
          <br />By choosing an option I represent and warrant that I am the data
          subject and that I have read and understood all the conditions and
          reminders in connection with this request and agree to comply with
          them. By clicking selecting an option, I also certify that the
          information given are true to the best of my knowledge and
          belief.</span
        >
      </div>
    </div>
    <div class="div-7">
      Please select one of the following options, according to your situation,
      to start your request:
    </div>
    <div class="div-8">
      <div class="div-9">
        <div class="column">
          <div class="div-10">
            <div class="div-11">
              <div class="div-12">
                <div class="column-2">
                  <div class="div-13">
                    <div class="div-14">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cad324d-3f68-418f-90ea-eeb7c3f9faaa?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                        class="img-3"
                      />
                    </div>
                  </div>
                </div>
                <div class="column-3">
                  <div class="div-15">
                    <div class="div-16">OPTION A</div>
                    <div class="div-17">
                      Please select this option if you have <br />your MYUIC
                      account.
                    </div>
                    <router-link to="/login" type="button" class="div-18">SELECT</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column-4">
          <div class="div-19">
            <div class="div-20">
              <div class="div-21">
                <div class="column-5">
                  <div class="div-22">
                    <div class="div-23">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a33ef53e-11f3-4e22-a9c1-8e2f01cfb76c?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                        class="img-4"
                      />
                    </div>
                  </div>
                </div>
                <div class="column-6">
                  <div class="div-24">
                    <div class="div-25">OPTION B</div>
                    <div class="div-26">
                      <span
                        style="
                          font-family: Poppins, -apple-system, Roboto, Helvetica,
                            sans-serif;
                          font-weight: 400;
                        "
                        >Please select this option if you </span
                      ><span
                        style="
                          font-family: Poppins, -apple-system, Roboto, Helvetica,
                            sans-serif;
                          font-weight: 700;
                        "
                        >DO NOT</span
                      ><span
                        style="
                          font-family: Poppins, -apple-system, Roboto, Helvetica,
                            sans-serif;
                          font-weight: 400;
                        "
                      >
                        have your MYUIC account.</span
                      >
                    </div>
                    <router-link to="/personalInfo" type="button" class="div-18">SELECT</router-link>
                    
                  </div>
                </div>
              </div>
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
  padding: 0 80px 0 46px;
}
@media (max-width: 991px) {
  .div {
    padding: 0 20px;
  }
}
.div-2 {
  display: flex;
  margin-top: 58px;
  width: 100%;
  max-width: 1468px;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
}
.img {
  aspect-ratio: 1.14;
  object-fit: contain;
  object-position: center;
  width: 79px;
  overflow: hidden;
  max-width: 100%;
}
.div-3 {
  color: #fff;
  text-align: center;
  letter-spacing: 9.75px;
  white-space: nowrap;
  align-items: center;
  box-shadow: 8px 18px 23.3px 0px rgba(0, 0, 0, 0.25);
  background-color: #e54f70;
  align-self: start;
  flex-grow: 1;
  padding: 14px 20px;
  font: 800 25px/37.5px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-3 {
    max-width: 100%;
    white-space: initial;
  }
}
.div-4 {
  display: flex;
  flex-direction: column;
  fill: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  overflow: hidden;
  position: relative;
  display: flex;
  min-height: 428px;
  margin-top: 12px;
  width: 100%;
  max-width: 1300px;
  padding: 34px 80px 47px;
}
@media (max-width: 991px) {
  .div-4 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.img-2 {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.div-5 {
  position: relative;
  color: #000;
  text-align: center;
  max-width: 1110px;
  font: 600 23px/34.5px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-5 {
    max-width: 100%;
    margin-right: 7px;
  }
}
.div-6 {
  position: relative;
  color: #000;
  margin-top: 12px;
  max-width: 1126px;
  font: 400 15px/22.5px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-6 {
    max-width: 100%;
    margin-right: 7px;
  }
}
.div-7 {
  color: #000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 1071px;
  margin: 49px 0 0 -83px;
  font: 400 22px/33px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-7 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-8 {
  margin-bottom: 58px;
  width: 100%;
  max-width: 1300px;
}
@media (max-width: 991px) {
  .div-8 {
    max-width: 100%;
    margin-bottom: 40px;
  }
}
.div-9 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-9 {
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
.div-10 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-10 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-11 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
}
@media (max-width: 991px) {
  .div-11 {
    max-width: 100%;
  }
}
.div-12 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-12 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 48%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
.div-13 {
  justify-content: center;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-13 {
    margin-top: 19px;
  }
}
.div-14 {
  background-color: #999;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
}
.img-3 {
  aspect-ratio: 1.06;
  object-fit: contain;
  object-position: center;
  width: 159px;
  fill: #fff;
  overflow: hidden;
  max-width: 100%;
}
.column-3 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 52%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-3 {
    width: 100%;
  }
}
.div-15 {
  display: flex;
  flex-direction: column;
  margin: auto 0;
}
@media (max-width: 991px) {
  .div-15 {
    margin-top: 40px;
  }
}
.div-16 {
  color: #000;
  text-align: center;
  font: 800 25px/37.5px Poppins, sans-serif;
}
.div-17 {
  color: #000;
  text-align: center;
  margin-top: 15px;
  font: 400 15px/22.5px Poppins, sans-serif;
}
.div-18 {
  color: #fff;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #e54f70;
  align-self: center;
  margin-top: 15px;
  width: 284px;
  max-width: 100%;
  padding: 12px 20px;
  font: 800 25px/37.5px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-18 {
    white-space: initial;
  }
}
.div-18:hover{
  background-color: #2f3030;
}
.column-4 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-4 {
    width: 100%;
  }
}
.div-19 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-19 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-20 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
}
@media (max-width: 991px) {
  .div-20 {
    max-width: 100%;
  }
}
.div-21 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-21 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-5 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 51%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-5 {
    width: 100%;
  }
}
.div-22 {
  justify-content: center;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-22 {
    margin-top: 33px;
  }
}
.div-23 {
  background-color: #999;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
}
.img-4 {
  aspect-ratio: 1.49;
  object-fit: contain;
  object-position: center;
  width: 223px;
  fill: #fff;
  overflow: hidden;
  max-width: 100%;
}
.column-6 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 49%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-6 {
    width: 100%;
  }
}
.div-24 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto 0;
}
@media (max-width: 991px) {
  .div-24 {
    margin-top: 40px;
  }
}
.div-25 {
  color: #000;
  text-align: center;
  font: 800 25px/37.5px Poppins, sans-serif;
}
.div-26 {
  color: #000;
  text-align: center;
  align-self: stretch;
  margin-top: 15px;
  font: 400 15px/22.5px Poppins, sans-serif;
}
.div-27 {
  color: #fff;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #e54f70;
  align-self: stretch;
  margin-top: 15px;
  padding: 12px 20px;
  font: 800 25px/37.5px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-27 {
    white-space: initial;
  }
}
</style>