<script setup>
import ApplicationNavigationBar from './ApplicationNavigationBar.vue';
import Footer from './Footer.vue';

</script>

<template>
  <ApplicationNavigationBar/>
  <div class="div">
    <div class="div-2">
      <div class="column">
        <div class="div-3">
          <div class="div-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d13c5e0d-1894-40a0-b7a2-b8ba9e317a36?"
              class="img"
            />
            <div class="div-5">ONLINE STUDENT RECORDS APPLICATION</div>
          </div>
          <div class="div-6">
            <div class="div-7">
              <span
                style="
                  font-family: Poppins, -apple-system, Roboto, Helvetica,
                    sans-serif;
                  font-weight: 700;
                "
                >Read the items below, before proceeding with your online
                application.<br
              /></span>
              <ul>
                <li>
                  <span
                    style="
                      font-family: Poppins, -apple-system, Roboto, Helvetica,
                        sans-serif;
                      font-weight: 400;
                    "
                    >ALL fields must be filled out, unless they are marked as
                    optional.</span
                  >
                </li>
                <li>Enter your name during your stay at the university.</li>
              </ul>
            </div>
            <div class="div-8">BASIC INFORMATION</div>
            <div class="div-9">
              <div class="div-10">First Name<br /></div>
              <input type="text" id="first-name" class="input" />
            </div>
            <div class="div-12">
              <div class="div-13">Last Name<br /></div>
              <input type="text" id="last-name" class="input" />
            </div>
            <div class="div-15">
              <div class="div-16">Middle Name<br /></div>
              <input type="text" id="middle-name" class="input" />
            </div>
            <div class="div-18">
              <div class="div-19">
                <span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                  "
                  >Suffix </span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                  "
                  >(optional)</span
                >
              </div>
              <input type="text" id="suffix" class="input" />
            </div>
            <div class="div-21">
              <div class="div-22">
                <span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 400;
                  "
                  >Birthdate </span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                  "
                  >(dd/mm/yyyy)</span
                >
              </div>
              <input type="date" id="birth-date" class="div-23" />
            </div>
            <div class="div-24">CONTACT INFORMATION</div>
            <div class="div-25">
              <div class="div-26">Address</div>
              <input type="text" id="address" class="input" />
            </div>
            <div class="div-28">
              <div class="div-29">Email Address</div>
              <input type="text" id="email-address" class="input" />
            </div>
            <div class="div-31">
              <div class="div-32">Mobile Number</div>
              <input type="text" id="mobile-number" class="input" />
            </div>
            <div class="div-34">COLLEGE / COURSE HISTORY</div>
            <div class="div-35">
              <div class="div-36">Last School Year Attended</div>
              <input type="text" id="last-school" class="input" />
            </div>
            <div class="div-38">
              <div class="div-39">College / Course Attended</div>
              <input type="text" id="course-attended" class="input" />
            </div>
            <div class="div-41">SIGN UP</div>
            <div class="div-42">
              <div class="div-43">Username</div>
              <input type="text" id="username" class="input" />
            </div>
            <div class="div-45">
              <div class="div-46">Password</div>
              <input type="password" id="password" class="input" />
            </div>
            <div class="div-48">
              <div class="div-49">Confirm Password</div>
              <input type="password" id="confirm-password" class="input" />
            </div>
            <div class="div-51">Page 2 of 7</div>
          </div>
        </div>
      </div>
      <div class="column-2">
        <div class="div-52">
          <div class="div-53">
            <router-link to="/docrequest" type="button" class="div-54">NEXT

            </router-link>
            
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
  padding: 0 80px 0 46px;
}
@media (max-width: 991px) {
  .div {
    padding: 0 20px;
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
  width: 83%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
.div-3 {
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: auto -193px auto 0;
}
@media (max-width: 991px) {
  .div-3 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-4 {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-4 {
    max-width: 100%;
    flex-wrap: wrap;
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
.div-5 {
  color: #fff;
  text-align: center;
  letter-spacing: 9.75px;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  box-shadow: 8px 18px 23.3px 0px rgba(0, 0, 0, 0.25);
  background-color: #e54f70;
  align-self: start;
  flex-grow: 1;
  padding: 14px 20px;
  font: 800 25px/37.5px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-5 {
    max-width: 100%;
    white-space: initial;
  }
}
.div-6 {
  align-self: center;
  display: flex;
  margin-top: 52px;
  width: 930px;
  max-width: 100%;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-6 {
    margin-top: 40px;
  }
}
.div-7 {
  color: #000;
  align-self: stretch;
  font: 400 15px/22.5px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-7 {
    max-width: 100%;
  }
}
.div-8 {
  color: #000;
  align-self: stretch;
  margin-top: 78px;
  font: 600 20px/30px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-8 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-9 {
  align-items: center;
  align-self: stretch;
  display: flex;
  margin-top: 22px;
  padding-right: 18px;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-9 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-10 {
  color: #000;
  margin: auto 0;
  font: 400 15px/22.5px Poppins, sans-serif;
}
.input {
  color: #000;
  margin: auto 0;
  font: 400 15px/22.5px Poppins, sans-serif;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 41px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-11 {
    max-width: 100%;
  }
}
.div-12 {
  align-items: center;
  align-self: stretch;
  display: flex;
  margin-top: 12px;
  padding-right: 18px;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-12 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-13 {
  color: #000;
  margin: auto 0;
  font: 400 15px/22.5px Poppins, sans-serif;
}
.div-14 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 42px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-14 {
    max-width: 100%;
  }
}
.div-15 {
  align-items: center;
  align-self: stretch;
  display: flex;
  margin-top: 13px;
  padding-right: 18px;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-15 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-16 {
  color: #000;
  margin: auto 0;
  font: 400 15px/22.5px Poppins, sans-serif;
}
.div-17 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 42px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-17 {
    max-width: 100%;
  }
}
.div-18 {
  align-items: center;
  align-self: stretch;
  display: flex;
  margin-top: 11px;
  padding-right: 18px;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-18 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-19 {
  color: #000;
  margin: auto 0;
  font: 400 15px/22.5px Poppins, sans-serif;
}
.div-20 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 42px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-20 {
    max-width: 100%;
  }
}
.div-21 {
  align-items: center;
  align-self: start;
  display: flex;
  margin-top: 11px;
  width: 521px;
  max-width: 100%;
  padding-right: 2px;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-21 {
    flex-wrap: wrap;
  }
}
.div-22 {
  color: #000;
  margin: auto 0;
  font: 400 15px/22.5px Poppins, sans-serif;
}
.div-23 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 296px;
  height: 42px;
  flex-direction: column;
  color: #000;
  margin: auto 0;
  font: 400 15px/22.5px Poppins, sans-serif;
}
.div-24 {
  color: #000;
  align-self: stretch;
  margin-top: 101px;
  font: 600 20px/30px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-24 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-25 {
  align-self: stretch;
  display: flex;
  margin-top: 22px;
  padding-right: 18px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-25 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-26 {
  color: #000;
  margin: auto 0;
  font: 400 15px/22.5px Poppins, sans-serif;
}
.div-27 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 41px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-27 {
    max-width: 100%;
  }
}
.div-28 {
  align-self: stretch;
  display: flex;
  margin-top: 12px;
  padding-right: 18px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-28 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-29 {
  color: #000;
  margin: auto 0;
  font: 400 15px/22.5px Poppins, sans-serif;
}
.div-30 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 42px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-30 {
    max-width: 100%;
  }
}
.div-31 {
  align-self: stretch;
  display: flex;
  margin-top: 13px;
  padding-right: 18px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-31 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-32 {
  color: #000;
  margin: auto 0;
  font: 400 15px/22.5px Poppins, sans-serif;
}
.div-33 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 42px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-33 {
    max-width: 100%;
  }
}
.div-34 {
  color: #000;
  align-self: stretch;
  margin-top: 107px;
  font: 600 20px/30px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-34 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-35 {
  align-self: stretch;
  display: flex;
  margin-top: 18px;
  padding-right: 10px;
  align-items: center;
  justify-content: space-between;
  gap: 19px;
}
@media (max-width: 991px) {
  .div-35 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-36 {
  color: #000;
  margin: auto 0;
  font: 400 15px/22.5px Poppins, sans-serif;
}
.div-37 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 41px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-37 {
    max-width: 100%;
  }
}
.div-38 {
  align-self: stretch;
  display: flex;
  margin-top: 12px;
  padding-right: 10px;
  align-items: center;
  justify-content: space-between;
  gap: 19px;
}
@media (max-width: 991px) {
  .div-38 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-39 {
  color: #000;
  margin: auto 0;
  font: 400 15px/22.5px Poppins, sans-serif;
}
.div-40 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 42px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-40 {
    max-width: 100%;
  }
}
.div-41 {
  color: #000;
  align-self: stretch;
  margin-top: 96px;
  font: 600 20px/30px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-41 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-42 {
  align-items: center;
  align-self: stretch;
  display: flex;
  margin-top: 25px;
  padding-right: 18px;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-42 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-43 {
  color: #000;
  margin: auto 0;
  font: 400 15px/22.5px Poppins, sans-serif;
}
.div-44 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 41px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-44 {
    max-width: 100%;
  }
}
.div-45 {
  align-self: stretch;
  display: flex;
  margin-top: 12px;
  padding-right: 18px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-45 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-46 {
  color: #000;
  margin: auto 0;
  font: 400 15px/22.5px Poppins, sans-serif;
}
.div-47 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 42px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-47 {
    max-width: 100%;
  }
}
.div-48 {
  align-self: stretch;
  display: flex;
  margin-top: 12px;
  padding-right: 18px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-48 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-49 {
  color: #000;
  margin: auto 0;
  font: 400 15px/22.5px Poppins, sans-serif;
}
.div-50 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 42px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-50 {
    max-width: 100%;
  }
}
.div-51 {
  color: #000;
  align-self: center;
  white-space: nowrap;
  margin: 135px 0 0 98px;
  font: 400 15px/22.5px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-51 {
    margin-top: 40px;
    white-space: initial;
  }
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 17%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
.div-52 {
  justify-content: center;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
.div-53 {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 50px 15px;
}
.div-54 {
  color: #fff;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 8px 18px 23.3px 0px rgba(0, 0, 0, 0.25);
  background-color: #0c600a;
  margin: 1495px 0 42px;
  padding: 12px 20px;
  font: 800 25px/37.5px Poppins, sans-serif;
}
.div-54:hover{
  background-color: #082707;
}
@media (max-width: 991px) {
  .div-54 {
    white-space: initial;
    margin: 40px 0;
  }
}
</style>