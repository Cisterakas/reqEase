<template>
  <div class="div1">
    <div class="div-2-">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c8fe515027325adad7c1dae8ee021a7439c62ba9a6b7a315efb7a197aef023b3?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8fe515027325adad7c1dae8ee021a7439c62ba9a6b7a315efb7a197aef023b3?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8fe515027325adad7c1dae8ee021a7439c62ba9a6b7a315efb7a197aef023b3?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8fe515027325adad7c1dae8ee021a7439c62ba9a6b7a315efb7a197aef023b3?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8fe515027325adad7c1dae8ee021a7439c62ba9a6b7a315efb7a197aef023b3?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8fe515027325adad7c1dae8ee021a7439c62ba9a6b7a315efb7a197aef023b3?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8fe515027325adad7c1dae8ee021a7439c62ba9a6b7a315efb7a197aef023b3?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c8fe515027325adad7c1dae8ee021a7439c62ba9a6b7a315efb7a197aef023b3?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
        class="img"
      />
      <div class="div-3">
        <div class="div-4">ReqEase: Registrar Document Request Suite</div>
        <div class="div-5">
          This is the official website of the Office of the Registrar at the
          University of the Immaculate Conception (UIC), which is responsible
          for maintaining students' private documents. It is in charge of
          preserving the accuracy of the records in its custody and making them
          accessible upon request through ReqEase: Registrar Document Request
          Suite.
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.div1 {
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(255, 239, 239, 0.47) 0%,
    rgba(217, 217, 217, 0) 155.56%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.div-2- {

  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  min-height: 306px;
  justify-content: center;
  align-items: center;
  padding: 50px 60px;
}
@media (max-width: 991px) {
  .div-2- {
    max-width: 100%;
    margin-right: 2px;
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
.div-3 {
  position: relative;
  display: flex;
  margin-top: 47px;
  width: 1179px;
  max-width: 100%;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-3 {
    margin-top: 40px;
  }
}
.div-4 {
  color: #eff3f3;
  text-align: center;
  text-shadow: -3px 6px 15.4px rgba(0, 0, 0, 0.75);
  font: 700 35px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-4 {
    max-width: 100%;
  }
}
.div-5 {
  color: #eff3f3;
  text-align: center;
  text-shadow: 2px 1px 7.8px rgba(0, 0, 0, 0.89);
  align-self: center;
  margin-top: 7px;
  max-width: 935px;
  font: 500 15px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-5 {
    max-width: 100%;
  }
}
</style>