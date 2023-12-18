<script setup>
 import { ref } from 'vue';
import newNavbar from "./newNavbar.vue";
import ApplicationNavigationBar from "./ApplicationNavigationBar.vue";
import Footer from "./Footer.vue";

const imageUrl = ref('');

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      imageUrl.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};
</script>

<template>
  <newNavbar />
  <ApplicationNavigationBar />
  <div class="div">
    <div class="div-2">
      <div class="div-3">
        <router-link to="/reqDoc" type="button">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d60bd5e6c13b359f29bfa89f05071f1092c5bdc8b6eb63cc4c3dc2eef1800195?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
            class="img"
          />
        </router-link>
        <div class="div-4">
          <div class="div-5">SHIPMENT</div>
          <div class="div-6">
            <span
              style="
                font-family: Poppins, -apple-system, Roboto, Helvetica,
                  sans-serif;
                font-weight: 700;
              "
              >SHIPPING INFORMATION<br /></span
            ><span
              style="
                font-family: Poppins, -apple-system, Roboto, Helvetica,
                  sans-serif;
                font-weight: 400;
              "
              >Mail Requested Documents
            </span>
          </div>
          <div class="div-7">
            <div class="div-8">MODE OF CLAIMING DOCUMENTS</div>
            <div class="div-15">
              <input
                type="radio"
                class="img-3"
                id="pickup"
                name="mode of payment"
                value="For Pickup"
              />

              <div class="div-10">For Pickup</div>
            </div>
            <div class="div-9">
              <input
                type="radio"
                class="img-3"
                id="representative"
                name="mode of payment"
                value="Through representative"
              />
              <div class="div-10">
                Through Representative (please provide an authorization letter)
              </div>
            </div>
            <div class="div-9">
              <input
                type="radio"
                class="img-3"
                id="courier"
                name="mode of payment"
                value="Through courier"
              />
              <div class="div-10">Through Courier</div>
            </div>
            <div class="div-9">
              <input
                type="radio"
                class="img-3"
                id="email"
                name="mode of payment"
                value="Through email"
              />
              <div class="div-10">Through Email (soft copy)</div>
            </div>
            <div class="div-17">
              <span
                style="
                  font-family: Poppins, -apple-system, Roboto, Helvetica,
                    sans-serif;
                  font-weight: 600;
                "
                >If THROUGH COURIER</span
              ><span
                style="
                  font-family: Poppins, -apple-system, Roboto, Helvetica,
                    sans-serif;
                  font-weight: 400;
                "
                >, Please indicate Complete Mailing Address:</span
              >
            </div>

            <div class="material-textfield">
              <input placeholder=" " type="text" class="info" />
              <label>Province</label>
            </div>

            <div class="material-textfield">
              <input placeholder=" " type="text" class="info" />
              <label>Municipality</label>
            </div>
            <div class="material-textfield">
              <input placeholder=" " type="text" class="info"/>
              <label>Barangay</label>
            </div>
            <div class="material-textfield">
              <input placeholder=" " type="text" class="info"/>
              <label>Present Address</label>
            </div>
            <div class="material-textfield">
              <input placeholder=" " type="text" class="info"/>
              <label>Contact Number</label>
            </div>
            <div class="material-textfield">
              <input placeholder=" " type="text" class="info" />
              <label>Email Address</label>
            </div>

          </div>
          <div class="div-30">
            <div class="div-31">
              <div class="div-32">
                <span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                  "
                  >Please allow maximum of </span
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
                  >, and the manner of payment and confirmation. If you haven’t
                  received a confirmation that your request has been attended to
                  after 3 working days, please send us an email at
                </span>
                <a href="mailto:registrar_request@uic.edu.ph" target="_blank"
                  >registrar_request@uic.edu.ph</a
                >
                <span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                  "
                >
                  for assistance. Additionally;<br /></span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                  "
                  ><br />Paying Online: <br></span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                  "
                >
                  Please note that online payments may experience slight delays.
                  Ensure timely submission to account for any processing
                  time.<br /></span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                  "
                  ><br>Paying Walk-In: <br></span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                  "
                >
                  Opt for walk-in payments for immediate processing at the
                  registrar. Receive your receipt on the spot and proceed with
                  your requests to the <br />
                  registrar’s window promptly.<br /><br
                /></span>
              </div>
              <div class="div-33">VERY IMPORTANT</div>
              <div class="div-34">
                <span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                  "
                  >Kindly</span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                  "
                >
                  upload your identification (ID) card</span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                  "
                >
                  for verification purposes. Any valid ID will do as long as it
                  has your signature (e.g, Company ID, School ID, Alumni ID,
                  government-issued IDs)<br
                /></span>
              </div>
              
              <div class="div-35">
                
                
                <section class="hero is-light">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="control uploader">
          
          <input
            ref="imageInput"
            id="imageInput"
            type="file"
            accept="image/*"
            @change="handleImageUpload"
            class="div-37"
          />
        </p>
      </div>
      <!-- Image preview -->
      <div class="field">
        <img id="thumbnail" :src="imageUrl" alt="image-preview-here" />
      </div>
    </div>
  </section>
                
              </div>


            </div>
          </div>
          <div class="div-38">Page 2 of 3</div>
        </div>
      </div>
      <router-link to="/verify" type="button" class="div-39">Next</router-link>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.material-textfield {
  position: relative;
  margin-top: 20px;
  margin-left: 70px;
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
  font: 275 15px Poppins, sans-serif;
}

.info{
  font: 275 15px Poppins, sans-serif;
  outline: none;

  color: #000;
  transition: 0.1s ease-out;

  border-radius: 10px;
  border: 2px solid #2f3030;
  align-self: stretch;
  display: flex;

  border-radius: 10px;
  align-self: center;
  display: flex;
  margin-left: 11px;
  width: 1022px;
  max-width: 100%;
  height: 50px;
  flex-direction: column;
}
input.info:focus {
  border-color: #e54f70;
}
input.info:focus + label {
  color: #e54f70;
  top: 0;
  transform: translateY(-50%) scale(0.9);
}
input.info:not(:placeholder-shown) + label {
  top: 0;
  transform: translateY(-50%) scale(0.9);
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
  margin-top: 5px;
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
  color: #fff;
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
  background-color: rgba(
    251.00000023841858,
    251.00000023841858,
    251.00000023841858,
    1
  );
  border: 1px solid
    rgba(189.12500202655792, 189.12500202655792, 189.12500202655792, 1);
  box-shadow: 8px 18px 23.299999237060547px rgba(0, 0, 0, 0.25);
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: 26px 80px 50px;
}
@media (max-width: 991px) {
  .div-7 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.div-8 {
  color: #000;
  align-self: start;
  white-space: nowrap;
  font: 600 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-8 {
    max-width: 100%;
    white-space: initial;
  }
}
.div-9 {
  align-self: start;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 6px 0 0 84px;
}
@media (max-width: 991px) {
  .div-9 {
    margin-left: 10px;
  }
}
.img-2 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-10 {
  color: #000;
  align-self: center;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-10 {
    white-space: initial;
  }
}
.div-11 {
  justify-content: center;
  align-items: center;
  align-self: start;
  display: flex;
  gap: 8px;
  margin: 7px 0 0 84px;
}
@media (max-width: 991px) {
  .div-11 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.img-3 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-12 {
  color: #000;
  align-self: stretch;
  flex-grow: 1;
  flex-basis: auto;
  font: 400 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-12 {
    max-width: 100%;
  }
}
.div-13 {
  justify-content: center;
  align-items: center;
  align-self: start;
  display: flex;
  gap: 8px;
  margin: 7px 0 0 84px;
}
@media (max-width: 991px) {
  .div-13 {
    margin-left: 10px;
  }
}
.img-4 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-14 {
  color: #000;
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-14 {
    white-space: initial;
  }
}
.div-15 {
  justify-content: center;
  align-items: center;
  align-self: start;
  display: flex;
  gap: 8px;
  margin: 7px 0 0 84px;
}
@media (max-width: 991px) {
  .div-15 {
    margin-left: 10px;
  }
}
.img-5 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-16 {
  color: #000;
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-16 {
    white-space: initial;
  }
}
.div-17 {
  color: #000;
  align-self: start;
  margin-top: 34px;
  max-width: 1103px;
  font: 600 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-17 {
    max-width: 100%;
  }
}
.div-18 {
  color: #000;
  white-space: nowrap;
  justify-content: center;
  background-color: var(--, #fff);
  align-self: start;
  z-index: 1;
  aspect-ratio: 3.6;
  margin: 24px 0 0 112px;
  padding: 0 3px;
  font: 275 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-18 {
    white-space: initial;
    margin-left: 10px;
  }
}
.div-19 {
  border-radius: 10px;
  border: 2px solid #000;
  background-color: var(--, #fff);
  align-self: center;
  display: flex;
  margin-left: 11px;
  width: 1022px;
  max-width: 100%;
  height: 50px;
  flex-direction: column;
}
.div-20 {
  color: #000;
  white-space: nowrap;
  justify-content: center;
  background-color: var(--, #fff);
  align-self: start;
  z-index: 1;
  margin: 7px 0 0 113px;
  padding: 0 4px;
  font: 275 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-20 {
    white-space: initial;
    margin-left: 10px;
  }
}
.div-21 {
  border-radius: 10px;
  border: 2px solid #000;
  background-color: var(--, #fff);
  align-self: center;
  display: flex;
  margin-left: 11px;
  width: 1022px;
  max-width: 100%;
  height: 50px;
  flex-direction: column;
}
.div-22 {
  color: #000;
  white-space: nowrap;
  justify-content: center;
  background-color: var(--, #fff);
  align-self: start;
  z-index: 1;
  margin: 7px 0 0 113px;
  padding: 0 4px;
  font: 275 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-22 {
    white-space: initial;
    margin-left: 10px;
  }
}
.div-23 {
  border-radius: 10px;
  border: 2px solid #000;
  background-color: var(--, #fff);
  align-self: center;
  display: flex;
  margin-left: 11px;
  width: 1022px;
  max-width: 100%;
  height: 50px;
  flex-direction: column;
}
.div-24 {
  color: #000;
  white-space: nowrap;
  justify-content: center;
  background-color: var(--, #fff);
  align-self: start;
  z-index: 1;
  margin: 7px 0 0 113px;
  padding: 0 3px;
  font: 275 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-24 {
    white-space: initial;
    margin-left: 10px;
  }
}
.div-25 {
  border-radius: 10px;
  border: 2px solid #000;
  background-color: var(--, #fff);
  align-self: center;
  display: flex;
  margin-left: 11px;
  width: 1022px;
  max-width: 100%;
  height: 50px;
  flex-direction: column;
}
.div-26 {
  color: #000;
  white-space: nowrap;
  justify-content: center;
  background-color: var(--, #fff);
  align-self: start;
  z-index: 1;
  margin: 7px 0 0 113px;
  padding: 0 3px;
  font: 275 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-26 {
    white-space: initial;
    margin-left: 10px;
  }
}
.div-27 {
  border-radius: 10px;
  border: 2px solid #000;
  background-color: var(--, #fff);
  align-self: center;
  display: flex;
  margin-left: 11px;
  width: 1022px;
  max-width: 100%;
  height: 50px;
  flex-direction: column;
}
.div-28 {
  color: #000;
  white-space: nowrap;
  justify-content: center;
  background-color: var(--, #fff);
  align-self: start;
  z-index: 1;
  margin: 7px 0 0 113px;
  padding: 0 3px;
  font: 275 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-28 {
    white-space: initial;
    margin-left: 10px;
  }
}
.div-29 {
  border-radius: 10px;
  border: 2px solid #000;
  background-color: var(--, #fff);
  align-self: center;
  display: flex;
  width: 1022px;
  max-width: 100%;
  height: 50px;
  flex-direction: column;
  margin: 0 0 20px 11px;
}
.div-30 {
  border-left: 1px solid #000;
  align-self: stretch;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  justify-content: center;
}
@media (max-width: 991px) {
  .div-30 {
    max-width: 100%;
  }
}
.div-31 {
  border: 1px solid #bdbdbd;
  box-shadow: 8px 18px 23.3px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--, #fff);
  display: flex;
  flex-direction: column;
  padding: 50px 78px 28px;
}
@media (max-width: 991px) {
  .div-31 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.div-32 {
  align-self: start;
  max-width: 1093px;
  font: 400 12px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-32 {
    max-width: 100%;
  }
}
.div-33 {
  color: #f00;
  align-self: start;
  margin-top: 58px;
  max-width: 1175px;
  font: 800 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-33 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-34 {
  color: #000;
  align-self: start;
  margin-top: 16px;
  max-width: 1093px;
  font: 400 12px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-34 {
    max-width: 100%;
  }
}
.div-35 {
  border-radius: 10px;
  background-color: #999;
  align-self: center;
  display: flex;
  margin-top: 15px;
  width: auto;
  max-width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 6px 56px;
}
@media (max-width: 991px) {
  .div-35 {
    padding: 0 20px;
  }
}
.div-36 {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}
.img-6 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 30px;
  overflow: hidden;
  max-width: 100%;
}
.div-37 {
  color:  #fff;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-self: center;
  margin: auto 0;
  font: 800 15px Poppins, sans-serif;
}
.div-38 {
  color: #000;
  align-self: center;
  margin-top: 20px;
  white-space: nowrap;
  font: 400 10px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-38 {
    white-space: initial;
  }
}
.div-39 {
  color: #fff;
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
  .div-39 {
    white-space: initial;
    padding: 0 20px;
  }
}
.div-39:hover {
  background-color: #084f06;
}
</style>
