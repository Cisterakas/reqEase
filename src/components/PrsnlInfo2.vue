<script setup>
import ApplicationNavigationBar from './ApplicationNavigationBar.vue';
import Footer from './Footer.vue';

</script>
<template>
  <ApplicationNavigationBar/>
  <div class="div">
    <div class="div-2">
      <div class="div-3">
        <router-link to="/consent" type="button">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f39e5024-d9f4-41db-b624-7660eeea0649?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
          class="img"
        /></router-link>
        <div class="div-4">
          <div class="div-5">ONLINE STUDENT RECORDS APPLICATION</div>
          <div class="div-6">
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
                  <b>optional.</b></span
                >
              </li>
              <li>Enter your name during your stay at the university.</li>
            </ul>
          </div>
          <div class="div-8">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a052d1e5-cf72-4ed3-96ba-cbbaa7074d7c?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
              class="img-3"
            />
            <div class="div-9">BASIC INFORMATION</div>
            <div class="div-10">
              <div class="div-11">First Name<br /></div>
              <input type="text" id="first-name" class="input" />
              
            </div>
            <div class="div-13">
              <div class="div-14">Last Name<br /></div>
              <input type="text" id="last-name" class="input" />
            </div>
            <div class="div-16">
              <div class="div-17">Middle Name<br /></div>
              <input type="text" id="middle-name" class="input" />
            </div>
            <div class="div-19">
              <div class="div-20">Suffix 
                <span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                  "
                  >(optional)</span
                ></div>
                <input type="text" id="suffix" class="input" />
            </div>
            <div class="div-22">
              <div class="div-23">Birthdate <span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                  "
                  >(dd/mm/yyyy)</span
                ></div>
                <input type="date" id="birth-date" class="div-24" />
            </div>
          </div>
          <div class="div-25">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/04575e4b-16f8-4332-a712-8a996ec57204?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
              class="img-4"
            />
            <div class="div-26">
              <div class="div-27">
                <div class="div-28">CONTACT INFORMATION</div>
              </div>
            </div>
            <div class="div-31">
              <div class="div-32">Address</div>
              <input type="text" id="address" class="input" />
            </div>
            <div class="div-31">
              <div class="div-32">Email Address</div>
              <input type="text" id="email-address" class="input" />
            </div>
            <div class="div-34">
              <div class="div-35">Mobile Number</div>
              <input type="text" id="mobile-number" class="input" />
            </div>
          </div>
          <div class="div-37">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5333dc2-3f27-4059-8f0e-fe7e5485b3ce?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
              class="img-5"
            />
            <div class="div-38">COLLEGE / COURSE HISTORY</div>
            <div class="div-39">
              <div class="div-40">Last School Year Attended</div>
              <input type="text" id="last-school" class="input" />
            </div>
            <div class="div-42">
              <div class="div-43">College / Course Attended</div>
              <input type="text" id="course-attended" class="input" />
            </div>
          </div>
          <div class="div-45">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1cdc291-dbc1-47a7-bbf0-d5e808afe5cb?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
              class="img-6"
            />
            <div class="div-46">SIGN UP</div>
            <div class="div-47">
              <div class="div-48">Username</div>
              <input type="text" id="username" class="input" />
            </div>
            <div class="div-50">
              <div class="div-51">Password</div>
              <input type="password" id="password" class="input" />
            </div>
            <div class="div-53">
              <div class="div-54">Confirm Password</div>
              <input type="password" id="confirm-password" class="input" />
            </div>
          </div>
        </div>
      </div>
      <div class="div-56">
        <div class="div-57">Page 1 of 4</div>
        <router-link to="/docrequest" type="button" class="div-58">NEXT

</router-link>
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
  margin: 33px 0 21px;
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
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  padding-bottom: 29px;
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
  align-self: stretch;
  padding: 14px 20px;
  font: 800 18px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-5 {
    max-width: 100%;
    white-space: initial;
  }
}
.div-6 {
  display: flex;
  flex-direction: column;
  color: #000;
  position: relative;
  max-width: 909px;
  background-color: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  overflow: hidden;
  align-self: center;
  min-height: 88px;
  margin-top: 24px;
  width: 1018px;
  justify-content: center;
  align-items: start;
  padding: 22px 20px;
  font: 400 15px Poppins, sans-serif;
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
}
.div-8 {
  display: flex;
  flex-direction: column;
  fill: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  overflow: hidden;
  align-self: stretch;
  position: relative;
  display: flex;
  min-height: 328px;
  margin-top: 24px;
  width: 100%;
  padding: 17px 55px;
}
@media (max-width: 991px) {
  .div-8 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.img-3 {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.div-9 {
  position: relative;
  color: #000;
  font: 600 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-9 {
    max-width: 100%;
  }
}
.div-10 {
  position: relative;
  display: flex;
  margin-top: 27px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 1px;
}
@media (max-width: 991px) {
  .div-10 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-11 {
  color: #000;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 400 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-11 {
    white-space: initial;
  }
}
.input {
   
  color: #000;
  margin: auto 0;
  font: 400 15px Poppins, sans-serif;



  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 41px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-12 {
    max-width: 100%;
  }
}
.div-13 {
  position: relative;
  display: flex;
  margin-top: 12px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 1px;
}
@media (max-width: 991px) {
  .div-13 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-14 {
  color: #000;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 400 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-14 {
    white-space: initial;
  }
}
.div-15 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 42px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-15 {
    max-width: 100%;
  }
}
.div-16 {
  position: relative;
  display: flex;
  margin-top: 13px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 1px;
}
@media (max-width: 991px) {
  .div-16 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-17 {
  color: #000;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 400 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-17 {
    white-space: initial;
  }
}
.div-18 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 42px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-18 {
    max-width: 100%;
  }
}
.div-19 {
  position: relative;
  display: flex;
  margin-top: 11px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 1px;
}
@media (max-width: 991px) {
  .div-19 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-20 {
  color: #000;
  margin: auto 0;
  font: 400 15px Poppins, sans-serif;
}
.div-21 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 42px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-21 {
    max-width: 100%;
  }
}
.div-22 {
  position: relative;
  display: flex;
  margin-top: 11px;
  align-items: center;
  justify-content: space-between;
  gap: 110px;
  padding: 0 1px;
  align-self: start;;
}
@media (max-width: 991px) {
  .div-22 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-23 {
  color: #000;
  margin: auto 0;
  font: 400 15px Poppins, sans-serif;
}
.div-24 {
 


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
@media (max-width: 991px) {
  .div-24 {
    max-width: 100%;
  }
}
.div-25 {
  display: flex;
  flex-direction: column;
  fill: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  overflow: hidden;
  align-self: stretch;
  position: relative;
  display: flex;
  min-height: 230px;
  margin-top: 24px;
  width: 100%;
  padding: 21px 55px;
}
@media (max-width: 991px) {
  .div-25 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.img-4 {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.div-26 {
  position: relative;
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
  padding: 0 1px;
}
@media (max-width: 991px) {
  .div-26 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-27 {
  display: flex;
  flex-basis: 0%;
  flex-direction: column;
}
.div-28 {
  color: #000;
  font: 600 15px Poppins, sans-serif;
}
.div-29 {
  color: #000;
  margin-top: 45px;
  white-space: nowrap;
  font: 400 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-29 {
    margin-top: 40px;
    white-space: initial;
  }
}
.div-30 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: end;
  display: flex;
  margin-top: 38px;
  width: 689px;
  height: 41px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-30 {
    max-width: 100%;
  }
}
.div-31 {
  position: relative;
  display: flex;
  margin-top: 12px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 1px;
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
  font: 400 15px Poppins, sans-serif;
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
  position: relative;
  display: flex;
  margin-top: 13px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 1px;
}
@media (max-width: 991px) {
  .div-34 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-35 {
  color: #000;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 400 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-35 {
    white-space: initial;
  }
}
.div-36 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 42px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-36 {
    max-width: 100%;
  }
}
.div-37 {
  display: flex;
  flex-direction: column;
  fill: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  overflow: hidden;
  align-self: stretch;
  position: relative;
  display: flex;
  min-height: 175px;
  margin-top: 24px;
  width: 100%;
  padding: 20px 55px;
}
@media (max-width: 991px) {
  .div-37 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.img-5 {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.div-38 {
  position: relative;
  color: #000;
  font: 600 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-38 {
    max-width: 100%;
  }
}
.div-39 {
  position: relative;
  display: flex;
  margin-top: 24px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 1px;
}
@media (max-width: 991px) {
  .div-39 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-40 {
  color: #000;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 400 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-40 {
    white-space: initial;
  }
}
.div-41 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 41px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-41 {
    max-width: 100%;
  }
}
.div-42 {
  position: relative;
  display: flex;
  margin-top: 12px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 1px;
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
  font: 400 15px Poppins, sans-serif;
}
.div-44 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 42px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-44 {
    max-width: 100%;
  }
}
.div-45 {
  display: flex;
  flex-direction: column;
  fill: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  overflow: hidden;
  align-self: stretch;
  position: relative;
  display: flex;
  min-height: 226px;
  margin-top: 25px;
  width: 100%;
  padding: 18px 55px;
}
@media (max-width: 991px) {
  .div-45 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.img-6 {
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.div-46 {
  position: relative;
  color: #000;
  font: 600 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-46 {
    max-width: 100%;
  }
}
.div-47 {
  position: relative;
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 1px;
}
@media (max-width: 991px) {
  .div-47 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-48 {
  color: #000;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 400 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-48 {
    white-space: initial;
  }
}
.div-49 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 41px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-49 {
    max-width: 100%;
  }
}
.div-50 {
  position: relative;
  display: flex;
  margin-top: 12px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 1px;
}
@media (max-width: 991px) {
  .div-50 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-51 {
  color: #000;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 400 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-51 {
    white-space: initial;
  }
}
.div-52 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 42px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-52 {
    max-width: 100%;
  }
}
.div-53 {
  position: relative;
  display: flex;
  margin-top: 12px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 1px;
}
@media (max-width: 991px) {
  .div-53 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-54 {
  color: #000;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 400 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-54 {
    white-space: initial;
  }
}
.div-55 {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(199, 199, 199, 0.09);
  align-self: stretch;
  display: flex;
  width: 689px;
  height: 42px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-55 {
    max-width: 100%;
  }
}
.div-56 {
  align-self: end;
  display: flex;
  margin-top: 45px;
  width: 534px;
  max-width: 100%;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-56 {
    flex-wrap: wrap;
    margin-top: 40px;
  }
}
.div-57 {
  color: #000;
  margin-top: 28px;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 10px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-57 {
    white-space: initial;
  }
}
.div-58 {
  color: #fff;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #0c600a;
  align-self: stretch;
  flex-grow: 1;
  padding: 9px 20px;
  font: 800 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-58 {
    white-space: initial;
  }

  
}
.div-58:hover{
    background-color: #043d03;
  }
</style>