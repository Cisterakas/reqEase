<script setup>
import Footer from './Footer.vue';
import NavigationBar from './NavigationBar.vue'
</script>


<template>
  <NavigationBar/>
  <div class="div">
    <div class="div-2">
      
      <div class="div-3">
        <router-link to="/" type="button">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fae6750-8a3a-466b-8165-5a224d3c607d?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
          class="img"
        />
      </router-link>
        <div class="div-4">
          <div class="div-5">OFFICE OF THE REGISTRAR</div>
          <div class="div-6">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ee75949-d5c8-414c-b0fe-8622c058ad44?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
              class="img-2"
            />
            <div class="div-7">
              <div class="div-8">
                This is the University of the Immaculate Conception’s online
                request for documents exclusively for the use of UIC students
                and alumni only.
              </div>
              <div class="div-9">
                <span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                  "
                  >REMINDERS<br /> </span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                  "
                  >1.</span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                  "
                >
                </span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                  "
                >
                  Please allow maximum of </span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                  "
                  >3 working days</span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                  "
                >
                  to verify your request. You will receive an </span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                  "
                  >email or SMS for the costs</span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                  "
                  >, and the manner of payment and
                  confirmation. If you haven’t received a confirmation that your
                  request has been attended to after 3 working days, please send
                  us an email at </span
                ><a
                  href="mailto:registrar_request@uic.edu.ph"
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                    color: rgba(0, 71, 255, 1);
                  "
                  target="_blank"
                  >registrar_request@uic.edu.ph</a
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                  "
                >
                  for assistance.<br /></span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                  "
                >
                </span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                  "
                  >2. </span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                  "
                  >Only the owner </span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                  "
                  >of the records is allowed to request for documents in
                  connection with his/her records.<br /></span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                  "
                >
                </span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                  "
                  >3. This University reserves the right to withhold, deny or
                  cancel any request for document due to pending
                  accountabilities (bank accounts,
                  incomplete credentials on file, etc.)<br /></span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                  "
                >
                </span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                  "
                  >4. Processing time of request commences only upon receipt of
                  payment and confirmation from the Cashier.<br /></span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                  "
                >
                </span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                  "
                  >5. Request </span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                  "
                  >not claimed after 60 days</span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                  "
                >
                  from the date of request will be discarded. Therefore, another
                  request will be charged.<br /></span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                  "
                  ><br />PRIVACY CONSENT <br /></span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                  "
                >
                  <br />
                  I hereby agree and consent the University of the Immaculate
                  Conception may collect, use, disclose and process my personal
                  information set out in
                  this form and/or otherwise provided by me for the purpose of
                  requesting school documents as stated in the R.A. 10173,
                  otherwise known as the Data
                  Privacy Act of 2012 and other related data privacy policies.
                  <br /><br />
                  The information will only be accessed by authorized university
                  staff. I understand that my data will be held securely and
                  will not be disclosed to
                  third parties without my permission. When this information is
                  no longer required, official university procedure will be
                  followed to dispose my data. <br /><br />
                  By choosing the </span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                  "
                  >“I AGREE” </span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                  "
                  >option I represent and warrant that I am the data subject and
                  that I have read and understood all the conditions and
                  reminders in connection with this request and agree to comply
                  with them. By clicking selecting an option, I also certify
                  that the information given
                  are true to the best of my knowledge and belief.<br /></span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                  "
                  ><br
                /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="div-10">
        <div class="div-11">
          Please select one of the following options, according to your
          situation, to start your request:
        </div>
        <div class="div-12">
          <div class="div-13">
            <div class="column">
              <div class="div-14">
                <div class="div-15">
                  <div class="column-2">
                    <div class="div-16">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f77f8408-653a-4461-bb1a-72dc2624b1ff?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                        class="img-3"
                      />
                    </div>
                  </div>
                  <div class="column-3">
                    <div class="div-17">
                      <div class="div-18">OPTION A</div>
                      <div class="div-19">
                        Please select this option if you have <br />your MYUIC
                        account.
                      </div>
                      <router-link to="/login" type="button" class="div-20">SELECT</router-link>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column-4">
              <div class="div-21">
                <div class="div-22">
                  <div class="column-5">
                    <div class="div-23">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b642727-ed57-4e63-96af-7f63fb2eeb7d?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                        class="img-4"
                      />
                    </div>
                  </div>
                  <div class="column-6">
                    <div class="div-24">
                      <div class="div-25">OPTION B</div>
                      <div class="div-26">
                        <span
                          style="
                            font-family: Poppins, -apple-system, Roboto,
                              Helvetica, sans-serif;
                            font-weight: 400;
                          "
                          >Please select this option if you </span
                        ><span
                          style="
                            font-family: Poppins, -apple-system, Roboto,
                              Helvetica, sans-serif;
                            font-weight: 700;
                          "
                          >DO NOT</span
                        ><span
                          style="
                            font-family: Poppins, -apple-system, Roboto,
                              Helvetica, sans-serif;
                            font-weight: 400;
                          "
                        >
                          have your MYUIC account.</span
                        >
                      </div>
                      <router-link to="/personalInfo2" type="button" class="div-20">SELECT</router-link>
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
  <Footer/>
</template>



<style scoped>
.div {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
}
.div-2 {
  display: flex;
  width: 100%;
  max-width: 1190px;
  flex-direction: column;
  margin: 33px 0 60px;
}
@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
    margin-bottom: 40px;
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
  justify-content: center;
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
  color: #fff;
  text-align: center;
  letter-spacing: 7.0200000000000005px;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  box-shadow: 8px 8px 12.3px 0px rgba(0, 0, 0, 0.25);
  background-color: #e54f70;
  padding: 14px 20px;
  font: 800 18px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-5 {
    white-space: initial;
    max-width: 100%;
  }
}
.div-6 {
  display: flex;
  flex-direction: column;
  fill: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  overflow: hidden;
  position: relative;
  display: flex;
  min-height: 527px;
  margin-top: 30px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 47px 20px;
}
@media (max-width: 991px) {
  .div-6 {
    max-width: 100%;
  }
}
.img-2 {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.div-7 {
  position: relative;
  display: flex;
  margin-bottom: 26px;
  width: 772px;
  max-width: 100%;
  flex-direction: column;
}
.div-8 {
  color: #000;
  text-align: center;
  font: 600 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-8 {
    max-width: 100%;
  }
}
.div-9 {
  margin-top: 28px;
  font: 400 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-9 {
    max-width: 100%;
  }
}
.div-10 {
  align-self: end;
  display: flex;
  width: 939px;
  max-width: 100%;
  flex-direction: column;
  align-items: start;
  margin: 64px 39px 0 0;
}
@media (max-width: 991px) {
  .div-10 {
    margin: 40px 10px 0 0;
  }
}
.div-11 {
  color: #000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-left: 31px;
  max-width: 757px;
  font: 400 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-11 {
    max-width: 100%;
  }
}
.div-12 {
  justify-content: center;
  align-self: stretch;
  margin-top: 24px;
}
@media (max-width: 991px) {
  .div-12 {
    max-width: 100%;
  }
}
.div-13 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-13 {
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
.div-14 {
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  flex-grow: 1;
  width: 100%;
  margin: 0 auto;
}
@media (max-width: 991px) {
  .div-14 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-15 {
  display: flex;
}
@media (max-width: 991px) {
  .div-15 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 45%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
.div-16 {
  background-color: #999;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 35px 20px;
}
.img-3 {
  aspect-ratio: 1.1;
  object-fit: contain;
  object-position: center;
  width: 108px;
  fill: #fff;
  overflow: hidden;
  max-width: 100%;
}
.column-3 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 55%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-3 {
    width: 100%;
  }
}
.div-17 {
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 33px 35px 14px;
}
@media (max-width: 991px) {
  .div-17 {
    padding: 0 20px;
  }
}
.div-18 {
  color: #000;
  text-align: center;
  white-space: nowrap;
  font: 800 18px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-18 {
    white-space: initial;
  }
}
.div-19 {
  color: #000;
  text-align: center;
  align-self: stretch;
  margin-top: 12px;
  font: 400 10px Poppins, sans-serif;
}
.div-20 {
  color: #fff;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #e54f70;
  align-self: stretch;
  margin-top: 28px;
  padding: 9px 20px;
  font: 800 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-20 {
    white-space: initial;
    margin: 0 9px 0 8px;
  }
}
.div-20:hover{
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
.div-21 {
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  flex-grow: 1;
  width: 100%;
  margin: 0 auto;
}
@media (max-width: 991px) {
  .div-21 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-22 {
  display: flex;
}
@media (max-width: 991px) {
  .div-22 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-5 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 45%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-5 {
    width: 100%;
  }
}
.div-23 {
  background-color: #999;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 35px 20px;
}
.img-4 {
  aspect-ratio: 1.51;
  object-fit: contain;
  object-position: center;
  width: 148px;
  fill: #fff;
  overflow: hidden;
}
.column-6 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 55%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-6 {
    width: 100%;
  }
}
.div-24 {
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 33px 40px 14px;
}
@media (max-width: 991px) {
  .div-24 {
    padding: 0 20px;
  }
}
.div-25 {
  color: #000;
  text-align: center;
  font: 800 18px Poppins, sans-serif;
}
.div-26 {
  color: #000;
  text-align: center;
  align-self: stretch;
  margin-top: 12px;
  font: 400 10px Poppins, sans-serif;
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
  margin-top: 28px;
  padding: 9px 20px;
  font: 800 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-27 {
    white-space: initial;
  }
}
</style>