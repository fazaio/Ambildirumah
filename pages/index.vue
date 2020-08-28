<template>
  <div>
    <Navbar />
    <div class="carousel">
      <img class="image" src="https://picsum.photos/seed/picsum/1080/600" alt />
      <div class="carousel-tag">
        <h1 style="color: #fe5719;">Some content</h1>
      </div>
    </div>
    <div class="container">
      <div class="find">
        <input type="text" placeholder="Cari " />
      </div>
      <div class="tittle">
        Kategori
      </div>
      <div class="category">
        <div>
          <div class="flex-btn">
            <div class="left">Makanan</div>
            <div class="right">></div>
          </div>
        </div>
        <div>
          <div class="flex-btn">
            <div class="left">Fashion</div>
            <div class="right">></div>
          </div>
        </div>
        <div>
          <div class="flex-btn">
            <div class="left">Elektronik</div>
            <div class="right">></div>
          </div>
        </div>
      </div>
      <!-- <div class="slide">
        <vue-glide>
          <vue-glide-slide>
            <div class="slide-content">
              <img src="https://picsum.photos/id/237/500/800" alt />
              <div class="tag">
                <h3>Nasi Kotak</h3>
              </div>
            </div>
          </vue-glide-slide>
          <vue-glide-slide>
            <div class="slide-content">
              <img src="https://picsum.photos/id/237/500/500" alt />
            </div>
          </vue-glide-slide>
          <vue-glide-slide>
            <div class="slide-content">
              <img src="https://picsum.photos/id/237/500/500" alt />
            </div>
          </vue-glide-slide>
        </vue-glide>
      </div>-->
      <div class="tittle">
        Derma Terbaru
      </div>
      <div class="row responsive">
        <div class="card">
          <img src="https://picsum.photos/id/237/150/150" alt />
          <div class="info">
            <div class="tittle">Nasi Goreng</div>
            <div class="qty">Jumlah: 14</div>
            <div class="address">JL Pelabuhan Bakayaro ketapanga, Malang</div>
            <div class="footer">
              <button class="btn">Ambil</button>
            </div>
          </div>
        </div>
        <div class="card">
          <img src="https://picsum.photos/id/237/150/150" alt />
          <div class="info">
            <div class="tittle">Nasi Goreng</div>
            <div class="qty">Jumlah: 14</div>
            <div class="address">JL Pelabuhan Bakayaro ketapanga, Malang</div>
            <div class="footer">
              <button class="btn">Ambil</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <foot />
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import { Glide, GlideSlide } from 'vue-glide-js'
import foot from '@/components/foot'

export default {
  components: {
    Navbar,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
    foot
  }
}
</script>
<style>
.padding {
  padding: 10px;
  background-color: salmon;
}
.image {
  width: 100%;
  height: 350px;
}
.carousel {
  width: 100%;
  position: relative;
  z-index: -1;
}
.carousel-tag {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.search {
  padding: 20px 25px;
  border-radius: 5px;
  background-color: #fff;
  width: 800px;
}

/* card css */
.card {
  padding: 0px;
  margin: 10px 0px;
  background-color: #fff;
  color: #888;
  box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
  display: grid;
  grid-template-columns: 150px auto;
  grid-gap: 0px;
  border-radius: 5px;
}

.card > img {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  z-index: 1;
  background-color: #ffe3c7;
}
.card > .info {
  padding: 10px;
  position: relative;
}
.card > .info > .tittle {
  color: #444;
  font-size: 15px;
  font-weight: bold;
}
.card > .info > .qty {
  padding: 5px 0px;
  font-size: 13px;
}
.card > .info > .address {
  /* position: absolute; */
  padding: 5px 0px;
  font-size: 12px;
  /* bottom: 0px; */
}
.card > .info > .footer {
  position: absolute;
  bottom: 6px;
  right: 6px;
  /* padding: 10px 0px; */
  text-align: right;
  font-size: 13px;
  border-bottom-right-radius: 5px;
}

/* coloumn css */
.row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-bottom: 200px;
}
.find {
  padding: 30px 10px;
  border-radius: 5px;
  font-size: 12px;
  color: #888;
  margin-top: -50px;
  background-color: #fff;
  box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
}
.find > input {
  width: 100%;
  /* border: none; */
}
.category {
  display: flex;
  margin: 0 -10px 80px -10px;
}
.category > div {
  margin: 0px 10px;
}
.flex-btn {
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
}
.flex-btn > .left {
  text-align: center;
  /* width: 80px; */
  padding: 15px 25px;
  background-color: #ffae46;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: white;
}
.flex-btn > .right {
  padding: 15px;
  background-color: darkorange;
  color: white;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.left:hover {
  background-color: darkorange;
  transition-duration: 1s;
}
.tittle {
  color: #666;
  margin: 50px 0px 10px 0px;
  font-size: 12px;
}
</style>
