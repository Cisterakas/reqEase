
import Category from './Category.vue';
<!-- ApplicationNavigationBar.vue -->
<template>
  <div class="div1">
    <div class="div-2">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c4d89ea8-ca2d-481f-bdc5-48b7e69fee29?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4d89ea8-ca2d-481f-bdc5-48b7e69fee29?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4d89ea8-ca2d-481f-bdc5-48b7e69fee29?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4d89ea8-ca2d-481f-bdc5-48b7e69fee29?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4d89ea8-ca2d-481f-bdc5-48b7e69fee29?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4d89ea8-ca2d-481f-bdc5-48b7e69fee29?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4d89ea8-ca2d-481f-bdc5-48b7e69fee29?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c4d89ea8-ca2d-481f-bdc5-48b7e69fee29?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
        class="img"
      />
      <div class="div-3">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/974fcc37-cf7c-4c2b-bfba-5739b7e4d9ca?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/974fcc37-cf7c-4c2b-bfba-5739b7e4d9ca?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/974fcc37-cf7c-4c2b-bfba-5739b7e4d9ca?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/974fcc37-cf7c-4c2b-bfba-5739b7e4d9ca?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/974fcc37-cf7c-4c2b-bfba-5739b7e4d9ca?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/974fcc37-cf7c-4c2b-bfba-5739b7e4d9ca?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/974fcc37-cf7c-4c2b-bfba-5739b7e4d9ca?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/974fcc37-cf7c-4c2b-bfba-5739b7e4d9ca?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
          class="img-2"
        />
        <div class="div-4">
          Welcome to ReqEase: Registrar Document Request Suite
        </div>
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
  justify-content: center;
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
  display: flex;
  flex-direction: column;
}
.div-2 {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  width: 100%;
}
@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
  }
}
.img {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.div-3 {
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(255, 239, 239, 0.83) 0%,
    rgba(217, 217, 217, 0) 191.69%
  );
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 49px 80px 49px 49px;
}
@media (max-width: 991px) {
  .div-3 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.img-2 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 108px;
  overflow: hidden;
  max-width: 100%;
}
.div-4 {
  color: #fff;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  align-self: center;
  margin-top: 36px;
  max-width: 1062px;
  font: 700 45px/67.5px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-4 {
    max-width: 100%;
    font-size: 40px;
    line-height: 66px;
  }
}
.div-5 {
  color: #fff;
  text-align: center;
  text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.75);
  align-self: center;
  max-width: 946px;
  margin: 19px 0 39px;
  font: 400 20px/30px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-5 {
    max-width: 100%;
  }
}
</style>