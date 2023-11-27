<script setup>
import Footer from './Footer.vue';
import NavigationBar from './NavigationBar.vue'
</script>
<template>
    <NavigationBar />
    <div class="boxA">
    <div class="columnsA">
      <div class="divA">
        <div class="columnA">
          <div class="div-2A">
            <h1 class="div-3A">Welcome</h1>
            <h1 class="div-4A">University of the Immaculate Conception</h1>
            <h2 class="div-5A">OFFICE OF THE REGISTRAR</h2>
            <h3 class="div-6A">
              This is the official website of the Office of the Registrar at the
              University of the Immaculate Conception (UIC), which is
              responsible for maintaining students' private documents. It is in
              charge of preserving the accuracy of the records in its custody
              and making them accessible upon request.
            </h3>
         
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="box">
    <div class="columns">
      <div class="div">
        <div class="column">
          <div class="div-2">
            <div class="div-3">LOOKING FOR DOCUMENTS?</div>
            <div class="div-4">
              <div class="div">
                <div class="column-2">
                  <img
                    loading="lazy"
                    srcSet="..."
                    class="img"
                  />
                </div>
                <div class="column-3">
                  
                  
                    <a href="/consent" type="button" class="btnreq">REQUEST FOR OFFICIAL DOCUMENT</a>
                
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column-4"><div class="div-6"></div></div>
        <div class="column-5">
          <div class="div-7">
            <div class="div-8">Already Requested?</div>
            <div class="div-9">
              <div class="div">
                <div class="column-6">
                  <img
                    loading="lazy"
                    srcSet="..."
                    class="img"
                  />
                </div>
                <div class="column-7">
                    <a href="/login" type="button" class="btnreq1">TRACK MY DOCUMENT</a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
    <Footer />
</template>
<style>
.divA {
  gap: 20px;
  display: flex;
}
.div-3A {
  font-family: "Saira Condensed", sans-serif;
  color: #000;
  font-size: 100px;
  font-weight: 700;
  align-self: start;
  max-width: 285px;
}

.div-4A {
  font-family: "Saira Condensed", sans-serif;
  color: #fff;
  font-size: 40px;
  font-weight: 400;
  align-self: start;
  margin-top: 0;
}

.div-5A {
  font-family: "Saira Condensed", sans-serif;
  color: #fff;
  font-size: 45px;
  font-weight: 400;
  align-self: start;
  margin-top: 32px;
  text-wrap: nowrap;
}
.div-6A {
  font-family: "Saira Condensed", sans-serif;
  color: #fff;
  font-size: 25px;
  font-weight: 400;
  align-self: start;
}
.column-2A {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 46%;
  margin-left: 20px;
}
.img {
  aspect-ratio: 1.36;
  object-fit: cover;
  object-position: center;
  width: 100%;
  overflow: hidden;
  margin-top: 12px;
  flex-grow: 1;
}
@media (max-width: 991px) {
  .img {
    max-width: 100%;
    margin-top: 42px;
  }
}
.boxA {
  background-color: #f6557e;
  display: flex;
  padding-right: 20px;
  padding-left: 20px;
  flex-direction: column;
}
.columnsA {
  align-self: center;
  margin-top: 35px;
  margin-bottom: 47px;
  width: 100%;
  max-width: 1215px;
}

.box {
  background-color: #fdfdfd;
  display: flex;
  padding-right: 20px;
  padding-left: 20px;
  flex-direction: column;
}
.columns {
  align-self: center;
  width: 100%;
  max-width: 1362px;
}
@media (max-width: 991px) {
  .columns {
    max-width: 100%;
  }
}
.div {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 54%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
.div-2 {
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
    margin-top: 50px;
  }
}
.div-3 {
  color: #f986a3;
  font-family: Saira Condensed, sans-serif;
  font-size: 45px;
  font-weight: 700;
  align-self: center;
  margin-left: -4px;
  max-width: 491px;
}
@media (max-width: 991px) {
  .div-3 {
    max-width: 100%;
    font-size: 40px;
  }
}
.div-4 {
  align-self: stretch;
  margin-top: 32px;
}
@media (max-width: 991px) {
  .div-4 {
    max-width: 100%;
  }
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 31%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
.img {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 208px;
  overflow: hidden;
}
@media (max-width: 991px) {
  .img {
    margin-top: 20px;
  }
}
.column-3 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 69%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-3 {
    width: 100%;
  }
}
.btnreq {
  color: #fff;
  font-family: Saira Condensed, sans-serif;
  font-size: 35px;
  font-weight: 700;
  align-self: stretch;
  max-width: 470px;
  border-radius: 200px;
  background-color: #f6557e;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  padding-top: 39px;
  padding-right: 13px;
  padding-bottom: 35px;
  padding-left: 19px;
  width: 100%;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
} 

.column-4 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 1%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-4 {
    width: 100%;
  }
}
.div-6 {
  background-color: #f986a3;
  margin-left: auto;
  margin-right: auto;
  width: 4px;
  height: 383px;
}
@media (max-width: 991px) {
  .div-6 {
    margin-top: 49px;
  }
}
.column-5 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 45%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-5 {
    width: 100%;
  }
}
.div-7 {
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-7 {
    max-width: 100%;
    margin-top: 50px;
  }
}
.div-8 {
  color: #f986a3;
  font-family: Saira Condensed, sans-serif;
  font-size: 45px;
  font-weight: 700;
  align-self: center;
  max-width: 358px;
}
@media (max-width: 991px) {
  .div-8 {
    font-size: 40px;
  }
}
.div-9 {
  align-self: stretch;
  margin-top: 23px;
}
@media (max-width: 991px) {
  .div-9 {
    max-width: 100%;
  }
}
.column-6 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 38%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-6 {
    width: 100%;
  }
}
.column-7 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 62%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-7 {
    width: 100%;
  }
}
.btnreq1 {
  color: #fff;
  font-family: Saira Condensed, sans-serif;
  font-size: 35px;
  font-weight: 700;
  align-self: stretch;
  max-width: 470px;
  border-radius: 200px;
  background-color: #f6557e;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  padding-top: 39px;
  padding-right: 13px;
  padding-bottom: 35px;
  padding-left: 19px;
  width: 100%;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
} 

.btnreq:hover{
  color: #f6557e;
  background-color: #000000;
}
.btnreq1:hover{
  color: #f6557e;
  background-color: #000000;
}
</style>